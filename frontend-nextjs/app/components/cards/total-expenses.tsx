"use client";

import { ArrowDownLeft } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 300 },
  { value: 450 },
  { value: 380 },
  { value: 520 },
  { value: 480 },
  { value: 540 },
  { value: 510 },
];

export default function TotalExpenses() {
  return (
    <div className="bg-white rounded-xl shadow-2xs border font-inter border-neutral-200 p-3 flex flex-col gap-4">
      {/* TOP ROW */}
      <div className="flex justify-between items-start">
        {/* Icon Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 border border-neutral-200">
          <ArrowDownLeft className="w-5 h-5 text-neutral-600" />
        </button>

        {/* Mini Line Chart */}
        <div className="w-32 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TEXT + AMOUNT */}
      <div className="flex items-center justify-start">
        <div>
          <p className="text-neutral-500 text-sm">Total Expenses</p>
          <p className="text-3xl font-medium text-neutral-900">$6,240.28</p>
        </div>

        {/* Percentage Badge */}
        <span className="px-2 py-1 text-xs text-center items-center justify-center ml-1 translate-3 bg-red-100 font-bold text-red-800 rounded-full">
          -2%
        </span>
      </div>
    </div>
  );
}
