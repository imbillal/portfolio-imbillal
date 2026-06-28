# billal.dev — personal portfolio

Personal site of **Billal Hossain**, Software Engineer (React · Next.js).

A dark, terminal-flavoured single-page portfolio: fixed sidebar with scroll-spy
navigation, an animated hero (aurora, cursor spotlight, typewriter), a signature
"dev ID card", a skills grid, an experience timeline, education, and contact —
all with light/dark theming and scroll-reveal motion.

## Tech

- [Next.js](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- Fonts: Fraunces · Space Grotesk · Inter · JetBrains Mono

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, socials, skills,
experience, and education. Years of experience are computed automatically from
the career start date, so the "X+ years" figure never goes stale. Drop a new
`public/avatar.webp` and `public/resume.pdf` to swap the photo and résumé.
