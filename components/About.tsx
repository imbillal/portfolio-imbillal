"use client";

import { motion } from "framer-motion";
import { about, profile, stats, yearsExp } from "@/lib/data";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

/* The signature piece — a "developer ID card" reworked from heera's
   verification badge into a terminal/JSON status panel. */
function DevIdCard() {
  return (
    <motion.figure
      className="idcard"
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="idcard-glow" aria-hidden />
      <div className="idcard-head font-mono">
        <span className="idcard-dots">
          <i /> <i /> <i />
        </span>
        <span className="idcard-file">dev_id.json</span>
        <span className="idcard-verified">
          <CheckIcon width={12} height={12} /> verified
        </span>
      </div>

      <div className="idcard-body">
        <div className="idcard-avatar">
          <img src={profile.avatar} alt={profile.name} />
          <span className="idcard-scan" />
        </div>

        <div className="idcard-fields font-mono">
          <div className="idrow"><span className="k">name</span><span className="v">"{profile.name}"</span></div>
          <div className="idrow"><span className="k">role</span><span className="v accent-text">"{profile.role}"</span></div>
          <div className="idrow"><span className="k">org</span><span className="v">"{profile.company}"</span></div>
          <div className="idrow"><span className="k">loc</span><span className="v">"{profile.location}"</span></div>
          <div className="idrow"><span className="k">exp</span><span className="v">{yearsExp()} yrs</span></div>
        </div>
      </div>

      <div className="idcard-meters font-mono">
        <div className="meter">
          <span>FOCUS</span>
          <span className="bars"><b style={{ width: "92%" }} /></span>
        </div>
        <div className="meter">
          <span>SHIP</span>
          <span className="bars"><b style={{ width: "88%" }} /></span>
        </div>
        <div className="meter">
          <span>CAFFEINE</span>
          <span className="bars"><b style={{ width: "99%" }} /></span>
        </div>
      </div>

      <div className="idcard-foot font-mono">
        <span>ID — 00000001·00001011</span>
        <span className="idcard-status">STATUS: ONLINE</span>
      </div>
    </motion.figure>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <Reveal className="section-head">
        <p className="eyebrow">// about — software engineer @ {profile.company.toLowerCase()}</p>
        <h2 className="section-title grad-text">{about.heading}</h2>
      </Reveal>

      <div className="about-grid">
        <div className="about-copy">
          {about.body(yearsExp()).map((para, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="lead">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="about-stats">
            {stats().map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-num font-display accent-text">{s.num}</span>
                <span className="stat-label font-mono">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="about-side">
          <DevIdCard />
        </div>
      </div>
    </section>
  );
}
