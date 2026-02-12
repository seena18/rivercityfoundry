export default function LighthouseAuditMini({
  performance = 96,
  accessibility = 96,
  bestPractices = 96,
  seo = 100,
}: {
  performance?: number;
  accessibility?: number;
  bestPractices?: number;
  seo?: number;
}) {
  const items = [
    { label: 'Performance', value: performance },
    { label: 'Accessibility', value: accessibility },
    { label: 'Best Practices', value: bestPractices },
    { label: 'SEO', value: seo },
  ];

  return (
    <div className="mt-4 w-full">
      <div className="grid grid-cols-4 gap-3">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center text-center">
            <div
              className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-transparent"
              aria-label={`${it.label} score ${it.value}`}
            >
              <span className="text-sm font-bold text-emerald-600">{it.value}</span>
            </div>
            <div className="mt-2 text-[10px] font-mono text-stone-600 leading-tight">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
