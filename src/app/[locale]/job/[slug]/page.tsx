import { T, Currency, DateTime, Var } from "gt-next";
import { getTranslations } from "gt-next/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import { getJobBySlug, jobs } from "@/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const d = await getTranslations("jobs." + job.dictKey);
  const c = await getTranslations("companies." + job.companySlug);

  const requirements: string[] = [];
  for (let i = 0; ; i++) {
    try {
      const val = d(`requirements.${i}`);
      if (!val || val === `requirements.${i}`) break;
      requirements.push(val);
    } catch {
      break;
    }
  }

  const benefits: string[] = [];
  for (let i = 0; ; i++) {
    try {
      const val = d(`benefits.${i}`);
      if (!val || val === `benefits.${i}`) break;
      benefits.push(val);
    } catch {
      break;
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />
      <Disclaimer />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <T>
            <span>&larr;</span> <span>Back to all positions</span>
          </T>
        </Link>

        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-semibold text-neutral-100 mb-2">
                {d("title")}
              </h1>
              <p className="text-base text-neutral-400">
                <Link
                  href={`/company/${job.companySlug}`}
                  className="hover:text-neutral-200 underline underline-offset-2 transition-colors"
                >
                  {d("company")}
                </Link>
                {" — "}
                {d("location")}
              </p>
            </div>
            <span className="inline-flex items-center self-start px-3 py-1 rounded text-sm font-medium bg-neutral-800 text-neutral-300 border border-neutral-700 whitespace-nowrap">
              {d("type")}
            </span>
          </div>

          <T>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-neutral-500 mt-4 pb-8 border-b border-neutral-800">
              <span>
                Salary:{" "}
                <Currency currency={job.currency}>{job.salaryMin}</Currency> —{" "}
                <Currency currency={job.currency}>{job.salaryMax}</Currency>
              </span>
              <span>
                Deadline: <DateTime>{job.deadline}</DateTime>
              </span>
              <span>
                Department: <Var>{d("department")}</Var>
              </span>
            </div>
          </T>
        </div>

        <div className="space-y-10">
          <section>
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                About the role
              </h2>
            </T>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {d("fullDescription")}
            </p>
          </section>

          {requirements.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Requirements
                </h2>
              </T>
              <ul className="space-y-2">
                {requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-400"
                  >
                    <span className="text-neutral-600 mt-1 shrink-0">
                      &bull;
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {benefits.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Benefits
                </h2>
              </T>
              <ul className="space-y-2">
                {benefits.map((ben, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-400"
                  >
                    <span className="text-neutral-600 mt-1 shrink-0">
                      &bull;
                    </span>
                    {ben}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="border border-neutral-800 rounded-lg p-6">
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-2">
                About the company
              </h2>
            </T>
            <p className="text-sm text-neutral-400 leading-relaxed mb-3">
              {c("description")}
            </p>
            <Link
              href={`/company/${job.companySlug}`}
              className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              <T>
                <span>View company profile</span> <span>&rarr;</span>
              </T>
            </Link>
          </section>

          <section className="border border-neutral-800 rounded-lg p-8 text-center">
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-3">
                Apply for this position
              </h2>
              <p className="text-sm text-neutral-400 mb-6 max-w-md mx-auto">
                Interested in this role? This is a demo application, but in a
                real job board you would submit your application here.
              </p>
              <button className="bg-neutral-100 text-neutral-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                Submit application
              </button>
            </T>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
