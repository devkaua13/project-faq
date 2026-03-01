'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { AppAccordion } from "@/components/app-accordion";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";


export default function Page() {
    return (
        <>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    
                </header>
                <div className="flex flex-1 items-center justify-center">
                    <AppAccordion />
                </div>

            </SidebarInset>
        </>
    );
}