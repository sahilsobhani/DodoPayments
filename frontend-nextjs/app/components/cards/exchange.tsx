"use client";

// Next.js Image Import
import Image from "next/image";

// Icon Imports from lucide-react
import { ArrowLeftRight, CircleChevronDown } from "lucide-react";
import { RiRefreshLine } from "react-icons/ri";

// Static Asset Imports for Flags
import usd from "@/assets/us.png";    // your flag icons here
import eur from "@/assets/eu.png";

//
import { Button } from "@/components/ui/button";


export default function Exchange() {
  return (
    <div className="bg-white rounded-xl shadow-2xs font-inter border border-neutral-200 p-2.5 flex flex-col gap-2.5 h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <RiRefreshLine className="w-4 h-4 text-neutral-600" />
          <h2 className="text-sm font-medium">Exchange</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          Currencies
        </Button>
      </div>

      {/* Currency Switcher Box */}
      <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden w-full">

        {/* Top currency row */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-neutral-200">
          {/* USD */}
          <div className="flex items-center gap-1.5 pr-1.5">
            <Image src={usd} alt="USD" className="w-5 h-5 rounded-full" />
            <span className="font-medium text-neutral-800 text-xs">USD</span>
            <CircleChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center px-1.5 border-x-2">
            <ArrowLeftRight className="w-4 h-4 text-neutral-500" />
          </div>

          {/* EUR */}
          <div className="flex items-center gap-1.5">
            <Image src={eur} alt="EUR" className="w-5 h-5 rounded-full" />
            <span className="font-medium text-neutral-800 text-xs">EUR</span>
            <CircleChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </div>
        </div>

        {/* Amount Section */}
        <div className="px-3 py-2 text-center">
          <p className="text-lg font-medium display-text text-neutral-900">$100.00</p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Available : <span className="font-semibold display-text text-neutral-800">$16,058.94</span>
          </p>
        </div>

        {/* Divider + Rate Section */}
        <div className="border-t border-neutral-200 px-3  bg-gray-200 text-center item-center justify-center flex text-xs text-neutral-600">
          1 USD =  <span className="font-medium text-neutral-900"> 0.94 EUR</span>
        </div>
      </div>

      {/* Summary Rows */}
      <div className="text-xs text-neutral-700 space-y-1.5">
        <div className="flex justify-between">
          <span className="text-neutral-600">Tax (2%)</span>
          <span className="text-neutral-950 font-medium">$2.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-600">Exchange fee (1%)</span>
          <span className="text-neutral-950 font-medium">$1.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-600">Total amount</span>
          <span className="text-neutral-950 font-medium">€90.7</span>
        </div>
      </div>

      {/* Exchange Button */}
      <button className="mt-1 w-full border rounded-md py-1.5 flex items-center justify-center gap-1.5 text-neutral-600 font-medium hover:bg-neutral-50 transition text-xs">
        <RiRefreshLine className="w-4 h-4" />
        Exchange
      </button>
    </div>
  );
}
