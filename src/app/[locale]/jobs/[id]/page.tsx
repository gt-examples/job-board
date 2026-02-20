import { T, Var, Currency, DateTime, Plural } from "gt-next";
import { getGT, getTranslations } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { notFound } from "next/navigation";

const jobData: Record<
  string,
  { salaryMin: number; salaryMax: number; currency: string; deadline: Date; requirements: number }
> = {
  "1": { salaryMin: 150000, salaryMax: 200000, currency: "USD", deadline: new Date("2026-04-15"), requirements: 5 },
  "2": { salaryMin: 65000, salaryMax: 85000, currency: "EUR", deadline: new Date("2026-03-30"), requirements: 3 },
  "3": { salaryMin: 7000000, salaryMax: 10000000, currency: "JPY", deadline: new Date("2026-05-01"), requirements: 4 },
  "4": { salaryMin: 120000, salaryMax: 160000, currency: "USD", deadline: new Date("2026-04-10"), requirements: 6 },
  "5": { salaryMin: 70000, salaryMax: 95000, currency: "GBP", deadline: new Date("2026-03-25"), requirements: 4 },
  "6": { salaryMin: 110000, salaryMax: 140000, currency: "AUD", deadline: new Date("2026-04-20"), requirements: 3 },
};

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const job = jobData[id];
  if (!job) notFound();

  const d = await getTranslations("jobs." + id);
  const gt = await getGT();

  const responsibilities: string[] = [];
  for (let i = 0; i < 10; i++) {
    const val = d(`responsibilities.${i}`);
    if (val && val !== `responsibilities.${i}`) responsibilities.push(val);
    else break;
  }

  const qualifications: string[] = [];
  for (let i = 0; i < 10; i++) {
    const val = d(`qualifications.${i}`);
    if (val && val !== `qualifications.${i}`) qualifications.push(val);
    else break;
  }

  const benefits: string[] = [];
  for (let i = 0; i < 10; i++) {
    const val = d(`benefits.${i}`);
    if (val && val !== `benefits.${i}`) benefits.push(val);
    else break;
  }

  const companySlug = d("companySlug");

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
            <Link
              href={`/${locale}`}
              className="text-sm font-semibold text-neutral-100 hover:text-neutral-300 transition-colors"
            >
              {gt("Job Board")}
            </Link>
          </div>
          <LocaleSelector />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
        >
          <T>
            <span>← All Jobs</span>
          </T>
        </Link>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-2">{d("title")}</h1>
              <p className="text-neutral-400">
                <Link
                  href={`/${locale}/companies/${companySlug}`}
                  className="hover:text-neutral-200 underline underline-offset-2 transition-colors"
                >
                  {d("company")}
                </Link>{" "}
                — {d("location")}
              </p>
            </div>
            <span className="inline-flex items-center self-start px-3 py-1 rounded text-sm font-medium bg-neutral-800 text-neutral-300 border border-neutral-700 whitespace-nowrap">
              {d("type")}
            </span>
          </div>

          <T>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500 mt-4 pb-6 border-b border-neutral-800">
              <span>
                Salary: <Currency currency={job.currency}>{job.salaryMin}</Currency> —{" "}
                <Currency currency={job.currency}>{job.salaryMax}</Currency>
              </span>
              <span>
                Deadline: <DateTime>{job.deadline}</DateTime>
              </span>
              <span>
                <Plural
                  n={job.requirements}
                  singular={<><Var>{job.requirements}</Var> requirement</>}
                  plural={<><Var>{job.requirements}</Var> requirements</>}
                />
              </span>
            </div>
          </T>
        </div>

        <div className="space-y-10">
          <section>
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">About the Role</h2>
            </T>
            <p className="text-neutral-400 leading-relaxed">{d("longDescription")}</p>
          </section>

          {responsibilities.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">Responsibilities</h2>
              </T>
              <ul className="space-y-2">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400">
                    <span className="text-neutral-600 mt-1.5 text-xs">●</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {qualifications.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">Qualifications</h2>
              </T>
              <ul className="space-y-2">
                {qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400">
                    <span className="text-neutral-600 mt-1.5 text-xs">●</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {benefits.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">Benefits & Perks</h2>
              </T>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400">
                    <span className="text-emerald-600 mt-1.5 text-xs">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-800">
            <Link
              href={`/${locale}/jobs/${id}/apply`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
            >
              <T>Apply Now</T>
            </Link>
            <Link
              href={`/${locale}/companies/${companySlug}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 transition-colors"
            >
              <T>View Company Profile</T>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <T>
            <p className="text-xs text-neutral-600 text-center">
              Built with General Translation to demonstrate locale-aware formatting of currencies, dates, and plurals.
            </p>
          </T>
        </div>
      </footer>
    </div>
  );
}
