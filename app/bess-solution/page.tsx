import {
  ArrowRight,
  BatteryCharging,
  CheckCircle,
  Server,
  Sliders,
  Thermometer,
} from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BESS Container Solutions – Solrato Power",
  description:
    "Advanced containerized Battery Energy Storage Systems (BESS) designed for utility-grade projects and large industrial applications scaling 1MWh and above.",
  openGraph: {
    title: "BESS Container Solutions – Solrato Power",
    description:
      "Advanced containerized Battery Energy Storage Systems (BESS) designed for utility-grade projects and large industrial applications scaling 1MWh and above.",
    url: "https://solrato.com/bess-solution",
    siteName: "Solrato Power",
  },
};

const BessSolutionPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Utility Scale Storage
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            BESS Container Solutions
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-base/relaxed font-medium text-brand-dark-gray sm:text-lg">
            Containerized solutions to cater to your large Commercial & Industrial (C&I) and
            Utility-Grade energy storage requirements.
          </p>
        </div>
      </section>

      {/* Main details */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Visual Specs */}
            <div className="flex flex-col gap-8 rounded-3xl bg-brand-dark p-10 text-white shadow-xl">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                  Specifications
                </span>
                <h3 className="mt-2 text-2xl font-bold">BESS Container Architecture</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Thermometer className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <div>
                    <h4 className="text-sm font-bold">Liquid Thermal Cooling</h4>
                    <p className="mt-0.5 text-xs text-brand-medium-gray/60">
                      Keeps cells running at optimum temperature to extend battery lifespan by up to
                      20%.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sliders className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <div>
                    <h4 className="text-sm font-bold">Intelligent Three-Tier BMS</h4>
                    <p className="mt-0.5 text-xs text-brand-medium-gray/60">
                      Smart cell, cluster, and container level monitoring for preemptive warning
                      parameters.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BatteryCharging className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <div>
                    <h4 className="text-sm font-bold">High Density LFP Chemistry</h4>
                    <p className="mt-0.5 text-xs text-brand-medium-gray/60">
                      Uses high-quality prismatic LFP cells optimized for rapid charging and maximum
                      depth-of-discharge.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Written details */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Server className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">Macro Energy Management</h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Yes, our BESS (Battery Energy Storage System) Container Solutions are designed
                specifically for large C&I and utility-grade requirements. These fully containerized
                setups are engineered to handle massive capacities of 1 MWh and above, delivering
                intelligent, scalable, and reliable power management on a macro level.
              </p>
              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <span className="text-sm text-brand-dark-gray">
                    Liquid-cooled options to maximize cycle life and efficiency.
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <span className="text-sm text-brand-dark-gray">
                    Peak-shaving and load shifting integration to reduce grid tariff charges.
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <span className="text-sm text-brand-dark-gray">
                    Automatic power islanding and smart utility synchronization.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies related banner */}
      <section className="border-t border-brand-medium-gray/10 bg-brand-light-gray py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
            Proven Project
          </span>
          <h2 className="text-2xl font-bold text-brand-dark">
            100kW Hybrid BESS & 250kWh Storage Case Study
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-dark-gray">
            See how our advanced container BESS system solved unreliable grid issues, cut demand
            charges by 35%, and enabled seamless backup transition for a commercial facility.
          </p>
          <div className="mt-4">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white hover:bg-brand-purple-hover"
            >
              Read BESS Case Study
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5 bg-brand-dark py-20 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
          <h2 className="font-inter text-2xl font-bold sm:text-3xl">
            Request a custom BESS feasibility study
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Take the first step toward macro-scale energy independence.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-coral-hover"
            >
              Contact Our Engineers
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BessSolutionPage;
