"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Wifi } from "lucide-react";
import {

  RiBankCardLine,
  RiCheckboxCircleFill

} from "react-icons/ri";

import ApexLogo from "@/assets/Apex.png";


export function MyCards() {
  return (
    <div className="rounded-xl p-2.5 border border-neutral-200 font-inter shadow-2xs bg-white h-full flex flex-col w-full">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold flex items-center">
          <RiBankCardLine className="w-4 h-4 mr-1.5 text-neutral-700" />
          <span className="text-neutral-900">My Cards</span>
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          <Plus className="h-3 w-3" />
          Add Card
        </Button>
      </div>

      {/* CARD DISPLAY */}
      <div className="
        rounded-xl border border-neutral-200 bg-white
        p-2.5 relative overflow-hidden mb-2 w-full shadow-xs
      ">

        {/* Left icons (Bank + Active badge) */}
        <div className="flex items-center gap-1.5 mb-1">
          <Image
            src={ApexLogo} // Replace with your bank icon
            alt="Bank Icon"
            width={22}
            height={22}
          />
          <Wifi className="w-3.5 h-3.5 rotate-90 text-neutral-400" />
          <span className="text-xs bg-white flex justify-center items-center text-neutral-600 px-1.5 py-0.5 rounded-md border border-neutral-200">
            <RiCheckboxCircleFill className="w-2.5 h-2.5 mr-0.5 text-green-600" />
            Active
          </span>
        </div>

        {/* Card Title */}
        <p className="text-xs mt-10 text-neutral-600">Savings Card</p>

        {/* Balance */}
        <p className="text-2xl font-medium font-display mt-1">
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

        {/* Mastercard Logo (right corner) */}
        <div className="absolute right-3 top-3 flex items-center justify-center">
          {/* Left circle */}
          <div className="w-4 h-4 rounded-full translate-x-1 bg-[#EB001B] opacity-90"></div>

          {/* Right circle */}
          <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
        </div>
      </div>

      {/* SWITCH TABS (Daily/Weekly/Monthly) */}
      <div className="flex items-center my-2 justify-between border-gray-300 border bg-white rounded-sm mb-2 w-full">
        <button className="flex-1 py-1 text-xs border text-neutral-600">
          Daily
        </button>
        <button className="flex-1 py-1 text-xs border bg-gray-200 font-medium ">
          Weekly
        </button>
        <button className="flex-1 py-1 text-xs border text-neutral-600">
          Monthly
        </button>
      </div>

      {/* SPENDING LIMIT SECTION */}
      <div className="flex items-center my-2 justify-between w-full">

        {/* Left: Donut + Text */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-[5px] border-orange-400 border-r-neutral-200 border-t-neutral-200"></div>

          <div>
            <p className="text-xs text-neutral-500 leading-none mb-2">Spending Limit</p>
            <p className="text-base font-medium leading-none">
              $1,500.00 <span className="text-xs text-neutral-500">/ week</span>
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
