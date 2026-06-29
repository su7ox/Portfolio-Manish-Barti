import { useState, useEffect } from "react";
import resume from "./assets/Resume_manishbarti.pdf";

// ── DATA ─────────────────────────────────────────────────────────────────────
const data = {
  name: "Manish Barti",
  title: "CS Engineering Student",
  bio: "B.Tech CSE student at Graphic Era Deemed University. I build full-stack web applications with FastAPI, React, PostgreSQL, and AI technologies. Passionate about software engineering, cloud computing and solving real-world problems. Currently seeking software development internship/Job opportunities.",
  email: "bartimanish36@gmail.com",
  phone: "+91 7456821509",
  location: "Dehradun, Uttarakhand",
  links: [
    { label: "GitHub", url: "https://github.com/su7ox" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manish-barti-674035247",
    },
    { label: "LeetCode", url: "https://leetcode.com/manishbarti" },
  ],
  skills: [
    // Programming Languages
    "C",
    "C++",
    "Python",
    "JavaScript",
    "SQL",
    "PHP",

    // Frontend
    "HTML",
    "CSS",
    "React.js",

    // Backend
    "FastAPI",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Async Programming",
    "Redis",
    "Caching",
    "celery",
    "kafka",
    "RabbitMQ",
    "Message Queues",
    "WebSockets",
    "Socket.io",

    // Databases
    "PostgreSQL",
    "MySQL",
    "ChromaDB",
    "MongoDB",

    // AI / Machine Learning
    "Machine Learning",
    "Generative AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "Natural Language Processing (NLP)",
    "Hugging Face",
    "FAISS",
    "Scikit-learn",
    "XGBoost",
    "Isolation Forest",
    "Pandas",
    "NumPy",
    "pyTorch",

    // Cloud & DevOps
    "AWS EC2",
    "AWS S3",
    "Docker",
    "Linux",

    // Tools
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "PyCharm",

    // Computer Science
    "Data Structures",
    "Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
  projects: [
    {
      name: "SafeNav",
      description:
        "Production-ready web security platform that performs real-time URL risk analysis using a multi-layer heuristic engine. Features phishing detection, SSL/TLS verification, IP intelligence, asynchronous threat analysis, intelligent caching, and detailed security reports through a modern React dashboard.",
      tech: [
        "Python",
        "FastAPI",
        "React.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "REST APIs",
        "Async Programming",
        "WebSockets",
        "machine learning",
      ],
      link: "https://github.com/su7ox/SafeNav",
    },
    {
      name: "GigInsurance",
      description:
        "AI-powered parametric insurance platform that automates claim verification using LangGraph agents, Retrieval-Augmented Generation (RAG), real-time weather and government data, and machine learning for fraud detection through a WhatsApp-based conversational interface.",
      tech: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "RAG",
        "ChromaDB",
        "PostgreSQL",
        "XGBoost",
        "Scikit-learn",
        "Docker",
        "REST APIs",
        "redis",
      ],
      link: "https://github.com/su7ox/GiG-Insurance",
    },
  ],
  certifications: [
    {
      name: "AWS AI Practitioner",
      org: "AWS Skill Builder",
      year: "2025",
      link: "",
    },
    {
      name: "AWS Cloud Essentials",
      org: "AWS Skill Builder",
      year: "2026",
      link: "",
    },
    {
      name: "Foundation for Virtual and Augmented Reality Systems",
      org: "NPTEL (SWAYAM)",
      year: "2026",
      link: "",
    },
  ],
  education: [
    {
      degree: "B.Tech – Computer Science Engineering",
      school: "Graphic Era Deemed to be University",
      location: "Dehradun, Uttarakhand",
      period: "2023 – 2027",
      current: true,
    },
    {
      degree: "Senior Secondary – CBSE",
      school: "Nirmala Convent Sr. Sec. School",
      location: "Kathgodam, Uttarakhand",
      period: "2018 – 2023",
      current: false,
    },
  ],
};

const NAV = [
  "About",
  "Skills",
  "Projects",
  "Certifications",
  "Education",
  "Contact",
];

// ── THEME ─────────────────────────────────────────────────────────────────────
const getTheme = (dark) => ({
  bg: dark ? "#0f0f0f" : "#fafaf9",
  surface: dark ? "#1a1a1a" : "#ffffff",
  border: dark ? "#2a2a2a" : "#e8e8e8",
  divider: dark ? "#222222" : "#f0f0f0",
  text: dark ? "#f0f0f0" : "#111111",
  sub: dark ? "#a0a0a0" : "#555555",
  muted: dark ? "#555555" : "#999999",
  tagBg: dark ? "#252525" : "#f0f0f0",
  tagText: dark ? "#b0b0b0" : "#444444",
  green: dark ? "#4ade80" : "#16a34a",
  greenBg: dark ? "#14532d" : "#dcfce7",
});

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const t = getTheme(isDark);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }

        .nav-a {
          font-size: 14px; color: ${t.sub};
          transition: color 0.2s; white-space: nowrap;
        }
        .nav-a:hover { color: ${t.text}; }

        .mob-a {
          display: block; padding: 14px 0;
          font-size: 15px; color: ${t.sub};
          border-bottom: 1px solid ${t.border};
          transition: color 0.2s;
        }
        .mob-a:hover { color: ${t.text}; }

        .tag {
          background: ${t.tagBg}; color: ${t.tagText};
          border-radius: 4px; padding: 4px 10px;
          font-size: 12px; display: inline-block;
        }

        .ext-link {
          color: ${t.sub}; border-bottom: 1px solid ${t.border};
          padding-bottom: 1px; font-size: 14px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ext-link:hover { color: ${t.text}; border-color: ${t.text}; }

        .card {
          background: ${t.surface}; border: 1px solid ${t.border};
          border-radius: 10px; padding: 20px;
          transition: box-shadow 0.2s;
        }
        .card:hover { box-shadow: 0 4px 20px rgba(0,0,0,${isDark ? "0.4" : "0.07"}); }

        section { padding: 52px 0; border-bottom: 1px solid ${t.border}; }
        h2 { font-size: 18px; font-weight: 600; margin-bottom: 20px; }
        h3 { font-size: 15px; font-weight: 600; }
        p  { color: ${t.sub}; line-height: 1.75; font-size: 15px; }

        .btn {
          background: ${t.text}; color: ${t.bg};
          border: none; border-radius: 8px;
          padding: 8px 14px; font-size: 13px; font-weight: 600;
          cursor: pointer; font-family: inherit;
          transition: opacity 0.2s; white-space: nowrap;
        }
        .btn:hover { opacity: 0.8; }

        .icon-btn {
          background: ${isDark ? "#2a2a2a" : "#efefef"};
          border: none; border-radius: 8px;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; cursor: pointer;
        }

        .hamburger {
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 5px; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: ${t.text}; border-radius: 2px;
        }

        @media (max-width: 640px) {
          .desktop-nav  { display: none !important; }
          .show-mobile  { display: flex !important; }
          .hero-title   { font-size: 30px !important; }
          .hero-section { padding: 44px 0 40px !important; }
          section       { padding: 38px 0 !important; }
        }
        @media (min-width: 641px) {
          .desktop-nav { display: flex !important; }
          .show-mobile { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: t.bg,
          borderBottom: `1px solid ${t.border}`,
          backdropFilter: "blur(8px)",
          transition: "background 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 20px",
            height: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 15 }}>Manish Barti</span>

          {/* Desktop links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: 24, alignItems: "center" }}
          >
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="nav-a">
                {n}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a
              href={resume}
              download="Resume_ManishBarti.pdf"
              className="btn"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              ↓ Resume
            </a>
            <button
              className="icon-btn"
              onClick={() => setIsDark((d) => !d)}
              title="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            {/* Hamburger — mobile only */}
            <button
              className="hamburger show-mobile"
              style={{ display: "none" }}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="mobile-menu"
            style={{
              background: t.surface,
              borderTop: `1px solid ${t.border}`,
              padding: "0 20px",
            }}
          >
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="mob-a"
                onClick={closeMenu}
              >
                {n}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── MAIN ── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
        {/* Hero */}
        <div
          className="hero-section"
          style={{
            padding: "64px 0 52px",
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 13, color: t.sub }}>
              Open to internships
            </span>
          </div>
          <h1
            className="hero-title"
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 8,
              color: t.text,
              lineHeight: 1.15,
            }}
          >
            {data.name}
          </h1>
          <p style={{ fontSize: 15, color: t.muted, marginBottom: 16 }}>
            {data.title}
          </p>
          <p style={{ maxWidth: 500, marginBottom: 28 }}>{data.bio}</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {data.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about">
          <h2>About</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              ["Email", data.email],
              ["Phone", data.phone],
              ["Location", data.location],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 14,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: t.muted, minWidth: 72, flexShrink: 0 }}>
                  {k}
                </span>
                <span style={{ color: t.text }}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {data.skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.projects.map((p) => (
              <div key={p.name} className="card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <h3>{p.name}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ext-link"
                    >
                      View ↗
                    </a>
                  )}
                </div>
                <p style={{ marginBottom: 14 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <h2>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.certifications.map((c, i) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "14px 0",
                  gap: 12,
                  borderBottom:
                    i < data.certifications.length - 1
                      ? `1px solid ${t.divider}`
                      : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      marginBottom: 2,
                      color: t.text,
                    }}
                  >
                    {c.name}
                  </div>
                  <div style={{ fontSize: 13, color: t.muted }}>{c.org}</div>
                </div>
                <span style={{ fontSize: 13, color: t.muted, flexShrink: 0 }}>
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {data.education.map((e) => (
              <div
                key={e.degree}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      marginBottom: 4,
                      color: t.text,
                    }}
                  >
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 14, color: t.sub, marginBottom: 2 }}>
                    {e.school}
                  </div>
                  <div style={{ fontSize: 13, color: t.muted }}>
                    {e.location}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 13, color: t.muted }}>{e.period}</div>
                  {e.current && (
                    <span
                      style={{
                        fontSize: 11,
                        background: t.greenBg,
                        color: t.green,
                        borderRadius: 4,
                        padding: "2px 8px",
                        display: "inline-block",
                        marginTop: 6,
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact</h2>
          <p style={{ marginBottom: 20 }}>
            I'm actively looking for internship opportunities. Feel free to
            reach out!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <a
              href={`mailto:${data.email}`}
              className="ext-link"
              style={{ width: "fit-content" }}
            >
              {data.email}
            </a>
            <span style={{ fontSize: 14, color: t.sub }}>{data.phone}</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {data.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <a
            href={resume}
            download="Resume_ManishBarti.pdf"
            className="btn"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            ↓ Download Resume
          </a>
        </section>

        <footer style={{ padding: "28px 0", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: t.muted }}>
            © {new Date().getFullYear()} Manish Barti
          </p>
        </footer>
      </div>
    </div>
  );
}
