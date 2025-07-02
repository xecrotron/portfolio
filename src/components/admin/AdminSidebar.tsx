'use client';

import Link from "next/link";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { Info } from "lucide-react";

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/admin" className="text-xl font-headline font-bold text-primary">
          ProfolioFlow
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-4 text-sm text-muted-foreground">
            <Info className="inline-block w-4 h-4 mr-2" />
            Article management is now done directly in the code at <code>src/lib/articles.ts</code>.
        </div>
      </SidebarContent>
      <SidebarFooter>
         <p className="text-xs text-muted-foreground p-4">Admin panel removed.</p>
      </SidebarFooter>
    </Sidebar>
  );
}
