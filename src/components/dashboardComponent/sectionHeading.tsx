export default function SectionHeading({ overline, title, cta }: { overline?: string; title: string; cta?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {overline && (
          <p className="text-sm uppercase tracking-widest text-neutral-500">{overline}</p>
        )}
        <h2 className="mt-1 text-2xl font-semibold text-neutral-900">{title}</h2>
      </div>
      {cta}
    </div>
  );
}
