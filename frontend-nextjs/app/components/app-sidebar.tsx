"use client";

// Icon Imports from remixicon
import {
  RiLayoutGridLine,
  RiBankCardLine,
  RiHistoryLine,
  RiBillLine,
  RiSettings2Line,
  RiHeadphoneLine,
  RiArrowRightSLine,
  RiArrowLeftRightLine,
  RiExpandUpDownLine,
  RiVerifiedBadgeFill,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

// Static Asset Imports
import ApexLogo from "@/assets/Apex.png";
import Avatar from "@/assets/Avatar.png";
import Image from "next/image";

// ShadCn UI Sidebar Components
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

// Utility function for conditional classNames
import { cn } from "@/lib/utils";


// Sidebar Feature Items Mapping configuration
const mainItems = [
  { title: "Dashboard", icon: RiLayoutGridLine, url: "#", active: true },
  { title: "My Cards", icon: RiBankCardLine, url: "#" },
  { title: "Transfer", icon: RiArrowLeftRightLine, url: "#" },
  { title: "Transactions", icon: RiHistoryLine, url: "#" },
  { title: "Payments", icon: RiBillLine, url: "#" },
  { title: "Exchange", icon: RiMoneyDollarCircleLine, url: "#" },
];

// Sidebar Other Items Mapping configuration
const otherItems = [
  { title: "Settings", icon: RiSettings2Line, url: "#" },
  { title: "Support", icon: RiHeadphoneLine, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-[#ffffff] w-64 font-inter font-medium">
      <SidebarContent className="flex flex-col justify-between h-full">

        {/* ---------- Sidebar Header ---------- */}

        <div>
          <div className="px-6 pt-6 flex items-center font-inter justify-between gap-3">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                <Image src={ApexLogo} alt="Apex Logo" />
              </div>
              <div className="ml-2">
                <p className="font-medium mb-1 text-sm">Apex</p>
                <p className="text-xs text-neutral-600 font-normal">
                  Finance & Banking
                </p>
              </div>
            </div>

            <div className="p-1 border border-neutral-200 hover:border-neutral-300 rounded-md shadow-xs">
              <RiExpandUpDownLine className="ml-auto h-5 w-5 text-neutral-600 cursor-pointer hover:text-neutral-700" />
            </div>
          </div>

          {/* ---------------- Sidebar Feature List ---------------- */}

          <SidebarGroup className="mt-4">
            <div className="border-t mb-2 mx-3"></div>
            <SidebarGroupLabel className="px-3 uppercase text-xs text-muted-foreground tracking-widest">
              Main
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                          item.active
                            ? "bg-[#F5F7FA] font-medium text-strong-950"
                            : "text-neutral-600 hover:bg-[#F5F7FA]"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-4 w-4",
                            item.active
                              ? "text-orange-500 bg-gray-100"
                              : "text-neutral-600 hover:bg-gray-100"
                          )}
                        />
                        <span>{item.title}</span>
                        {item.active && (
                          <RiArrowRightSLine className="ml-auto h-4 w-4 text-neutral-900" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ---------------- Others Section in Sidebar ---------------- */}

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-3 text-xs uppercase text-muted-foreground tracking-widest">
              Others
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {otherItems.map(item => (
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

        {/* ---------------- Sidebar Footer with user information ---------------- */}
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
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium">Arthur Taylor</p>
                <RiVerifiedBadgeFill className="h-4 w-4 text-blue-400 mt-1" />
              </div>

              <p className="text-xs text-muted-foreground">
                arthur@alignui.com

              </p>

            </div>
            <RiArrowRightSLine className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
