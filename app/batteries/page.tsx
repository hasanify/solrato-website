import { ArrowRight, Battery, CheckCircle, Flame, Layers, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Batteries – Solrato Power",
  description:
    "High-density Lithium LFP battery solutions for residential, C&I, and microgrids from Dyness and Lithium Valley.",
  openGraph: {
    title: "Solar Batteries – Solrato Power",
    description:
      "High-density Lithium LFP battery solutions for residential, C&I, and microgrids from Dyness and Lithium Valley.",
    url: "https://solrato.com/batteries",
    siteName: "Solrato Power",
  },
};

const BatteriesPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            High-Density Storage
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Solar Batteries
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-base/relaxed text-brand-dark-gray sm:text-lg">
            We supply highly scalable Lithium Iron Phosphate (LFP) Battery Solutions suitable for
            both Low Voltage and High Voltage configurations. Our offerings cover a wide spectrum of
            energy needs, from compact residential setups requiring a few kilowatt-hours (kWh) to
            large-scale operations scaling up to Megawatt-hours (MWh).
          </p>
        </div>
      </section>

      {/* Brand grid */}
      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-8">
          {/* Brand 1: Dyness */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <Battery className="size-6" />
              </div>
              <h2 className="font-inter text-3xl font-bold text-brand-dark">
                Engineered for Speed and Safety
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Built for seamless integration, Dyness systems like the <strong>Stack100</strong>{" "}
                and <strong>Tower Pro</strong> feature rackless, self-adjusting modules that reduce
                installation time to under an hour. With built-in aerosol fire suppression, IP55
                outdoor protection, and ultra-rapid 1C charging capabilities, Dyness ensures maximum
                safety and efficiency for installers and end-users alike.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Under-an-hour install time with modular slide-in design
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Built-in aerosol fire suppression for maximum thermal safety
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-sm text-brand-dark-gray">
                    Ultra-rapid 1C charge/discharge rate support
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8">
              <h3 className="text-xl font-bold text-brand-dark">Dyness Premium Tech</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Flame className="mb-2 size-5 text-brand-coral" />
                  <h4 className="text-sm font-bold text-brand-dark">Aerosol Safety</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Autonomous fire suppression canisters built inside every module compartment.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Layers className="mb-2 size-5 text-brand-coral" />
                  <h4 className="text-sm font-bold text-brand-dark">Rackless Stack</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Plug-and-play stacking connectors eliminate cable mess and cabinet costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Brand 2: Lithium Valley */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8 lg:order-1">
              <h3 className="text-xl font-bold text-brand-dark">Lithium Valley Modules</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Zap className="mb-2 size-5 text-brand-purple" />
                  <h4 className="text-sm font-bold text-brand-dark">2.56 kWh</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Compact LFP module ideal for tight residential backyards and modular sizing.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-medium-gray/10 bg-white p-4">
                  <Layers className="mb-2 size-5 text-brand-purple" />
                  <h4 className="text-sm font-bold text-brand-dark">5.12 kWh</h4>
                  <p className="mt-1 text-xs text-brand-dark-gray">
                    Standard cabinet module with high cycle-count performance for small C&I grids.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="font-inter text-3xl font-bold text-brand-dark">
                Reliable Modules, Flexible Application
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Designed for seamless integration with hybrid inverters,{" "}
                <strong>Lithium Valley&rsquo;s</strong> modules (available in 2.56kWh and 5.12kWh
                capacities) deliver stable performance for home energy backup. These units combine
                robust LFP chemistry with a modular design, allowing installers to efficiently scale
                systems for residential and small commercial projects without complex
                infrastructure.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Seamless compatibility with mainstream hybrid inverters
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Long lifespan LFP cells delivering over 6000 cycles
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Modular sizing for scalable and quick cabinet upgrades
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
            Need a custom battery calculation for your facility?
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Let our engineering team design a scalable backup system tailored to your budget and
            load parameters.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-coral-hover"
            >
              Request Feasibility Study
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteriesPage;
