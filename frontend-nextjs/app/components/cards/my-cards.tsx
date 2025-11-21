"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Wifi, CircleCheck, Wallet } from "lucide-react";
import ApexLogo from "@/assets/Apex.png";
import MasterCard from "@/assets/Mastercard.png";

export function MyCards() {
  return (
    <Card className="rounded-xl p-3 border border-neutral-200 font-inter shadow-2xs bg-white">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold flex items-center">
          <Wallet className="w-5 h-5 mr-2 text-neutral-700" />
          <span className="text-neutral-900">My Cards</span>
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-sm"
        >
          <Plus className="h-4 w-4" />
          Add Card
        </Button>
      </div>

      {/* CARD DISPLAY */}
      <div className="
        rounded-xl border border-neutral-200 bg-white
        p-3 relative overflow-hidden
      ">

        {/* Left icons (Bank + Active badge) */}
        <div className="flex items-center gap-2 mb-1">
          <Image
            src={ApexLogo} // Replace with your bank icon
            alt="Bank Icon"
            width={28}
            height={28}
          />
          <Wifi className="w-4 h-4 rotate-90 text-neutral-400" />
          <span className="text-xs bg-white flex justify-center items-center text-neutral-600 px-2 py-1 rounded-md border border-neutral-200">
            <CircleCheck className="w-3 h-3 mr-1 text-green-700" />
            Active
          </span>
        </div>

        {/* Card Title */}
        <p className="text-sm mt-16 text-neutral-600">Savings Card</p>

        {/* Balance */}
        <p className="text-4xl font-medium font-display mt-1">
          $16,058.94
        </p>

        {/* Navigation arrows */}
        <div className="absolute right-3 bottom-3 flex items-center">
          <button className="p-1.5 border rounded-l-md hover:bg-neutral-100">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1.5  border rounded-r-md hover:bg-neutral-100">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mastercard Logo (right corner) */}
        <div className="absolute right-4 top-4 flex items-center justify-center">
          {/* Left circle */}
          <div className="w-4 h-4 rounded-full translate-x-1.5 bg-[#EB001B] opacity-90"></div>

          {/* Right circle */}
          <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
        </div>

      </div>

      {/* SWITCH TABS (Daily/Weekly/Monthly) */}
      <div className="flex items-center justify-between border-gray-300 border bg-white rounded-sm">
        <button className="flex-1 py-1 text-sm border text-neutral-600">
          Daily
        </button>
        <button className="flex-1 py-1 text-sm border bg-gray-200 font-medium ">
          Weekly
        </button>
        <button className="flex-1 py-1 text-sm border text-neutral-600">
          Monthly
        </button>
      </div>

      {/* SPENDING LIMIT SECTION */}
      <div className="flex items-center justify-between w-full">

        {/* Left: Donut + Text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-[6px] border-orange-400 border-r-neutral-200 border-t-neutral-200"></div>

          <div>
            <p className="text-sm text-neutral-500 leading-none mb-2">Spending Limit</p>
            <p className="text-lg font-medium leading-none">
              $1,500.00 <span className="text-sm text-neutral-500">/ week</span>
            </p>
          </div>
        </div>

        {/* Right: Arrow button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100 text-neutral-500">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </Card>
  );
}
