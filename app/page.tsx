import { ArrowRight, Clock, Cpu, Globe, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HomeAccordion } from "@/components/HomeAccordion";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { caseStudies } from "@/lib/case-studies-data";

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
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-dark pb-32">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover opacity-45 mix-blend-screen"
        >
          <source src="/videos/366825.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-brand-dark via-brand-dark/95 to-brand-purple/40" />

        {/* Floating Stats Left (Desktop Only) */}
        <div className="absolute top-1/4 left-12 z-20 hidden animate-float flex-col gap-2 rounded-2xl border border-white/10 bg-brand-dark/80 p-5 backdrop-blur-md lg:flex">
          <div className="flex items-center gap-3">
            <div className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-coral/20 text-brand-coral">
              <Clock className="size-5" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Energy Storage
              </div>
              <div className="text-sm font-extrabold text-white">24 / 7 Grid Backup</div>
            </div>
          </div>
        </div>

        {/* Floating Stats Right (Desktop Only) */}
        <div className="absolute top-1/3 right-12 z-20 hidden animate-float-slow flex-col gap-2 rounded-2xl border border-white/10 bg-brand-dark/80 p-5 backdrop-blur-md lg:flex">
          <div className="flex items-center gap-3">
            <div className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-teal/20 text-brand-teal">
              <Cpu className="size-5" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Inverter Yield
              </div>
              <div className="text-sm font-extrabold text-white">Upto 7.6 kW Peak</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center text-white sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <Zap className="size-3 text-brand-coral" /> The Future of Smart Energy
            </span>

            <h1 className="max-w-4xl bg-linear-to-r from-white via-brand-light-gray to-brand-coral bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Powering the Future <br /> of{" "}
              <span className="inline-block rounded-full border border-white/20 bg-white/5 px-6 py-0.5 backdrop-blur-sm">
                Smart Energy
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base/relaxed text-brand-medium-gray/80 sm:text-lg md:text-xl">
              We bridge the gap between generation and consumption. Solrato engineers advanced
              Battery Energy Storage Systems (BESS) and Hybrid Inverters to make solar power
              constant and dispatchable.
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

        {/* Bottom Rest Overlay Panels (Resting on Hero Bottom) */}
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Overlay Card 1 */}
              <Link
                href="/case-studies"
                className="group flex min-h-44 flex-col justify-between rounded-2xl border border-brand-medium-gray/10 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/20"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                    Case Studies
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-purple">
                    View Our Success Stories In Solar Energy
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-brand-purple/10 text-xs font-bold text-brand-purple">
                      H
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-brand-coral/10 text-xs font-bold text-brand-coral">
                      F
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-brand-teal/10 text-xs font-bold text-brand-teal">
                      R
                    </div>
                  </div>
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand-purple/5 text-brand-purple transition-all group-hover:bg-brand-purple group-hover:text-white">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>

              {/* Overlay Card 2 */}
              <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-brand-medium-gray/10 bg-white p-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold tracking-widest text-brand-coral uppercase">
                    Growth Network
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark">
                    Direct Partnership for Pan-India Dominance
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-brand-purple">140k+</span>
                    <span className="block text-xs text-brand-dark-gray">Satisfied Clients</span>
                  </div>
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
                    <Globe className="size-4" />
                  </div>
                </div>
              </div>

              {/* Overlay Card 3 */}
              <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-brand-medium-gray/10 bg-white p-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                    Efficiency
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark">
                    Intelligent Panels & Modular Stacking
                  </h3>
                </div>
                <p className="mt-2 text-xs/relaxed text-brand-dark-gray">
                  Maximize solar storage yield with our advanced hybrid setups and liquid cooling
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Verbatim Content + Creative Overhaul) */}
      <section className="bg-white pt-36 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            {/* Visual Column (5/12) */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div className="group relative aspect-video overflow-hidden rounded-3xl border border-brand-medium-gray/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                  alt="Solar Panels Rooftop"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-6 text-center">
                  <div className="text-3xl font-black text-brand-purple">12+</div>
                  <div className="mt-1 text-xs font-bold tracking-wider text-brand-dark-gray uppercase">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-6 text-center">
                  <div className="text-3xl font-black text-brand-purple">140+</div>
                  <div className="mt-1 text-xs font-bold tracking-wider text-brand-dark-gray uppercase">
                    Satisfied Clients
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-full bg-brand-purple px-6 py-4 text-sm font-bold text-white shadow-md shadow-brand-purple/10 transition-colors hover:bg-brand-purple-hover"
              >
                Read Our Story
              </Link>
            </div>

            {/* Typography Column (7/12) */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <span className="inline-flex max-w-max items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold tracking-wider text-brand-purple uppercase">
                About Solrato Power
              </span>

              <h2 className="text-3xl/tight font-extrabold text-brand-dark sm:text-4xl md:text-5xl">
                we are building more than just solar plants we are cultivating a cleaner{" "}
                <span className="inline-block rounded-full border border-brand-purple/20 bg-brand-purple/5 px-3.5 py-0.5 text-brand-purple">
                  greener
                </span>{" "}
                future. By harnessing solar energy.
              </h2>

              <div className="mt-4 flex flex-col gap-4 text-base/relaxed text-brand-dark-gray">
                <p>
                  At Solrato, we believe that the future of energy isn’t just about generation –
                  it’s about storage, intelligence, and scale. While the world turns toward
                  renewable energy, the challenge remains: how do we make power available exactly
                  when it’s needed?
                </p>
                <p>
                  Solrato was founded to answer that question. We are specialists in solar and
                  advanced energy storage systems (BESS), providing the critical infrastructure
                  needed to turn intermittent sunlight into a constant, reliable resource.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Benefits Section */}
      <section className="border-y border-brand-medium-gray/10 bg-brand-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            {/* Written Header & Accordion (7/12) */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
                  Solar Energy in Action
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  Solar Energy In Every Step of Farming & Industry
                </h2>
              </div>
              <HomeAccordion />
            </div>

            {/* Image Block (5/12) */}
            <div className="group relative aspect-4/5 min-h-96 overflow-hidden rounded-3xl border border-brand-medium-gray/10 shadow-2xl lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
                alt="Solar Farming Wind turbines"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute inset-x-8 bottom-8 z-20 flex flex-col gap-2 text-white">
                <span className="text-xs font-bold tracking-widest text-brand-coral uppercase">
                  Eco Commitment
                </span>
                <h3 className="text-lg font-bold">Bridging Sourcing with Grid Stability</h3>
                <p className="text-xs/relaxed text-brand-medium-gray/80">
                  We source clean lithium cells and hybrid infrastructure directly from global
                  engineering partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Row */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
                Our Projects
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                Discover Our Successful Energy Projects
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white hover:bg-brand-purple-hover"
            >
              See All Projects
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="group flex flex-col justify-between rounded-2xl border border-brand-medium-gray/10 bg-brand-light-gray p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/20"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                    {study.date.split(",")[1]?.trim() || "2026"}
                  </span>
                  <h3 className="text-base/tight font-bold text-brand-dark transition-colors group-hover:text-brand-purple">
                    {study.title}
                  </h3>
                  <p className="line-clamp-3 text-xs/relaxed text-brand-dark-gray/80">
                    {study.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand-purple group-hover:text-brand-purple-hover">
                  View Study
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-brand-medium-gray/10 bg-brand-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-4 text-center">
            <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Hear From Those Who Power the Future With Us
            </h2>
          </div>
          <HomeTestimonials />
        </div>
      </section>

      {/* CTA Partner network */}
      <section className="relative overflow-hidden bg-brand-dark py-24 text-white">
        {/* Background Visual */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-brand-purple/20 to-brand-coral/20" />
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Become a Distributor/Installer
          </h2>
          <p className="max-w-2xl text-base/relaxed text-brand-medium-gray/80">
            Join our pan-India solar distribution network with built-in lead generation and
            marketing support for installers and EPCs. We don&apos;t just supply; we grow together.
          </p>
          <div className="mt-8">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-coral-hover hover:shadow-lg active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
