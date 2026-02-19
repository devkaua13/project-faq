'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { AppAccordion } from "@/components/app-accordion";

export default function Page(){
    return (
        <div style={{ display: 'flex' }}>
            <AppSidebar />
            <AppAccordion />
        </div>
    );
}