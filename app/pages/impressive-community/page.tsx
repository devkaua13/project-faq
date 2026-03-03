'use client';

import { useState } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { AppAccordion } from "@/components/app-accordion";
import { PaginationDemo } from "@/components/app-pagination";
import { SidebarInput, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { data as impressiveCommunityData } from "@/app/data/impressive-community-data";

const ITEMS_PER_PAGE = 10;

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(impressiveCommunityData.length / ITEMS_PER_PAGE);

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
                <div className="flex flex-1 flex-col items-center justify-start gap-4 p-4">
                    <AppAccordion page={currentPage} perPage={ITEMS_PER_PAGE} />
                    <PaginationDemo
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

            </SidebarInset>
        </>
    );
}