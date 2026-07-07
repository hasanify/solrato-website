"use client";

import { Activity, ChevronRight, Home, Shield, Sun } from "lucide-react";
import { useState } from "react";

interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const HomeAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(2); // 3rd item active by default

  const steps: StepItem[] = [
    {
      id: 1,
      title: "Powering Residential Autonomy",
      description:
        "Low-voltage modular LFP battery storage coupled with hybrid inverters to keep modern households running seamlessly with under 10ms UPS transfer switching.",
      icon: Home,
    },
    {
      id: 2,
      title: "Smart Commercial Energy Shaving",
      description:
        "Reduce peak demand utility tariff charges by discharging stored solar energy during peak grid pricing windows, maximizing operational margins.",
      icon: Shield,
    },
    {
      id: 3,
      title: "Industrial & Cold Storage Backup",
      description:
        "Ensure zero extruder downtime or cold chain spoilage with high-capacity battery energy storage containers configured for heavy motor surge startup loads.",
      icon: Activity,
    },
    {
      id: 4,
      title: "Microgrid Auto-Islanding Systems",
      description:
        "Intelligent grid-synchronization utility systems that seamlessly isolate during outages, ensuring continuous local energy flow.",
      icon: Sun,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      {steps.map((step, idx) => {
        const IconComponent = step.icon;
        const isActive = idx === activeIndex;

        return (
          <div
            key={step.id}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
              isActive
                ? "translate-x-2 border-brand-purple bg-brand-purple text-white shadow-lg shadow-brand-purple/20"
                : "border-brand-medium-gray/10 bg-brand-light-gray text-brand-dark hover:bg-brand-medium-gray/10"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex size-8 items-center justify-center rounded-full text-xs font-bold ${
                    isActive ? "bg-white text-brand-purple" : "bg-brand-purple/10 text-brand-purple"
                  }`}
                >
                  {step.id}
                </span>
                <h4 className="flex items-center gap-2 text-base font-bold">
                  <IconComponent className="size-4 shrink-0" />
                  {step.title}
                </h4>
              </div>
              <ChevronRight
                className={`size-5 transition-transform ${isActive ? "rotate-90 text-brand-coral" : "text-brand-dark-gray/50"}`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`text-sm/relaxed ${isActive ? "text-white/80" : "text-brand-dark-gray"}`}
              >
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
