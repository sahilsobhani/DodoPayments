"use client";

// React and Next.js Imports
import { useState, useEffect } from "react";
import Link from 'next/link'

// Queue Utility Functions
import { enqueue, getQueueLength, getQueueFront } from "../../lib/queue";

// Icon Imports
import { Loader2, CheckCircle2, XCircle, ArrowUpRight, Eraser, House } from "lucide-react";

export default function DemoPage() {

  //state variables
  const [responses, setResponses] = useState<any[]>([]);
  const [current, setCurrent] = useState<any>(null);
  const [queueLength, setQueueLength] = useState(0);
  const [counterVar, setCounterVar] = useState(1)
  const [userMessage, setUserMessage] = useState("");


  // Polling effect to update queue length and current processing job
  useEffect(() => {
    const interval = setInterval(() => {
      setQueueLength(getQueueLength());
      setCurrent(getQueueFront() ? getQueueFront(): null);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Function to clear response log
  function clearResponses() {
    setResponses([]);
  }

  // Function to send a new request to the queue
  async function sendRequest() {
    const randomId = counterVar;
    setCounterVar(counterVar + 1);

    let message = "";

    // Case 1: No message provided
    if (userMessage.trim() === "") {
      message = `Hello from DodoPayments, this is Sahil`;
    }
    // Case 2: User entered message
    else {
      const trimmed = userMessage.trim(); // first 10 characters
      message = `${trimmed}`;
    }

    // Clearing user input after the user message is read
    setUserMessage("");

    try {
      const res = await enqueue(message, randomId.toString());
      setResponses((prev) => [{ ok: true, data: res, id: randomId }, ...prev]);
    } catch (err) {
      setResponses((prev) => [{ ok: false, error: err, id: randomId }, ...prev]);
    }

    setCurrent(null);
  }


  // Queue Status Card
  const QueueStatus = () => (
    <div className="p-3 rounded-md bg-white shadow-inner border border-gray-200">

      <div className="flex items-center justify-between">
        <span className="text-gray-700 text-xl ml-2 font-medium">Requests Waiting:</span>
        <span className="text-5xl text-neutral-800 border bg-white px-4 rounded-md shadow-inner">
          {queueLength}
        </span>
      </div>
    </div>
  );


  // Current Processing Card
  const CurrentProcessing = () => (
    <div className="p-6 rounded-md bg-white shadow-inner border border-gray-200">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-700">

        Active Task  
      </h3>

      {current ? (
        <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-md border border-gray-200">
          <div className="flex items-center gap-3">
            <Loader2 className="animate-spin text-blue-900 w-5 h-5" />
            <span className="font-semibold text-gray-800">Processing...</span>
          </div>

          <p className="text-sm font-mono text-gray-600 wrap-break-word">Job ID: {current.id}</p>
          <p className="text-sm font-mono text-gray-600 wrap-break-word"> Message: {current.message?.substring?.(0, 30) ?? "No message"}</p>


        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
          <CheckCircle2 className="text-green-800 w-6 h-6" />
          <span className="font-medium text-gray-700">Queue is Idle</span>
        </div>
      )}
    </div>
  );

  // Main UI
  return (
    <div className="min-h-screen bg-white text-gray-900 font-space flex flex-col md:flex-row">

      {/* Left Section - Buttons and Queue Status */}

      <div className="w-full md:w-1/3 p-6 lg:p-10 flex flex-col gap-5 border-b-2 lg:border-b-0 lg:border-r-2 border-blue-100 bg-white shadow-xl">

        <div className="pb-4 border-b flex items-center justify-around  border-gray-200">
          <div>
            <h1 className="text-4xl tracking-medium font-space text-gray-900">
              Echo API Queue
            </h1>
            <p className="text-lg text-gray-400 mt-1">
              Visualizing API queue management.
            </p>
          </div>


        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Message Text</label>
          <input
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-inner text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          onClick={sendRequest}
          className="w-full px-6 py-4 rounded-md text-lg tracking-wide shadow-sm bg-blue-100 text-neutral-700 hover:bg-linear-to-r  hover:from-white hover:to-blue-50 hover:shadow-inner duration-200 flex items-center justify-center gap-3 transition-all"
        >

          Enqueue New Request
          <ArrowUpRight className="w-6 h-6" />
        </button>

        <button
          onClick={clearResponses}
          className="w-full px-6 py-4 rounded-md text-lg tracking-wide shadow-sm hover:shadow-inner bg-red-100 hover:bg-linear-to-r hover:from-white hover:to-red-50 duration-200 text-neutral-700 border-white flex items-center justify-center gap-3 transition-all"
        >

          Clear Responses
          <Eraser className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <QueueStatus />
          <CurrentProcessing />
        </div>
      </div>

      {/* Right Section - Response Log and Back-to-home button */}

      <div className="w-full md:w-2/3 p-6 md:p-10 flex bg-linear-to-br from-white to-blue-50 flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-thin mb-0.5 text-neutral-800">
            Response Log
          </h2>

          <div>
            <Link href="/" className="text-neutral-800 mt-2 ml-2 inline-block hover:underline">
              <House className="w-6 h-6 inline-block mb-0.5" />
            </Link>
          </div>
        </div>


        <div className="grow max-h-[80vh] bg-white  rounded-md p-6 shadow-inner border border-gray-200 overflow-y-auto space-y-4">

          {responses.length === 0 ? (
            <div className="p-10 text-center text-gray-500 text-xl italic">
              <p>No requests yet...</p>
              <p className="text-base mt-2">Click “Enqueue New Request” to begin.</p>
            </div>
          ) : (
            responses.map((res) => (
              <div
                key={res.id}
                className={`p-4 rounded-md border ${res.ok
                  ? "border-green-950  bg-green-50/20"
                  : "border-red-800 bg-red-50"
                  }`}
              >
                <div className="flex flex-col gap-3 mb-3">

                  {/* Status Row */}
                  <div className="flex items-center gap-2">
                    {res.ok ? (
                      <CheckCircle2 className="text-green-800 w-5 h-5" />
                    ) : (
                      <XCircle className="text-red-600 w-5 h-5" />
                    )}

                    <span
                      className={`font-semibold text-lg ${res.ok ? "text-green-900" : "text-red-900"
                        }`}
                    >
                      {res.ok ? "Success" : "Rate Limit"}
                    </span>
                  </div>

                  {/* ID + Message Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">

                    <span className="text-sm font-mono text-neutral-700">
                      <span className="font-semibold">Request ID:</span> {res.id}
                    </span>

                    <span className="text-sm font-mono text-neutral-800 break-all">
                      <span className="font-semibold">Message:</span> "
                      {res.ok ? res.data.echo.substring(0,40) : res.error.echo}"
                    </span>

                  </div>

                </div>


                <pre className="bg-white shadow-inner p-3 rounded-md text-xs text-neutral-900 overflow-x-auto">
                  {JSON.stringify(res.ok ? res.data : res.error, null, 2)}
                </pre>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
