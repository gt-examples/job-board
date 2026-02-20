"use client";

import { useGT } from "gt-next/client";

export default function JobSearch({
  search,
  department,
  type,
}: {
  search: string;
  department: string;
  type: string;
}) {
  const gt = useGT();

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <form className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder={gt("Search positions...")}
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
        />
        <select
          name="department"
          defaultValue={department}
          className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 transition-colors"
        >
          <option value="">{gt("All departments")}</option>
          <option value="Engineering">{gt("Engineering")}</option>
          <option value="Design">{gt("Design")}</option>
          <option value="Infrastructure">{gt("Infrastructure")}</option>
          <option value="Data Science">{gt("Data Science")}</option>
        </select>
        <select
          name="type"
          defaultValue={type}
          className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 transition-colors"
        >
          <option value="">{gt("All types")}</option>
          <option value="Full-time">{gt("Full-time")}</option>
          <option value="Part-time">{gt("Part-time")}</option>
          <option value="Contract">{gt("Contract")}</option>
        </select>
        <button
          type="submit"
          className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors"
        >
          {gt("Filter")}
        </button>
      </form>
    </div>
  );
}
