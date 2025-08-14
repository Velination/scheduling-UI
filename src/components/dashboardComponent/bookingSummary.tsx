function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800">
      {children}
    </button>
  );
}

export default function BookingSummary() {
  return (
    <aside className="sticky top-8 hidden h-max w-full rounded-xl border border-neutral-200 bg-white/80 p-6 shadow-sm lg:block">
      <h4 className="text-sm font-semibold text-neutral-900">Your Selection</h4>
      <dl className="mt-3 space-y-2 text-sm text-neutral-700">
        <div className="flex justify-between"><dt>Service</dt><dd>Braids (Knotless)</dd></div>
        <div className="flex justify-between"><dt>Stylist</dt><dd>Alison</dd></div>
        <div className="flex justify-between"><dt>Date</dt><dd>Aug 20, 10:00 AM</dd></div>
        <div className="flex justify-between font-semibold text-neutral-900"><dt>Total</dt><dd>$120</dd></div>
      </dl>
      <div className="mt-4">
        <PrimaryButton>Proceed to Payment</PrimaryButton>
      </div>
    </aside>
  );
}