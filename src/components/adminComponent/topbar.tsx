import { FiBell, FiSearch, FiCalendar } from "react-icons/fi";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <button className="rounded-full bg-neutral-100 px-3 py-1.5">All orders</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Dispatch</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Pending</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Completed</button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5">
            <FiSearch className="text-neutral-500" />
            <input className="w-40 bg-transparent text-sm outline-none" placeholder="Search" />
          </div>
          <button className="rounded-full border border-neutral-300 p-2"><FiCalendar /></button>
          <button className="rounded-full border border-neutral-300 p-2"><FiBell /></button>
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img src="https://i.pravatar.cc/100" alt="me" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}