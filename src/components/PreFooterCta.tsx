import Link from 'next/link';

type PreFooterCtaVariant = 'default' | 'booking' | 'inquiry';
type PreFooterCtaMode = 'section' | 'embedded';

export default function PreFooterCta({
  variant = 'default',
  mode = 'section',
}: {
  variant?: PreFooterCtaVariant;
  mode?: PreFooterCtaMode;
}) {
  const isEmbedded = mode === 'embedded';

  const kicker = 'NEXT STEP';
  const headline = 'Let’s scope your build.';
  const subhead = '15-minute consult. Clear scope. Fixed quote.';
  const support = 'No pressure—just a plan, timeline, and next steps.';

  const primary =
    variant === 'booking'
      ? { href: '/contact', label: 'Send an inquiry' }
      : { href: '/consultation', label: 'Book 15-min consult' };

  const secondary =
    variant === 'default'
      ? { href: '/contact', label: 'Prefer email? Send an inquiry →' }
      : { href: '/faq', label: 'Questions first? Read FAQ →' };

  const content = (
    <div className={isEmbedded ? 'relative border-t border-white/10 pt-20' : 'max-w-4xl mx-auto px-6 relative z-10'}>
      {isEmbedded ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-soot px-4 border border-white/10 py-1">
          <span className="text-[10px] font-mono text-brass uppercase tracking-widest">{kicker}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-white/20"></div>
          <span className="text-brass font-mono text-xs tracking-widest uppercase">{kicker}</span>
          <div className="w-8 h-px bg-white/20"></div>
        </div>
      )}

      <h2 className={isEmbedded ? 'text-3xl md:text-5xl font-bold uppercase text-white mb-6 leading-none' : 'text-3xl md:text-5xl font-bold uppercase text-white mb-6 leading-none'}>
        {headline}
      </h2>
      <p className="text-white/80 mb-4 max-w-xl mx-auto text-lg">{subhead}</p>
      <p className="text-white/40 mb-10 max-w-lg mx-auto text-sm font-mono">{support}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
        <Link
          href={primary.href}
          className="inline-flex items-center justify-center px-12 py-5 text-sm font-bold uppercase tracking-widest bg-[#B58A2A] text-white hover:bg-[#C99B2E] transition-colors w-full sm:w-auto text-center shadow-lg shadow-brass/20"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-brass transition-colors border-b border-white/10 hover:border-brass pb-1"
        >
          {secondary.label}
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-mono text-white/40 uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <span className="text-brass text-[8px]">●</span> Fast Turnarounds
        </span>
        <span className="flex items-center gap-2">
          <span className="text-brass text-[8px]">●</span> Local Support
        </span>
        <span className="flex items-center gap-2">
          <span className="text-brass text-[8px]">●</span> Performance-First
        </span>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <section className="py-32 bg-soot text-white border-t-2 border-black text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      ></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brass"></div>

      {content}
    </section>
  );
}
