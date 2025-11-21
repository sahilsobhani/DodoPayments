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
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-14 flex items-center px-4 my-2">
          <DashboardHeader />
        </header>
        {/* DASHBOARD GRID */}
        <div className="grid gap-6 px-6 py-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 ">
            <MyCards />
            <RecentTransactions />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            <SpendingSummary />
            <MySubscriptions />
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 ">
            <TotalExpenses />
            <Exchange />
            <CreditScore />
          </div>

        </div>


        <div className="flex-1 p-6">
          {children}
        </div>
      </main>

    </SidebarProvider>
  );
}
