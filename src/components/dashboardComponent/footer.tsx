"use client";

import Link from "next/link";
import { allura, poppins } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className=" rounded-t-xl mt-8 bg-black/60 p-3 text-[rgba(255,255,255,0.86)]">
      {/* Contact strip */}
      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo on the left */}
          <div className="flex items-center gap-2 min-w-[150px]">
            <div className="h-9 w-9 rounded-full bg-[rgba(255,214,119,0.95)]" />
            <span className="font-semibold tracking-wide">logo MiEMie</span>
          </div>

          {/* Contact details equally spaced */}
          <div className={`${allura.className} flex flex-1 justify-around flex-wrap gap-4 text-lg`}>
            <span className="text-white/80">London Eye, UK • 123 Salon Rd, Lagos</span>
            <a href="tel:+234887776665" className="hover:text-white">
              088-777-666-65
            </a>
            <a href="mailto:hello@grance.com" className="hover:text-white">
              hello@grance.com
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom bar */}
      <div className={`${poppins.className} mt-4 flex flex-col justify-between gap-3 text-xs text-white/60 md:flex-row`}>
        <span>
          © {new Date().getFullYear()} AI Technologies — All rights reserved.
        </span>
        <span>
          <Link href="https://downloadnewthemes.com" className="hover:text-white">
            www.DownloadNewThemes.com
          </Link>
        </span>
      </div>
    </footer>
  );
}
