import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from "@/app/components/app-sidebar"
import { DashboardHeader } from "@/app/components/dashboard-header"

import { MyCards } from "@/app/components/cards/my-cards";
import RecentTransactions from "@/app/components/cards/recent-transactions";
import SpendingSummary from "@/app/components/cards/spending-summary";
import MySubscriptions from "@/app/components/cards/my-subscriptions";
import TotalExpenses from "@/app/components/cards/total-expenses";
import Exchange from "@/app/components/cards/exchange";
import CreditScore from "@/app/components/cards/credit-score";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col overflow-hidden md:overflow-hidden overflow-y-auto">
        <header className="h-14 flex items-center px-4 my-2 flex-shrink-0">
          <DashboardHeader />
        </header>
        {/* DASHBOARD GRID */}
        <div className="grid gap-6 px-4 md:px-6 py-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 md:h-[calc(100vh-5.5rem)] md:overflow-hidden overflow-y-auto">

          {/* COLUMN 1 - 2 cards of equal height */}
          <div className="flex flex-col gap-4 md:flex-1 md:min-h-0">
            <div className="md:flex-1 md:min-h-0 md:flex">
              <MyCards />
            </div>
            <div className="md:flex-1 md:min-h-0 md:flex">
              <RecentTransactions />
            </div>
          </div>

          {/* COLUMN 2 - 2 cards of equal height */}
          <div className="flex flex-col gap-4 md:flex-1 md:min-h-0">
            <div className="md:flex-1 md:min-h-0 md:flex">
              <SpendingSummary />
            </div>
            <div className="md:flex-1 md:min-h-0 md:flex">
              <MySubscriptions />
            </div>
          </div>

          {/* COLUMN 3 - 1:2:1 ratio */}
          <div className="flex flex-col gap-4 md:flex-1 md:min-h-0">
            <div className="md:flex-[1] md:min-h-0 md:flex">
              <TotalExpenses />
            </div>
            <div className="md:flex-[2] md:min-h-0 md:flex">
              <Exchange />
            </div>
            <div className="md:flex-[1] md:min-h-0 md:flex">
              <CreditScore />
            </div>
          </div>

        </div>


        <div className="flex-1 p-6">
          {children}
        </div>
      </main>

    </SidebarProvider>
  );
}
