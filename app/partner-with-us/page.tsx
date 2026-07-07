import { Award, BadgePercent, GraduationCap, ShieldAlert } from "lucide-react";

import { PartnerForm } from "@/components/PartnerForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us – Solrato Power",
  description:
    "Join the Solrato Power pan-India distributor and installer network. Scale your business with competitive pricing and technical support.",
  openGraph: {
    title: "Partner With Us – Solrato Power",
    description:
      "Join the Solrato Power pan-India distributor and installer network. Scale your business with competitive pricing and technical support.",
    url: "https://solrato.com/partner-with-us",
    siteName: "Solrato Power",
  },
};

const PartnerWithUsPage = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative bg-linear-to-tr from-brand-dark to-brand-purple py-24 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider text-brand-coral uppercase">
            Distribution Network
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Build Your Business with Solrato
          </h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            {/* Context & Benefits Column (7/12) */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-brand-dark">
                  Calling all EPCs, Installers, and Dealers
                </h2>
                <p className="text-base/relaxed text-brand-dark-gray">
                  We are looking for partners who share our vision of a solar-powered India. When
                  you join the Solrato community, you gain more than just a supplier—you gain a
                  partner dedicated to your growth.
                </p>
              </div>

              {/* Benefits list */}
              <div className="mt-4 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-brand-dark">Benefits of Joining:</h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                      <BadgePercent className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">Competitive Rates</h4>
                      <p className="mt-1 text-xs text-brand-dark-gray">
                        Special bulk distributor margins to help you win more commercial and
                        domestic bids.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-coral/10 text-brand-coral">
                      <Award className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-inter text-sm font-bold text-brand-dark">
                        Demand Allocation
                      </h4>
                      <p className="mt-1 text-xs text-brand-dark-gray">
                        We drive local sales leads directly to our certified installer network
                        partners.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                      <GraduationCap className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">Technical Training</h4>
                      <p className="mt-1 text-xs text-brand-dark-gray">
                        Upskill your engineering team on the latest hybrid, BESS, and battery
                        storage configurations.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                      <ShieldAlert className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">Lifecycle Support</h4>
                      <p className="mt-1 text-xs text-brand-dark-gray">
                        Full backend warranty backing, remote configuration support, and debug
                        templates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column (5/12) */}
            <div className="w-full lg:col-span-5">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUsPage;
