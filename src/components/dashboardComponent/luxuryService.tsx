"use client";
import React from "react";
import { allura, playfairDisplay, poppins } from "@/app/fonts";
import { motion, type Variants } from "framer-motion";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hover: {
    scale: 1.06,
    transition: { type: "spring", stiffness: 300, damping: 14 },
  },
};


function GoldRule() {
  return (
    <div className="my-4 h-[2px] w-full bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 rounded-full" />
  );
}

function PillTab({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-pink-400",
        active ? "bg-pink-500 text-white shadow" : "bg-pink-100 text-pink-800 hover:bg-pink-200",
      ].join(" ")}
    >
      {children}
    </button>
  );
}


function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-pink-200 bg-pink-50/90 p-6 shadow-sm md:p-8">
      <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="relative">{children}</div>
    </section>
  );
}

function MotionCard({
  icon,
  children,
  hoverTilt = 0.6,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  hoverTilt?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, rotate: hoverTilt }}
      whileTap={{ scale: 0.99 }}
      className="group flex flex-col items-center rounded-xl bg-white/70 p-4 text-center shadow-sm transition-all
                 hover:shadow-lg hover:bg-white/80 focus-within:shadow-lg"
    >
      <motion.div
        variants={iconVariants}
  initial="hidden"
  animate="show"
  whileHover="hover"
        className="grid h-14 w-14 place-items-center rounded-full border-4 border-yellow-400 bg-pink-50 text-2xl
                   transition-colors group-hover:border-yellow-500"
      >
        {icon}
      </motion.div>
      {children}
    </motion.div>
  );
}

export default function PolicySection() {
  const [tab, setTab] = React.useState<0 | 1 | 2>(0);

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <PillTab active={tab === 0} onClick={() => setTab(0)}>
          Booking Policies
        </PillTab>
        <PillTab active={tab === 1} onClick={() => setTab(1)}>
          Before You Book
        </PillTab>
        <PillTab active={tab === 2} onClick={() => setTab(2)}>
          Quick Notes
        </PillTab>
      </div>

      {/* Panels */}
      {tab === 0 && (
        <PanelShell>
          <h1 className={`${allura.className} text-center text-4xl font-extrabold tracking-wide text-neutral-900`}>
            WELCOME TO <span className={`${allura.className} font-serif italic`}>BeautyByMiemie</span>
          </h1>
          <p className={`${poppins.className} mt-2 text-center text-sm text-neutral-700`}>
            Hey y’all, welcome! Please read before booking.
          </p>

          <GoldRule />

          {/* Rescheduling */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              RESCHEDULING
            </h4>
            <p className={`${poppins.className} text-center text-sm text-neutral-700`}>
              You may reschedule at least <b>24 hours</b> before your appointment.
            </p>
          </div>

          <GoldRule />

          {/* Late Policy */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              LATE POLICY
            </h4>
            <p className={`${poppins.className} mx-auto max-w-3xl text-center text-sm text-neutral-700`}>
              Please be on time. There is a <b>15-minute grace</b> period. After that,
              a <b>$25 late fee</b> applies. At <b>25+ minutes</b> your appointment may be
              cancelled; for no-show/no-call you may be charged <b>50%</b> of the service fee.
            </p>
          </div>

          <GoldRule />

          {/* Refunds */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              REFUNDS
            </h4>
            <p className={`${poppins.className} text-center text-sm text-neutral-700`}>
              Refunds won’t be provided.
            </p>
          </div>
        </PanelShell>
      )}

      {tab === 1 && (
        <PanelShell>
          <p className={`${allura.className} text-center font-serif text-4xl italic text-neutral-800`}>
            Please read before booking
          </p>
          <GoldRule />

          {/* Hair Provided */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              HAIR PROVIDED
            </h4>
            <p className={`${poppins.className} mx-auto max-w-3xl text-center text-sm text-neutral-700`}>
              Natural color braiding hair <b>(1B, 2, 4)</b> provided only. For other colors,
              bring <b>X-pression/Outre</b> or approved brand. Other hair may incur an
              upcharge or cancellation.
            </p>
          </div>

          <GoldRule />

          {/* Your Responsibility */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              YOUR RESPONSIBILITY
            </h4>
            <p className={`${poppins.className} mx-auto max-w-3xl text-center text-sm text-neutral-700`}>
              Please arrive with required hair/products per style prep. If unsatisfied, say
              something <b>before the appointment ends</b>. Once you leave, the style stays that way.
            </p>
          </div>

          <GoldRule />

          {/* Payment */}
          <div className="space-y-1">
            <h4 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-neutral-900`}>
              PAYMENT
            </h4>
            <p className={`${poppins.className} text-center text-sm text-neutral-700`}>
              Refunds won’t be provided. <b>Must pay before leaving.</b>
            </p>
          </div>
        </PanelShell>
      )}

      {tab === 2 && (
         <PanelShell>
          <p className={`${allura.className} text-center font-serif text-4xl italic text-neutral-800`}>Quick Notes</p>
          <GoldRule />

          {/* Animate when scrolled into view; run only once */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionCard icon={"$"} hoverTilt={-0.5}>
              <p className="mt-2 text-xs text-neutral-700">
                A non-refundable <b>$27</b> deposit is required to book.
              </p>
            </MotionCard>

            <MotionCard icon={"👥"} hoverTilt={0.4}>
              <p className="mt-2 text-xs text-neutral-700">No extra guests allowed.</p>
            </MotionCard>

            <MotionCard icon={"💳"} hoverTilt={-0.4}>
              <p className="mt-2 text-xs text-neutral-700">
                I accept payments in <b>Zelle, Cash App, cash</b>.
              </p>
            </MotionCard>

            <MotionCard icon={"✖️"} hoverTilt={0.6}>
              <p className="mt-2 text-xs text-neutral-700">
                You may cancel at least <b>24 hours</b> before your appointment.
              </p>
            </MotionCard>
          </motion.div>
        </PanelShell>
      )}


      {/* swipe helpers for small screens */}
      <div className="flex items-center justify-center gap-2 pt-1 text-xs text-neutral-500">
        <span className={["h-2 w-2 rounded-full", tab === 0 ? "bg-pink-500" : "bg-pink-200"].join(" ")} />
        <span className={["h-2 w-2 rounded-full", tab === 1 ? "bg-pink-500" : "bg-pink-200"].join(" ")} />
        <span className={["h-2 w-2 rounded-full", tab === 2 ? "bg-pink-500" : "bg-pink-200"].join(" ")} />
      </div>
    </div>
  );
}
