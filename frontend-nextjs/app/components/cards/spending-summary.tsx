"use client"

import { Button } from "@/components/ui/button";
import {
  Clock,
  ShoppingBag,
  FileCog,
  MoreHorizontal,
  ChevronDown,
  Info,
  ScrollText,
  CircleDollarSign
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";



export default function SpendingSummary() {
  const spent = 1800;
  const limit = 2000;

  const data = [
    { name: "Shopping", value: 900, color: "#3B82F6" },
    { name: "Utilities", value: 600, color: "#60A5FA" },
    { name: "Others", value: 200, color: "#D1D5DB" },
  ];

  return (
    <div className="bg-white rounded-xl border shadow-2xs border-neutral-200 p-4">
      {/* Header */}
      <div className="flex items-center font-inter justify-between mb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-neutral-700" />
          <span className="text-lg font-semibold">Spending Summary</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-sm"
        >

          Last Week
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Semi Circle Chart */}
      <div className="w-full h-32 mt-4 border-b border-neutral-200 border-t p-2 relative">
        <ResponsiveContainer width="100%" height="190%">
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={0}
              stroke="none"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Spend Label */}
        <div className="absolute inset-0 top-10 flex flex-col items-center justify-center">
          <p className="text-xs text-neutral-500 tracking-wide">SPEND</p>
          <p className="text-2xl font-semibold">${spent.toLocaleString()}</p>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-2 font-inter font-thin text-center mt-4">
        <div className="flex flex-col gap-y-2 items-center">
          <div className="p-2 rounded-full bg-blue-50">
            <ShoppingBag className="w-6 h-6 text-blue-500" />
          </div>

          <p className="text-sm font-medium text-muted-foreground mt-1">Shopping</p>
          <p className="text-neutral-700 font-semibold">$900.00</p>
        </div>

        <div className="flex flex-col gap-y-2 border-x items-center">
          <div className="p-2 rounded-full bg-cyan-50">
            <ScrollText className="w-6 h-6 text-blue-500" />
          </div>

          <p className="text-sm font-medium text-muted-foreground mt-1">Utilities</p>
          <p className="text-neutral-700 font-semibold">$600.00</p>
        </div>

        <div className="flex flex-col gap-y-2 items-center">
          <div className="p-2 rounded-full bg-gray-50">
            <CircleDollarSign className="w-6 h-6 text-gray-500" />
          </div>

          <p className="text-sm font-medium text-muted-foreground mt-1">Others</p>
          <p className="text-neutral-700 font-semibold">$200.00</p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-4 text-xs flex justify-between text-neutral-500 border-neutral-200 border rounded-md items-center p-2 text-center">
        Your weekly spending limit is ${limit}.
        <Info className="w-3 h-3 items-center justify-center text-neutral-400" />
      </div>
    </div>
  );
}
