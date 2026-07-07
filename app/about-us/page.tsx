import { ArrowRight, Eye, HelpCircle, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Solrato Power",
  description:
    "Learn about Solrato Power, our vision, mission, and how we empower energy autonomy through advanced solar and Battery Energy Storage Systems (BESS).",
  openGraph: {
    title: "About Us – Solrato Power",
    description:
      "Learn about Solrato Power, our vision, mission, and how we empower energy autonomy through advanced solar and Battery Energy Storage Systems (BESS).",
    url: "https://solrato.com/about-us",
    siteName: "Solrato Power",
  },
};

const AboutUsPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Page Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Who We Are
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">About Us</h1>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Eye className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">Our Vision & Mission</h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                Our Vision is to lead the transition toward a resilient, decentralized energy
                future. Our Mission is to empower energy independence at every level of society.
              </p>
              <p className="text-base/relaxed text-brand-dark-gray">
                From a single household seeking a 3kWh backup to a massive industrial complex
                requiring multi-megawatt-hour grid stability, Solrato delivers the technology to
                make it possible.
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-brand-medium-gray/10 bg-brand-light-gray p-8">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Powering Transition</h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                At Solrato, we believe the future of energy isn’t just about generation, it’s about
                storage, intelligence, and scale. While the world turns toward renewables, the
                primary challenge remains: making power available exactly when it’s needed.
              </p>
              <p className="text-sm/relaxed text-brand-dark-gray">
                Solrato was founded to bridge that gap. As specialists in solar and advanced Battery
                Energy Storage Systems (BESS), we provide the critical infrastructure required to
                transform intermittent sunlight into a constant, reliable resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="border-y border-brand-medium-gray/10 bg-brand-light-gray py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-3xl flex-col gap-4">
            <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
              Collaborative Growth
            </span>
            <h2 className="text-3xl font-bold text-brand-dark">A Partnership Built on Growth</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">Dedicated Region Focus</h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                We are the only company in the industry that joins hands directly with its dealers
                and distributors to dominate their specific regions. We don’t just supply the
                system; we help you sell it.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-brand-dark">Pan-India Support Team</h3>
              <p className="text-sm/relaxed text-brand-dark-gray">
                Whether you are based in a small town in Punjab or the capital city of Lucknow, we
                provide a tailored, dedicated team working for you to reach end customers. We don’t
                just want to be your supplier; we believe in growing together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing and Tech */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <TrendingUp className="size-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark">Global Reach, Local Precision</h2>
              <p className="text-base/relaxed text-brand-dark-gray">
                To ensure world-class performance, Solrato has strategically partnered with top
                Global and Indian Manufacturers. This network allows us to provide the &ldquo;best
                of both worlds&rdquo;:
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="shrink-0 font-bold text-brand-purple">Global Innovation:</span>
                  <span className="text-sm text-brand-dark-gray">
                    Access to the latest breakthroughs in high-density lithium technology and smart
                    battery management from international leaders.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 font-bold text-brand-purple">Indian Engineering:</span>
                  <span className="text-sm text-brand-dark-gray">
                    High-quality, robust solutions from domestic manufacturers who understand the
                    unique demands of our local grid and environment.
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium text-brand-dark-gray">
                By leveraging these partnerships, we don’t just provide products—we curate
                best-in-class solutions tailored specifically to your technical and budgetary needs.
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl bg-brand-dark p-10 text-white">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-coral">
                <HelpCircle className="size-6" />
              </div>
              <h3 className="text-2xl font-bold">What makes us apart?</h3>
              <p className="text-sm/relaxed text-brand-medium-gray/80">
                Unlike traditional distributors, Solrato is deeply embedded in the engineering and
                project lifecycle. We provide custom integration templates, active demand
                generation, and remote debugging parameters to keep your system performing
                flawlessly.
              </p>
              <div className="mt-4">
                <Link
                  href="/partner-with-us"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white hover:bg-brand-purple-hover"
                >
                  Partner With Us
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
