"use client";

import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <Reveal className="section-head">
        <p className="eyebrow">// products — things I&apos;ve built</p>
        <h2 className="section-title grad-text">Projects</h2>
      </Reveal>

      <div className="project-list">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 0.08} className="project-card panel">
            <div className="project-top">
              <div>
                <div className="tl-role-row">
                  <h3 className="project-name font-head">{p.name}</h3>
                  {p.tags?.map((t) => (
                    <span key={t} className="tl-tag font-mono">{t}</span>
                  ))}
                </div>
                <p className="project-tagline font-mono">{p.tagline}</p>
              </div>
              {p.live && (
                <span className="tl-period font-mono is-current">
                  <i className="tl-live" />
                  Live
                </span>
              )}
            </div>

            <p className="lead project-desc">{p.description}</p>

            {p.stack && (
              <div className="project-stack">
                <p className="project-label font-mono">// built with</p>
                <ul className="chip-list">
                  {p.stack.map((t) => (
                    <li key={t} className="chip chip--accent font-mono">{t}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-stack">
              <p className="project-label font-mono">// features</p>
              <ul className="chip-list">
                {p.features.map((f) => (
                  <li key={f} className="chip font-mono">{f}</li>
                ))}
              </ul>
            </div>

            <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-ghost project-link font-mono">
              Visit {p.url.replace(/^https?:\/\//, "")}
              <ArrowRight width={14} height={14} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
