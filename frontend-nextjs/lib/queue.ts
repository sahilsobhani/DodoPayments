type Job = {
  id: string;
  message: string;
  resolve: (data: any) => void;
  reject: (err: any) => void;
};

let queue: Job[] = [];
let processing = false;

// You can keep these even if we do not use timestamp-based limiting
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

/**
 * PROCESS QUEUE
 * - Executes jobs sequentially
 * - If a 429 happens → pause 1 minute → retry
 */
async function processQueue() {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const job = queue.shift()!;

    try {
      const res = await fetch("http://localhost:3001/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: job.message })
      });

      // --- HANDLE RATE LIMIT ---
      if (res.status === 429) {
        console.log("429 received. Cooling down for 60 seconds...");

        // Push job back to front (retry)
        queue.unshift(job);

        // Pause 1 minute
        await sleep(WINDOW_MS);

        // Continue loop; DO NOT mark success
        continue;
      }

      // --- NORMAL SUCCESS ---
      const json = await res.json();

      if (res.ok) {
        job.resolve(json);

        // Record timestamp (optional)
        timestamps.push(Date.now());
      } else {
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

/** Sleep helper */
function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

export function getQueueLength() {
  return queue.length;
}
export function getQueueFront() {
  return queue[0];
}
