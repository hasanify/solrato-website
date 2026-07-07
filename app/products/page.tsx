import { ArrowRight, Battery, CheckCircle, Cpu, Server } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products – Solrato Power",
  description:
    "Explore Solrato Power's advanced solar energy stack. We offer high-efficiency solar inverters, scalable lithium LFP batteries, and containerized BESS solutions.",
  openGraph: {
    title: "Products – Solrato Power",
    description:
      "Explore Solrato Power's advanced solar energy stack. We offer high-efficiency solar inverters, scalable lithium LFP batteries, and containerized BESS solutions.",
    url: "https://solrato.com/products",
    siteName: "Solrato Power",
  },
};

const ProductsPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Our Energy Stack
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Products</h1>
        </div>
      </section>

      {/* Main intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
            Advanced Solar Technology & Intelligent Energy Management
          </h2>
          <p className="text-base/relaxed text-brand-dark-gray">
            Designed to meet the diverse demands of modern energy consumers, Solrato provides
            innovative technology across the entire solar ecosystem—from highly efficient on-grid
            and hybrid inverters to scalable, high-density LFP energy storage systems. Built with
            advanced grid-compliance, wide MPPT ranges, and robust thermal management, our products
            are rigorously tested to ensure seamless power generation and storage under varying
            environmental conditions.
          </p>
        </div>
      </section>

      {/* Product Categories Detail Grid */}
      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
          {/* Section 1: Inverters */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Solar Hybrid & On-Grid Inverters
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                We supply state-of-the-art hybrid and on-grid solar inverters designed for maximum
                energy harvesting, seamless backup, and robust grid-compliance.
              </p>
              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <p className="text-sm text-brand-dark-gray">
                    <strong>Solinteg (Integ One & M2HT):</strong> Sleek, space-saving footprints
                    with IP65 protection, smart energy management, and scalable backup capabilities.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <p className="text-sm text-brand-dark-gray">
                    <strong>Sunways German Engineering:</strong> German-engineered inverters with
                    high-efficiency connectivity, optimized PV oversizing parameters, and smart
                    utility configurations.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/inverters"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white hover:bg-brand-purple-hover"
                >
                  View Inverter Lineup
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex min-h-80 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-10">
              <span className="mb-2 text-xs font-bold tracking-widest text-brand-purple uppercase">
                Capabilities
              </span>
              <h3 className="mb-4 text-2xl font-bold text-brand-dark">
                Residential & Commercial Inverters
              </h3>
              <p className="mb-6 text-sm/relaxed text-brand-dark-gray">
                From low-voltage setups for homes to high-voltage, high-capacity, multi-MPPT
                inverters for factories and commercial estates, we have the complete power
                translation stack.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-brand-medium-gray/20 pt-6">
                <div>
                  <div className="text-xl font-bold text-brand-purple">Upto 150%</div>
                  <div className="text-xs text-brand-dark-gray">DC Input Oversizing</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-purple">&lt; 10ms</div>
                  <div className="text-xs text-brand-dark-gray">UPS Switching Time</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Section 2: Batteries */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex min-h-80 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-10 lg:order-1">
              <span className="mb-2 text-xs font-bold tracking-widest text-brand-coral uppercase">
                Safety & Scale
              </span>
              <h3 className="mb-4 text-2xl font-bold text-brand-dark">
                High-Density LFP Battery Banks
              </h3>
              <p className="mb-6 text-sm/relaxed text-brand-dark-gray">
                Lithium Iron Phosphate (LFP) technology delivers stable chemistry, high heat
                tolerance, and zero maintenance overhead for long-term storage configurations.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-brand-medium-gray/20 pt-6">
                <div>
                  <div className="text-xl font-bold text-brand-coral">1C Rate</div>
                  <div className="text-xs text-brand-dark-gray">Ultra-Rapid Charging</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-coral">IP55</div>
                  <div className="text-xs text-brand-dark-gray">Outdoor Protection Class</div>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <Battery className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">Lithium LFP Battery Solutions</h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Our scalable lithium battery solutions provide the safe, long-lasting backup storage
                that makes true grid independence possible.
              </p>
              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <p className="text-sm text-brand-dark-gray">
                    <strong>Dyness Tower Pro & Stack100:</strong> Rackless self-adjusting modules
                    with built-in aerosol fire suppression, IP55 outdoor protection, and rapid
                    charging.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <p className="text-sm text-brand-dark-gray">
                    <strong>Lithium Valley Modules:</strong> Compact, modular 2.56kWh and 5.12kWh
                    modules designed for easy scaling in home or commercial battery racks.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/batteries"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-6 py-3 text-sm font-semibold text-white hover:bg-brand-coral-hover"
                >
                  View Battery Lineup
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Section 3: BESS Container */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Server className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">BESS Container solutions</h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Fully containerized utility-grade energy storage complexes designed to support heavy
                C&I operations, load-shifting, and microgrid setups.
              </p>
              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <p className="text-sm text-brand-dark-gray">
                    Fully integrated containers combining LFP cells, liquid cooling thermal
                    management, BMS, and fire control systems.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-teal" />
                  <p className="text-sm text-brand-dark-gray">
                    Scalable designs starting from 1 MWh capacity and extending upwards for utility
                    sub-stations.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/bess-solution"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-teal/80"
                >
                  Explore BESS Solutions
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex min-h-80 flex-col justify-center rounded-3xl bg-brand-dark p-10 text-white">
              <span className="mb-2 text-xs font-bold tracking-widest text-brand-teal uppercase">
                Macro Power
              </span>
              <h3 className="mb-4 text-2xl font-bold">Grid-Scale & Industrial BESS</h3>
              <p className="mb-6 text-sm/relaxed text-brand-medium-gray/80">
                Our container systems provide microgrids, factories, and utility operators with peak
                shaving, grid ancillary support, and long-duration backup.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="text-xl font-bold text-brand-teal">1 MWh+</div>
                  <div className="text-xs text-brand-medium-gray/60">Configurable Scaling</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-teal">Liquid</div>
                  <div className="text-xs text-brand-medium-gray/60">Cooling Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor banner */}
      <section className="relative border-t border-white/5 bg-brand-dark py-20 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Become a Distributor or Installer</h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Join our pan-India distribution network and get access to custom lead generation,
            marketing support, and direct training programs.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-coral-hover"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
