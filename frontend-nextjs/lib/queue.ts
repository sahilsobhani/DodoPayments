type Job = {
  id: string;
  message: string;
  resolve: (data: any) => void;
  reject: (err: any) => void;
}; // Created a simple Job type for the queue

// In-memory queue to store all jobs sequentially
let queue: Job[] = [];

//global processing flag
let processing = false;

// Syncing up the date rimit with the backend for retries (5 requests per minute)
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;

let timestamps: number[] = [];

export function enqueue(message: string) {
  return new Promise((resolve, reject) => {
    queue.push({
      id: crypto.randomUUID(),
      message,
      resolve,
      reject
    });

    processQueue();
  });
}


 //   PROCESS QUEUE
 // - Executes jobs sequentially from the front of the queue
 // - If the server returns 429 error, the function sleeps for a 1 minute and then starts processing again.
 
async function processQueue() {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const job = queue.shift()!;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/echo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: job.message })
      });

      // if 429, retry after cooldown for 1 minute
      if (res.status === 429) {
        console.log("429 received. Cooling down for 60 seconds...");

        // Push job back to front (retry)
        queue.unshift(job);

        // Pause 1 minute
        await sleep(WINDOW_MS);
        continue;
      }

      // Handle response from the backend and resolve/reject the job promise
      const json = await res.json();

      if (res.ok) {
        job.resolve(json);
        timestamps.push(Date.now());
      } 
      else {
        job.reject(json);
      }

    } catch (err) {
      job.reject({
        status: "error",
        echo: "Network error",
        detail: err
      });
    }
  }

  processing = false;
}

// Utility sleep function for cooldown of 1 minute
function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

// Utility functions for accessing number of jobs in the queue
export function getQueueLength() {
  return queue.length;
}

// Utility function to get the front job in the queue, the job that will be processed next 
export function getQueueFront() {
  return queue[0];
}
