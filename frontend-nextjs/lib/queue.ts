type Job = {
  id: string;
  message: string;
  resolve: (data: any) => void;
  reject: (err: any) => void;
};

// Queue & processing state
let queue: Job[] = [];
let processing = false;

// Rate limit config
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;

// Rolling timestamps for the last requests
let timestamps: number[] = [];


 // Adds a new job to the queue
 
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

/**
 * Internal worker that processes jobs sequentially
 */
async function processQueue() {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const now = Date.now();

    // Remove timestamps older than 60s
    timestamps = timestamps.filter(t => now - t < WINDOW_MS);

    // If we hit the rate limit → wait until next available slot
    if (timestamps.length >= RATE_LIMIT) {
      const earliest = timestamps[0];
      const wait = WINDOW_MS - (now - earliest);

      console.log(
        ` Rate limit reached. Waiting ${(wait / 1000).toFixed(1)}s...`
      );

      await sleep(wait);
      continue; // Re-check after waiting
    }

    // Pull next job
    const job = queue.shift()!;
    try {
      const res = await fetch("http://localhost:3001/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: job.message })
      });

      const json = await res.json();

      if (res.ok) job.resolve(json);
      else job.reject(json);

    } catch (err) {
      job.reject({
        status: "error",
        echo: "Network error",
        detail: err
      });
    }

    // Recorded processed timestamp
    timestamps.push(Date.now());
  }

  processing = false;
}

/**
 * Sleep helper
 */
function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

/**
 * Small helper for UI
 */
export function getQueueLength() {
  return queue.length;
}

