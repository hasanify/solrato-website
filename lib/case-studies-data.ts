export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  capacity: string;
  inverter: string;
  battery: string;
  date: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionPoints: string[];
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "reliable-power-for-healthcare-30kw-hybrid-solar-system-installation-at-prakash-hospital-jewar-u-p",
    title: "Reliable Power for Healthcare – 30kW Hybrid Solar System Installation",
    client: "Prakash Hospital",
    location: "Jewar, Uttar Pradesh, India",
    capacity: "30kW Hybrid Solar System",
    inverter: "Solinteg Hybrid Inverter",
    battery: "51.2kWh Lithium Iron Phosphate (LFP) Battery Bank",
    date: "April 28, 2026",
    summary:
      "A 30kW hybrid solar system for a hospital in Uttar Pradesh, delivering uninterrupted power, reducing diesel dependency, and ensuring reliable healthcare operations.",
    challenge:
      "Prakash Hospital serves patients from Jewar and nearby rural areas, where grid power fluctuations and outages remain common. For a healthcare facility, even a short power interruption can impact operation theatres, diagnostics, and refrigeration for medicines and vaccines. The hospital relied heavily on diesel generators, resulting in high carbon emissions, noise pollution, and frequent maintenance requirements.",
    challengePoints: [
      "Frequent grid outages in semi-urban/rural areas",
      "Risk of power cuts during surgeries and diagnostics",
      "Perishable vaccines and medicines spoiled by refrigeration failure",
      "High diesel fuel costs and generator maintenance",
    ],
    solution:
      "We designed and commissioned a 30kW Hybrid Solar System paired with a Solinteg Hybrid Inverter and a high-performance 51.2kWh LFP Battery Bank. The hybrid configuration intelligently manages power distribution between solar, batteries, and the grid. Solinteg's hybrid inverter offers ultra-rapid switching in under 10ms, acting as an industrial-grade UPS for the hospital.",
    solutionPoints: [
      "30kW custom solar PV arrays on the hospital rooftop",
      "Solinteg Hybrid Inverter for seamless UPS-level backup transition",
      "51.2kWh LFP batteries to store excess daytime solar power",
      "Smart load prioritization for diagnostic labs and theatres",
    ],
    impact: [
      "Uninterrupted power supply for critical healthcare operations",
      "90% reduction in diesel generator dependency and fuel expenses",
      "Substantial lowering of monthly grid utility charges",
      "Environmentally sustainable operation with lower carbon emissions",
    ],
  },
  {
    slug: "50kw-hybrid-solar-system-for-industrial-power-backup-pipe-factory-karnal-haryana",
    title: "50kW Hybrid Solar System for Industrial Power Backup",
    client: "Pipe Factory",
    location: "Karnal, Haryana, India",
    capacity: "50kW Hybrid Solar System",
    inverter: "Heavy-duty Industrial Hybrid Inverter",
    battery: "100kWh Scalable LFP Battery System",
    date: "April 28, 2026",
    summary:
      "A 50kW hybrid solar system for a manufacturing factory in Haryana, ensuring uninterrupted operations, reducing diesel costs, and solving unreliable grid power challenges.",
    challenge:
      "Manufacturing pipes requires continuous operation of extruder lines and heavy machinery. Grid trip-outs in Karnal caused material wastage inside the extruders, resulting in extensive production downtime and labor idle times. The factory attempted to cover outages with large diesel generators, but rising diesel prices were eroding margins.",
    challengePoints: [
      "Material solidification in extruders due to abrupt shut-offs",
      "High production line downtime and labor idle costs",
      "Excessive fuel consumption of industrial-scale generators",
      "Voltage instability damaging sensitive electronics",
    ],
    solution:
      "We installed a robust 50kW Hybrid Solar System backed by a high-capacity 100kWh Scalable LFP Battery System. The system manages heavy surge currents from motor startups, while stabilizing input voltage and prioritizing factory production machinery. It integrates zero-export optimization to comply with local grid rules.",
    solutionPoints: [
      "50kW high-efficiency monocrystalline solar panels",
      "Industrial hybrid inverter with high surge current tolerance",
      "100kWh Dyness LFP battery storage array",
      "Zero-export control integration to avoid grid feed-in penalties",
    ],
    impact: [
      "Continuous extruder operation with zero material wastage from trip-outs",
      "Significant reduction in daily diesel fuel consumption",
      "Stabilized voltage supply across the entire production floor",
      "Calculated payback period of under 4 years on capital investment",
    ],
  },
  {
    slug: "powering-luxury-in-the-wild-a-100-off-grid-solar-solution-for-an-alwar-resort",
    title: "Powering Luxury in the Wild – A 100% Off-Grid Solar Solution",
    client: "Luxury Resort",
    location: "Alwar, Rajasthan, India",
    capacity: "30kW Off-Grid System",
    inverter: "30kW Solar Hybrid Inverter",
    battery: "51.2kWh Dyness LFP Battery Storage",
    date: "March 24, 2026",
    summary:
      "A 100% off-grid solar power system for a luxury resort in Alwar, Rajasthan-reducing diesel usage by 90% while delivering silent, reliable energy with a 30kW hybrid inverter and 51.2kWh LFP battery storage.",
    challenge:
      "Located adjacent to a reserve forest in Alwar, the luxury resort had no access to the grid. The resort operated completely on diesel generators, running 24/7. This created a noisy environment that disrupted wild animals and guest experiences, in addition to high diesel fuel shipping costs.",
    challengePoints: [
      "No grid access due to remote forest location",
      "Noise and exhaust pollution disturbing wildlife and guests",
      "High logistics costs for transporting diesel fuel to site",
      "Extreme ambient summer temperatures (up to 48°C) demanding high cooling reliability",
    ],
    solution:
      "We engineered a 100% off-grid hybrid power system featuring a 30kW hybrid inverter and a high-temperature resistant 51.2kWh Dyness LFP battery pack. We configured a solar PV array to cover daytime luxury villa AC loads, while storing excess power to run quiet resort operations during the night.",
    solutionPoints: [
      "30kW hybrid inverter optimized for off-grid operation",
      "51.2kWh Dyness LFP battery bank with active cooling",
      "Solar array sized for peak summer cooling demands",
      "Automatic generator starter (AGS) for emergency backup during monsoon season",
    ],
    impact: [
      "90% reduction in diesel generator runtime and fuel logistics costs",
      "Silent, eco-friendly luxury guest experience in harmony with wild surroundings",
      "100% reliable power supply even during extreme 48°C peak summers",
      "Strong marketing advantage as an eco-certified carbon-neutral resort",
    ],
  },
  {
    slug: "maximizing-energy-independence-with-a-100kw-hybrid-bess-250kwh-dyness-lfp-storage",
    title: "Maximizing Energy Independence with a 100kW Hybrid BESS",
    client: "Commercial Facility",
    location: "NCR, India",
    capacity: "100kW Hybrid BESS & 250kWh Storage",
    inverter: "100kW BESS Converter System",
    battery: "250kWh Dyness LFP Storage System",
    date: "March 24, 2026",
    summary:
      "How a 100kW hybrid BESS system helped a commercial facility cut peak demand charges by 35%, eliminate outages, and achieve true energy independence with intelligent storage and zero-export optimization.",
    challenge:
      "The commercial facility faced extremely high peak demand charges from the grid operator during noon and evening peaks, along with brief but frequent grid interruptions that rebooted server rooms and IT infrastructure. The facility needed a solution that would cut peak power tariffs and act as a macro-UPS.",
    challengePoints: [
      "Prohibitive peak-hour utility tariff rates",
      "Frequent micro-outages interrupting server racks and office operations",
      "Strict local clean-air regulations banning generator usage during pollution alerts",
      "Lack of clean energy integration options for corporate ESG compliance",
    ],
    solution:
      "We designed a 100kW Hybrid BESS container system integrated with 250kWh of Dyness LFP storage. The system features intelligent peak shaving (discharging battery during peak tariff windows), microgrid islanding for server rooms, and zero-export optimization.",
    solutionPoints: [
      "100kW intelligent BESS power converter system (PCS)",
      "250kWh heavy-duty Dyness LFP battery bank",
      "Programmable peak-shaving and load-shifting algorithms",
      "Zero-second UPS transfer static switch for IT loads",
    ],
    impact: [
      "35% reduction in grid peak demand charges through scheduled load-shifting",
      "100% elimination of server room reboots and office downtime",
      "Compliance with winter pollution guidelines with zero local emissions",
      "Enabled facility to meet 60% of daily energy needs through stored solar energy",
    ],
  },
];
