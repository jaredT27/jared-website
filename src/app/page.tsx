"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, Check, BadgeCheck, ExternalLink, Menu, X } from "lucide-react";

// ===== DATA =====
const contactMailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=Jared@LocalMotionAI.com&su=Inquiry%20from%20website&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20get%20in%20touch%20about...";
const hireMeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=Jared@LocalMotionAI.com&su=Inquiry%20from%20website&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20discuss%20a%20project...";
const introCallUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=Jared@LocalMotionAI.com&su=Let's%20book%20a%2015-min%20intro&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20book%20a%2015-min%20intro%20call%20to%20discuss%20a%20potential%20project.%0A%0A";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: contactMailUrl },
];

const featuredChips = [
  "Claude Certified Architect (2026)",
  "Tesla Solar Roof, C&I and Residential Programs",
  "Solar Sentinel — interconnection queue intelligence",
  "MyTinyTale.ai — AI storytelling product",
  "Palm Cipher — AI palm reading + oracle cards",
  "Pinchr.AI — AI product experience",
  "ExecClaw — guided setup + onboarding",
  "LocalMotionAI — AI CRM + automations",
];

const projects = [
  {
    title: "Tesla Solar Roof, C&I and Residential Programs",
    description: "Launch execution, readiness, and operational dashboards across clean energy programs.",
    tags: ["Program", "Dashboards", "GTM", "Energy"],
    image: "/work/solar.jpg",
  },
  {
    title: "Solar Sentinel — interconnection queue intelligence",
    description: "Daily queue intelligence with Telegram alerts for new entries, capacity shifts, and withdrawals with map context.",
    tags: ["Solar", "Energy", "Alerts", "Data"],
    image: "/work/solar-sentinel-queue.png",
    href: "https://sentinel-alerts.vercel.app/",
  },
  {
    title: "MyTinyTale.ai — AI storytelling product",
    description: "Built and launched an AI storytelling product from concept → live site, focused on UX and conversion.",
    tags: ["AI product", "Web app", "UX", "Growth"],
    image: "/work/mytt.png",
    href: "https://mytinytale.ai",
  },
  {
    title: "Palm Cipher — AI palm reading + oracle cards",
    description: "Cinematic AI palm readings with shareable mystical oracle cards, built with a fast, privacy-forward upload flow.",
    tags: ["AI product", "Computer vision", "UX", "Launch"],
    image: "/work/palmcipher.jpg",
    href: "https://palmcipher.com",
  },
  {
    title: "Pinchr.AI",
    description: "The matchmaking platform for AI agents. Built for the Agent Economy.",
    tags: ["AI product", "UX", "Brand", "Build"],
    image: "/work/pinchr.png",
    href: "https://pinchr.ai",
  },
  {
    title: "ExecClaw — guided setup + onboarding",
    description: "Streamlined onboarding flow designed to accelerate user activation with clean UX and conversion-focused steps.",
    tags: ["Onboarding", "UX", "MVP", "Deploy"],
    image: "/work/execclaw.png",
    href: "https://execclaw.com",
  },
  {
    title: "LocalMotionAI — AI CRM + automations",
    description: "Lead capture → instant follow-up → booked jobs. Workflows, messaging, reviews, and ops dashboards.",
    tags: ["AI workflows", "CRM", "Automation", "Ops"],
    image: "/work/localmotion-new.png",
    href: "https://localmotionaivisibile.lovable.app",
  },
  {
    title: "Tradenostix — analytics product work",
    description: "Analytics dashboards and reporting tools for financial trading workflows.",
    tags: ["Analytics", "Finance", "Dashboards", "UX"],
    image: "/work/tradenostix.png",
    href: "https://coinbureau.com/services/tradenostix-analytics-tool",
  },
  {
    title: "Insights — reporting & decision support",
    description: "Data-driven insights platform for operational decision-making and performance tracking.",
    tags: ["Reporting", "Data", "BI", "Product"],
    image: "/work/insights-new.png",
  },
];

const capabilities = [
  {
    title: "Product & Program Leadership",
    bullets: ["Launch planning + execution", "Operating cadence", "Stakeholder alignment"],
  },
  {
    title: "Go-to-Market + Enablement",
    bullets: ["Partner readiness playbooks", "Sales enablement", "Training programs"],
  },
  {
    title: "Dashboards + Analytics",
    bullets: ["Power BI / SQL", "KPI reporting", "Performance insights"],
  },
  {
    title: "Automation + AI Agents",
    bullets: ["Workflow automation", "AI assistants", "Process optimization"],
  },
  {
    title: "Partnerships + Vendor Ops",
    bullets: ["Partner onboarding", "Vendor management", "Contract operations"],
  },
  {
    title: "Launch Playbooks + Process",
    bullets: ["Go-live checklists", "Process design", "Quality assurance"],
  },
  {
    title: "Digital Marketing",
    bullets: ["SEO & Content Strategy", "Paid Acquisition (Ads)", "Social Growth"],
  },
  {
    title: "Web App & Native iOS Build",
    bullets: ["React / Next.js Apps", "Swift / SwiftUI Mobile", "Cursor + Lovable Workflows"],
  },
  {
    title: "MVP & SaaS Development",
    bullets: ["Idea to Launch", "Rapid Prototyping", "Scalable Infrastructure"],
  },
];

const certification = {
  title: "Claude Certified Architect",
  issued: "March 16, 2026",
  credentialId: "pg7kobvx7hcw",
  verifyUrl: "https://verify.skilljar.com/c/pg7kobvx7hcw",
};

// ===== STYLES =====
const colors = {
  sky1: "#B5D4E8",
  sky2: "#CFE7F8",
  sky3: "#91B9D3",
  white: "#FFFFFF",
  text: "#0B0F14",
  muted: "rgba(11, 15, 20, 0.55)",
  muted2: "rgba(11, 15, 20, 0.35)",
  border: "rgba(11, 15, 20, 0.10)",
  grayBg: "#f8f9fa",
};

const heroGradient = `
  radial-gradient(ellipse 120% 80% at 50% 0%, ${colors.sky2} 0%, transparent 50%),
  radial-gradient(ellipse 100% 60% at 20% 100%, ${colors.sky1} 0%, transparent 50%),
  radial-gradient(ellipse 80% 50% at 80% 80%, ${colors.sky3} 0%, transparent 50%),
  linear-gradient(180deg, ${colors.sky2} 0%, ${colors.sky1} 30%, ${colors.white} 100%)
`;

const techStack = [
  { name: "HeyGen", desc: "AI video generation", image: "/work/heygen.jpg" },
  { name: "Grok", desc: "AI chatbot platform", image: "/work/grok.png" },
  { name: "Vercel", desc: "Deployment & hosting", image: "/work/vercel.png" },
  { name: "Gemini", desc: "Google's AI model", image: "/work/Gemini.png" },
  { name: "ChatGPT", desc: "OpenAI language model", image: "/work/chatgpt.png" },
  { name: "GoHighLevel", desc: "AI CRM & Automation", image: "/work/gohighlevel.png" },
  { name: "Envato", desc: "Digital Assets", image: "/work/envato.png" },
  { name: "Lovable", desc: "AI Full-stack Builder", image: "/work/lovable-icon-bg-light.png" },
  { name: "Rork", desc: "AI Browser", image: "/work/rork.jpg" },
  { name: "Claude", desc: "Anthropic's AI model", image: "/work/claude.jpg" },
  { name: "GitHub Copilot", desc: "AI code assistant", image: "/work/github.png" },
  { name: "n8n", desc: "Workflow automation", image: "/work/n8n.png" },
  { name: "ElevenLabs", desc: "AI voice generation", image: "/work/elevenlabs.jpg" },
  { name: "imagine.art", desc: "AI image generation", image: "/work/imagineart.jpg" },
  { name: "Antigravity", desc: "Google's agentic IDE", image: "/work/antigravity.png" },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: colors.white, color: colors.text, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* ===== HEADER ===== */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: mobileNavOpen ? "rgba(255, 255, 255, 0.88)" : "transparent",
          backdropFilter: mobileNavOpen ? "blur(14px)" : undefined,
        }}
      >
        <div className="page-shell header-row" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <Link href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} onClick={() => setMobileNavOpen(false)}>
            <Image
              src="/newlogo.png"
              alt="JT Logo"
              width={40}
              height={40}
              priority
              style={{ width: 40, height: 40, objectFit: "contain" }}
            />
          </Link>

          {/* Center Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: 14, fontWeight: 500, color: colors.muted, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Hire me button */}
            <a
              href={hireMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-hire"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                borderRadius: 100,
                background: colors.text,
                color: colors.white,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Hire me
            </a>

            <button
              type="button"
              aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileNavOpen}
              className="mobile-menu-toggle"
              onClick={() => setMobileNavOpen((open) => !open)}
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 999,
                border: `1px solid ${colors.border}`,
                background: "rgba(255, 255, 255, 0.82)",
                color: colors.text,
              }}
            >
              {mobileNavOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px 20px" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.96)",
                border: `1px solid ${colors.border}`,
                borderRadius: 28,
                padding: 20,
                boxShadow: "0 24px 60px rgba(11, 15, 20, 0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: "#fff",
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}

              <div style={{ display: "grid", gap: 12, paddingTop: 8 }}>
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileNavOpen(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: "rgba(207, 231, 248, 0.55)",
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  View certification <ExternalLink style={{ width: 16, height: 16 }} />
                </a>

                <a
                  href={hireMeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileNavOpen(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: colors.text,
                    color: colors.white,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* ===== HERO ===== */}
      <section className="hero-section" style={{ background: heroGradient, paddingTop: 140, paddingBottom: 80 }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              {/* Kicker */}
              <p style={{ fontSize: 14, fontWeight: 500, color: colors.muted, marginBottom: 24 }}>
                Product & Program Leader • AI Builder • Claude Certified Architect
              </p>

              {/* Headlines */}
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: colors.text, marginBottom: 8 }}>
                I build and ship real products
              </h1>
              <p style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: colors.muted2, marginBottom: 32 }}>
                fast, clean, and measurable.
              </p>

              {/* Supporting paragraph */}
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6, color: colors.muted, maxWidth: 640, marginBottom: 40 }}>
                Fresh off earning the {certification.title} credential, I lead high-stakes launches,
                build operational dashboards and enablement programs, and prototype automations that
                actually get used. If your work touches ops, partners, data, and execution, I&apos;m in my zone.
              </p>

              {/* CTAs */}
              <div className="hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
                <a
                  href="#work"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    borderRadius: 100,
                    background: colors.text,
                    color: colors.white,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  See Work <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    borderRadius: 100,
                    background: "rgba(255, 255, 255, 0.72)",
                    backdropFilter: "blur(8px)",
                    color: colors.text,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  Verify credential <ExternalLink style={{ width: 16, height: 16 }} />
                </a>
              </div>

              {/* Chips */}
              <div className="hero-chip-cloud" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {featuredChips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${colors.border}`,
                      borderRadius: 100,
                      fontSize: 13,
                      fontWeight: 500,
                      color: colors.text,
                    }}
                  >
                    <Sparkles style={{ width: 14, height: 14, color: colors.muted }} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <aside
              id="certification"
              className="cert-card"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 32,
                padding: 32,
                background: "linear-gradient(155deg, #d97553 0%, #e38b68 38%, #f1b39d 100%)",
                boxShadow: "0 30px 80px rgba(217, 117, 83, 0.28)",
                color: colors.white,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.14)",
                  top: -72,
                  right: -72,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.10)",
                  bottom: -90,
                  left: -50,
                }}
              />

              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 24 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    alignSelf: "flex-start",
                    padding: "10px 16px",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.16)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  <BadgeCheck style={{ width: 16, height: 16 }} />
                  Newly certified
                </div>

                <div>
                  <p style={{ marginBottom: 10, fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)" }}>
                    Issued {certification.issued}
                  </p>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 700, marginBottom: 16 }}>
                    {certification.title}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255, 255, 255, 0.9)", maxWidth: 420 }}>
                    A verified credential that sharpens the way I design AI-powered workflows, agent experiences,
                    and production-ready systems.
                  </p>
                </div>

                <div
                  className="cert-stats"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      padding: 18,
                      borderRadius: 20,
                      background: "rgba(255, 255, 255, 0.14)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                    }}
                  >
                    <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.74)", marginBottom: 8 }}>
                      Credential ID
                    </p>
                    <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4 }}>
                      {certification.credentialId}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: 18,
                      borderRadius: 20,
                      background: "rgba(255, 255, 255, 0.14)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                    }}
                  >
                    <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.74)", marginBottom: 8 }}>
                      Verification
                    </p>
                    <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4 }}>
                      Skilljar hosted
                    </p>
                  </div>
                </div>

                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "18px 20px",
                    borderRadius: 20,
                    background: colors.white,
                    color: "#b24f2d",
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 14px 30px rgba(116, 44, 21, 0.18)",
                  }}
                >
                  View verified certification
                  <ExternalLink style={{ width: 18, height: 18 }} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section id="work" className="section-block" style={{ background: `linear-gradient(180deg, ${colors.white} 0%, #f8fbfd 50%, ${colors.white} 100%)`, padding: "100px 0", scrollMarginTop: 96 }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 16 }}>Featured Work</h2>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6, color: colors.muted, marginBottom: 48, maxWidth: 600 }}>
            A mix of product launches, program execution, and internal tooling — all designed for clarity, speed, and results.
          </p>

          {/* 2-column grid on desktop, 1 column on mobile */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="work-grid">
            {projects.map((project) => {
              const CardWrapper = project.href ? 'a' : 'div';
              const linkProps = project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {};
              return (
                <CardWrapper
                  key={project.title}
                  {...linkProps}
                  className="project-card"
                  style={{
                    background: colors.white,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(11, 15, 20, 0.08)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    cursor: project.href ? "pointer" : "default",
                  }}
                >
                  {/* Project Image */}
                  <div className="project-image" style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 40%)",
                    }} />
                  </div>
                  {/* Project Info */}
                  <div className="project-body" style={{ padding: 24 }}>
                    <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>{project.title}</h3>
                    <p style={{ fontSize: 14, color: colors.muted, marginBottom: 16, lineHeight: 1.6 }}>{project.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ fontSize: 12, padding: "6px 12px", borderRadius: 100, background: "#f5f5f5", color: colors.muted }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section-block" style={{ background: colors.grayBg, padding: "100px 0", scrollMarginTop: 96 }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <div className="about-stack" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
            {/* Left label */}
            <div className="about-label" style={{ width: 180, flexShrink: 0 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.muted }}>About me</span>
            </div>

            {/* Right content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                I&apos;m a NJ-based product & program leader and {certification.title}
                building products end to end. I combine execution, systems thinking, and AI
                automation where it actually works: one owner, zero bloat, direct collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="section-block" style={{ background: colors.white, padding: "100px 0" }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 48, textAlign: "center" }}>Capabilities</h2>

          <div className="capabilities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="capability-card"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: "0 4px 20px rgba(11, 15, 20, 0.08)",
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 16 }}>{cap.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {cap.bullets.map((bullet) => (
                    <li key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: colors.muted }}>
                      <Check style={{ width: 16, height: 16, marginTop: 2, color: colors.sky3 }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section-block" style={{ background: "#0b0f14", padding: "100px 0", color: "#fff" }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, textAlign: "center" }}>
            My Tech Stack
          </h2>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.6, color: "#888", textAlign: "center", marginBottom: 64 }}>
            Powered by industry-leading AI tools and platforms
          </p>

          <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16 }}>
            {techStack.map((tool) => (
              <div
                key={tool.name}
                className="tech-card"
                style={{
                  background: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  background: "#21262d",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  overflow: "hidden",
                  padding: 8
                }}>
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={48}
                    height={48}
                    sizes="48px"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: tool.name === "GitHub Copilot" ? "invert(1)" : "none"
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{tool.name}</h3>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.4 }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CONTACT ===== */}
      <section className="section-block" style={{ background: colors.grayBg, padding: "100px 0" }}>
        <div className="page-shell" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
          <div className="contact-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 64,
            alignItems: "center"
          }}>
            {/* Left Side: Text */}
            <div>
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                color: colors.text
              }}>
                Let's build something useful.
              </h2>
              <p style={{
                fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: colors.muted,
                maxWidth: 480
              }}>
                Send what you're trying to achieve + any constraints. I'll reply with a simple plan and what I'd do in the first 7 days.
              </p>
            </div>

            {/* Right Side: Profile Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="contact-card" style={{
                background: "linear-gradient(135deg, #BFDBFE 0%, #60A5FA 100%)", // Blue gradient
                borderRadius: 32,
                padding: 40,
                width: "100%",
                maxWidth: 400,
                boxShadow: "0 20px 40px -10px rgba(96, 165, 250, 0.3)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 24
              }}>
                {/* Profile Image */}
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: "#fff",
                  padding: 4,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}>
                  <Image
                    src="/me.png"
                    alt="Jared Theaman"
                    width={80}
                    height={80}
                    sizes="80px"
                    priority
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }}
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}>
                    Book a 15-min<br />intro call
                  </h3>
                </div>

                <a
                  href={introCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "16px",
                    background: colors.text, // Dark button
                    color: "#fff",
                    borderRadius: 16,
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  Book a call
                </a>

                {/* Email Copy */}
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 13, opacity: 0.8 }}>Prefer email?</span>
                  <div className="contact-email-row" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    cursor: "pointer"
                  }}
                    onClick={() => {
                      navigator.clipboard.writeText("Jared@LocalMotionAI.com");
                      alert("Email copied to clipboard!");
                    }}
                  >
                    <span className="contact-email-text" style={{ fontWeight: 600 }}>Jared@LocalMotionAI.com</span>
                    <div style={{
                      width: 32,
                      height: 32,
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "32px 0" }}>
        <div className="page-shell footer-row" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 14, color: colors.muted }}>
            © {new Date().getFullYear()} Jared Theaman. All rights reserved.
          </p>
          <div className="footer-links" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: 14, color: colors.muted, textDecoration: "none" }}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        .mobile-menu-toggle {
          display: none !important;
        }

        .hero-chip-cloud::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav,
          .desktop-hire {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: inline-flex !important;
          }

          .hero-section {
            padding-top: 120px !important;
            padding-bottom: 64px !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .about-stack {
            gap: 24px !important;
          }

          .about-label {
            width: 100% !important;
          }

          .footer-row {
            justify-content: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 768px) {
          .section-block {
            padding: 72px 0 !important;
          }

          .hero-actions {
            flex-direction: column !important;
            align-items: stretch !important;
            margin-bottom: 32px !important;
          }

          .hero-actions a {
            width: 100%;
            justify-content: center;
          }

          .hero-chip-cloud {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 4px;
            margin-right: -24px;
            padding-right: 24px;
            scrollbar-width: none;
          }

          .hero-chip-cloud > span {
            flex: 0 0 auto;
            white-space: nowrap;
          }

          .cert-card {
            padding: 24px !important;
            border-radius: 28px !important;
          }

          .cert-stats {
            grid-template-columns: 1fr !important;
          }

          .work-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .project-image {
            height: 180px !important;
          }

          .project-body,
          .capability-card,
          .tech-card {
            padding: 20px !important;
          }

          .capabilities-grid,
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .contact-card {
            padding: 28px !important;
          }

          .footer-links {
            width: 100%;
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
        }

        @media (max-width: 560px) {
          .page-shell {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .header-row {
            height: 72px !important;
          }

          .hero-section {
            padding-top: 104px !important;
          }

          .tech-grid {
            grid-template-columns: 1fr !important;
          }

          .contact-email-row {
            align-items: flex-start !important;
            gap: 12px !important;
          }

          .contact-email-text {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </div>
  );
}
