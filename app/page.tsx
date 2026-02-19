import { AppSidebar } from "@/components/app-sidebar";
import { AppAccordion } from "@/components/app-accordion";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
            <AppSidebar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <AppAccordion />
            </div>
    </div>

  );
}
