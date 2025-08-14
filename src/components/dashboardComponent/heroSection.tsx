
import React from "react";
import { allura, poppins } from "@/app/fonts";

// function OutlinedButton({ children }: { children: React.ReactNode }) {
//   return (
//     <button className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50">
//       {children}
//     </button>
//   );
// }

// function PrimaryButton({ children }: { children: React.ReactNode }) {
//   return (
//     <button className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800">
//       {children}
//     </button>
//   );
// }

// -----------------------------
// Header/Hero (inspired by first image)
// -----------------------------
export default function HeroHeader() {
  return (
   <header className="relative flex flex-col gap-8 rounded-2xl bg-neutral-900/95 p-8 text-white shadow-xl lg:grid lg:grid-cols-12 lg:gap-10 lg:p-10">
      <div className="lg:col-span-7">
        <h1 className={`${allura.className} text-5xl font-extrabold italic leading-tight sm:text-8xl`}>Welcome!</h1>
        <p className={`${poppins.className} mt-2 max-w-xl text-sm text-neutral-200 sm:text-base`}>
          Good hair days just got better. Discover luxury hair services crafted with precision and care. Explore our best sellers, hair care, and premium styling.
        </p>
        {/* <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryButton>Explore Now</PrimaryButton>
          <OutlinedButton>Learn More</OutlinedButton>
        </div> */}
      </div>
     <div className="relative lg:col-span-5">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-white/5 lg:block hidden" />
  <div className="h-64 w-full overflow-hidden rounded-xl border border-white/10 lg:h-full">
    <div className="grid h-full w-full grid-cols-3 gap-2 p-2">
      <div className="rounded-lg bg-[url('/headerImage.JPG')] bg-cover bg-center" />
      <div className="rounded-lg bg-[url('/headerImage1.JPG')] bg-cover bg-center" />
      <div className="rounded-lg bg-[url('/headerImage2.JPG')] bg-cover bg-center" />
    </div>
  </div>
</div>
    </header>
  );
}
