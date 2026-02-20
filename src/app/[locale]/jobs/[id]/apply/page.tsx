"use client";

import { T, Var } from "gt-next";
import { useGT, useTranslations } from "gt-next/client";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const gt = useGT();
  const d = useTranslations("apply");
  const jobD = useTranslations("jobs." + id);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-2xl font-bold text-neutral-100 mb-3">{d("successHeading")}</h1>
          <p className="text-neutral-400 mb-8">{d("successMessage")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/jobs/${id}`}
              className="px-5 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 transition-colors"
            >
              {d("backToJob")}
            </Link>
            <Link
              href={`/${locale}`}
              className="px-5 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 transition-colors"
            >
              {d("backToAll")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      <main className="max-w-2xl mx-auto px-6 py-12">
        <Link
          href={`/${locale}/jobs/${id}`}
          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
        >
          <T>
            <span>← Back to Job</span>
          </T>
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-100 mb-2">{d("heading")}</h1>
          <T>
            <p className="text-neutral-400">
              Applying for: <span className="text-neutral-200 font-medium"><Var>{jobD("title")}</Var></span> at{" "}
              <span className="text-neutral-200 font-medium"><Var>{jobD("company")}</Var></span>
            </p>
          </T>
          <p className="text-sm text-neutral-500 mt-2">{d("subtitle")}</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("fullName")} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={d("fullNamePlaceholder")}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("email")} <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder={d("emailPlaceholder")}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("phone")}
              <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
            </label>
            <input
              type="tel"
              placeholder={d("phonePlaceholder")}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("resume")} <span className="text-red-400">*</span>
            </label>
            <div className="border-2 border-dashed border-neutral-800 rounded-lg p-6 text-center hover:border-neutral-600 transition-colors cursor-pointer">
              <T>
                <p className="text-sm text-neutral-500">
                  Drag and drop your file here, or click to browse
                </p>
              </T>
              <p className="text-xs text-neutral-600 mt-1">{d("resumeHint")}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("coverLetter")}
              <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
            </label>
            <textarea
              rows={5}
              placeholder={d("coverLetterPlaceholder")}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                {d("linkedIn")}
                <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
              </label>
              <input
                type="url"
                placeholder={d("linkedInPlaceholder")}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                {d("portfolio")}
                <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
              </label>
              <input
                type="url"
                placeholder={d("portfolioPlaceholder")}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                {d("startDate")}
                <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                {d("salaryExpectation")}
                <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
              </label>
              <input
                type="text"
                placeholder={d("salaryExpectationPlaceholder")}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              {d("howDidYouHear")}
              <span className="text-neutral-600 text-xs ml-2">({d("optional")})</span>
            </label>
            <select className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-neutral-600 transition-colors">
              <option value="">—</option>
              <option value="search">{d("howDidYouHearOptions.search")}</option>
              <option value="social">{d("howDidYouHearOptions.socialMedia")}</option>
              <option value="referral">{d("howDidYouHearOptions.referral")}</option>
              <option value="jobboard">{d("howDidYouHearOptions.jobBoard")}</option>
              <option value="other">{d("howDidYouHearOptions.other")}</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
            >
              {d("submitApplication")}
            </button>
          </div>
        </form>
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
