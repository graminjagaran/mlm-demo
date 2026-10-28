export const site = {
  name: "Golden Fortune",
  legalName: "Golden Fortune Multi-Services",
  tagline: "MULTI-SERVICES",
  url: "https://goldenfortunelife.com",
  memberLogin: "https://member.goldenfortunelife.com",
  phoneDisplay: "1800 000 0000",
  phoneHref: "tel:18000000000",
  whatsapp: "https://wa.me/18000000000",
  email: "careers@goldenfortune.in",
  address: "Level 9, BKC Tower, Mumbai 400051",
  hours: "Mon–Sat, 9:30 AM – 6:30 PM",
  year1Income: "₹6.8 Lakh+",
  advisors: "2,500+",
  rating: "4.9",
  reviews: "1,200+",
  cities: "120+",
  passRate: "98%",
  years: "12+",
  insurers: "15+",
  nextBatch: "15 Jul",
};

export const roles = [
  {
    slug: "life-advisor",
    title: "Life Insurance Advisor",
    short: "Life Advisor",
    formValue: "Life Advisor",
    mode: "Full / Part-time",
    featured: false,
    summary:
      "Help families secure their future with term, savings and retirement plans.",
    points: [
      "Eligibility: 18+, 10th pass",
      "Lifetime renewal commissions",
      "Licence in ~21 days",
    ],
    body: "You meet families, understand what they want to protect, and place term, savings and retirement plans with the insurers we partner with. Training, the exam and the licence are guided. Most advisors who stay with the process are licensed in about three weeks.",
  },
  {
    slug: "team-leader",
    title: "Team Leader / Agency Manager",
    short: "Team Leader",
    formValue: "Team Leader",
    mode: "Most Popular",
    featured: true,
    summary:
      "Build and lead your own team of advisors and earn overriding commissions.",
    points: [
      "Eligibility: Graduate, 2+ yrs exp.",
      "Fixed stipend + team incentives",
      "Leadership development program",
    ],
    body: "This path is for people who already know how to talk to customers and now want a team. You recruit, coach and earn on the business your advisors write, with a stipend while the agency is taking shape.",
  },
  {
    slug: "general-partner",
    title: "General Insurance Partner",
    short: "General Partner",
    formValue: "General Partner",
    mode: "Part-time",
    featured: false,
    summary:
      "Sell motor, health and travel insurance as a certified point-of-sale partner.",
    points: [
      "Eligibility: 18+, 10th pass",
      "15-hour online certification",
      "Instant digital policy issuance",
    ],
    body: "A shorter certification for motor, health and travel cover. Policies are issued digitally, so this path fits someone who wants part-time hours and a clear product set.",
  },
] as const;

export type Role = (typeof roles)[number];

export const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Kochi",
  "Indore",
  "Nagpur",
  "Chandigarh",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Coimbatore",
  "Visakhapatnam",
  "Thiruvananthapuram",
  "Guwahati",
  "Bhubaneswar",
  "Ranchi",
  "Raipur",
  "Dehradun",
  "Mysuru",
  "Nashik",
  "Vijayawada",
  "Madurai",
];

export const branches = [
  {
    city: "Mumbai",
    name: "Head office",
    detail: "Level 9, BKC Tower, Mumbai 400051",
    hours: "Mon–Sat, 9:30 AM – 6:30 PM",
  },
  ...cities
    .filter((city) => city !== "Mumbai")
    .map((city) => ({
      city,
      name: "Career desk",
      detail: "Address confirmed when your counsellor calls.",
      hours: "Mon–Sat, 9:30 AM – 6:30 PM",
    })),
];

export const insurers = [
  "Shriram Finance",
  "Bharat Assure",
  "Suraksha",
  "NovaLife",
  "Unity General",
  "Aarogya+",
  "Axiom Life",
];

export const batches = [
  { date: "15 Jul 2027", city: "Mumbai", mode: "Classroom + online", seats: "Open" },
  { date: "29 Jul 2027", city: "Delhi", mode: "Online", seats: "Open" },
  { date: "12 Aug 2027", city: "Bengaluru", mode: "Classroom + online", seats: "Open" },
  { date: "26 Aug 2027", city: "Jaipur", mode: "Online", seats: "Open" },
  { date: "09 Sep 2027", city: "Chennai", mode: "Classroom + online", seats: "Open" },
  { date: "23 Sep 2027", city: "Pune", mode: "Online", seats: "Open" },
];
