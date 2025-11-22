"use client";

// React Imports
import Image from "next/image";
import { useState } from "react";

// ShadCn UI Button Component
import { Button } from "@/components/ui/button";

// Icon Imports
import { ChevronLeft, ChevronRight, Plus, Wifi } from "lucide-react";
import {
  RiBankCardLine,
  RiCheckboxCircleFill
} from "react-icons/ri";

// Static Asset Imports
import ApexLogo from "@/assets/Apex.png";

export default function MyCards() {

  const [activeRange, setActiveRange] = useState<"daily" | "weekly" | "monthly">("weekly");


  return (
    <div className="rounded-xl p-3 border border-neutral-200 font-inter shadow-2xs bg-white h-full flex flex-col w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium flex items-center">
          <RiBankCardLine className="w-4 h-4 mr-1.5 mt-0.5 text-neutral-600" />
          <span className="text-md tracking-wide text-neutral-950">My Cards</span>
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          <Plus className="h-3 w-3 text-neutral-600" />
          Add Card
        </Button>
      </div>

      {/* Bank card display */}
      <div className=" rounded-2xl border border-neutral-200 bg-white p-2.5 relative overflow-hidden mb-2 w-full shadow-xs">

        {/* Left icons (Bank + Active badge) */}
        <div className="flex items-center gap-1.5 mb-1">
          <Image
            src={ApexLogo}
            alt="Bank Icon"
            width={22}
            height={22}
          />
          <Wifi className="w-3.5 h-3.5 rotate-90 text-neutral-400" />
          <span className="text-xs bg-white flex justify-center items-center text-neutral-600 px-2 py-1 rounded-md border border-neutral-200">
            <RiCheckboxCircleFill className="w-3 h-3 mr-1 text-green-600" />
            Active
          </span>
        </div>

        {/* Card Title */}
        <p className="text-xs mt-10 text-neutral-600">Savings Card</p>

        {/* Balance Left*/}
        <p className="text-2xl font-medium display-text mt-1">
          $16,058.94
        </p>

        {/* Navigation arrows */}
        <div className="absolute right-2 bottom-2 flex items-center">
          <button className="p-1 border rounded-l-sm hover:bg-neutral-100">
            <ChevronLeft className="h-3 w-3" />
          </button>
          <button className="p-1  border rounded-r-sm hover:bg-neutral-100">
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {/* Mastercard Logo */}
        <div className="absolute right-3 top-3 flex items-center justify-center">
          {/* Left circle */}
          <div className="w-4 h-4 rounded-full translate-x-1 bg-[#EB001B] opacity-90"></div>

          {/* Right circle */}
          <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
        </div>
      </div>

      {/* Switch Tabs (Daily/Weekly/Monthly) */}
      <div className="flex items-center my-2 justify-between border border-gray-300 bg-white rounded-sm w-full">
        {["daily", "weekly", "monthly"].map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range as any)}
            className={`flex-1 py-1 text-xs transition
             ${activeRange === range
                ? "bg-[#F5F7FA] font-medium border-l border-r"
                : "text-neutral-600"
              }
      `}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      {/* Spending Limit Section */}
      <div className="flex items-center my-2 justify-between w-full">

        {/* Left: Donut + Text */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-[5px] border-orange-400 border-r-neutral-200 border-t-neutral-200"></div>

          <div>
            <p className="text-xs text-neutral-600 leading-none mb-2">Spending Limit</p>
            <p className="text-base font-medium leading-none">
              $1,500.00 <span className="text-xs text-neutral-400">/ week</span>
            </p>
          </div>
        </div>

        {/* Right: Arrow button */}
        <button className="w-7 h-7 flex items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100 text-neutral-500">
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

    </div>
  );
}
