import { T } from "gt-next";
import { getGT, getTranslations } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { notFound } from "next/navigation";

const companyJobs: Record<string, string[]> = {
  "meridian-systems": ["1"],
  "norden-analytics": ["2"],
  "luma-creative": ["3"],
  "cirrus-infrastructure": ["4"],
  "vantage-research": ["5"],
  "aether-apps": ["6"],
};

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!companyJobs[slug]) notFound();

  const d = await getTranslations("companies." + slug);
  const gt = await getGT();
  const jobIds = companyJobs[slug];

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

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-neutral-100 mb-2">{d("name")}</h1>
          <p className="text-lg text-neutral-400 italic">{d("tagline")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="border border-neutral-800 rounded-lg p-5 space-y-3">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Company Details</h3>
            </T>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-neutral-500"><T>Founded</T></dt>
                <dd className="text-neutral-300">{d("founded")}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500"><T>Headquarters</T></dt>
                <dd className="text-neutral-300">{d("headquarters")}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500"><T>Employees</T></dt>
                <dd className="text-neutral-300">{d("employees")}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500"><T>Industry</T></dt>
                <dd className="text-neutral-300">{d("industry")}</dd>
              </div>
            </dl>
          </div>

          <div className="border border-neutral-800 rounded-lg p-5 space-y-3">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Tech Stack</h3>
            </T>
            <div className="flex flex-wrap gap-2">
              {d("techStack")
                .split(", ")
                .map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <section className="mb-10">
          <T>
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">About</h2>
          </T>
          <p className="text-neutral-400 leading-relaxed">{d("description")}</p>
        </section>

        <section className="mb-10">
          <T>
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Culture</h2>
          </T>
          <p className="text-neutral-400 leading-relaxed">{d("culture")}</p>
        </section>

        <section>
          <T>
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Open Positions</h2>
          </T>
          <div className="space-y-3">
            {await Promise.all(
              jobIds.map(async (jobId) => {
                const jd = await getTranslations("jobs." + jobId);
                return (
                  <Link
                    key={jobId}
                    href={`/${locale}/jobs/${jobId}`}
                    className="block border border-neutral-800 rounded-lg p-5 hover:border-neutral-600 transition-colors"
                  >
                    <h3 className="text-base font-semibold text-neutral-100">{jd("title")}</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {jd("location")} · {jd("type")}
                    </p>
                  </Link>
                );
              })
            )}
          </div>
        </section>
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
