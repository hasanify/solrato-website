import { ArrowRight, CheckCircle, Compass, HeartHandshake, Users, Wrench } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Solrato Power",
  description:
    "Explore Solrato Power's lifecycle support services, pan-India distribution network, component sourcing, and custom engineering parameters.",
  openGraph: {
    title: "Services – Solrato Power",
    description:
      "Explore Solrato Power's lifecycle support services, pan-India distribution network, component sourcing, and custom engineering parameters.",
    url: "https://solrato.com/services",
    siteName: "Solrato Power",
  },
};

const ServicesPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Lifecycle & Support
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Our Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-brand-medium-gray/10 bg-brand-light-gray py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-base/relaxed text-brand-dark-gray sm:text-lg">
            At Solrato, we believe that the future of energy isn’t just about generation – it’s
            about storage, intelligence, and scale. We provide critical lifecycle services to
            support our installers, distributors, and C&I operators.
          </p>
        </div>
      </section>

      {/* Services grid detail */}
      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-8">
          {/* Service 1: Custom Engineering */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Compass className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">
                From Residential to Grid-Level Storage
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                We engineer precision energy storage solutions for every requirement. Whether it’s a
                compact 3kWh residential backup system, a robust commercial and industrial (C&I)
                setup, or a massive multi-megawatt grid-level project, Solrato has the expertise to
                power it.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="font-inter text-sm text-brand-dark-gray">
                    Custom load calculation and backup layout parameters
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <span className="text-sm text-brand-dark-gray">
                    Grid stability and islanding engineering protocols
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-h-64 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">Engineering Capabilities</h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                Our specialized design parameters ensure inverters and batteries are perfectly
                balanced. This prevents capacity degradation, increases charging speed, and
                eliminates grid trip-outs.
              </p>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Service 2: Distributor Network */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex min-h-64 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8 lg:order-1">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">
                Lead Generation & Sales Backing
              </h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                We distribute qualified commercial and residential installation requests to our
                local dealer network. You focus on engineering quality and scaling; we handle demand
                generation.
              </p>
            </div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <Users className="size-6" />
              </div>
              <h2 className="font-inter text-3xl font-bold text-brand-dark">
                India’s Premier Distribution Network
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                We are building a pan-India network of dedicated channel partners. To ensure your
                success, we provide free marketing services and lead generation, actively bringing
                solar projects directly to your doorstep while you focus on growth.
              </p>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Service 3: Sourcing */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <HeartHandshake className="size-6" />
              </div>
              <h2 className="font-inter text-3xl font-bold text-brand-dark">
                Bridging the Gap with World-Class Sourcing
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                By partnering with the top global and Indian manufacturers, we eliminate supply
                chain bottlenecks. We source the highest-tier lithium technology and components to
                ensure you always have access to the best energy solutions on the market.
              </p>
            </div>

            <div className="flex min-h-64 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">Sourcing Partners</h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                We work directly with Tier-1 manufacturers such as Sunways, Dyness, Solinteg, and
                Lithium Valley to coordinate bulk allocations, reducing lead times and ensuring
                certified component imports.
              </p>
            </div>
          </div>

          <hr className="border-brand-medium-gray/10" />

          {/* Service 4: Post-installation */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex min-h-64 flex-col justify-center rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8 lg:order-1">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">
                System Monitoring & Maintenance
              </h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                Every solar storage unit we configure includes remote parameters setup. This enables
                remote telemetry monitoring, grid voltage analysis, and firmware upgrades.
              </p>
            </div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Wrench className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Comprehensive Post-Installation Services
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Our relationship doesn’t end at the sale. We provide expert maintenance, monitoring,
                and technical support for all installed products, ensuring your energy storage
                system performs at peak efficiency for its entire lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5 bg-brand-dark py-20 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
          <h2 className="font-inter text-2xl font-bold sm:text-3xl">
            Become a distributor or installer today
          </h2>
          <p className="max-w-xl text-sm/relaxed text-brand-medium-gray/85">
            Gain a partner dedicated to your engineering success and client satisfaction.
          </p>
          <div className="mt-4">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-coral-hover"
            >
              Partner With Us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
