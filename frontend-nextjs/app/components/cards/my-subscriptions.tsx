"use client";

// Icon Imports from lucide-react and remixicon
import {  MoreVertical } from "lucide-react";
import { RiFileListLine } from "react-icons/ri";

// Static Asset Imports
import spotify from "@/assets/Spotify.png";
import prime from "@/assets/Prime.png";
import youtube from "@/assets/Youtube.png";
import apple from "@/assets/Apple.png";
import applehigh from "@/assets/AppleHigh.png";

// Next.js Image Import
import Image from "next/image";

// ShadCn UI Button Component
import { Button } from "@/components/ui/button";

// Sample Subscription Data - In real application, this would come from an API or database
const subscriptions = [
  {
    id: 1,
    name: "Salary Deposit",
    price: "$7.99",
    period: "/month",
    logo: spotify,
    status: "Paid",
    statusColor: "green",
  },
  {
    id: 2,
    name: "YouTube Music",
    price: "$79.99",
    period: "/year",
    logo: youtube,
    status: "Expiring",
    statusColor: "yellow",
  },
  {
    id: 3,
    name: "Prime Video",
    price: "$9.99",
    period: "/month",
    logo: prime,
    status: "Paused",
    statusColor: "red",
  },
];

// Badge color mapping
const badgeColors: Record<string, string> = {
  green: "bg-[#E0FAEC] text-[#1FC16B]",
  yellow: "bg-neutral-100 text-neutral-600",
  red: "bg-orange-100 text-orange-500",
};

export default function MySubscriptions() {
  return (
    <div className="bg-white rounded-xl shadow-2xs border border-neutral-200 p-3 h-full flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <RiFileListLine className="w-4 h-4 mt-1 text-neutral-600" />
          <span className="text-sm font-medium text-neutral-950 tracking-wide ">My Subscriptions</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          See All
        </Button>
      </div>

      {/* Promo */}
      <div className="bg-[#F5F7FA] rounded-xl p-3 py-2 flex gap-2.5 font-inter items-center mt-2 mb-1 relative overflow-hidden w-full">

        {/* Text Content */}
        <div className="z-10 flex-1 min-w-0">
          <div className="w-8 h-8 flex items-center justify-center rounded-full z-10 mb-2 p-1.5">
            <Image alt="apple" src={apple} className="w-full h-full object-contain" />
          </div> 
          <p className="font-medium text-sm text-neutral-900 leading-tight">
            50% discount on Apple Music
          </p>
          <p className="text-xs text-neutral-600 mt-0.5">
            For only $4.99 per month!
            <span className="text-gray-600 font-semibold ml-1 underline cursor-pointer hover:text-gray-700">
              Learn More
            </span>
          </p>
        </div>

        <Image
          alt="background musical note"
          src={applehigh}
          className="absolute
               -right-16 top-[-60px]
               h-32 w-32
               opacity-100
               pointer-events-none
               z-0"
        />
      </div>

      {/* Subscription List */}
      <div className="flex flex-col divide-y divide-neutral-200 flex-1 overflow-clip">
        <div className="flex flex-col overflow-y-auto">
          {subscriptions.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-1.5 w-full">
              {/* Left: Logo + Info */}
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="p-1.5 rounded-full border-neutral-200 border shrink-0">
                  <Image src={item.logo} alt="logo" className="w-6 h-6" />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-xs text-neutral-600 truncate">{item.name}</p>
                  <p className="text-xs flex text-neutral-950">
                    {item.price}
                    <span className="text-neutral-400 ml-1">{item.period}</span>
                  </p>
                </div>
              </div>

              {/* Right: Status + Menu */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={
                    "px-2 py-0.5 text-xs rounded-full font-medium " +
                    badgeColors[item.statusColor]
                  }
                >
                  {item.status}
                </span>

                <MoreVertical className="w-4 h-4 text-neutral-400 hover:text-neutral-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
