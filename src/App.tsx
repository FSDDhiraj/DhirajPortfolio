import { useEffect, useRef, useState } from "react";

const IMG_URL =
  "https://drive.google.com/file/d/1POxI8hYUFmy9xi5H4WlaT1-giKkXL27S/view?usp=sharing";

const TICKER_ITEMS = [
  "React", "JavaScript", "Node.js", "PostgreSQL", "Performance", "Python","System Design", "UI/UX","WebSockets", "REST APIs",
];

const WORKS = [
  {
    num: "01",
    title: "LOAD BALANCER SIMULATOR",
    desc: "Visualizing how traffic moves through distributed systems in real time.",
    tags: ["React", "TypeScript", "Algorithms"],
    href: "#",
  },
  {
    num: "02",
    title: "TELEPROMPTER",
    desc: "A distraction-free tool for confident, fluid online communication.",
    tags: ["React", "Web APIs", "UX"],
    href: "#",
  },
  {
    num: "03",
    title: "QUERY ENGINE",
    desc: "A lightweight SQL query planner with cost-based optimization.",
    tags: ["Node.js", "PostgreSQL", "Systems"],
    href: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Vercel",
    period: "2024 — Present",
    desc: "Building edge infrastructure and developer tooling at global scale. Focus on runtime performance and cold-start optimization.",
    tags: ["Systems", "Go", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "Razorpay",
    period: "2022 — 2024",
    desc: "Owned the payment gateway reliability layer — designed circuit-breaker patterns and reduced p99 latency by 40%.",
    tags: ["Node.js", "PostgreSQL", "Redis"],
  },
  {
    role: "Frontend Engineer",
    company: "Swiggy",
    period: "2020 — 2022",
    desc: "Led the real-time order tracking overhaul across web and mobile web. Built the component design system used across 12 teams.",
    tags: ["React", "WebSockets", "Performance"],
  },
];

function Rule() {
  return (
    <div
      className="w-full border-t"
      style={{ borderColor: "var(--border)" }}
    />
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--background)" }}
    >
      <div className="px-6 md:px-10 py-5 flex items-center justify-between">
        <span className="mono text-sm tracking-widest" style={{ color: "var(--foreground)" }}>
          DS
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mono text-xs tracking-[0.2em] transition-opacity hover:opacity-60"
          style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
      <Rule />

      {menuOpen && (
        <nav
          className="absolute top-full left-0 right-0 px-6 md:px-10 py-8 flex flex-col gap-6"
          style={{ background: "var(--background)" }}
        >
          {["Work", "Experience", "About", "GitHub"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="mono text-2xl md:text-4xl tracking-tight transition-opacity hover:opacity-50"
              style={{ color: "var(--foreground)", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
          <Rule />
        </nav>
      )}
    </header>
  );
}

/* ── Double-layer image ── */
function DoubleImage() {
  return (
    <div
      className="anim-fade"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 260,
        aspectRatio: "1 / 1",
        animationDelay: "1.1s",
        flexShrink: 0,
      }}
    >
      {/* offset back frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          top: 14,
          left: 14,
          border: "1px solid var(--border)",
          zIndex: 0,
        }}
      />
      {/* second inner frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          top: 7,
          left: 7,
          border: "1px solid",
          borderColor: "rgba(232,228,220,0.12)",
          zIndex: 1,
        }}
      />
      {/* image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 2,
          background: "#1a1a1a",
        }}
      >
        <img
          src={IMG_URL}
          alt="Dhiraj Sonawane — software engineer"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(20%)" }}
        />
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add("hero-ready");
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="px-6 md:px-10 pt-36 pb-20 md:pt-44 md:pb-28">
      {/* scan line — sweeps across the hero on load */}
      <div style={{ position: "relative", overflow: "hidden", pointerEvents: "none" }}>
        <div className="anim-scan" style={{ animationDelay: "0.05s" }} />
      </div>

      {/* top rule — expands left→right */}
      <div
        className="anim-rule w-full border-t mb-10"
        style={{ borderColor: "var(--border)", animationDelay: "0.1s" }}
      />

      {/* label */}
      <p
        className="anim-up mono text-xs tracking-[0.25em] mb-8"
        style={{ color: "var(--muted-foreground)", animationDelay: "0.35s" }}
      >
        HELLO, I'M
      </p>

      {/* hero layout: name left, image right on desktop */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-6 mb-12">
        <h1
          className="anim-up mono font-light leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.03em",
            animationDelay: "0.5s",
          }}
        >
          DHIRAJ
          <br />
          Sonawane
        </h1>

        <DoubleImage />
      </div>

      {/* tagline */}
      <div className="max-w-sm md:max-w-md mb-10">
        <p
          className="anim-up text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--muted-foreground)", fontWeight: 400, animationDelay: "0.7s" }}
        >
          I build Full stack websites,
          <br />
          <em style={{ color: "var(--foreground)", fontStyle: "italic" }}>
            that behaves like software.
          </em>
        </p>
      </div>

      {/* stack labels */}
      <p
        className="anim-up mono text-xs tracking-widest mb-14"
        style={{ color: "var(--muted-foreground)", animationDelay: "0.82s" }}
      >
       MERN Stack · React · Node · JavaScript · Python · System Design · Performance · UI/UX
      </p>

      {/* CTA buttons */}
      <div className="anim-up flex flex-wrap gap-4" style={{ animationDelay: "0.96s" }}>
        <a
          href="#work"
          className="mono text-xs tracking-[0.15em] px-6 py-3 transition-all hover:opacity-80"
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
            textDecoration: "none",
          }}
        >
          VIEW WORK
        </a>
        <a
          href="#resume"
          className="mono text-xs tracking-[0.15em] px-6 py-3 transition-all hover:opacity-60"
          style={{
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          RESUME ↓
        </a>
        <a
          href="https://github.com/FSDDhiraj"
          target="_blank"
          rel="noreferrer"
          className="mono text-xs tracking-[0.15em] px-6 py-3 transition-all hover:opacity-60"
          style={{
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          GITHUB ↗
        </a>
      </div>
    </section>
  );
}

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="py-4 overflow-hidden">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="mono text-xs tracking-[0.25em] whitespace-nowrap"
              style={{ color: "var(--muted-foreground)", paddingRight: "4rem" }}
            >
              {item}
              <span style={{ color: "var(--border)", marginLeft: "4rem" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-28">
      <p className="mono text-xs tracking-[0.25em] mb-12" style={{ color: "var(--muted-foreground)" }}>
        SELECTED WORK
      </p>
      <Rule />

      {WORKS.map((w) => (
        <a key={w.num} href={w.href} style={{ textDecoration: "none" }} className="group block">
          <div
            className="py-8 md:py-10 grid transition-opacity"
            style={{ gridTemplateColumns: "3.5rem 1fr auto", gap: "0 2rem", alignItems: "start" }}
          >
            <span className="mono text-xs pt-1" style={{ color: "var(--muted-foreground)" }}>
              {w.num}
            </span>
            <div>
              <h3
                className="mono text-base md:text-lg tracking-tight mb-3 group-hover:opacity-60 transition-opacity"
                style={{ color: "var(--foreground)", fontWeight: 400 }}
              >
                {w.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: "var(--muted-foreground)" }}>
                {w.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-xs px-2 py-1"
                    style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span
              className="mono text-base group-hover:opacity-40 transition-opacity"
              style={{ color: "var(--foreground)" }}
            >
              ↗
            </span>
          </div>
          <Rule />
        </a>
      ))}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 md:py-28">
      <p className="mono text-xs tracking-[0.25em] mb-12" style={{ color: "var(--muted-foreground)" }}>
        EXPERIENCE
      </p>
      <Rule />

      {EXPERIENCE.map((e, i) => (
        <div key={i} className="group">
          <div
            className="py-8 md:py-10"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "0 2rem",
              alignItems: "start",
            }}
          >
            {/* left */}
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <h3
                  className="mono text-base md:text-lg tracking-tight"
                  style={{ color: "var(--foreground)", fontWeight: 400 }}
                >
                  {e.role}
                </h3>
                <span className="mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                  — {e.company}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-5 max-w-lg"
                style={{ color: "var(--muted-foreground)" }}
              >
                {e.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-xs px-2 py-1"
                    style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* right — period */}
            <span
              className="mono text-xs whitespace-nowrap"
              style={{ color: "var(--muted-foreground)", paddingTop: "0.15rem" }}
            >
              {e.period}
            </span>
          </div>
          <Rule />
        </div>
      ))}
    </section>
  );
}

function Statement() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-36">
      <h2
        className="mono font-light leading-none tracking-tight"
        style={{
          fontSize: "clamp(2.8rem, 9vw, 8rem)",
          color: "var(--foreground)",
          letterSpacing: "-0.03em",
          maxWidth: "14ch",
        }}
      >
        BUILDING
        <br />
        INTERFACES
        <br />
        THAT FEEL
        <br />
        <em style={{ fontStyle: "italic", opacity: 0.4 }}>OBVIOUS.</em>
      </h2>
      <div className="mt-14 flex items-center gap-3">
        <span className="mono text-xs tracking-widest" style={{ color: "var(--muted-foreground)" }}>
          SCROLL
        </span>
        <span style={{ color: "var(--muted-foreground)" }}>↓</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ borderTop: "1px solid var(--border)" }}>
      <div className="px-6 md:px-10 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: "var(--muted-foreground)" }}>
            GET IN TOUCH
          </p>
          <a
            href="mailto:dhiraj@example.com"
            className="mono text-lg md:text-2xl tracking-tight transition-opacity hover:opacity-50"
            style={{ color: "var(--foreground)", textDecoration: "none" }}
          >
            dhirajwfwork@gmail.com
          </a>
        </div>
        <span className="mono text-xs" style={{ color: "var(--muted-foreground)" }}>
          © 2026 DS
        </span>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Rule />
        <Experience />
        <Rule />
        <Statement />
        <Contact />
      </main>
    </div>
  );
}
