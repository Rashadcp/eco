export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_DETAILS = {
  brandName: "Ennerty",
  tagline: "charge ahead",
  parentCompany: "M/s ECOHARMONY ENTERPRISES PRIVATE LIMITED",
  gstNumber: "32AAJCE4076E1ZU",
  phone: "9746539631",
  phoneFormatted: "+91 97465 39631",
  email: "contact@ecoharmony.in",
  address: "Building No.5/257A8 Suite, No.292B, Heiley Offices, Kalamassery, Kanayannur, Ernakulam State: Kerala Pin Code: 683104",
  shortAddress: "Heiley Offices, Kalamassery, Ernakulam, Kerala 683104",
  workingHours: "Mon – Sat: 9:00 AM – 6:30 PM IST",
};

export interface MetricMode {
  id: "savings" | "capacity";
  name: string;
  badge: string;
  card1: {
    value: string;
    label: string;
    description: string;
    subtext: string;
    trend: string;
  };
  card2: {
    value: string;
    label: string;
    description: string;
    subtext: string;
    trend: string;
  };
}

export const METRIC_MODES: Record<"mode1" | "mode2", MetricMode> = {
  mode1: {
    id: "savings",
    name: "Customer Savings & Installations",
    badge: "Verified Economic Value",
    card1: {
      value: "₹6.4 Cr+",
      label: "Customer Electricity Savings",
      description: "Cumulative electricity bill reductions delivered to homeowners, villas, and commercial establishments across Kerala.",
      subtext: "Up to 90% reduction on monthly KSEB power bills",
      trend: "PM Surya Ghar Approved",
    },
    card2: {
      value: "10,000+",
      label: "Solar Panels Installed",
      description: "High-efficiency Tier-1 Mono PERC & TOPCon modules commissioned with zero-leakage mounting architecture.",
      subtext: "Tata, Adani, Waaree & Premier certified modules",
      trend: "99.8% Grid Uptime",
    },
  },
  mode2: {
    id: "capacity",
    name: "Clean Generation & Portfolios",
    badge: "Kerala Green Energy Index",
    card1: {
      value: "15.8 MW+",
      label: "Clean Energy Generated",
      description: "Annual green solar power fed seamlessly through on-grid bidirectional net meters into the state grid.",
      subtext: "Preventing 12,400+ metric tonnes of carbon emissions",
      trend: "100% KSEB Net-Metered",
    },
    card2: {
      value: "1,250+",
      label: "Homes & Businesses Energized",
      description: "Satisfied residential property owners, schools, hospitals, and industrial hubs powered by Ennerty.",
      subtext: "Up to ₹78,000 central government direct subsidy",
      trend: "25-Yr Performance Guarantee",
    },
  },
};

export interface PartnerBrand {
  name: string;
  subtitle: string;
  category: string;
  highlight: string;
  logoDomain: string;
  logoUrl?: string;
}

export const TIER1_PARTNERS: PartnerBrand[] = [
  { name: "Tata Power Solar", logoDomain: "tatapower.com", logoUrl: "https://www.tatapower.com/content/dam/tatapoweraemsitesprogram/tatapower/what-we-do/solar-energy/solar-rooftop-campaign/tata-solar-logo.png", subtitle: "India's Most Trusted Solar Module Leader", category: "Tier-1 PV Modules", highlight: "Mono PERC High Yield" },
  { name: "Adani Solar", logoDomain: "adanisolar.com", logoUrl: "https://www.adanipower.com/-/media/C7B41EE9FFC747C9BC03FEC2514B83E8.ashx", subtitle: "Shine In High-Efficiency Bifacial Tech", category: "Tier-1 PV Modules", highlight: "N-Type TOPCon Cells" },
  { name: "Waaree Energies", logoDomain: "waaree.com", logoUrl: "https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/160x50/logo_final_new_1657128016__75544.original.png", subtitle: "India's Largest Solar Manufacturer", category: "Tier-1 PV Modules", highlight: "540W+ High Output" },
  { name: "Premier Energies", logoDomain: "premierenergies.com", logoUrl: "https://premierenergies.com/static/media/premier-energies.b1bb2f7bbecd36942cfa.png", subtitle: "State-of-the-Art Precision Solar Cells", category: "Tier-1 PV Modules", highlight: "DCR Approved Modules" },
  { name: "Emmvee Solar", logoDomain: "emmvee.com", logoUrl: "https://emmvee.com/wp-content/uploads/2019/08/emvlogo.png", subtitle: "Pioneering European Quality Standards", category: "Tier-1 PV Modules", highlight: "Anti-PID Certified" },
  { name: "V-Guard Solar", logoDomain: "vguard.in", logoUrl: "https://vguard.com/cdn/shop/files/logo_gradient_copy.png?v=1695275735&width=600", subtitle: "Reliable Power Inverters & Solar Solutions", category: "Smart Inverters", highlight: "High Surge Protection" },
  { name: "Havells Solar", logoDomain: "havells.com", logoUrl: "https://havells.com/media/logo/stores/1/Havells_Logo.svg", subtitle: "Intelligent On-Grid Solar Inverter Range", category: "Smart Inverters", highlight: "Wi-Fi Telemetry" },
];

export interface ProcessCard {
  number: string;
  title: string;
  theme: "light" | "dark" | "olive";
  description: string;
  tags: string[];
  keyHighlight: string;
}

export const PROCESS_STEPS: ProcessCard[] = [
  {
    number: "01",
    title: "Free Site & Energy Audit",
    theme: "light",
    description:
      "Our solar engineers visit your property in Kerala, analyze your KSEB electricity bill, and perform a shadow analysis to calculate exact savings.",
    tags: ["Expert Guidance", "Free Roof Audit"],
    keyHighlight: "Complimentary 3D Solar Potential Report",
  },
  {
    number: "02",
    title: "Custom Engineering & Subsidy Filing",
    theme: "dark",
    description:
      "We design custom structures tailored to your roof type and handle 100% of the PM Surya Ghar national portal subsidy & KSEB paperwork.",
    tags: ["Smart Layout", "Subsidy Assistance"],
    keyHighlight: "Up to ₹78,000 Direct Bank Transfer Subsidy",
  },
  {
    number: "03",
    title: "Professional Installation",
    theme: "light",
    description:
      "Certified technicians install Tier-1 panels (Tata, Adani, Waaree, Premier) using corrosion-resistant aluminum/GI structures and high-grade DC cabling.",
    tags: ["Hassle-Free Setup", "Certified Experts"],
    keyHighlight: "Turnkey Setup in 3 to 5 Days",
  },
  {
    number: "04",
    title: "Save & Enjoy with Net Metering",
    theme: "olive",
    description:
      "KSEB installs the bidirectional net meter. Track real-time solar generation on your mobile app and enjoy near-zero monthly electricity bills.",
    tags: ["Lower Costs", "25-Yr Warranty"],
    keyHighlight: "24/7 After-Sales Support by EcoHarmony",
  },
];

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
  metricDetail: string;
}

export const ANNUAL_IMPACT_STATS: ImpactStat[] = [
  {
    value: "1,250+",
    label: "Rooftops Energized",
    description: "Residential villas, apartments, commercial offices, and factories successfully connected to clean solar power.",
    metricDetail: "Ernakulam, Thrissur, Kottayam & Across Kerala",
  },
  {
    value: "₹3.5 Cr+",
    label: "Annual Client Savings",
    description: "Direct financial savings returned to homeowners and businesses by slashing peak grid consumption.",
    metricDetail: "Average ROI payback within 3.5 – 4.5 years",
  },
  {
    value: "8,500+",
    label: "Tonnes CO2 Reduced",
    description: "Clean green energy generated, equivalent to planting over 1,40,000 trees across Kerala's ecosystem.",
    metricDetail: "100% Eco-Friendly Zero Emissions",
  },
  {
    value: "100%",
    label: "Subsidy Assistance",
    description: "End-to-end documentation support on the National Portal for PM Surya Ghar Muft Bijli Yojana.",
    metricDetail: "Direct DBT bank account transfer",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  avatar: string;
  quote: string;
  systemType: string;
  savings: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Anand Varma",
    role: "Eco-Villa Owner",
    companyOrLocation: "Panampilly Nagar, Kochi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Switching our home to Ennerty solar was effortless. Our power bill dropped to zero within the first billing cycle, and the rooftop finish looks immaculate.",
    systemType: "8 kW Hybrid Eco System",
    savings: "₹85,000+/yr Saved",
    rating: 5,
  },
  {
    id: "2",
    name: "Suresh Nair",
    role: "Villa Owner",
    companyOrLocation: "Kakkanad, Kochi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The structured installation helped us cut our electricity costs completely while generating clean energy seamlessly.",
    systemType: "5 kW On-Grid System",
    savings: "₹50,000+/yr Saved",
    rating: 5,
  },
  {
    id: "3",
    name: "Kavitha Menon",
    role: "Architect & Homeowner",
    companyOrLocation: "Kadavanthra, Ernakulam",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "The team's attention to aesthetic mounting and cable concealment made a real difference to our home's architecture.",
    systemType: "6 kW Rooftop PV Array",
    savings: "₹62,000+/yr Saved",
    rating: 5,
  },
  {
    id: "4",
    name: "Joseph Thomas",
    role: "Commercial Enterprise",
    companyOrLocation: "Aluva Industrial Estate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Within weeks of turning on the 25 kW array, our commercial power bills plummeted. Highly professional and dependable.",
    systemType: "25 kW Commercial Setup",
    savings: "₹3,20,000/yr Saved",
    rating: 5,
  },
  {
    id: "5",
    name: "Mathew George",
    role: "IT Consultant",
    companyOrLocation: "Infopark, Kochi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    quote: "The PM Surya Ghar subsidy was credited straight to our bank account. The mobile app lets us track live daily power output effortlessly.",
    systemType: "3 kW Residential System",
    savings: "₹32,000/yr Saved",
    rating: 5,
  },
];
