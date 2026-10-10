// ============================================================
// Site content — sourced from Billal's CV. Edit freely.
// ============================================================

// Career start — used to compute years of experience dynamically.
// Month is 0-indexed: 5 = June.
export const careerStart = new Date(2021, 5, 1); // June 2021

// Whole-ish years since careerStart, rounded down to the nearest 0.5,
// rendered as e.g. "5+". Recomputes every render, so it never goes stale.
export function yearsExp(): string {
  const now = new Date();
  const yrs = (now.getTime() - careerStart.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const rounded = Math.max(0.5, Math.floor(yrs * 2) / 2);
  const label = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return `${label}+`;
}

export const profile = {
  name: "Billal Hossain",
  handle: "@imbillal",
  role: "Software Engineer",
  // rotating words for the hero typewriter
  roles: ["Software Engineer", "React Developer", "Next.js Specialist", "UI Engineer"],
  tagline: "Software Engineer · React · Next.js",
  location: "Sylhet, Bangladesh",
  email: "billalsgc@gmail.com",
  phone: "+880 1758 759843",
  resume: "/resume.pdf",
  avatar: "/avatar.webp",
  company: "Dorik AI",
  companyUrl: "https://dorik.com",
  since: "2021",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// social.key drives which icon renders (see components/icons.tsx)
export const socials = [
  { key: "github", label: "GitHub", handle: "/imbillal", url: "https://github.com/imbillal" },
  { key: "linkedin", label: "LinkedIn", handle: "/imbillal", url: "https://www.linkedin.com/in/imbillal/" },
  { key: "x", label: "X (Twitter)", handle: "/imbillal", url: "https://x.com/imbillal" /* TODO: confirm handle */ },
];

export const about = {
  heading: "Building modern web, one component at a time",
  body: (years: string): string[] => [
    `I'm Billal Hossain — a Software Engineer with ${years} years of experience building modern web applications with React, Next.js, and the latest web technologies. I learn fast and adapt to new tools to ship high-quality, dependable solutions.`,
    "I currently work as a Software Engineer at Dorik AI, where I've led 45+ major epics on a sophisticated website-building platform reaching 150K+ users — owning everything from state management and API integration to testing and accessible UI.",
    "I'm a strong team player who collaborates closely with designers, engineers, and product teams, and I care about the whole software lifecycle, from planning right through to deployment.",
  ],
};

export function stats() {
  return [
    { num: yearsExp(), label: "years building" },
    { num: "150K+", label: "users reached" },
    { num: "45+", label: "epics led" },
  ];
}

export type SkillGroup = { title: string; tag: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    tag: "frameworks & language",
    items: ["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "RTK Query", "TanStack Query"],
  },
  {
    title: "UI & Styling",
    tag: "the interface layer",
    items: ["Tailwind CSS", "SCSS / LESS", "Styled Components", "Ant Design", "Framer Motion", "ShadCN", "PWA"],
  },
  {
    title: "Backend & Data",
    tag: "the other half",
    items: ["Node.js", "Express", "REST API", "GraphQL", "MongoDB", "Firebase"],
  },
  {
    title: "Testing",
    tag: "quality & confidence",
    items: ["Jest", "Vitest", "React Testing Library", "MSW", "Browserstack"],
  },
  {
    title: "Tooling",
    tag: "day-to-day workflow",
    items: ["Vite", "Webpack", "Git", "Docker", "Postman", "Sentry", "Linear", "Jira"],
  },
];

export type Job = {
  role: string;
  company: string;
  url?: string;
  tags?: string[];
  place?: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Dorik AI",
    url: "https://dorik.com",
    tags: ["Full-time"],
    place: "Sylhet, BD",
    period: "Jun 2021 — Present",
    current: true,
    points: [
      "Build and enhance a sophisticated no-code website-building platform with React & Next.js, working through complex codebases to grow Dorik AI's frontend.",
      "Led 45+ major epics impacting 150K+ users, backed by robust unit & integration testing in Jest, Vitest and React Testing Library.",
      "Used Redux, RTK Query and TanStack Query for seamless REST & GraphQL integration, state management and data caching.",
      "Translated Figma, Tailwind and Ant Design specs into responsive, accessible, pixel-faithful interfaces.",
      "Documented with JSDoc, tracked issues via Sentry, and took part in daily code reviews to keep feedback tight.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Ek Takar Khobor",
    tags: ["Part-time", "Remote"],
    place: "Dhaka, BD",
    period: "Feb 2024 — Jun 2024",
    points: [
      "Set up a scalable, modular Next.js + TypeScript project with the right build configuration from the ground up.",
      "Built interactive reels and a video-stream player (YouTube / Instagram style) with smooth transitions and time-segmented streaming.",
      "Translated 18 Figma pages into pixel-perfect Ant Design screens, using ShadCN to ship faster.",
      "Achieved 100% cross-browser compatibility and responsiveness across all devices.",
    ],
  },
  {
    role: "Frontend Developer", // TODO: replace with your real earlier role(s)
    company: "Freelance / Early Work",
    tags: ["Freelance", "Remote"],
    period: "2019 — 2021",
    points: [
      "Delivered marketing sites and small web apps for clients with React and modern JavaScript.",
      "Sharpened the fundamentals: semantic HTML, responsive layout, and performance.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  url: string;
  tags?: string[];
  live?: boolean;
  description: string;
  features: string[];
  stack?: string[];
};

export const projects: Project[] = [
  {
    name: "Pinreview",
    tagline: "Visual website feedback & bug tracking",
    url: "https://pinreview.one",
    tags: ["Founder", "SaaS"],
    live: true,
    description:
      "Pinreview turns website feedback into action. Click any element to leave a comment — it becomes a task with a screenshot, the exact selector, and full technical context.",
    features: [
      "Pin feedback on any element",
      "Auto-captured screenshots",
      "Kanban triage",
      "Embeddable widget",
      "Browser extension",
      "Slack & webhooks",
      "AI coding tool handoff",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL","Tailwind CSS"],
  },
];

export type Education ={ degree: string; school: string; period: string };

export const education: Education[] = [
  { degree: "MBA — Business Administration", school: "Madan Mohan College, Sylhet", period: "2021 — 2022" },
  { degree: "BBA — Business Administration", school: "Madan Mohan College, Sylhet", period: "2016 — 2020" },
];
