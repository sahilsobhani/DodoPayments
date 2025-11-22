"use client"

// ShadCn UI Button Component
import { Button } from "@/components/ui/button";

// Icon Imports from lucide-react and remixicon
import { ShoppingBag, ChevronDown, CircleDollarSign } from "lucide-react";
import { RiFileListLine, RiInformation2Fill, RiPieChartLine } from "react-icons/ri";

// Recharts Imports for Pie Chart
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
    <div className="bg-white rounded-xl border shadow-2xs border-neutral-200 p-3 h-full flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center font-inter justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <RiPieChartLine className="w-4 h-4 text-neutral-600" />
          <span className="text-sm font-medium text-neutral-950 tracking-wide">Spending Summary</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          Last Week
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>

      {/* Semi Circle Chart */}
      <div className="w-full h-24 mt-2 border-b border-neutral-200 border-t p-1.5 relative">
        <ResponsiveContainer width="100%" height="200%">
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={50}
              outerRadius={70}
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
          <p className="text-md font-semibold">${spent.toLocaleString()}</p>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-1.5 font-inter font-thin text-center mt-2">
        <div className="flex flex-col gap-y-1 items-center">
          <div className="p-1.5 rounded-full bg-blue-50">
            <ShoppingBag className="w-4 h-4 text-blue-500" />
          </div>

          <p className="text-xs font-medium text-muted-foreground mt-0.5">Shopping</p>
          <p className="text-xs text-neutral-700 font-semibold">$900.00</p>
        </div>

        <div className="flex flex-col gap-y-1 border-x items-center">
          <div className="p-1.5 rounded-full bg-cyan-50">
            <RiFileListLine className="w-4 h-4 text-blue-500" />
          </div>

          <p className="text-xs font-medium text-muted-foreground mt-0.5">Utilities</p>
          <p className="text-xs text-neutral-700 font-semibold">$600.00</p>
        </div>

        <div className="flex flex-col gap-y-1 items-center">
          <div className="p-1.5 rounded-full bg-gray-50">
            <CircleDollarSign className="w-4 h-4 text-gray-500" />
          </div>

          <p className="text-xs font-medium text-muted-foreground mt-0.5">Others</p>
          <p className="text-xs text-neutral-700 font-semibold">$200.00</p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-7 text-xs flex justify-between text-neutral-500 border-neutral-200 border rounded-md items-center p-1.5 text-center">
        Your weekly spending limit is ${limit}.
        <RiInformation2Fill className="w-3 h-3 items-center justify-center text-neutral-400" />
      </div>
    </div>
  );
}
