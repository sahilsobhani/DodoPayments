"use client";

import { ArrowLeftRight, CircleChevronDown } from "lucide-react";
import Image from "next/image";
import usd from "@/assets/us.png";    // your flag icons here
import eur from "@/assets/eu.png";
import { Button } from "@/components/ui/button";
import {

  RiRefreshLine

} from "react-icons/ri";

export default function Exchange() {
  return (
    <div className="bg-white rounded-xl shadow-2xs font-inter border border-neutral-200 p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <RiRefreshLine className="w-5 h-5 text-neutral-600" />
          <h2 className="text-lg font-medium">Exchange</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-sm"
        >
          Currencies
        </Button>
      </div>

      {/* Currency Switcher Box */}
      <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">

        {/* Top currency row */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 border-b border-neutral-200">
          {/* USD */}
          <div className="flex items-center gap-2 pr-2 ">
            <Image src={usd} alt="USD" className="w-6 h-6 rounded-full" />
            <span className="font-medium text-neutral-800">USD</span>
            <CircleChevronDown className="w-4 h-4 text-neutral-400" />
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center px-2 border-x-2">
            <ArrowLeftRight className="w-5 h-5 text-neutral-500" />
          </div>


          {/* EUR */}
          <div className="flex items-center gap-2">
            <Image src={eur} alt="EUR" className="w-6 h-6 rounded-full" />
            <span className="font-medium text-neutral-800">EUR</span>
            <CircleChevronDown className="w-4 h-4 text-neutral-400" />
          </div>
        </div>

        {/* Amount Section */}
        <div className="px-4 py-5 text-center">
          <p className="text-3xl font-medium text-neutral-900">$100.00</p>
          <p className="text-sm text-neutral-500 mt-1">
            Available : <span className="font-medium text-neutral-800">$16,058.94</span>
          </p>
        </div>

        {/* Divider + Rate Section */}
        <div className="border-t border-neutral-200 px-4 py-1 bg-gray-200 text-center text-sm text-neutral-600">
          1 USD = <span className="font-medium text-neutral-900">0.94 EUR</span>
        </div>
      </div>


      {/* Summary Rows */}
      <div className="text-sm text-neutral-700 space-y-2">
        <div className="flex justify-between">
          <span>Tax (2%)</span>
          <span className="text-neutral-900">$2.00</span>
        </div>

        <div className="flex justify-between">
          <span>Exchange fee (1%)</span>
          <span className="text-neutral-900">$1.00</span>
        </div>

        <div className="flex justify-between text-neutral-900">
          <span>Total amount</span>
          <span className="text-neutral-900">€90.7</span>
        </div>
      </div>

      {/* Exchange Button */}
      <button className="mt-2 w-full border rounded-md py-2 flex items-center justify-center gap-2 text-neutral-700 hover:bg-neutral-50 transition">
        <RiRefreshLine className="w-5 h-5" />
        Exchange
      </button>
    </div>
  );
}
