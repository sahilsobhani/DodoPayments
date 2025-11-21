"use client";

import { useState, useEffect } from "react";
import Link from 'next/link'
import { enqueue, getQueueLength, getQueueFront } from "../../lib/queue";
import { Loader2, CheckCircle2, XCircle, ArrowUpRight, Eraser, House } from "lucide-react";

export default function DemoPage() {
  const [responses, setResponses] = useState<any[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [queueLength, setQueueLength] = useState(0);
  const [counterVar, setCounterVar] = useState(1)


  useEffect(() => {
    const interval = setInterval(() => {
      setQueueLength(getQueueLength());
      setCurrent(getQueueFront() ? getQueueFront().message : null);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  function clearResponses() {
    setResponses([]);
  }


  async function sendRequest() {

    const randomId = counterVar;
    setCounterVar(counterVar + 1);

    const msg = `Welcome to Dodo Payments Demo by Sahil - The Request ID is ${randomId}`;

    try {
      const res = await enqueue(msg);
      setResponses((prev) => [{ ok: true, data: res, id: randomId }, ...prev]);
    } catch (err) {
      setResponses((prev) => [{ ok: false, error: err, id: randomId }, ...prev]);
    }

    setCurrent(null);
  }

  // Queue Status Card

  const QueueStatus = () => (
    <div className="p-6 rounded-xl bg-white shadow-inner border border-gray-200">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-700">

        Queue Size
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-gray-600 font-medium">Requests Waiting:</span>
        <span className="text-5xl text-neutral-800 border bg-white px-4 py-2 rounded-lg shadow-inner">
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
            <span className="font-semibold text-gray-800">Processing - Rate Limit might have been reached</span>
          </div>

          <p className="text-sm font-mono text-gray-600 wrap-break-word">{current}</p>
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
    <div className="min-h-screen bg-white text-gray-900 font-space flex">
      {/* LEFT SIDEBAR */}
      <div className="w-full lg:w-1/3 p-10 flex flex-col gap-5 border-r-2 border-blue-100 bg-white shadow-xl">

        {/* Title */}
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

        {/* Button */}
        <button
          onClick={sendRequest}
          className="w-full px-6 py-4 rounded-md text-lg tracking-wide shadow-sm bg-blue-50/80 text-neutral-700 hover:bg-linear-to-r  hover:from-white hover:to-blue-50 hover:shadow-inner duration-200  flex items-center justify-center gap-3 transition-all"
        >

          Enqueue New Request
          <ArrowUpRight className="w-6 h-6" />
        </button>

        <button
          onClick={clearResponses}
          className="w-full px-6 py-4 rounded-md text-lg tracking-wide shadow-sm hover:shadow-inner bg-red-50/80 hover:bg-linear-to-r hover:from-white hover:to-red-50 duration-200 text-neutral-700 border-white flex items-center justify-center gap-3 transition-all"
        >

          Clear Responses
          <Eraser className="w-6 h-6" />
        </button>

        {/* Status Panels */}
        <div className="space-y-6">
          <QueueStatus />
          <CurrentProcessing />
        </div>
      </div>

      {/* RIGHT RESPONSE LOG */}
      <div className="w-full lg:w-2/3 p-10 flex bg-linear-to-br from-white to-blue-50 flex-col">
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
                <div className="flex items-center gap-3 mb-2">
                  {res.ok ? (
                    <CheckCircle2 className="text-green-950 w-5 h-5" />
                  ) : (
                    <XCircle className="text-red-500 w-5 h-5" />
                  )}

                  <span className={`font-semibold text-lg ${res.ok ? "text-green-950" : "text-red-950"}`}>
                    {res.ok ? "Success" : "Rate Limit"}
                  </span>

                  <span className="text-sm font-mono text-neutral-900 ml-auto">
                    Message: "{res.ok ? res.data.echo : res.error.echo}"
                  </span>
                </div>

                <pre className="bg-white shadow-inner p-3 rounded text-xs text-neutral-900 overflow-x-auto">
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
