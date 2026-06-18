  //TODO: integrate the data from the backend
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "currently-learning",
    title: "Learning",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "Figma",
    icon: "https://skillicons.dev/icons?i=figma",
  },
  {
    name: "Jira",
    icon: "https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white",
  },
  {
    name: "Confluence",
    icon: "https://img.shields.io/badge/Confluence-172B4D?style=flat-square&logo=confluence&logoColor=white",
  },
  {
    name: "Notion",
    icon: "https://skillicons.dev/icons?i=notion",
  },
  {
    name: "Amplitude",
    icon: "https://img.shields.io/badge/Amplitude-1E61F0?style=flat-square&logo=amplitude&logoColor=white",
  },
  {
    name: "Metabase",
    icon: "https://img.shields.io/badge/Metabase-509EE3?style=flat-square&logo=metabase&logoColor=white",
  },
  {
    name: "Databricks",
    icon: "https://img.shields.io/badge/Databricks-FF3621?style=flat-square&logo=databricks&logoColor=white",
  },
  {
    name: "New Relic",
    icon: "https://img.shields.io/badge/New_Relic-1CE783?style=flat-square&logo=newrelic&logoColor=black",
  },
  {
    name: "Grafana",
    icon: "https://skillicons.dev/icons?i=grafana",
  },
  {
    name: "SQL",
    icon: "https://skillicons.dev/icons?i=mysql",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=py",
  },
  {
    name: "JavaScript",
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
  },
  {
    name: "GitHub",
    icon: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "VS Code",
    icon: "https://skillicons.dev/icons?i=vscode",
  },
];

export const experiences = [
  {
    title: "Product Manager",
    company_name: "INDmoney",
    icon: "/logos/indmoney.png",
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Built a real-time Redash monitoring dashboard for IDFC Bank deposit flows, supporting 300+ daily transactions and driving deposit conversion from 14% to 25%.",
      "Owned the end-to-end withdrawal experience, reducing the withdrawal cycle from T+3 to T+2.",
      "Built and enhanced the Customer Support dashboard and in-app flows, reducing CS dependency by 50%.",
    ],
  },
  {
    title: "Product Manager 1",
    company_name: "Jupiter Money",
    icon: "/logos/jupiter.png",
    iconBg: "#383E56",
    date: "Jan 2025 - Nov 2025",
    points: [
      "Digital Gold: Partnered with SafeGold to drive a 90% increase in investment value within 6 months.",
      "Loan Against Mutual Funds: Optimized the loan journey, delivering 2x daily disbursals and a 50% revenue uplift.",
      "Revamped support with an AI chatbot, improving CSAT by 20% and cutting resolution time by 30%.",
      "Launched the FD marketplace with Blostom, offering 25+ FDs across multiple banks.",
    ],
  },
  {
    title: "Associate Product Manager",
    company_name: "FreeCharge (Axis Bank)",
    icon: "/logos/freecharge.png",
    iconBg: "#383E56",
    date: "Aug 2021 - Dec 2024",
    points: [
      "Drove ₹4,500 Cr annual GTV by leading the digital transformation of Axis Mutual Funds.",
      "Built the MVP for the ONDC Buyer App, projected to generate ₹10–15 Cr GTV/month.",
      "Scaled the Credit Card Upgrade Journey for a 10M+ customer base and onboarded 104K+ NRI/Mariners users.",
      "Boosted user engagement by 30% through data-driven prioritization and Agile delivery.",
    ],
  },
  {
    title: "Product Management Intern",
    company_name: "Locofy.ai",
    icon: "/logos/locofy.png",
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Conducted market research and competitive analysis to identify user pain points for website deployment platforms.",
      "Launched code deployment on GitHub directly from design, streamlining the development process.",
      "Executed end-to-end testing of the GitHub integration to ensure seamless functionality.",
    ],
  },
];

export const projects = [
  {
    name: "Axis Mutual Fund Platform",
    description:
      "Led digital transformation of Axis Mutual Funds — redesigned customer folio and investment journeys with a customer-first approach, driving ₹4,500 Cr annual GTV. Leveraged design thinking and Agile methodologies across a 10M+ customer base.",
    tags: [
      { name: "Fintech", color: "blue-text-gradient" },
      { name: "Mutual Funds", color: "green-text-gradient" },
      { name: "Agile", color: "pink-text-gradient" },
    ],
    category: "Product",
    status: "Completed",
    highlights: ["₹4,500 Cr Annual GTV", "10M+ customers"],
    image: "images/axis-mf.png",
    source_code_link: "https://www.figma.com/design/lSJNoc8zmpaZBwZ6hAFAFm/User-Research-MF?node-id=0-1&t=8Tx7lj74aBGtIeAb-1",
  },
  {
    name: "Digital Gold (Jupiter Money)",
    description:
      "Partnered with Safe Gold to scale digital gold investments — drove a 90% increase in investment value within 6 months and converted 35% of non-serious investors into active investors through cross-selling and engagement initiatives.",
    tags: [
      { name: "Investments", color: "pink-text-gradient" },
      { name: "Growth", color: "green-text-gradient" },
      { name: "Fintech", color: "blue-text-gradient" },
    ],
    category: "Product",
    status: "Completed",
    highlights: ["90% investment growth", "35% investor conversion"],
    image: "images/digital-gold.png",
    source_code_link: "https://github.com/aadi267",
  },
  {
    name: "Loan Against Mutual Funds (LAMF)",
    description:
      "Conducted in-depth user research to identify friction points, optimized the loan journey and reduced minimum loan thresholds — resulting in 2x daily disbursals and a 50% revenue uplift.",
    tags: [
      { name: "Lending", color: "blue-text-gradient" },
      { name: "User Research", color: "green-text-gradient" },
      { name: "Revenue Growth", color: "pink-text-gradient" },
    ],
    category: "Product",
    status: "Completed",
    highlights: ["2x daily disbursals", "50% revenue uplift"],
    image: "images/lamf.png",
    source_code_link: "https://github.com/aadi267",
  },
  {
    name: "Axis NRI Savings Account Journey",
    description:
      "Designed a user-friendly NRI savings account onboarding journey for NRIs and Mariners using Agile framework — successfully onboarding over 104,000 users while improving overall customer experience.",
    tags: [
      { name: "Onboarding", color: "pink-text-gradient" },
      { name: "UX", color: "green-text-gradient" },
      { name: "Banking", color: "blue-text-gradient" },
    ],
    category: "Product",
    status: "Completed",
    highlights: ["104K+ users onboarded", "Agile delivery"],
    image: "images/nri-journey.png",
    source_code_link: "https://github.com/aadi267",
  },
  {
    name: "Axis Credit Card Upgrade Journey",
    description:
      "Led end-to-end development of Axis Bank's Credit Card Upgrade Journey for a 10M customer base — improved upgrade success rate and engagement through streamlined user flows by 20%.",
    tags: [
      { name: "Credit Cards", color: "blue-text-gradient" },
      { name: "UX", color: "green-text-gradient" },
      { name: "Banking", color: "pink-text-gradient" },
    ],
    category: "Product",
    status: "Completed",
    highlights: ["10M customer base", "20% success rate improvement"],
    image: "images/cc-upgrade.png",
    source_code_link: "https://github.com/aadi267",
  },
  {
    name: "AI PM Learning Log",
    description:
      "A public 6-month learning log documenting my transition from Product Manager to AI PM — covering TypeScript, Python for AI, prompt engineering, RAG, evals, and shipping 3 real AI products.",
    tags: [
      { name: "AI", color: "pink-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Product", color: "blue-text-gradient" },
    ],
    category: "AI PM",
    status: "In Progress",
    highlights: ["6-month roadmap", "Daily deliverables"],
    image: "images/aipm-learning-log.png",
    source_code_link: "https://github.com/aadi267/aipm-learning-log",
  },
  {
    name: "Easy Move Pune",
    description:
      "A responsive moving and relocation services website for Pune, built with TypeScript and React and deployed on Vercel — focused on a clean, conversion-friendly user experience.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Web", color: "pink-text-gradient" },
    ],
    category: "Web App",
    status: "Completed",
    highlights: ["Live on Vercel", "Responsive UI"],
    image: "images/easy-move-pune.png",
    source_code_link: "https://github.com/aadi267/easy-move-pune-website",
    live_demo_link: "https://easy-move-pune-website.vercel.app",
  },
  {
    name: "System Architecture Lab",
    description:
      "A hands-on lab exploring system design and technical architecture for PMs — APIs, scalability, and engineering trade-offs — to build stronger technical fluency.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "System Design", color: "blue-text-gradient" },
      { name: "Architecture", color: "pink-text-gradient" },
    ],
    category: "Learning",
    status: "In Progress",
    highlights: ["System design", "PM-focused"],
    image: "images/system-architecture-lab.png",
    source_code_link: "https://github.com/aadi267/system-architecture-lab",
  },
];
