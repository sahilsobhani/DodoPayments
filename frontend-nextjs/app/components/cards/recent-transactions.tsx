import { ChevronRight, CircleDollarSign } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {

  RiBankLine,
  RiLineChartLine,
  RiHomeSmileFill,
  RiAmazonFill

} from "react-icons/ri";



const transactions: {
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



const iconMap: Record<IconKey, React.ReactNode> = {
  bank: <RiBankLine className="w-4 h-4 text-neutral-600" />,
  chart: <RiLineChartLine className="w-4 h-4 text-neutral-600" />,
  home: <RiHomeSmileFill className="w-4 h-4 text-green-600" />,
  refresh: <RiAmazonFill className="w-4 h-4 text-neutral-600" />,
};


type IconKey = "bank" | "chart" | "home" | "refresh";


export default function RecentTransactions() {
  return (
    <div className="w-full p-2.5 bg-white rounded-xl shadow-2xs border border-neutral-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <CircleDollarSign className="w-4 h-4 mr-1.5 text-neutral-700" />
          <h2 className="text-sm font-semibold text-neutral-800">Recent Transactions</h2>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 flex items-center gap-1 text-muted-foreground rounded-md border-neutral-300 text-xs"
        >
          See All
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-neutral-100 p-1 rounded-lg w-full mb-4">
        <button className="flex-1 px-3 py-1 text-xs bg-white rounded-md shadow-sm font-medium">
          Incoming
        </button>

        <button className="flex-1 px-3 py-1 text-xs text-neutral-500">
          Outgoing
        </button>

        <button className="flex-1 px-3 py-1 text-xs text-neutral-500">
          Pending
        </button>
      </div>


      {/* Transaction List */}
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        <div className="flex flex-col gap-3 overflow-y-auto">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {iconMap[tx.icon]}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-800 truncate">{tx.title}</p>
                  <p className="text-xs text-neutral-500 truncate max-w-[150px]">
                    {tx.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="text-right flex items-center gap-1.5 flex-shrink-0">
                <div>
                  <p className="text-xs font-semibold text-neutral-800">
                    ${tx.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-neutral-500">{tx.date}</p>
                </div>

                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
