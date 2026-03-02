'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { AppAccordion } from "@/components/app-accordion";
import { SidebarInput, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";


export default function Page() {
    return (
        <>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="relative ml-auto">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <SidebarInput placeholder="Search..." className="pl-8" />
                            </div>
                </header>
                <div className="flex flex-1 items-center justify-center">
                    <AppAccordion />
                </div>

            </SidebarInset>
        </>
    );
}