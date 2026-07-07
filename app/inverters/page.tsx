import { ArrowRight, CheckCircle, Cpu, Server, Shield, Sun, Zap } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Inverters – Solrato Power",
  description:
    "Explore our range of Low Voltage and High Voltage solar hybrid and grid-tied inverters from leading partners Sunways & Solinteg.",
  openGraph: {
    title: "Solar Inverters – Solrato Power",
    description:
      "Explore our range of Low Voltage and High Voltage solar hybrid and grid-tied inverters from leading partners Sunways & Solinteg.",
    url: "https://solrato.com/inverters",
    siteName: "Solrato Power",
  },
};

const InvertersPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Page Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Conversion & Intelligence
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Solar Inverters
          </h1>
        </div>
      </section>

      {/* Main intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center">
          <p className="text-base/relaxed text-brand-dark-gray sm:text-lg">
            We offer a comprehensive range of Low Voltage and High Voltage Solar Hybrid Inverters
            designed for residential, commercial, and industrial (C&I) applications. Our distributed
            product line features advanced Sunways inverters, which are carefully calibrated with
            optimized PV oversizing specifications to maximize your energy yield and ensure
            long-term system efficiency.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-8">
          {/* Brand 1: Sunways */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Sun className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Empowering Projects with German Engineering
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Solrato brings you <strong>Sunways</strong>, a global leader founded in Konstanz,
                Germany in 1993. With a focus on high-efficiency connectivity, Sunways offers a
                versatile range of inverters that seamlessly integrate solar generation with smart
                energy management, ensuring reliability for installers and EPCs.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Optimized PV oversizing parameters up to 150%
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    German R&D and build quality since 1993
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Versatile communication options for remote monitoring
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8">
              <h3 className="text-xl font-bold text-brand-dark">Sunways Smart Features</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Zap className="mb-2 size-5 text-brand-purple" />
                  <h4 className="text-sm font-bold text-brand-dark">High Yield</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Multi-MPPT designs and low start-up voltage translate to more solar hours
                    harvested.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Shield className="mb-2 size-5 text-brand-purple" />
                  <h4 className="font-inter text-sm font-bold text-brand-dark">IP66 Build</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Industrial-grade casing ensures protection against severe dust, moisture, and
                    temperature fluctuations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Brand 2: Solinteg */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8 lg:order-1">
              <h3 className="text-xl font-bold text-brand-dark">Solinteg Product Matrix</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Cpu className="mb-2 size-5 text-brand-coral" />
                  <h4 className="text-sm font-bold text-brand-dark">Integ One</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Single-phase and three-phase residential hybrid systems designed for clean
                    spaces and silent operation.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Server className="mb-2 size-5 text-brand-coral" />
                  <h4 className="text-sm font-bold text-brand-dark">M2HT Commercial</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Heavy-duty commercial hybrid series handling high inputs and delivering critical
                    UPS failovers.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Compact Design, Advanced Efficiency
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                From the residential <strong>Integ One</strong> to heavy-duty{" "}
                <strong>M2HT commercial series</strong>, Solinteg offers a curated selection of
                grid-tied and hybrid inverters. Featuring IP65 protection and smart energy
                management, these units are built to deliver maximum energy harvesting and reliable
                backup power in a sleek, space-saving footprint.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Sleek space-saving aesthetics suitable for homes & offices
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Smart EMS integration for real-time load management
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Under 10ms switching time for critical loads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5 bg-brand-dark py-20 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to specify inverters for your project?
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Get technical assistance and direct supply pricing from our specialized engineering
            team.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-purple-hover"
            >
              Get a Quote
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvertersPage;
