"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/dashboardComponent/header";
import { allura, playfairDisplay, poppins } from "../fonts";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  id: string;
  title: string;
  duration: string;
  price: number;
  short: string;
  long?: string;
  photo?: string;
};

type Category = {
  id: string;
  name: string;
  services: Service[];
};

const CATEGORIES: Category[] = [
  {
    id: "cornrows",
    name: "Cornrows/Stitch",
    services: [
      {
        id: "stitch-4-8",
        title: "Stitch braids (4–8)",
        duration: "3 hours",
        price: 120,
        short:
          "Please check add-ons. Arrive washed & blow-dried (no oils). Braiding hair included (1b/1/2/4).",
        long:
          "- BRAIDING HAIR IS INCLUDED IN THE PRICE (1b/1/2/4)\n- NO BUNDLES PROVIDED\n- COLOR MUST BE PROVIDED BY YOU IN XPRESSION/OUTRE ONLY\n- Please arrive washed & blow-dried; be on time to avoid late fees.",
        photo: "/headerImage3.JPG",
      },
      {
        id: "stitch-10-14",
        title: "Stitch braids (10–14)",
        duration: "3.5 hours",
        price: 150,
        short:
          "Clean parts, sleek finish. Add beads or accessories as add-ons.",
      },
    ],
  },
  {
    id: "kiddie",
    name: "Kiddie Styles",
    services: [
      {
        id: "kids-braids",
        title: "Kids Braids",
        duration: "2 hours",
        price: 85,
        short: "Gentle detangling & kid-friendly styling.",
      },
    ],
  },
  {
    id: "knotless",
    name: "Knotless",
    services: [
      {
        id: "knotless-medium",
        title: "Knotless (Medium)",
        duration: "5 hours",
        price: 230,
        short: "Tension-free, natural movement. Hair included (1b/1/2/4).",
      },
    ],
  },
  // (You had repeated "knotless" blocks; keeping one to avoid duplicates)
];

// ---------------- Motion variants ----------------
const pageV = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemV = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

function PinkCard({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  // motion-enabled card with hover lift
  return (
    <motion.div
      className={[
        "rounded-xl border-b-black bg-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.08)]",
        className,
      ].join(" ")}
      variants={itemV}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const [openCatId, setOpenCatId] = React.useState<string | null>(null);
  const [openServiceId, setOpenServiceId] = React.useState<string | null>(null);

  const toggleCategory = (id: string) =>
    setOpenCatId((cur) => (cur === id ? null : id));

  const toggleService = (id: string) =>
    setOpenServiceId((cur) => (cur === id ? null : id));

  return (
    <motion.main
      className="relative mx-auto max-w-3xl px-4"
      variants={pageV}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <h1
        className={`${allura.className} mb-4 mt-18 text-center text-3xl font-semibold text-neutral-900`}
      >
        Select Hairstyle
      </h1>

      {/* Category list with staggered entrance */}
      <motion.div className="space-y-4" variants={listV} initial="hidden" animate="visible">
        {CATEGORIES.map((cat) => {
          const isOpen = openCatId === cat.id;
          return (
            <PinkCard key={cat.id} className="overflow-hidden">
              {/* Category Row */}
              <div className="flex items-center justify-between px-2 py-2">
                <p
                  className={`${playfairDisplay.className} text-lg font-medium text-neutral-900`}
                >
                  {cat.name}
                </p>
                <motion.button
                  onClick={() => {
                    toggleCategory(cat.id);
                    setOpenServiceId(null);
                  }}
                  className={`${playfairDisplay.className} rounded-md bg-[#f7a5d5] px-4 py-2 text-sm font-semibold text-neutral-900 shadow`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-expanded={isOpen}
                >
                  {isOpen ? "CLOSE" : "SELECT"}
                </motion.button>
              </div>

              {/* Services Accordion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="svc-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-red/80"
                  >
                    <div className="px-4 py-4">
                      <motion.div
                        className="space-y-4"
                        variants={listV}
                        initial="hidden"
                        animate="visible"
                      >
                        {cat.services.map((svc) => {
                          const svcOpen = openServiceId === svc.id;
                          return (
                            <PinkCard key={svc.id} className="bg-[#f58bc6]/30">
                              {/* Service header row */}
                              <div className="flex items-start justify-between gap-4 px-4 py-4">
                                <div>
                                  <p
                                    className={`${playfairDisplay.className} text-base font-semibold text-neutral-900`}
                                  >
                                    {svc.title}
                                  </p>
                                  <p className="text-sm text-neutral-700">
                                    {svc.duration} @ ${svc.price.toFixed(2)}
                                  </p>
                                </div>
                                <motion.button
                                  onClick={() => toggleService(svc.id)}
                                  className={`${playfairDisplay.className} rounded-md bg-[#f7a5d5] px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow`}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  aria-expanded={svcOpen}
                                >
                                  {svcOpen ? "SHOW LESS" : "SHOW MORE"}
                                </motion.button>
                              </div>

                              {/* Short row divider */}
                              <div className="mx-4 border-t border-red/30" />

                              {/* Collapsible Details */}
                              <AnimatePresence initial={false}>
                                {svcOpen && (
                                  <motion.div
                                    key={`${svc.id}-details`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="bg-gray-100 px-4 pb-4 pt-3">
                                      {svc.long ? (
                                        <pre
                                          className={`${poppins.className} whitespace-pre-wrap text-sm leading-6 text-neutral-800`}
                                        >
                                          {svc.long}
                                        </pre>
                                      ) : (
                                        <p className="text-sm text-neutral-800">{svc.short}</p>
                                      )}

                                      {/* Image with hover zoom */}
                                      {svc.photo && (
                                        <motion.div
                                          className="mt-4 overflow-hidden rounded-lg"
                                          whileHover={{ scale: 1.01 }}
                                          transition={{ duration: 0.25 }}
                                        >
                                          <div className="relative h-52 w-full sm:h-64">
                                            <Image
                                              src={svc.photo}
                                              alt={svc.title}
                                              fill
                                              className="object-contain"
                                              priority={false}
                                            />
                                          </div>
                                        </motion.div>
                                      )}

                                      <div className="mt-4 flex items-center justify-between">
                                        <motion.a
                                          href={`/booking?service=${svc.id}`}
                                          className={`${playfairDisplay.className} rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white`}
                                          whileHover={{ y: -1 }}
                                          whileTap={{ scale: 0.98 }}
                                        >
                                          Book
                                        </motion.a>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </PinkCard>
                          );
                        })}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </PinkCard>
          );
        })}
      </motion.div>
    </motion.main>
  );
}
