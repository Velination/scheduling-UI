"use client";
import React from "react";
import Image from "next/image";
import { allura, playfairDisplay , poppins } from "@/app/fonts";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title?: string;
  image: string; // large photo
  avatar?: string; // small avatar (optional)
  rating?: number; // 1-5
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "In this ever-evolving beauty era, staying ahead matters. My protective style turned out flawless — zero tension and so sleek!",
    name: "Amaka O.",
    title: "Product Designer",
    image:
      "/headerImage1.JPG",
     avatar:
      "/profile.PNG",
    rating: 3,
  },
  {
    id: "t2",
    quote:
      "Best salon experience I’ve had. Booking was easy and the silk press lasted for weeks.",
    name: "Zainab B.",
    title: "Content Creator",
    image:
      "/headerImage3.JPG",
      avatar:
      "/profile.PNG",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Professional, on time, and super gentle. My knotless braids still look fresh!",
    name: "Nora M.",
    title: "Photographer",
    image:
      "/headerImage2.JPG",
     avatar:
      "/profile.PNG",
    
    rating: 5,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-white/90">★</span>
      ))}
    </div>
  );
}

export default function TestimonialSection({
  items = TESTIMONIALS,
  intervalMs = 6000,
}: {
  items?: Testimonial[];
  intervalMs?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [prev, setPrev] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const next = React.useCallback(() => {
    setPrev(index);
    setIndex((i) => (i + 1) % items.length);
  }, [index, items.length]);
  const prevSlide = React.useCallback(() => {
    setPrev(index);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [index, items.length]);

  React.useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => next(), intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, intervalMs]);

  const active = items[index];
  const direction = index > prev || (prev === items.length - 1 && index === 0) ? 1 : -1;

  return (
    <section id="testimonials" className="relative scroll-mt-24 mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 p-6 text-white md:p-10">
      <div className="mb-6 flex items-center justify-center">
        <span className={`${allura.className} rounded-full bg-white/10 px-3 py-1 text-4xl font-semibold`}>Our Testimonials</span>
      </div>
      <h2 className={`${playfairDisplay.className} text-center text-2xl font-semibold md:text-2xl`}>Customers Say About Our Services</h2>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
        {/* Left: Image */}
        <div className="relative col-span-12 md:col-span-5">
          {items.map((t, i) => (
            <div
              key={t.id}
              className={[
                "absolute inset-0 rounded-2xl bg-contain bg-no-repeat bg-center shadow-lg transition-all duration-700",
                i === index ? "opacity-100 translate-x-0" : direction > 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10",
              ].join(" ")}
              style={{ backgroundImage: `url(${t.image})` }}
            />
          ))}
          {/* small avatars row */}
          <div className="absolute -bottom-4 left-4 flex -space-x-2">
            {items.slice(0, 4).map((t) => (
              <Image key={t.id} src={t.avatar ?? t.image} alt="" width={20} height={20} className="h-8 w-8 rounded-full border-2 border-neutral-900" />
            ))}
          </div>
          <div className="h-72 w-full rounded-2xl bg-neutral-700/20 md:h-full" />
        </div>

        {/* Right: Quote card */}
        <div className="relative col-span-12 md:col-span-7">
          <div className="relative min-h-[260px] rounded-3xl bg-[#ff8dc4] p-6 shadow-xl md:p-8">
            {/* quote icon */}
            <div className="absolute left-6 top-6 text-3xl">❝</div>
            <div className="absolute right-6 top-6"><Stars n={active.rating ?? 5} /></div>

            {items.map((t, i) => (
              <div
                key={t.id}
                className={[
                  "absolute inset-0 flex flex-col justify-center p-6 transition-all duration-700",
                  i === index ? "opacity-100 translate-x-0" : direction > 0 ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10",
                ].join(" ")}
              >
                <p className={`${poppins.className}max-w-2xl text-sm leading-relaxed md:text-base`}>
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={t.avatar ?? t.image} alt="" width={20} height={20}  className="h-9 w-9 rounded-full border-2 border-white/30" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    {t.title && <p className="text-xs text-white/80">{t.title}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPrev(index);
                    setIndex(i);
                  }}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === index ? "bg-violet-400" : "bg-white/30 hover:bg-white/60",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Prev</button>
              <button onClick={next} className="rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
