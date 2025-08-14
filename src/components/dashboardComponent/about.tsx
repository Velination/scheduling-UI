"use client";

import { allura, playfairDisplay, poppins } from "@/app/fonts";
import { motion, type Variants } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 16, scale: 0.98 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.45, ease: "easeOut" },
//   },
// };

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 6, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 18 },
  },
  hover: {
    scale: 1.06,
    transition: { type: "spring", stiffness: 300, damping: 14 },
  },
};

function Card({
  children,
  hoverTilt = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  hoverTilt?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: hoverTilt }}
      whileTap={{ scale: 0.99 }}
      className={[
        "group min-w-0 rounded-lg border border-amber-400/30 bg-black/40",
        "shadow-sm transition-all hover:shadow-lg focus-within:shadow-lg",
        // 🔹 Prevent overflow
        "p-4 sm:p-4 overflow-hidden break-words whitespace-normal",
        "max-w-full",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMobile() {
  return (
    <section className="relative mx-auto bg-white max-w-7xl rounded-2xl px-4 py-6 text-black sm:px-6">
      {/* thin gold frame */}
      <div className="rounded-xl border  border-amber-400/40 p-4 sm:p-6">
        {/* Base: 2 cols | Large: 3 cols; About spans 2 on small */}
        <motion.div
          className="grid grid-cols-2 gap-5 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* HOURS */}
          <Card hoverTilt={-0.4}>
            <div className="flex items-center gap-2 text-black/90">
              <motion.span
                variants={iconVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-100"
                aria-hidden
              >
                <FaClock className="text-black" />
              </motion.span>
              <h3 className={`${allura.className} text-3xl font-semibold tracking-wide`}>Hours</h3>
            </div>

            <div className="mt-3 space-y-3 text-sm sm:text-lg text-pink-100">
              <div>
                <p className={`${playfairDisplay.className} text-sm uppercase tracking-wider`}>Tues – Sat</p>
                <p className={`${poppins.className} text-base font-bold`}>9am – 5pm</p>
              </div>
              <div className="border-t border-pink-300 pt-2">
                <p className={`${playfairDisplay.className} text-sm uppercase tracking-wider`}>Mon – Sun</p>
                <p className={`${poppins.className} text-base font-semibold text-pink-100`}>Closed</p>
              </div>
            </div>
          </Card>

          {/* CONTACT */}
          <Card hoverTilt={0.4}>
            <h3 className={`${allura.className} text-3xl font-semibold tracking-wide text-black/90`}>Contact Us</h3>
            <div className={`${playfairDisplay.className} mt-3 text-sm space-y-3 sm:text-lg text-pink-100`}>
              <motion.a
                href="mailto:salon@example.com"
                className="flex items-center gap-3 hover:text-amber-100"
                whileHover={{ x: 2 }}
              >
                <FaEnvelope /> salon@example.com
              </motion.a>
              <motion.a
                href="https://instagram.com/yourhandle"
                target="_blank"
                className="flex items-center gap-3 hover:text-amber-100"
                whileHover={{ x: 2 }}
              >
                <FaInstagram /> @yourhandle
              </motion.a>
              <motion.a
                href="https://facebook.com/yourhandle"
                target="_blank"
                className="flex items-center gap-3 hover:text-amber-100"
                whileHover={{ x: 2 }}
              >
                <FaFacebook /> /yourhandle
              </motion.a>
              <motion.a
                href="https://tiktok.com/@yourhandle"
                target="_blank"
                className="flex items-center gap-3 hover:text-amber-100"
                whileHover={{ x: 2 }}
              >
                <FaTiktok /> @yourhandle
              </motion.a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />  Hawaii
              </div>
            </div>
          </Card>

          {/* ABOUT / MEET JD */}
          <Card hoverTilt={0.2} className="col-span-2 lg:col-span-1 w-full">
            <div className="mb-2 flex items-baseline gap-2">
              <h3 className={`${allura.className} text-3xl font-semibold italic`}>Meet MieMie</h3>
            </div>
            <p className={`${playfairDisplay.className} text-sm leading-relaxed text-pink-100`}>
              Aloha! I’m Miemie. I’m here to service your braiding needs—focused on positive energy
              and giving you a great experience. Thank you for considering me as your braider! 🧡
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
