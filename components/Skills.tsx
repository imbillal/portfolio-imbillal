"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <Reveal className="section-head">
        <p className="eyebrow">// stack — the tools I reach for</p>
        <h2 className="section-title grad-text">Skills &amp; tools</h2>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08} className="skill-card panel">
            <div className="skill-card__head">
              <span className="skill-card__no font-mono">0{gi + 1}</span>
              <div>
                <h3 className="skill-card__title font-head">{group.title}</h3>
                <p className="skill-card__tag font-mono">{group.tag}</p>
              </div>
            </div>
            <ul className="chip-list">
              {group.items.map((item, ii) => (
                <motion.li
                  key={item}
                  className="chip font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 + ii * 0.04 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
