import { T, Var, Currency, DateTime } from "gt-next";
import { getTranslations } from "gt-next/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import { getJobsByCompany, jobs } from "@/jobs";
import dictionary from "@/dictionary";

const companySlugs = Object.keys(dictionary.companies);

export const dynamic = "force-dynamic";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!companySlugs.includes(slug)) notFound();

  const c = await getTranslations("companies." + slug);
  const companyJobs = getJobsByCompany(slug);

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
          <h1 className="text-3xl font-semibold text-neutral-100 mb-2">
            {c("name")}
          </h1>
          <T>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mt-3">
              <span>
                Industry: <Var>{c("industry")}</Var>
              </span>
              <span>
                Size: <Var>{c("size")}</Var>
              </span>
              <span>
                Founded: <Var>{c("founded")}</Var>
              </span>
              <span>
                Headquarters: <Var>{c("headquarters")}</Var>
              </span>
            </div>
          </T>
        </div>

        <div className="space-y-10">
          <section>
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                About
              </h2>
            </T>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {c("description")}
            </p>
          </section>

          <section>
            <T>
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                Culture
              </h2>
            </T>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {c("culture")}
            </p>
          </section>

          {companyJobs.length > 0 && (
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Open positions at this company
                </h2>
              </T>
              <div className="flex flex-col gap-3">
                {companyJobs.map(async (job) => {
                  const d = await getTranslations("jobs." + job.dictKey);
                  return (
                    <Link
                      key={job.id}
                      href={`/job/${job.slug}`}
                      className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-600 transition-colors group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-neutral-100 group-hover:text-white transition-colors">
                            {d("title")}
                          </h3>
                          <p className="text-sm text-neutral-500 mt-0.5">
                            {d("location")} — {d("type")}
                          </p>
                        </div>
                        <T>
                          <span className="text-sm text-neutral-500">
                            <Currency currency={job.currency}>
                              {job.salaryMin}
                            </Currency>{" "}
                            —{" "}
                            <Currency currency={job.currency}>
                              {job.salaryMax}
                            </Currency>
                          </span>
                        </T>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
