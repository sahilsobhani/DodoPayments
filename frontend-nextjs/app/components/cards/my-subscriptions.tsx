"use client";

import { List, MoreVertical, ReceiptText } from "lucide-react";
import spotify from "@/assets/Spotify.png";
import prime from "@/assets/Prime.png";
import youtube from "@/assets/Youtube.png";
import apple from "@/assets/Apple.png";
import applehigh from "@/assets/AppleHigh.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";


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
    <div className="bg-white rounded-xl mb-2 shadow-2xs border border-neutral-200 p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ReceiptText className="w-5 h-5 text-neutral-700" />
          <span className="text-lg font-semibold">My Subscriptions</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-sm"
        >
          See All
        </Button>
      </div>

      {/* Promo */}
      <div className="bg-[#F5F7FA] rounded-xl p-4 flex gap-4 font-inter items-center mb-2 relative overflow-hidden">

        {/* Text Content */}
        <div className="z-10">
          <div className="w-10 h-10 flex items-center justify-center rounded-full z-10 mb-2 p-1">
          <Image alt="apple" src={apple} className="w-full h-full object-contain" />
        </div> 
          <p className="font-medium text-lg text-neutral-900 leading-snug">
            50% discount on Apple Music
          </p>
          <p className="text-sm text-neutral-600 mt-0.5">
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
               -right-20 top-[-75px]
               h-40 w-40
               opacity-100
               pointer-events-none
               z-0"
        />
      </div>

      {/* Subscription List */}
      <div className="flex flex-col divide-y divide-neutral-200">
        {subscriptions.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            {/* Left: Logo + Info */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full border-neutral-200 border">
                <Image src={item.logo} alt="logo" className="w-8 h-8" />
              </div>


              <div>
                <p className="font-medium text-sm text-neutral-500">{item.name}</p>
                <p className="text-xs flex text-neutral-900">
                  {item.price}
                  <span className="text-muted-foreground ml-1">{item.period}</span>
                </p>

              </div>
            </div>

            {/* Right: Status + Menu */}
            <div className="flex items-center gap-3">
              <span
                className={
                  "px-3 py-1 text-xs rounded-full font-medium " +
                  badgeColors[item.statusColor]
                }
              >
                {item.status}
              </span>

              <MoreVertical className="w-5 h-5 text-neutral-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
