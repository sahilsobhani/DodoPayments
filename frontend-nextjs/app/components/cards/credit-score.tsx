"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import emoji from "@/assets/Emoji.png"
import {

  RiSpeedUpLine

} from "react-icons/ri";

export default function CreditScore() {
  const score = 710;
  const maxSegments = 30; // number of bars
  const filled = Math.round((score / 1000) * maxSegments);

  return (
    <div className="bg-white rounded-xl shadow-2xs border border-neutral-200 p-2.5 font-inter flex flex-col gap-2.5 h-full w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1.5">
          <RiSpeedUpLine className="w-4 h-4 text-neutral-600" />
          <h2 className="text-sm font-semibold text-neutral-900">Credit Score</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          Details
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-200" />

      {/* SCORE TEXT + EMOJI */}
      <div className="flex items-center justify-between w-full">
        <div className="min-w-0 flex-1">
          <p className="text-neutral-900 text-sm">
            Your <span className="font-semibold">credit score </span> is <span className="font-semibold">{score}</span>
          </p>
          <p className="text-xs text-neutral-500">
            This score is considered to be Excellent.
          </p>
        </div>

        {/* EMOJI */}
        <div className="p-1.5 rounded-full bg-[#FFF1EB] flex-shrink-0">
          <Image className="w-6 h-6" src={emoji} alt="Happy Emoji"/>
        </div>
      </div>

      {/* RECTANGULAR CREDIT BAR */}
      <div className="flex mt-1 flex-wrap gap-0.5">
        {[...Array(maxSegments)].map((_, i) => (
          <div
            key={i}
            className={`h-5 w-1.5 ${i < filled ? "bg-green-500" : "bg-neutral-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
