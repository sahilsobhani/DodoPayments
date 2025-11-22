"use client";

// Next.js Image and Link Imports
import Image from "next/image";
import Link from "next/link";

// Icon Imports from lucide-react and remixicons
import { BellDot, Search } from "lucide-react";
import { RiArrowRightUpLine } from "react-icons/ri";

// ShadCn UI Button Component
import { Button } from "@/components/ui/button";

// Static Asset Imports
import avatar from "@/assets/Avatar.png";

export function DashboardHeader({ userName = "Arthur Taylor" }) {
  return (
    <header className="w-full flex items-center justify-between bg-white px-2 sm:px-4 py-3 font-inter">

      {/* LEFT SECTION  - Username and Avatar*/}
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          src={avatar}
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
        />

        <div className="hidden md:block">
          <h2 className="text-base sm:text-lg text-neutral-950 font-medium">{userName}</h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Welcome back to Apex 👋🏻
          </p>
        </div>
      </div>

      {/* RIGHT SECTION  -  Buttons and CTA*/}
      <div className="flex items-center gap-2 sm:gap-3">
        
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5 text-neutral-800" />
        </Button>

        <Button variant="ghost" size="icon">
          <BellDot className="h-5 w-5 text-neutral-800" />
        </Button>

        <Button
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-3 sm:px-6"
        >
          <Link href="/demo" className="flex items-center gap-1 sm:gap-2">
            <span className="hidden md:inline">Try API Demo</span>
            <RiArrowRightUpLine className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
