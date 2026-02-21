# Job Board

A multilingual job listings board demonstrating locale-aware formatting of currencies, dates, and plurals with General Translation.

**[Live Demo](https://job-board.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a realistic job board with six listings across multiple companies. Salaries display in local currencies, deadlines format per locale, and requirement counts use proper pluralization. All content — job descriptions, company profiles, and UI strings — is fully translated using GT's dictionary pattern.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization
- `<Var>` — Dynamic values inside translations
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations
- `getTranslations` — Dictionary-based translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/job-board.git
cd job-board
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
