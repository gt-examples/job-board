import { T, Currency, DateTime, Plural, Var } from "gt-next";
import { getGT, getTranslations } from "gt-next/server";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import JobSearch from "@/components/JobSearch";
import { jobs, type Job } from "@/jobs";

async function JobCard({ job }: { job: Job }) {
  const d = await getTranslations("jobs." + job.dictKey);

  return (
    <Link
      href={`/job/${job.slug}`}
      className="block border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors group"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
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
              n={job.requirementCount}
              singular={
                <>
                  <Var>{job.requirementCount}</Var> requirement
                </>
              }
              plural={
                <>
                  <Var>{job.requirementCount}</Var> requirements
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
  searchParams,
}: {
  searchParams: Promise<{ q?: string; department?: string; type?: string }>;
}) {
  const gt = await getGT();
  const params = await searchParams;
  const search = params.q || "";
  const department = params.department || "";
  const type = params.type || "";

  // Filter jobs based on search params (filtering on dictionary keys for title/company matching)
  const { default: dictionary } = await import("@/dictionary");
  const filteredJobs = jobs.filter((job) => {
    const jobDict =
      dictionary.jobs[job.dictKey as unknown as keyof typeof dictionary.jobs];
    if (
      search &&
      !jobDict.title.toLowerCase().includes(search.toLowerCase()) &&
      !jobDict.company.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    if (department && jobDict.department !== department) return false;
    if (type && jobDict.type !== type) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />
      <Disclaimer />

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

        <JobSearch search={search} department={department} type={type} />

        <div className="flex flex-col gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <T>
              <p className="text-neutral-500 text-center py-12">
                No positions match your search criteria. Try adjusting your
                filters.
              </p>
            </T>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
