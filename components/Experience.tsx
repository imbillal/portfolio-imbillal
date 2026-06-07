"use client";

import { experience, education } from "@/lib/data";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <Reveal className="section-head">
        <p className="eyebrow">// timeline — where I&apos;ve shipped</p>
        <h2 className="section-title grad-text">Experience</h2>
      </Reveal>

      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${i}`} delay={i * 0.08} className="tl-item">
            <span className={`tl-node ${job.current ? "is-current" : ""}`} aria-hidden />
            <div className="tl-card panel">
              <div className="tl-top">
                <div>
                  <div className="tl-role-row">
                    <h3 className="tl-role font-head">{job.role}</h3>
                    {job.tags?.map((t) => (
                      <span key={t} className="tl-tag font-mono">{t}</span>
                    ))}
                  </div>
                  <p className="tl-company font-mono">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noreferrer" className="link-accent">
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                    {job.place && <span className="tl-meta"> · {job.place}</span>}
                  </p>
                </div>
                <span className={`tl-period font-mono ${job.current ? "is-current" : ""}`}>
                  {job.current && <i className="tl-live" />}
                  {job.period}
                </span>
              </div>
              <ul className="tl-points">
                {job.points.map((p, pi) => (
                  <li key={pi} className="lead">
                    <ArrowRight className="tl-bullet" width={14} height={14} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="edu-head">
        <p className="eyebrow">// education</p>
      </Reveal>
      <div className="edu-grid">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08} className="edu-card panel">
            <span className="edu-period font-mono">{ed.period}</span>
            <h3 className="edu-degree font-head">{ed.degree}</h3>
            <p className="edu-school font-mono">{ed.school}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
