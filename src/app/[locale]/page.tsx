import { T, Var, Currency, DateTime, Plural } from "gt-next";
import { getGT, getTranslations } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";

type Job = {
  id: number;
  dictKey: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  deadline: Date;
  requirements: number;
};

const jobs: Job[] = [
  {
    id: 1,
    dictKey: "1",
    salaryMin: 150000,
    salaryMax: 200000,
    currency: "USD",
    deadline: new Date("2026-04-15"),
    requirements: 5,
  },
  {
    id: 2,
    dictKey: "2",
    salaryMin: 65000,
    salaryMax: 85000,
    currency: "EUR",
    deadline: new Date("2026-03-30"),
    requirements: 3,
  },
  {
    id: 3,
    dictKey: "3",
    salaryMin: 7000000,
    salaryMax: 10000000,
    currency: "JPY",
    deadline: new Date("2026-05-01"),
    requirements: 4,
  },
  {
    id: 4,
    dictKey: "4",
    salaryMin: 120000,
    salaryMax: 160000,
    currency: "USD",
    deadline: new Date("2026-04-10"),
    requirements: 6,
  },
  {
    id: 5,
    dictKey: "5",
    salaryMin: 70000,
    salaryMax: 95000,
    currency: "GBP",
    deadline: new Date("2026-03-25"),
    requirements: 4,
  },
  {
    id: 6,
    dictKey: "6",
    salaryMin: 110000,
    salaryMax: 140000,
    currency: "AUD",
    deadline: new Date("2026-04-20"),
    requirements: 3,
  },
];

async function JobCard({ job, locale }: { job: Job; locale: string }) {
  const d = await getTranslations("jobs." + job.dictKey);

  return (
    <Link href={`/${locale}/jobs/${job.id}`} className="block border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100">
            {d("title")}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            {d("company")} — {d("location")}
          </p>
        </div>
        <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700 whitespace-nowrap">
          {d("type")}
        </span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed mb-4">
        {d("description")}
      </p>
      <T>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-neutral-500">
          <span>
            Salary: <Currency currency={job.currency}>{job.salaryMin}</Currency>{" "}
            — <Currency currency={job.currency}>{job.salaryMax}</Currency>
          </span>
          <span>
            Deadline: <DateTime>{job.deadline}</DateTime>
          </span>
          <span>
            <Plural
              n={job.requirements}
              singular={
                <>
                  <Var>{job.requirements}</Var> requirement
                </>
              }
              plural={
                <>
                  <Var>{job.requirements}</Var> requirements
                </>
              }
            />
          </span>
        </div>
      </T>
    </Link>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Job Board")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/job-board"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Open Positions
            </h2>
            <p className="text-base text-neutral-400 max-w-2xl leading-relaxed">
              Browse current job openings across engineering, design, and data
              roles. Salaries, deadlines, and requirements are formatted for your
              locale.
            </p>
          </T>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} locale={locale} />
          ))}
        </div>
      </main>

      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <T>
            <p className="text-xs text-neutral-600 text-center">
              Built with General Translation to demonstrate locale-aware
              formatting of currencies, dates, and plurals.
            </p>
          </T>
        </div>
      </footer>
    </div>
  );
}
