export type Job = {
  id: number;
  dictKey: string;
  slug: string;
  companySlug: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  deadline: Date;
  requirementCount: number;
  department: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    dictKey: "1",
    slug: "senior-frontend-engineer",
    companySlug: "meridian-systems",
    salaryMin: 150000,
    salaryMax: 200000,
    currency: "USD",
    deadline: new Date("2026-04-15"),
    requirementCount: 5,
    department: "Engineering",
  },
  {
    id: 2,
    dictKey: "2",
    slug: "backend-developer",
    companySlug: "norden-analytics",
    salaryMin: 65000,
    salaryMax: 85000,
    currency: "EUR",
    deadline: new Date("2026-03-30"),
    requirementCount: 3,
    department: "Engineering",
  },
  {
    id: 3,
    dictKey: "3",
    slug: "product-designer",
    companySlug: "luma-creative",
    salaryMin: 7000000,
    salaryMax: 10000000,
    currency: "JPY",
    deadline: new Date("2026-05-01"),
    requirementCount: 4,
    department: "Design",
  },
  {
    id: 4,
    dictKey: "4",
    slug: "devops-engineer",
    companySlug: "cirrus-infrastructure",
    salaryMin: 120000,
    salaryMax: 160000,
    currency: "USD",
    deadline: new Date("2026-04-10"),
    requirementCount: 6,
    department: "Infrastructure",
  },
  {
    id: 5,
    dictKey: "5",
    slug: "data-scientist",
    companySlug: "vantage-research",
    salaryMin: 70000,
    salaryMax: 95000,
    currency: "GBP",
    deadline: new Date("2026-03-25"),
    requirementCount: 4,
    department: "Data Science",
  },
  {
    id: 6,
    dictKey: "6",
    slug: "mobile-developer",
    companySlug: "aether-apps",
    salaryMin: 110000,
    salaryMax: 140000,
    currency: "AUD",
    deadline: new Date("2026-04-20"),
    requirementCount: 3,
    department: "Engineering",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getJobsByCompany(companySlug: string): Job[] {
  return jobs.filter((j) => j.companySlug === companySlug);
}
