"use client";

import Image from "next/image";
import Link from "next/link";

import { BellDot, Search, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/Avatar.png";

export function DashboardHeader() {
    return (
        <header className="
            w-full h-20 flex items-center justify-between 
            font-inter bg-white px-4 sm:px-6 mt-4 mb-2 sm:mt-2
        ">

            {/* LEFT: Avatar + Text */}
            <div className="flex items-center gap-3 sm:gap-4">
                <Image
                    src={avatar}
                    alt="User Avatar"
                    width={42}
                    height={42}
                    className="rounded-full sm:w-12 sm:h-12"
                />

                {/* Hide text on extra small screens */}
                <div className="hidden md:block">
                    <h2 className="text-base sm:text-lg font-medium">Arthur Taylor</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        Welcome back to Apex 👋🏻
                    </p>
                </div>
            </div>

            {/* RIGHT: Icons + Button */}
            <div className="flex items-center gap-2 sm:gap-3">
                <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-800" />
                </button>

                <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md">
                    <BellDot className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-800" />
                </button>

                {/* Button becomes smaller on mobile */}
                <Button
                    asChild
                    className="
                        bg-orange-500 hover:bg-orange-600 text-white 
                        rounded-md flex items-center gap-1 sm:gap-2 
                        px-3 py-2 sm:px-6 font-inter font-medium text-sm sm:text-base
                    "
                >
                    <Link href="/demo" className="flex items-center">
                        <span className="hidden md:inline">Try API Demo</span>
                        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                </Button>
            </div>

        </header>
    );
}
