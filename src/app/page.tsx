"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Copy,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";

const email = "Jared@clauffice.com";
const contactMailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry%20from%20website&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20get%20in%20touch%20about...`;
const hireMeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry%20from%20website&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20discuss%20a%20project...`;
const introCallUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Let's%20book%20a%2015-min%20intro&body=Hi%20Jared%2C%0A%0AI'd%20like%20to%20book%20a%2015-min%20intro%20call%20to%20discuss%20a%20potential%20project.%0A%0A`;

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Demos", href: "#demos" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

const proofMarks = [
  "Claude Certified Architect",
  "Energy + SaaS launches",
  "AI workflows that ship",
];

const projects = [
  {
    title: "Solar Sentinel",
    eyebrow: "Energy intelligence",
    description: "Queue alerts, map context, and daily signal for solar teams.",
    tags: ["Solar", "Data"],
    image: "/work/solar-sentinel-queue.png",
    href: "https://sentinel-alerts.vercel.app/",
    featured: true,
  },
  {
    title: "MyTinyTale.ai",
    eyebrow: "AI product",
    description: "A fast storytelling product from concept to live launch.",
    tags: ["AI", "UX"],
    image: "/work/mytt.png",
    href: "https://mytinytale.ai",
  },
  {
    title: "Palm Cipher",
    eyebrow: "Consumer AI",
    description: "Cinematic readings with a simple, private upload flow.",
    tags: ["Vision", "Launch"],
    image: "/work/palmcipher.jpg",
    href: "https://palmcipher.com",
  },
  {
    title: "Pinchr.AI",
    eyebrow: "Agent platform",
    description: "A matchmaking experience built for the agent economy.",
    tags: ["Brand", "Build"],
    image: "/work/pinchr.png",
    href: "https://pinchr.ai",
  },
  {
    title: "LocalMotionAI",
    eyebrow: "CRM automation",
    description: "Lead capture, instant follow-up, reviews, and ops flows.",
    tags: ["CRM", "Automation"],
    image: "/work/localmotion-new.png",
    href: "https://localmotionaivisibile.lovable.app",
  },
  {
    title: "ExecClaw",
    eyebrow: "Onboarding",
    description: "Guided setup shaped around activation and momentum.",
    tags: ["MVP", "UX"],
    image: "/work/execclaw.png",
    href: "https://execclaw.com",
  },
  {
    title: "Tesla Solar Programs",
    eyebrow: "Launch operations",
    description: "Readiness, dashboards, and field execution across programs.",
    tags: ["Energy", "GTM"],
    image: "/work/solar.jpg",
  },
  {
    title: "Tradenostix",
    eyebrow: "Analytics",
    description: "Trading workflow reporting and decision support.",
    tags: ["Finance", "BI"],
    image: "/work/tradenostix.png",
    href: "https://coinbureau.com/services/tradenostix-analytics-tool",
  },
  {
    title: "Insights",
    eyebrow: "Reporting",
    description: "Operational intelligence for teams that need clarity fast.",
    tags: ["Data", "Product"],
    image: "/work/insights-new.png",
  },
];

const strengths = [
  {
    title: "Launch",
    text: "Turn fuzzy ideas into shipped plans, clean scopes, and usable products.",
  },
  {
    title: "Automate",
    text: "Build AI workflows, alerts, and CRM systems around real operating needs.",
  },
  {
    title: "Measure",
    text: "Create dashboards and reporting loops that help teams decide faster.",
  },
  {
    title: "Align",
    text: "Keep partners, vendors, and stakeholders moving in the same direction.",
  },
];

const certification = {
  title: "Claude Certified Architect",
  issued: "March 16, 2026",
  credentialId: "pg7kobvx7hcw",
  verifyUrl: "https://verify.skilljar.com/c/pg7kobvx7hcw",
};

const tools = [
  { name: "Claude", image: "/work/claude.jpg" },
  { name: "ChatGPT", image: "/work/chatgpt.png" },
  { name: "Vercel", image: "/work/vercel.png" },
  { name: "n8n", image: "/work/n8n.png" },
  { name: "GoHighLevel", image: "/work/gohighlevel.png" },
  { name: "GitHub", image: "/work/github.png" },
  { name: "Gemini", image: "/work/Gemini.png" },
  { name: "HeyGen", image: "/work/heygen.jpg" },
  { name: "ElevenLabs", image: "/work/elevenlabs.jpg" },
  { name: "Rork", image: "/work/Rork Logo.jpg" },
];

const linkedinPostUrl = "https://www.linkedin.com/feed/update/urn:li:activity:7454963786379309056/";

const fieldDemos = [
  {
    title: "Neighborhood scan",
    label: "Lead discovery",
    video: "/demos/wayne-fence/lead-scan-demo-1.mp4",
    poster: "/demos/wayne-fence/lead-scan-demo-1-poster.jpg",
  },
  {
    title: "Prospect list",
    label: "Fence opportunity",
    video: "/demos/wayne-fence/lead-scan-demo-2.mp4",
    poster: "/demos/wayne-fence/lead-scan-demo-2-poster.jpg",
  },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-frame">
      <header className={`site-header ${mobileNavOpen ? "is-open" : ""}`}>
        <div className="page-shell header-row">
          <Link
            className="brand-mark"
            href="#"
            aria-label="Jared Theaman home"
            onClick={() => setMobileNavOpen(false)}
          >
            <Image
              src="/newlogo.png"
              alt=""
              width={42}
              height={42}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button-dark desktop-hire" href={hireMeUrl} target="_blank" rel="noreferrer">
              <Mail aria-hidden="true" />
              Hire me
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div className="mobile-panel page-shell">
            <div className="mobile-panel-inner">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileNavOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={hireMeUrl} target="_blank" rel="noreferrer" onClick={() => setMobileNavOpen(false)}>
                Hire me
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="hero-section">
        <div className="page-shell hero-shell">
          <div className="hero-copy-block">
            <p className="eyebrow">Product and program leader / AI builder</p>
            <h1>Jared Theaman</h1>
            <p className="hero-line">Launches, dashboards, and AI workflows that actually ship.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                See work <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button-light" href={introCallUrl} target="_blank" rel="noreferrer">
                Book intro <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Selected work preview">
            <div className="portrait-slice">
              <Image
                src="/me.png"
                alt="Jared Theaman"
                width={464}
                height={576}
                priority
                sizes="(max-width: 768px) 45vw, 260px"
              />
            </div>
            <div className="work-slice work-slice-large">
              <Image
                src="/work/solar-sentinel-queue.png"
                alt="Solar Sentinel interface preview"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 430px"
              />
            </div>
            <div className="work-slice work-slice-small">
              <Image
                src="/work/localmotion-new.png"
                alt="LocalMotionAI interface preview"
                fill
                sizes="(max-width: 768px) 38vw, 190px"
              />
            </div>
          </div>
        </div>

        <div className="page-shell proof-row" aria-label="Highlights">
          {proofMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="page-shell section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Built for motion.</h2>
          </div>
          <p>
            A sharper cut of products, launch systems, and dashboards.
          </p>
        </div>

        <div className="page-shell project-grid">
          {projects.map((project) => {
            const content = (
              <>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes={project.featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 33vw"}
                  />
                </div>
                <div className="project-copy">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    {project.href ? <ExternalLink aria-hidden="true" /> : null}
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.href ? (
              <a
                key={project.title}
                className={`project-card ${project.featured ? "project-card-featured" : ""}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <article
                key={project.title}
                className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section id="demos" className="demo-section">
        <div className="page-shell demo-shell">
          <div className="demo-copy">
            <p className="eyebrow">LinkedIn demo</p>
            <h2>AI agent for local lead discovery.</h2>
            <p>
              A Wayne Fence demo that scans neighborhoods, spots homes without fences, and turns visual demand into a ranked outreach list.
            </p>
            <div className="demo-stats" aria-label="Demo highlights">
              <span>50 leads</span>
              <span>10 seconds</span>
              <span>$100K+ signal</span>
            </div>
            <a className="button button-light demo-link" href={linkedinPostUrl} target="_blank" rel="noreferrer">
              View LinkedIn post <ExternalLink aria-hidden="true" />
            </a>
          </div>

          <div className="demo-media-grid">
            {fieldDemos.map((demo) => (
              <figure className="demo-media" key={demo.title}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={demo.poster}
                  preload="metadata"
                  aria-label={`${demo.title} demo loop`}
                >
                  <source src={demo.video} type="video/mp4" />
                </video>
                <figcaption>
                  <span>{demo.label}</span>
                  <strong>{demo.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="strength-section">
        <div className="page-shell strength-shell">
          <div className="strength-intro">
            <p className="eyebrow">How I help</p>
            <h2>Operator who can build.</h2>
            <p>
              Useful strategy, fast execution, and enough taste to keep the work clean.
            </p>
          </div>

          <div className="strength-list">
            {strengths.map((strength, index) => (
              <div className="strength-row" key={strength.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="credential-section">
        <div className="page-shell">
          <a className="credential-band" href={certification.verifyUrl} target="_blank" rel="noreferrer">
            <span className="credential-icon">
              <BadgeCheck aria-hidden="true" />
            </span>
            <span>
              <strong>{certification.title}</strong>
              <small>
                Issued {certification.issued} / ID {certification.credentialId}
              </small>
            </span>
            <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="tool-section" aria-labelledby="tool-heading">
        <div className="page-shell tool-heading">
          <p className="eyebrow" id="tool-heading">Tools in rotation</p>
        </div>
        <div className="tool-rail" aria-hidden="true">
          <div className="tool-track">
            {[...tools, ...tools].map((tool, index) => (
              <div className="tool-pill" key={`${tool.name}-${index}`}>
                <Image src={tool.image} alt="" width={32} height={32} sizes="32px" />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page-shell contact-shell">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need momentum?</h2>
            <p>
              Send the goal, constraints, and timeline. I&apos;ll reply with the cleanest first move.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-dark" href={introCallUrl} target="_blank" rel="noreferrer">
              Book a call <ExternalLink aria-hidden="true" />
            </a>
            <button type="button" className="button button-light" onClick={copyEmail}>
              <Copy aria-hidden="true" />
              {copied ? "Copied" : email}
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-row">
          <p>© {new Date().getFullYear()} Jared Theaman</p>
          <a href={contactMailUrl} target="_blank" rel="noreferrer">
            {email}
          </a>
        </div>
      </footer>

      <style>{`
        :root {
          --ink: #0a0f11;
          --paper: #fbfcf7;
          --soft: #edf2e6;
          --line: rgba(10, 15, 17, 0.12);
          --muted: rgba(10, 15, 17, 0.62);
          --faint: rgba(10, 15, 17, 0.42);
          --lime: #d8ff57;
          --coral: #ff6b4a;
          --blue: #7fc8ff;
        }

        .site-frame {
          min-height: 100vh;
          background:
            linear-gradient(90deg, rgba(10, 15, 17, 0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10, 15, 17, 0.035) 1px, transparent 1px),
            var(--paper);
          background-size: 48px 48px;
          color: var(--ink);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: clip;
        }

        .page-shell {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .site-header {
          position: absolute;
          inset: 0 0 auto;
          z-index: 20;
          transition: background 180ms ease, backdrop-filter 180ms ease;
        }

        .site-header.is-open {
          background: rgba(251, 252, 247, 0.88);
          backdrop-filter: blur(18px);
        }

        .header-row {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(10, 15, 17, 0.08);
          text-decoration: none;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px;
          border: 1px solid rgba(10, 15, 17, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(18px);
        }

        .desktop-nav a {
          color: var(--muted);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 650;
          padding: 9px 14px;
          text-decoration: none;
          transition: color 180ms ease, background 180ms ease;
        }

        .desktop-nav a:hover {
          color: var(--ink);
          background: rgba(10, 15, 17, 0.06);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .button {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 0;
          border-radius: 999px;
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          font-weight: 760;
          line-height: 1;
          padding: 0 19px;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
          white-space: nowrap;
        }

        .button svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-dark {
          background: var(--ink);
          color: #fff;
        }

        .button-light {
          background: rgba(255, 255, 255, 0.74);
          border: 1px solid rgba(10, 15, 17, 0.12);
          color: var(--ink);
        }

        .mobile-menu-toggle {
          width: 46px;
          height: 46px;
          display: none;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.74);
          color: var(--ink);
        }

        .mobile-menu-toggle svg {
          width: 19px;
          height: 19px;
        }

        .mobile-panel {
          display: none;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 116px 0 34px;
          background:
            linear-gradient(135deg, rgba(216, 255, 87, 0.84) 0%, rgba(247, 250, 239, 0.96) 36%, rgba(127, 200, 255, 0.52) 100%);
        }

        .hero-section::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 130px;
          background: linear-gradient(180deg, rgba(251, 252, 247, 0), var(--paper));
          pointer-events: none;
        }

        .hero-shell {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
          align-items: center;
          gap: 46px;
        }

        .hero-copy-block {
          padding-top: 10px;
        }

        .hero-copy-block > * {
          animation: riseIn 620ms ease both;
        }

        .hero-copy-block > *:nth-child(2) {
          animation-delay: 80ms;
        }

        .hero-copy-block > *:nth-child(3) {
          animation-delay: 160ms;
        }

        .hero-copy-block > *:nth-child(4) {
          animation-delay: 240ms;
        }

        .eyebrow {
          color: var(--muted);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0;
          line-height: 1.2;
          margin: 0 0 18px;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        .hero-copy-block h1 {
          max-width: 7ch;
          font-size: clamp(4.25rem, 9.1vw, 8.2rem);
          font-weight: 860;
          letter-spacing: 0;
          line-height: 0.83;
        }

        .hero-line {
          max-width: 640px;
          margin-top: 30px;
          color: rgba(10, 15, 17, 0.78);
          font-size: clamp(1.24rem, 2vw, 1.72rem);
          font-weight: 620;
          letter-spacing: 0;
          line-height: 1.2;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-visual {
          position: relative;
          min-height: 540px;
          isolation: isolate;
        }

        .portrait-slice,
        .work-slice {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.56);
          box-shadow: 0 28px 80px rgba(10, 15, 17, 0.18);
          transform: translateZ(0);
        }

        .portrait-slice {
          z-index: 3;
          right: 7%;
          bottom: 4%;
          width: min(260px, 42%);
          aspect-ratio: 0.78;
          border-radius: 44px;
          background: #e9f0df;
        }

        .portrait-slice img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .work-slice-large {
          z-index: 1;
          left: 0;
          top: 10%;
          width: 76%;
          aspect-ratio: 1.46;
          border-radius: 34px;
          background: #fff;
          transform: rotate(-2deg);
        }

        .work-slice-small {
          z-index: 2;
          right: 0;
          top: 3%;
          width: 38%;
          aspect-ratio: 1.02;
          border-radius: 28px;
          background: #fff;
          transform: rotate(5deg);
        }

        .work-slice img {
          object-fit: cover;
        }

        .proof-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          margin-top: 28px;
          overflow: hidden;
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 24px;
          background: rgba(10, 15, 17, 0.1);
        }

        .proof-row span {
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.66);
          color: rgba(10, 15, 17, 0.75);
          font-size: 13px;
          font-weight: 740;
          text-align: center;
        }

        .work-section {
          padding: 92px 0 104px;
        }

        .section-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
          align-items: end;
          gap: 32px;
          margin-bottom: 34px;
        }

        .section-heading-row h2,
        .strength-intro h2,
        .contact-shell h2 {
          font-size: clamp(2.45rem, 6vw, 5.3rem);
          font-weight: 850;
          letter-spacing: 0;
          line-height: 0.92;
        }

        .section-heading-row > p,
        .strength-intro > p,
        .contact-shell > div > p {
          color: var(--muted);
          font-size: clamp(1rem, 1.45vw, 1.18rem);
          font-weight: 520;
          line-height: 1.5;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          min-width: 0;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.78);
          color: inherit;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .project-card:hover {
          border-color: rgba(10, 15, 17, 0.24);
          box-shadow: 0 22px 60px rgba(10, 15, 17, 0.11);
          transform: translateY(-5px);
        }

        .project-card-featured {
          grid-column: span 2;
          grid-row: span 2;
        }

        .project-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.48;
          overflow: hidden;
          background: #e8eee2;
        }

        .project-card-featured .project-image {
          aspect-ratio: 1.72;
        }

        .project-image img {
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.045);
        }

        .project-copy {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px;
        }

        .project-eyebrow {
          color: var(--faint);
          font-size: 12px;
          font-weight: 760;
          letter-spacing: 0;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .project-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }

        .project-title-row h3 {
          min-width: 0;
          font-size: clamp(1.18rem, 2vw, 1.6rem);
          font-weight: 800;
          letter-spacing: 0;
          line-height: 1.05;
        }

        .project-title-row svg {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          color: var(--faint);
        }

        .project-copy > p:last-of-type {
          color: var(--muted);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.48;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          padding-top: 22px;
        }

        .tag-row span {
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 999px;
          color: rgba(10, 15, 17, 0.66);
          font-size: 12px;
          font-weight: 720;
          padding: 7px 10px;
        }

        .demo-section {
          padding: 16px 0 104px;
          background: var(--paper);
        }

        .demo-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(420px, 1.22fr);
          gap: 34px;
          align-items: stretch;
          padding: 34px;
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(216, 255, 87, 0.44), rgba(127, 200, 255, 0.32)),
            rgba(255, 255, 255, 0.62);
        }

        .demo-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          min-height: 520px;
          padding: 18px 0 6px;
        }

        .demo-copy h2 {
          max-width: 8ch;
          font-size: clamp(2.9rem, 6vw, 5.6rem);
          font-weight: 850;
          letter-spacing: 0;
          line-height: 0.9;
        }

        .demo-copy > p:not(.eyebrow) {
          max-width: 440px;
          margin-top: 24px;
          color: rgba(10, 15, 17, 0.68);
          font-size: 17px;
          font-weight: 560;
          line-height: 1.48;
        }

        .demo-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 32px 0;
        }

        .demo-stats span {
          border: 1px solid rgba(10, 15, 17, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          color: rgba(10, 15, 17, 0.78);
          font-size: 12px;
          font-weight: 800;
          padding: 9px 12px;
        }

        .demo-link {
          width: auto;
        }

        .demo-media-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          min-width: 0;
        }

        .demo-media {
          position: relative;
          min-width: 0;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(255, 255, 255, 0.68);
          border-radius: 8px;
          background: #e9f0df;
          box-shadow: 0 24px 64px rgba(10, 15, 17, 0.13);
        }

        .demo-media:nth-child(2) {
          transform: translateY(42px);
        }

        .demo-media video {
          display: block;
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }

        .demo-media figcaption {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.42);
          border-radius: 999px;
          background: rgba(10, 15, 17, 0.76);
          backdrop-filter: blur(12px);
          color: #fff;
        }

        .demo-media figcaption span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 760;
          text-transform: uppercase;
        }

        .demo-media figcaption strong {
          font-size: 13px;
          font-weight: 820;
          line-height: 1;
        }

        .strength-section {
          padding: 94px 0;
          background: var(--ink);
          color: #fff;
        }

        .strength-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1fr);
          gap: 64px;
          align-items: start;
        }

        .strength-section .eyebrow {
          color: rgba(255, 255, 255, 0.62);
        }

        .strength-intro {
          position: sticky;
          top: 34px;
        }

        .strength-intro p {
          max-width: 470px;
          margin-top: 26px;
          color: rgba(255, 255, 255, 0.68);
        }

        .strength-list {
          display: grid;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .strength-row {
          display: grid;
          grid-template-columns: 54px minmax(120px, 0.55fr) minmax(0, 1fr);
          gap: 24px;
          padding: 27px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          align-items: baseline;
        }

        .strength-row span {
          color: var(--lime);
          font-size: 13px;
          font-weight: 800;
        }

        .strength-row h3 {
          font-size: clamp(1.28rem, 2vw, 1.8rem);
          font-weight: 810;
          letter-spacing: 0;
        }

        .strength-row p {
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.5;
        }

        .credential-section {
          padding: 24px 0;
          background: var(--ink);
        }

        .credential-band {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          min-height: 92px;
          padding: 18px 22px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          background: linear-gradient(90deg, rgba(216, 255, 87, 0.92), rgba(127, 200, 255, 0.82));
          color: var(--ink);
          text-decoration: none;
          transition: transform 180ms ease;
        }

        .credential-band:hover {
          transform: translateY(-2px);
        }

        .credential-icon {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
        }

        .credential-band svg {
          width: 20px;
          height: 20px;
        }

        .credential-band strong,
        .credential-band small {
          display: block;
        }

        .credential-band strong {
          font-size: clamp(1.08rem, 2vw, 1.45rem);
          font-weight: 850;
          line-height: 1.15;
        }

        .credential-band small {
          margin-top: 5px;
          color: rgba(10, 15, 17, 0.7);
          font-size: 13px;
          font-weight: 680;
          line-height: 1.35;
        }

        .tool-section {
          overflow: hidden;
          padding: 86px 0;
          background: var(--paper);
        }

        .tool-heading {
          margin-bottom: 18px;
        }

        .tool-rail {
          width: 100%;
          overflow: hidden;
          contain: paint;
          border-block: 1px solid rgba(10, 15, 17, 0.1);
          background: rgba(255, 255, 255, 0.56);
        }

        .tool-track {
          display: flex;
          width: max-content;
          gap: 12px;
          padding: 18px 12px;
          animation: toolDrift 32s linear infinite;
        }

        .tool-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: max-content;
          border: 1px solid rgba(10, 15, 17, 0.1);
          border-radius: 999px;
          background: #fff;
          padding: 8px 15px 8px 8px;
          box-shadow: 0 10px 34px rgba(10, 15, 17, 0.06);
        }

        .tool-pill img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .tool-pill span {
          font-size: 13px;
          font-weight: 780;
        }

        .contact-section {
          padding: 36px 0 94px;
        }

        .contact-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 42px;
          align-items: end;
          padding: 64px;
          border-radius: 8px;
          background: var(--soft);
          border: 1px solid rgba(10, 15, 17, 0.1);
        }

        .contact-shell > div > p {
          max-width: 600px;
          margin-top: 22px;
        }

        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: stretch;
        }

        .contact-actions .button {
          min-width: 238px;
        }

        .site-footer {
          padding: 30px 0;
          border-top: 1px solid rgba(10, 15, 17, 0.1);
          background: #fff;
        }

        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
        }

        .footer-row a {
          color: inherit;
          text-decoration: none;
        }

        .brand-mark:focus-visible,
        .desktop-nav a:focus-visible,
        .button:focus-visible,
        .mobile-menu-toggle:focus-visible,
        .project-card:focus-visible,
        .credential-band:focus-visible,
        .footer-row a:focus-visible {
          outline: 3px solid rgba(127, 200, 255, 0.9);
          outline-offset: 4px;
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes toolDrift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 1020px) {
          .hero-shell,
          .strength-shell,
          .section-heading-row,
          .contact-shell {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 390px;
          }

          .strength-intro {
            position: static;
          }

          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-card-featured {
            grid-column: span 2;
          }

          .contact-actions {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .demo-shell {
            grid-template-columns: 1fr;
          }

          .demo-copy {
            min-height: 0;
          }
        }

        @media (max-width: 820px) {
          .page-shell {
            width: min(100% - 36px, 1180px);
          }

          .desktop-nav,
          .desktop-hire {
            display: none;
          }

          .mobile-menu-toggle {
            display: inline-flex;
          }

          .mobile-panel {
            display: block;
            padding-bottom: 18px;
          }

          .mobile-panel-inner {
            display: grid;
            gap: 10px;
            padding: 14px;
            border: 1px solid rgba(10, 15, 17, 0.1);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 20px 70px rgba(10, 15, 17, 0.14);
          }

          .mobile-panel-inner a {
            padding: 14px 15px;
            border-radius: 16px;
            background: rgba(10, 15, 17, 0.04);
            color: var(--ink);
            font-size: 15px;
            font-weight: 760;
            text-decoration: none;
          }

          .hero-section {
            padding-top: 92px;
          }

          .hero-shell {
            gap: 28px;
          }

          .hero-copy-block h1 {
            max-width: 8ch;
            font-size: clamp(4.15rem, 19vw, 7rem);
          }

          .hero-line {
            margin-top: 22px;
          }

          .hero-visual {
            min-height: 306px;
          }

          .portrait-slice {
            right: 3%;
            width: 34%;
            border-radius: 28px;
          }

          .work-slice-large {
            top: 10%;
            width: 82%;
            border-radius: 24px;
          }

          .work-slice-small {
            top: 0;
            width: 34%;
            border-radius: 20px;
          }

          .proof-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 18px;
            border-radius: 18px;
          }

          .proof-row span {
            min-height: 58px;
            padding: 10px 8px;
            font-size: 11px;
            line-height: 1.2;
          }

          .work-section,
          .demo-section,
          .strength-section,
          .tool-section {
            padding: 68px 0;
          }

          .project-grid {
            grid-template-columns: 1fr;
          }

          .project-card-featured {
            grid-column: auto;
          }

          .project-card-featured .project-image,
          .project-image {
            aspect-ratio: 1.36;
          }

          .demo-shell {
            padding: 22px;
            gap: 24px;
          }

          .demo-copy h2 {
            max-width: 9ch;
          }

          .demo-copy > p:not(.eyebrow) {
            margin-top: 18px;
            font-size: 15px;
          }

          .demo-stats {
            margin: 24px 0;
          }

          .demo-media-grid {
            gap: 12px;
          }

          .demo-media:nth-child(2) {
            transform: translateY(24px);
          }

          .demo-media figcaption {
            left: 10px;
            right: 10px;
            bottom: 10px;
            align-items: flex-start;
            flex-direction: column;
            border-radius: 14px;
            gap: 4px;
          }

          .strength-shell {
            gap: 36px;
          }

          .strength-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 23px 0;
          }

          .credential-band {
            grid-template-columns: auto minmax(0, 1fr);
          }

          .credential-band > svg {
            display: none;
          }

          .contact-section {
            padding-bottom: 68px;
          }

          .contact-shell {
            padding: 34px 24px;
          }
        }

        @media (max-width: 560px) {
          .page-shell {
            width: min(100% - 28px, 1180px);
          }

          .header-row {
            height: 70px;
          }

          .button {
            width: 100%;
            min-height: 48px;
          }

          .hero-actions,
          .contact-actions {
            width: 100%;
            flex-direction: column;
          }

          .hero-section {
            padding-top: 78px;
            padding-bottom: 24px;
          }

          .hero-copy-block h1 {
            max-width: 9ch;
            font-size: clamp(3.2rem, 16.4vw, 4.4rem);
          }

          .hero-line {
            font-size: 1.1rem;
            line-height: 1.28;
          }

          .hero-visual {
            min-height: 208px;
          }

          .portrait-slice {
            width: 30%;
          }

          .work-slice-large {
            width: 78%;
          }

          .work-slice-small {
            width: 30%;
          }

          .section-heading-row {
            margin-bottom: 24px;
          }

          .section-heading-row h2,
          .strength-intro h2,
          .contact-shell h2 {
            font-size: clamp(2.34rem, 12vw, 3.5rem);
          }

          .project-copy {
            padding: 18px;
          }

          .project-title-row h3 {
            font-size: 1.22rem;
          }

          .demo-media-grid {
            grid-template-columns: 1fr;
          }

          .demo-media:nth-child(2) {
            transform: none;
          }

          .contact-actions .button {
            min-width: 0;
          }

          .footer-row {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .hero-copy-block h1 {
            font-size: 3.14rem;
          }

          .hero-visual {
            min-height: 220px;
          }

          .credential-band {
            padding: 16px;
          }
        }
      `}</style>
    </main>
  );
}
