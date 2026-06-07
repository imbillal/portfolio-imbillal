"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile, socials } from "@/lib/data";
import { socialIcon, SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./icons";

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const t = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(t);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Switch colour theme">
      <span className="theme-toggle__icon">{theme === "dark" ? <MoonIcon /> : <SunIcon />}</span>
      <span className="font-mono">{theme === "dark" ? "Dark" : "Light"}</span>
      <span className="theme-toggle__dot" />
    </button>
  );
}

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <nav aria-label="Primary">
      <ul className="nav-list">
        {nav.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              className={`nav-link ${active === item.id ? "is-active" : ""}`}
            >
              <span className="nav-index font-mono">0{i + 1}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-line" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Socials() {
  return (
    <ul className="socials">
      {socials.map((s) => {
        const Icon = socialIcon[s.key];
        return (
          <li key={s.key}>
            <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              {Icon ? <Icon /> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const active = useScrollSpy(nav.map((n) => n.id));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- mobile top bar ---------- */}
      <header className="mobile-bar">
        <a href="#home" className="mobile-brand">
          <span className="font-display">{profile.name.split(" ")[0]}</span>
          <span className="mobile-dot" />
        </a>
        <button className="mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
          <MenuIcon />
        </button>
      </header>

      {/* ---------- desktop sidebar ---------- */}
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div>
            <a href="#home" className="brand">
              <div className="brand-avatar">
                <img src={profile.avatar} alt={profile.name} />
                <span className="brand-status" />
              </div>
              <div className="brand-text">
                <span className="brand-name font-head">{profile.name}</span>
                <span className="brand-handle font-mono">aka — {profile.handle}</span>
              </div>
            </a>
            <p className="brand-tagline font-mono">{profile.role}</p>
          </div>

          <NavList active={active} />

          <div className="sidebar-foot">
            <Socials />
            <ThemeToggle />
            <p className="copyright font-mono">
              © {profile.since.slice(0, 2)}26 {profile.name}
              <br />
              <span className="copyright-dim">built with care &amp; coffee</span>
            </p>
          </div>
        </div>
      </aside>

      {/* ---------- mobile drawer ---------- */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </button>
              <div className="brand drawer-brand">
                <div className="brand-text">
                  <span className="brand-name font-head">{profile.name}</span>
                  <span className="brand-handle font-mono">{profile.role}</span>
                </div>
              </div>
              <NavList active={active} onNavigate={() => setOpen(false)} />
              <div className="drawer-foot">
                <Socials />
                <ThemeToggle />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
