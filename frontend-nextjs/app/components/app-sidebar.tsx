"use client";

import {
  LayoutDashboard,
  CreditCard,
  ArrowLeftRight,
  Clock,
  Receipt,
  RefreshCcw,
  Settings,
  Headphones,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

import ApexLogo from "@/assets/Apex.png";
import Avatar from "@/assets/Avatar.png";

import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#", active: true },
  { title: "My Cards", icon: CreditCard, url: "#" },
  { title: "Transfer", icon: ArrowLeftRight, url: "#" },
  { title: "Transactions", icon: Clock, url: "#" },
  { title: "Payments", icon: Receipt, url: "#" },
  { title: "Exchange", icon: RefreshCcw, url: "#" },
];

const otherItems = [
  { title: "Settings", icon: Settings, url: "#" },
  { title: "Support", icon: Headphones, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-white w-64 font-inter font-medium">
      <SidebarContent className="flex flex-col justify-between h-full">

        {/* ---------- TOP LOGO ---------- */}
        <div>
          <div className="px-6 pt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              <Image src={ApexLogo} alt="Apex Logo"></Image>
            </div>
            <div>
              <p className="font-semibold mb-1 text-sm">Apex</p>
              <p className="text-xs text-muted-foreground">
                Finance & Banking
              </p>
            </div>
          </div>

          {/* ---------------- MAIN SECTION ---------------- */}
          <SidebarGroup className="mt-4 border-t">
            <div className="bg-neutral-100 w-full h-px rounded"></div>
            <SidebarGroupLabel className="px-3 text-xs text-muted-foreground tracking-widest">
              MAIN
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                          ${
                            item.active
                              ? "bg-gray-100 text-text-strong-950"
                              : "text-neutral-600 hover:bg-gray-100"
                          }
                        `}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.active && (
                          <ChevronRight className="ml-auto h-4 w-4 text-neutral-900" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ---------------- OTHERS SECTION ---------------- */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-3 text-xs text-muted-foreground tracking-widest">
              OTHERS
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {otherItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* ---------------- FOOTER USER CARD ---------------- */}
        <div className="px-6 py-4">
            <div className="border-t mb-2"></div>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src={Avatar}
              alt="User"
              width={36}
              height={36}
              className="rounded-full"
            />
            
            <div className="flex-1">
              <p className="text-sm font-medium">Arthur Taylor</p>
              <p className="text-xs text-muted-foreground">
                arthur@alignui.com
              </p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
