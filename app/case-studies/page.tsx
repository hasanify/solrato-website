import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import Link from "next/link";

import { caseStudies } from "@/lib/case-studies-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Solrato Power",
  description:
    "Explore our real solar and battery energy storage (BESS) projects. Read how we deliver reliable power, reduce diesel dependency, and cut energy tariffs.",
  openGraph: {
    title: "Case Studies – Solrato Power",
    description:
      "Explore our real solar and battery energy storage (BESS) projects. Read how we deliver reliable power, reduce diesel dependency, and cut energy tariffs.",
    url: "https://solrato.com/case-studies",
    siteName: "Solrato Power",
  },
};

const CaseStudiesPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Portfolio & Results
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Case Studies</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-brand-dark">Energy Systems in Action</h2>
          <p className="text-base/relaxed text-brand-dark-gray">
            From installation to performance —&gt; real projects, real results. Explore how Solrato
            helps hospitals, factories, and resorts achieve energy autonomy.
          </p>
        </div>
      </section>

      {/* List Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="group flex flex-col justify-between rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-4 text-xs text-brand-dark-gray/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3 text-brand-coral" />
                      {study.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 text-brand-coral" />
                      {study.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="size-3 text-brand-coral" />
                      {study.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl/tight font-bold text-brand-dark transition-colors group-hover:text-brand-purple">
                    {study.title}
                  </h3>

                  <p className="text-sm/relaxed text-brand-dark-gray">{study.summary}</p>
                </div>

                <div className="mt-8 border-t border-brand-medium-gray/10 pt-6">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand-purple hover:text-brand-purple-hover"
                  >
                    Read Detailed Project Study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5 bg-brand-dark py-20 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
          <h2 className="font-inter text-2xl font-bold sm:text-3xl">
            Have a project that requires reliable power?
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Partner with Solrato to design, source, and support a scalable energy storage system.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-coral-hover"
            >
              Consult Our Engineers
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
