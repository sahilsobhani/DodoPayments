"use client";

// React Imports
import React, { useState } from "react";

// Icon Imports from lucide-react and remixicon
import { ChevronRight, CircleDollarSign } from "lucide-react";
import {
  RiBankLine,
  RiLineChartLine,
  RiHomeSmileFill,
  RiAmazonFill,
} from "react-icons/ri";

// ShadCn UI Button Component
import { Button } from "@/components/ui/button";

// Icon Key Type Definition
type IconKey = "bank" | "chart" | "home" | "refresh";

// Should be imported from an API or database in a real application,  this is sample static data from the figma component
const transactions:
  {
    id: number;
    title: string;
    subtitle: string;
    amount: number;
    type: string;
    date: string;
    icon: IconKey;
  }[] = [
    {
      id: 1,
      title: "Salary Deposit",
      subtitle: "Monthly salary from Apex Corp",
      amount: 3500.0,
      type: "incoming",
      date: "Sep 18",
      icon: "bank",
    },
    {
      id: 2,
      title: "Stock Dividend",
      subtitle: "Payment from stock investment",
      amount: 846.14,
      type: "incoming",
      date: "Sep 18",
      icon: "chart",
    },
    {
      id: 3,
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Duncan",
      amount: 100.0,
      type: "incoming",
      date: "Sep 17",
      icon: "home",
    },
    {
      id: 4,
      title: "Refund from Amazon",
      subtitle: "Refund of Order No #124235",
      amount: 36.24,
      type: "incoming",
      date: "Sep 15",
      icon: "refresh",
    },
  ];

// Icon Mapping
const iconMap: Record<IconKey, React.ReactNode> = {
  bank: <RiBankLine className="w-4 h-4 text-neutral-600" />,
  chart: <RiLineChartLine className="w-4 h-4 text-neutral-600" />,
  home: <RiHomeSmileFill className="w-4 h-4 text-green-600" />,
  refresh: <RiAmazonFill className="w-4 h-4 text-neutral-600" />,
};

export default function RecentTransactions() {
  const [activeTab, setActiveTab] = useState<"incoming" | "outgoing" | "pending">(
    "incoming"
  );

  const filteredTransactions = transactions.filter(
    (tx) => tx.type === "incoming" // currently show only incoming
  );

  return (
    <div className="w-full p-3 bg-white rounded-xl shadow-2xs border border-neutral-200 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <CircleDollarSign className="w-4 h-4 mr-1.5 mt-0.5 text-neutral-600" />
          <h2 className="text-sm font-medium tracking-wide text-neutral-950">Recent Transactions</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          See All
        </Button>
      </div>

      <div className="flex items-center bg-neutral-50 p-1 rounded-lg w-full mb-4">
        {["incoming", "outgoing", "pending"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 px-3 py-1 text-xs rounded-md font-medium transition
              ${activeTab === tab
                ? "bg-white shadow-sm text-neutral-940"
                : "text-neutral-400"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        <div className="flex flex-col gap-3 overflow-y-auto">
          {filteredTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center shrink-0">
                  {iconMap[tx.icon]}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-950 truncate">
                    {tx.title}
                  </p>
                  <p className="text-xs text-neutral-600 mt-1 truncate max-w-[150px]">
                    {tx.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-right flex items-center gap-1.5 shrink-0">
                <div className="mr-2">
                  <p className="text-xs font-medium tracking-wide text-neutral-950">
                    ${tx.amount.toFixed(2)}
                  </p>
                  <p className="text-xs mt-1 text-neutral-600">{tx.date}</p>
                </div>

                <ChevronRight className="w-3.5 h-3.5 hover:text-neutral-600 text-neutral-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
