"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiCalendar, FiFileText, FiStar, FiRefreshCcw } from "react-icons/fi";

export function Sidebar() {
  const pathname = usePathname();
  const items = [
    { href: "/admin", label: "Dashboard", icon: <FiGrid /> },
    { href: "/admin/bookings", label: "Bookings", icon: <FiCalendar /> },
    { href: "/admin/policy", label: "Policy", icon: <FiFileText /> },
    { href: "/admin/reviews", label: "Reviews", icon: <FiStar /> },
    { href: "/admin/rescheduling", label: "Rescheduling", icon: <FiRefreshCcw /> },
  ];
  return (
    <nav className="sticky top-0 h-screen bg-indigo-600 text-white">
      <div className="flex h-full flex-col">
        <div className="px-5 py-5 text-lg font-bold">eProduct</div>
        <ul className="flex-1 px-3">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={[
                    "mb-2 flex items-center gap-3 rounded-xl px-4 py-3", 
                    active ? "bg-white text-indigo-700 shadow" : "text-white/90 hover:bg-white/10"
                  ].join(" ")}
                >
                  <span className="text-lg">{it.icon}</span>
                  <span className="text-sm font-medium">{it.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-4 pb-5 text-xs text-white/70">Facebook · Twitter · Google</div>
      </div>
    </nav>
  );
}
