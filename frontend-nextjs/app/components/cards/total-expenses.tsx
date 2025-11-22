"use client";
// Icon Imports from lucide-react 
import { ArrowDownLeft } from "lucide-react";

// Recharts Imports for Line Chart
import { LineChart, Line, ResponsiveContainer } from "recharts";

// Sample Data for Mini Line Chart
const data = [
  { value: 120 }, { value: 240 }, { value: 380 }, { value: 520 }, { value: 480 },
  { value: 180 }, { value: 200 }, { value: 260 }, { value: 320 }, { value: 390 },
  { value: 450 }, { value: 520 }, { value: 500 }, { value: 500 }, { value: 420 },
  { value: 440 }, { value: 480 }, { value: 520 }, { value: 560 }, { value: 580 },
];

export default function TotalExpenses() {
  return (
    <div className="bg-white rounded-xl shadow-2xs border font-inter border-neutral-200 p-3 flex flex-col gap-2.5 h-full w-full">
      {/* TOP ROW */}
      <div className="flex justify-between mt-2 items-start w-full">
        {/* Icon Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-50 border hover:bg-neutral-100 border-neutral-200 shrink-0">
          <ArrowDownLeft className="w-4 h-4 text-neutral-600" />
        </button>

        {/* Mini Line Chart */}
        <div className="w-28 h-12">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#335CFF"
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Amount*/}
      <div className="flex items-center justify-start w-full">
        <div>
          <p className="text-neutral-600 font-normal mb-1 text-xs">Total Expenses</p>
          <p className="text-2xl font-medium display-text text-neutral-900">$6,240.28</p>
        </div>

        {/* Percentage Badge */}
        <span className="px-2 py-0.5 text-xs text-center items-center justify-center translate-3 bg-red-200 font-bold text-red-900 rounded-full">
          -2%
        </span>
      </div>
    </div>
  );
}
