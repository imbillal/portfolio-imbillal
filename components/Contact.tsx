"use client";

import { profile, socials } from "@/lib/data";
import Reveal from "./Reveal";
import { MailIcon, PinIcon, PhoneIcon, FileIcon, ArrowRight, socialIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal className="section-head">
        <p className="eyebrow">// contact — let&apos;s talk</p>
        <h2 className="section-title grad-text">Let&apos;s build something</h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-pitch">
          <p className="lead">
            Got a product to ship, a UI to polish, or a role you think I&apos;d fit? I&apos;m always
            happy to talk frontend, React, and the craft of shipping interfaces that feel right.
          </p>
          <a href={`mailto:${profile.email}`} className="contact-cta font-head">
            {profile.email}
            <ArrowRight className="contact-cta__arrow" width={22} height={22} />
          </a>

          <ul className="contact-info font-mono">
            <li>
              <span className="ci-label">Email</span>
              <a href={`mailto:${profile.email}`} className="link-accent">
                <MailIcon width={15} height={15} /> {profile.email}
              </a>
            </li>
            <li>
              <span className="ci-label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-accent">
                <PhoneIcon width={15} height={15} /> {profile.phone}
              </a>
            </li>
            <li>
              <span className="ci-label">Location</span>
              <span className="ci-val">
                <PinIcon width={15} height={15} /> {profile.location}
              </span>
            </li>
            <li>
              <span className="ci-label">Résumé</span>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="link-accent">
                <FileIcon width={15} height={15} /> Download PDF
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="contact-socials panel">
          <p className="eyebrow">// find me online</p>
          <ul className="social-rows font-mono">
            {socials.map((s) => {
              const Icon = socialIcon[s.key];
              return (
                <li key={s.key}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <span className="sr-icon">{Icon ? <Icon width={16} height={16} /> : null}</span>
                    <span className="sr-label">{s.label}</span>
                    <span className="sr-handle">{s.handle}</span>
                    <ArrowRight className="sr-arrow" width={15} height={15} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <footer className="site-foot font-mono">
        <span>© 2026 {profile.name}. All rights reserved.</span>
      </footer>
    </section>
  );
}
