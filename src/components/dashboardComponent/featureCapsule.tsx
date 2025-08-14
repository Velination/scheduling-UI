const capsuleData = [
  { label: "New In", icon: "✨" },
  { label: "Hair Care", icon: "🧴" },
  { label: "Best Seller", icon: "🏆" },
  { label: "Services", icon: "✂️" },
];

export default function FeatureCapsules() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur md:grid-cols-4">
      {capsuleData.map((c) => (
        <button
          key={c.label}
          className="group flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 text-left transition hover:shadow-md"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-neutral-100 text-lg">
            {c.icon}
          </span>
          <span className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-900">
            {c.label}
          </span>
        </button>
      ))}
    </div>
  );
}