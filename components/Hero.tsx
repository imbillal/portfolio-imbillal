"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, yearsExp } from "@/lib/data";
import { ArrowRight, ArrowUp } from "./icons";

/* ---- typewriter that cycles through profile.roles ---- */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? 45 : 85);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const ref = useRef<HTMLElement>(null);

  // cursor spotlight (CSS vars on the section)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" ref={ref} className="hero">
      {/* layered background */}
      <div className="hero-bg" aria-hidden>
        <div className="grid-bg hero-grid" />
        <div className="hero-aurora hero-aurora--1" />
        <div className="hero-aurora hero-aurora--2" />
        <div className="hero-spotlight" />
        <div className="hero-noise" />
      </div>

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.p className="eyebrow" variants={item}>
          // hello — I build for the web
        </motion.p>

        <motion.h1 className="hero-name font-display grad-text" variants={item}>
          {profile.name}
        </motion.h1>

        <motion.div className="hero-role font-mono" variants={item}>
          <span className="hero-role__prompt accent-text">~/</span>
          <span>{typed}</span>
          <span className="caret">&nbsp;</span>
        </motion.div>

        <motion.p className="hero-sub lead" variants={item}>
          Software Engineer at{" "}
          <a href={profile.companyUrl} target="_blank" rel="noreferrer" className="link-accent">
            {profile.company}
          </a>{" "}
          · {yearsExp()} years shipping React &amp; Next.js · {profile.location}
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href="#contact" className="btn btn-primary">
            Get in touch <ArrowRight width={16} height={16} />
          </a>
          <a href="#experience" className="btn btn-ghost">
            View experience
          </a>
        </motion.div>

        <motion.div className="hero-meta font-mono" variants={item}>
          <span><b className="accent-text">●</b> available for work</span>
          <span className="hero-meta__sep" />
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>

      <a href="#about" className="hero-scroll font-mono" aria-label="Scroll to about">
        <span>scroll</span>
        <span className="hero-scroll__rail">
          <ArrowUp width={13} height={13} style={{ transform: "rotate(180deg)" }} />
        </span>
      </a>
    </section>
  );
}
