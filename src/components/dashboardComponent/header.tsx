"use client";

import { playfairDisplay } from "@/app/fonts";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const nav = [
  { href: "/Category", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
  // anchor to a section on the current page:
  { href: "#testimonials", label: "Testimonial" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[rgba(60,45,33,0.08)] backdrop-blur ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-[rgba(60,45,33,0.85)]" />
            <span className="font-semibold tracking-wide text-[rgba(60,45,33,0.9)]">
              CBN
            </span>
          </Link>

          {/* Right: Nav (desktop) + Hamburger (mobile) */}
          <div className="flex items-center">
            {/* Desktop links (right-aligned) */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className={`${playfairDisplay.className} text-lg text-[rgba(60,45,33,0.85)] hover:text-[rgba(60,45,33,1)] transition
                             relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                             after:bg-[rgba(60,45,33,0.7)] hover:after:w-full after:transition-all`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-2 rounded-md p-2 hover:bg-[rgba(60,45,33,0.06)] md:hidden"
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="mx-4 mb-4 flex flex-col gap-2 rounded-lg border border-[rgba(60,45,33,0.08)] bg-[rgba(229,212,190,0.65)] p-3">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-[rgba(60,45,33,0.92)] hover:bg-[rgba(60,45,33,0.06)]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
