import React from "react";
import { Sidebar } from "@/components/admin/Sidebar";
import { Topbar } from "@/components/admin/Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-12 bg-neutral-50">
      {/* Sidebar */}
      <aside className="col-span-12 w-full md:col-span-3 lg:col-span-2">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="col-span-12 md:col-span-9 lg:col-span-10">
        <Topbar />
        <main className="mx-auto max-w-7xl px-4 pb-12 pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}