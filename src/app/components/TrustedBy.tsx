import { useEffect, useRef, useState } from "react";
import { useSiteContent } from "../context/SiteContentContext";

type ClientLogo = {
  name: string;
  file: string;
  fallbackFile: string;
};

// ─── Client data ──────────────────────────────────────────────────────────────
// Logos live in:  public/client-logos/  (folder already exists in your repo)
const clients: ClientLogo[] = [
  { name: "Indian Army", file: "indian Army.png", fallbackFile: "indian-army.svg" },
  {
    name: "Indian Forest Service",
    file: "indian forest Dept.png",
    fallbackFile: "client-partner.svg",
  },
  { name: "Veespa Paints Pvt Ltd", file: "veespa paints.png", fallbackFile: "veespa-paints.svg" },
  {
    name: "Vidyarthi Sahayyak Samiti, Pune",
    file: "VSs.png",
    fallbackFile: "brothers-solar-security.svg",
  },
  { name: "Legal Swamp", file: "legal swamp.png", fallbackFile: "client-partner.svg" },
  { name: "SimuSoft", file: "simusoft.png", fallbackFile: "client-partner.svg" },
  { name: "PATE Developers", file: "pate developers.png", fallbackFile: "client-partner.svg" },
  { name: "Apex Dies and Moulds", file: "apex.png", fallbackFile: "client-partner.svg" },
  { name: "Jayram Transport Corp", file: "jayramtrans.png", fallbackFile: "jayram-transport.svg" },
  { name: "Aida Tours", file: "aidatours.png", fallbackFile: "client-partner.svg" },
  {
    name: "Brainlines Solutions Private Limited",
    file: "brainlines.png",
    fallbackFile: "brothers-solar-security.svg",
  },
];

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatPill({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, 2000, active);
  return (
    <div className="flex flex-col items-center px-6 py-4">
      <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-slate-400 tracking-[0.2em] uppercase mt-1 font-medium">
        {label}
      </span>
    </div>
  );
}

// ─── Logo card ────────────────────────────────────────────────────────────────
function LogoCard({ client }: { client: ClientLogo }) {
  const [hovered, setHovered] = useState(false);
  const [logoSrc, setLogoSrc] = useState(`/client-logos/${encodeURIComponent(client.file)}`);

  useEffect(() => {
    setLogoSrc(`/client-logos/${encodeURIComponent(client.file)}`);
  }, [client.file]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 flex items-center justify-center mx-5 cursor-pointer"
      style={{ width: 180, height: 90 }}
    >
      {/* Card background */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(37,99,235,0.08))"
            : "rgba(15,23,42,0.45)",
          border: hovered
            ? "1px solid rgba(34,211,238,0.35)"
            : "1px solid rgba(51,65,85,0.7)",
          boxShadow: hovered
            ? "0 0 28px rgba(34,211,238,0.1), inset 0 0 20px rgba(34,211,238,0.04)"
            : "none",
        }}
      />

      {/* Cyan dot accent top-left */}
      <div
        className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          background: hovered ? "#22d3ee" : "transparent",
          boxShadow: hovered ? "0 0 6px #22d3ee" : "none",
        }}
      />

      <img
        src={logoSrc}
        alt={client.name}
        title={client.name}
        draggable={false}
        onError={() => {
          const fallbackSrc = `/client-logos/${encodeURIComponent(client.fallbackFile)}`;
          if (logoSrc !== fallbackSrc) setLogoSrc(fallbackSrc);
        }}
        className="max-h-14 max-w-[144px] object-contain select-none transition-all duration-500 relative z-10"
        style={{
          filter: hovered
            ? "grayscale(0%) brightness(1.05) drop-shadow(0 0 8px rgba(34,211,238,0.28))"
            : "grayscale(100%) brightness(0.72)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      />
    </div>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────
function Marquee({ reverse = false, speed = 36 }: { reverse?: boolean; speed?: number }) {
  const items = [...clients, ...clients, ...clients];
  return (
    <div className="relative overflow-hidden w-full marquee-wrapper">
      {/* Left edge fade */}
      <div
        className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080d1a, transparent)" }}
      />
      {/* Right edge fade */}
      <div
        className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080d1a, transparent)" }}
      />
      <div
        className="flex items-center"
        style={{
          width: "max-content",
          animation: `${reverse ? "marqueeR" : "marqueeF"} ${speed}s linear infinite`,
        }}
      >
        {items.map((c, i) => (
          <LogoCard key={`${c.name}-${i}`} client={c} />
        ))}
      </div>
    </div>
  );
}

// ─── Gradient divider ─────────────────────────────────────────────────────────
function GradientLine() {
  return (
    <div
      className="w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.35) 25%, rgba(129,140,248,0.55) 50%, rgba(232,121,249,0.35) 75%, transparent 100%)",
      }}
    />
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function TrustedBy() {
  const { content } = useSiteContent();
  const section = content.trustedBy;
  const yearsOfTrust = Math.max(new Date().getFullYear() - 2019, 1);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes marqueeF {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marqueeR {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        /* Pause entire strip on hover */
        .marquee-wrapper:hover > div {
          animation-play-state: paused;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu       { opacity: 0; }
        .fu.show  { animation: fadeUp 0.65s ease forwards; }

        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4); }
          50%       { box-shadow: 0 0 0 6px rgba(34,211,238,0); }
        }
        .pulse-ring { animation: pulseRing 2s ease-in-out infinite; }
      `}</style>

      <section
        ref={ref}
        id="clients"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Ambient glows */}
        <div
          className="absolute -top-24 left-[30%] w-[520px] h-[520px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08), transparent 65%)" }}
        />
        <div
          className="absolute bottom-10 right-[20%] w-[420px] h-[420px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 65%)" }}
        />

        {/* ── Top separator ── */}
        <GradientLine />

        {/* ────────────── Header block ────────────── */}
        <div className="relative z-10 pt-16 pb-12 px-4 text-center">
          {/* Eyebrow */}
          <div
            className={`fu ${visible ? "show" : ""} inline-flex items-center gap-3 mb-5`}
            style={{ animationDelay: "0ms" }}
          >
            <span
              className="h-px w-10"
              style={{
                background: "linear-gradient(to right, transparent, #22d3ee)",
                opacity: 0.6,
              }}
            />
            <span
              className="text-xs font-semibold tracking-[0.24em] uppercase text-cyan-400"
            >
              {section.eyebrow}
            </span>
            <span
              className="h-px w-10"
              style={{
                background: "linear-gradient(to left, transparent, #22d3ee)",
                opacity: 0.6,
              }}
            />
          </div>

          {/* Main heading — exact same style as other section headings on the site */}
          <h2 className={`fu ${visible ? "show" : ""} text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5`} style={{ animationDelay: "100ms" }}>
            {section.titlePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {section.titleHighlight}
            </span>
          </h2>

          {/* Subheading */}
          <p
            className={`fu ${visible ? "show" : ""} text-slate-400 max-w-2xl mx-auto text-sm md:text-base`}
            style={{ animationDelay: "200ms" }}
          >
            {section.subtitle}
          </p>
        </div>

        {/* ────────────── Stats row ────────────── */}
        <div
          className={`fu ${visible ? "show" : ""} relative z-10 flex justify-center mb-14 px-4`}
          style={{ animationDelay: "280ms" }}
        >
          <div
            className="inline-flex flex-wrap justify-center divide-x divide-slate-700/70 rounded-2xl bg-slate-800/35 border border-slate-700/70 backdrop-blur-sm"
          >
            <StatPill value={55} suffix="+" label="Clients"            active={visible} />
            <StatPill value={15} suffix="+" label="Industries"         active={visible} />
            <StatPill value={98} suffix="%" label="Satisfaction Rate"  active={visible} />
            <StatPill value={yearsOfTrust}  suffix="+" label="Trust Years"        active={visible} />
          </div>
        </div>

        {/* ────────────── Marquee row 1 (→) ────────────── */}
        <div
          className={`fu ${visible ? "show" : ""} mb-5`}
          style={{ animationDelay: "360ms" }}
        >
          <Marquee speed={42} reverse={false} />
        </div>

        {/* ────────────── Marquee row 2 (←) ────────────── */}
        <div
          className={`fu ${visible ? "show" : ""}`}
          style={{ animationDelay: "460ms" }}
        >
          <Marquee speed={30} reverse={true} />
        </div>

        {/* ────────────── Live badge ────────────── */}
        <div
          className={`fu ${visible ? "show" : ""} flex justify-center mt-12`}
          style={{ animationDelay: "560ms" }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(15,23,42,0.55)",
              border: "1px solid rgba(51,65,85,0.8)",
              color: "#cbd5e1",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0 pulse-ring"
              style={{ background: "#22d3ee" }}
            />
            {section.badgeText}
          </div>
        </div>

        {/* ── Bottom separator ── */}
        <div className="mt-16">
          <GradientLine />
        </div>
      </section>
    </>
  );
}
