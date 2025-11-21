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
    <div className="bg-white rounded-xl shadow-2xs border border-neutral-200 p-3 font-inter flex flex-col gap-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RiSpeedUpLine className="w-5 h-5 text-neutral-600" />
          <h2 className="text-lg font-semibold text-neutral-900">Credit Score</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-sm"
        >

          Details
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-200" />

      {/* SCORE TEXT + EMOJI */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-neutral-900 text-lg">
            Your <span className="font-semibold">credit score </span> is <span className="font-semibold">{score}</span>
          </p>
          <p className="text-sm text-neutral-500">
            This score is considered to be Excellent.
          </p>
        </div>

        {/* EMOJI */}
        <div className="p-2 rounded-full bg-[#FFF1EB]">
          <Image className="w-8 h-8" src={emoji} alt="Happy Emoji"/>
        </div>

      </div>

      {/* RECTANGULAR CREDIT BAR */}
      <div className="flex mt-2 flex-wrap gap-1">
        {[...Array(maxSegments)].map((_, i) => (
          <div
            key={i}
            className={`h-6 w-2 ${i < filled ? "bg-green-500" : "bg-neutral-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
