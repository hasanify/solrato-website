import {
  ArrowLeft,
  Battery,
  Calendar,
  CheckCircle,
  Cpu,
  MapPin,
  Server,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "@/lib/case-studies-data";

import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} – Solrato Power`,
    description: study.summary,
    openGraph: {
      title: `${study.title} – Solrato Power`,
      description: study.summary,
      url: `https://solrato.com/case-studies/${study.slug}`,
      siteName: "Solrato Power",
    },
  };
};

const CaseStudyDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-coral uppercase transition-colors hover:text-brand-coral-hover"
          >
            <ArrowLeft className="size-4" /> Back to Case Studies
          </Link>
          <h1 className="max-w-5xl text-3xl/tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            {/* Written case study content (8/12) */}
            <div className="flex flex-col gap-12 lg:col-span-8">
              {/* Challenge */}
              <div className="flex flex-col gap-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-dark">
                  <ShieldAlert className="size-6 shrink-0 text-brand-coral" />
                  The Challenge
                </h2>
                <p className="text-base/relaxed text-brand-dark-gray">{study.challenge}</p>

                <div className="mt-4 rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-6">
                  <h4 className="mb-4 text-xs font-bold tracking-wider text-brand-dark uppercase">
                    Key Pain Points:
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {study.challengePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-coral/10 text-xs font-bold text-brand-coral">
                          {index + 1}
                        </span>
                        <span className="text-sm/relaxed text-brand-dark-gray">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="flex flex-col gap-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-dark">
                  <Cpu className="size-6 shrink-0 text-brand-purple" />
                  The Solution
                </h2>
                <p className="text-base/relaxed text-brand-dark-gray">{study.solution}</p>

                <div className="mt-4 rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-6">
                  <h4 className="mb-4 text-xs font-bold tracking-wider text-brand-dark uppercase">
                    Implementation Elements:
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {study.solutionPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-xs font-bold text-brand-purple">
                          {index + 1}
                        </span>
                        <span className="text-sm/relaxed text-brand-dark-gray">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-dark">
                  <CheckCircle className="size-6 shrink-0 text-brand-green" />
                  Project Impact & Results
                </h2>
                <ul className="flex flex-col gap-4">
                  {study.impact.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-brand-green/10 bg-brand-green/5 p-4"
                    >
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-green" />
                      <span className="text-sm/relaxed font-medium text-brand-dark">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spec details sidebar (4/12) */}
            <aside className="flex w-full flex-col gap-6 rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-8 lg:col-span-4">
              <h3 className="border-b border-brand-medium-gray/20 pb-4 text-base font-bold tracking-wider text-brand-dark uppercase">
                Project Specifications
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark-gray/60 uppercase">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{study.location}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark-gray/60 uppercase">
                      Commission Date
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{study.date}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Server className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark-gray/60 uppercase">
                      System Capacity
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{study.capacity}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Cpu className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark-gray/60 uppercase">
                      Inverter Model
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{study.inverter}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Battery className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark-gray/60 uppercase">
                      Battery System
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{study.battery}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-brand-medium-gray/20 pt-6">
                <Link
                  href="/partner-with-us"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-purple py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-purple/10 transition-colors hover:bg-brand-purple-hover"
                >
                  Consult on Similar Project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
