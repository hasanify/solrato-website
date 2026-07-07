import { ArrowRight, Award, Battery, Cpu, Network, Server, Shield, Sun, Zap } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solrato Power – The Future of Smart Energy",
  description:
    "Specialists in solar and advanced Battery Energy Storage Systems (BESS), providing critical infrastructure to transform intermittent sunlight into reliable, dispatchable power.",
  openGraph: {
    title: "Solrato Power – The Future of Smart Energy",
    description:
      "Specialists in solar and advanced Battery Energy Storage Systems (BESS), providing critical infrastructure to transform intermittent sunlight into reliable, dispatchable power.",
    url: "https://solrato.com/",
    siteName: "Solrato Power",
    images: [
      {
        url: "/brand/logo-color.png",
        width: 1200,
        height: 630,
        alt: "Solrato Power Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const HomePage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover opacity-40 mix-blend-lighten"
        >
          <source
            src="/videos/worli-prabhadevi-mumbai-india-morning-solar-panel-4k-2025-12-17-22-30-04-utc.mov"
            type="video/quicktime"
          />
          <source src="/videos/366825.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-brand-dark via-brand-dark/90 to-brand-purple/40" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-32 text-center text-white sm:px-6 lg:px-8">
          <div className="flex animate-fade-in flex-col items-center gap-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <Zap className="size-3 text-brand-coral" /> The Future of Smart Energy
            </span>

            <h1 className="max-w-4xl bg-linear-to-r from-white via-brand-light-gray to-brand-coral bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              From Kilowatt-hours (kWh) <br className="hidden sm:inline" /> to Megawatt-hours (MWh)
            </h1>

            <p className="mx-auto max-w-2xl text-base/relaxed text-brand-medium-gray/80 sm:text-lg md:text-xl">
              Powering the Transition to Energy Autonomy. We build advanced solar and battery energy
              storage solutions to make clean power reliable, intelligent, and scalable.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/partner-with-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-purple-hover hover:shadow-lg hover:shadow-brand-purple/20 active:scale-95"
              >
                Partner With Us
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>

        {/* Wave transition spacer */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Visual Aspect */}
            <div className="group relative overflow-hidden rounded-3xl border border-brand-medium-gray/15 shadow-2xl">
              <div className="absolute inset-0 z-10 bg-linear-to-br from-brand-purple/20 to-brand-coral/20 mix-blend-multiply" />
              <video
                autoPlay
                muted
                loop
                playsInline
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/videos/366828-1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-6 left-6 z-20 max-w-sm rounded-2xl border border-brand-medium-gray/10 bg-white/90 p-6 shadow-xl backdrop-blur-md">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                  <Award className="size-4 text-brand-purple" /> Specialists in BESS
                </h4>
                <p className="mt-1 text-xs text-brand-dark-gray">
                  Turning intermittent sunlight into a constant, dispatchable resource.
                </p>
              </div>
            </div>

            {/* Written Content */}
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
                About Solrato Power
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                Powering the Transition to Energy Autonomy
              </h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                At Solrato, we believe that the future of energy isn’t just about generation – it’s
                about storage, intelligence, and scale. While the world turns toward renewable
                energy, the challenge remains: how do we make power available exactly when it’s
                needed?
              </p>
              <p className="text-base/relaxed text-brand-dark-gray">
                Solrato was founded to answer that question. We are specialists in solar and
                advanced energy storage systems (BESS), providing the critical infrastructure needed
                to turn intermittent sunlight into a constant, reliable resource.
              </p>
              <div className="mt-4">
                <Link
                  href="/about-us"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand-purple transition-colors hover:text-brand-purple-hover"
                >
                  Read our mission story
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="border-y border-brand-medium-gray/10 bg-brand-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 flex max-w-3xl flex-col gap-4 text-center">
            <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
              Our Stack
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Advanced Solar Tech & Storage Solutions
            </h2>
            <p className="text-sm text-brand-dark-gray sm:text-base">
              Engineered to meet the diverse demands of modern energy consumers, from residential
              systems to grid-scale containers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Inverters */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Cpu className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Solar Hybrid Inverters</h3>
              <p className="grow text-sm/relaxed text-brand-dark-gray">
                Low Voltage & High Voltage Residential & Commercial solutions designed to maximize
                solar yield with wide MPPT ranges.
              </p>
              <Link
                href="/inverters"
                className="group inline-flex items-center gap-1 text-sm font-bold text-brand-purple hover:text-brand-purple-hover"
              >
                Inverter lineup
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Batteries */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <Battery className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">LFP Battery Solutions</h3>
              <p className="grow text-sm/relaxed text-brand-dark-gray">
                Scalable Lithium Iron Phosphate (LFP) batteries designed for maximum safety, rapid
                1C charging, and long cycle life.
              </p>
              <Link
                href="/batteries"
                className="group inline-flex items-center gap-1 text-sm font-bold text-brand-coral hover:text-brand-coral-hover"
              >
                Battery lineup
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* BESS container */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Server className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">BESS Container solutions</h3>
              <p className="grow text-sm/relaxed text-brand-dark-gray">
                Utility-grade containerized energy storage setups engineered for capacity
                requirements of 1MWh and above.
              </p>
              <Link
                href="/bess-solution"
                className="group inline-flex items-center gap-1 text-sm font-bold text-brand-teal hover:text-brand-teal/80"
              >
                Container solution
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply & Local Precision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
                Supply Chain & Engineering
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                Global Reach, Local Precision
              </h2>
              <p className="text-sm/relaxed text-brand-dark-gray sm:text-base">
                To ensure we deliver world-class performance, Solrato has strategically partnered
                with top Global and Indian Manufacturers. This powerful network allows us to bring
                you the &ldquo;best of both worlds&rdquo;:
              </p>

              <div className="mt-6 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <Sun className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">Global Innovation</h4>
                    <p className="mt-1 text-sm text-brand-dark-gray">
                      Access to the latest breakthroughs in high-density lithium technology and
                      smart battery management from international leaders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-coral/10 text-brand-coral">
                    <Shield className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">
                      Indian Engineering & Reliability
                    </h4>
                    <p className="mt-1 text-sm text-brand-dark-gray">
                      High-quality, robust solutions from top domestic manufacturers that understand
                      the unique demands of the local grid and environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-3xl bg-linear-to-br from-brand-purple to-brand-coral p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Why Partner With Solrato?</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Network className="mt-0.5 size-5 shrink-0" />
                  <span className="text-sm">
                    Pan-India solar distribution network with built-in lead generation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="mt-0.5 size-5 shrink-0" />
                  <span className="text-sm">
                    Curated best-in-class components tailored to your technical and budgetary
                    parameters.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="mt-0.5 size-5 shrink-0" />
                  <span className="text-sm">
                    Complete lifecycle support including monitoring, maintenance, and expert
                    technical service.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-white/5 bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-brand-purple/20 to-brand-coral/20" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Become a Distributor or Installer
          </h2>
          <p className="max-w-2xl text-base/relaxed text-brand-medium-gray/80">
            Join our pan-India solar distribution network. We provide installers, dealers, and EPC
            companies with lead generation, robust marketing collateral, and full technical backing.
          </p>
          <div className="mt-8">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-coral-hover hover:shadow-lg active:scale-95"
            >
              Apply to Partner Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
