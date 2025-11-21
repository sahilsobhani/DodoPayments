"use client";

import {  MoreVertical } from "lucide-react";
import spotify from "@/assets/Spotify.png";
import prime from "@/assets/Prime.png";
import youtube from "@/assets/Youtube.png";
import apple from "@/assets/Apple.png";
import applehigh from "@/assets/AppleHigh.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {

  RiFileListLine,
  RiPieChartLine

} from "react-icons/ri";


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


const badgeColors: Record<string, string> = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-gray-100 text-gray-600",
  red: "bg-orange-100 text-orange-600",
};

export default function MySubscriptions() {
  return (
    <div className="bg-white rounded-xl shadow-2xs border border-neutral-200 p-2.5 h-full flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <RiFileListLine className="w-4 h-4 text-neutral-700" />
          <span className="text-sm font-semibold">My Subscriptions</span>
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
      <div className="bg-[#F5F7FA] rounded-xl p-2.5 flex gap-2.5 font-inter items-center mb-2 relative overflow-hidden w-full">

        {/* Text Content */}
        <div className="z-10 flex-1 min-w-0">
          <div className="w-8 h-8 flex items-center justify-center rounded-full z-10 mb-1.5 p-0.5">
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
      <div className="flex flex-col divide-y divide-neutral-200 flex-1 overflow-hidden">
        <div className="flex flex-col overflow-y-auto">
          {subscriptions.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-1.5 w-full">
              {/* Left: Logo + Info */}
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="p-1.5 rounded-full border-neutral-200 border flex-shrink-0">
                  <Image src={item.logo} alt="logo" className="w-6 h-6" />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-xs text-neutral-500 truncate">{item.name}</p>
                  <p className="text-xs flex text-neutral-900">
                    {item.price}
                    <span className="text-muted-foreground ml-1">{item.period}</span>
                  </p>
                </div>
              </div>

              {/* Right: Status + Menu */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={
                    "px-2 py-0.5 text-xs rounded-full font-medium " +
                    badgeColors[item.statusColor]
                  }
                >
                  {item.status}
                </span>

                <MoreVertical className="w-4 h-4 text-neutral-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
