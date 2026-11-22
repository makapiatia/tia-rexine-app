import type { ReactNode } from "react";

export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  dates: string;
  location: string;
  current?: boolean;
  badge?: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const focus = ["React", "Next.js", "Tailwind", "Contentful", "Figma"];

const em = (text: string) => <strong className="font-semibold text-cream">{text}</strong>;

export const summary: ReactNode = (
  <>
    Software engineer with {em("almost a decade")} of experience, focused on{" "}
    {em("React, Next.js and Tailwind CSS")} for headless ecommerce. At Ruggable I build the storefront and help
    shape its {em("Contentful")} content models, working hand in hand with UX to turn {em("Figma")} designs into
    fast, accessible, beautiful pages. I bring a full stack background in Java and Kotlin microservices from
    General Dynamics, and I co-own Rexine Spa Care, whose website I built and maintain.
    I also hold a {em("Nielsen Norman Group UX Certificate")}.
  </>
);

export const roles: Role[] = [
  {
    title: "Software Engineer, Front End",
    company: "Ruggable",
    companyUrl: "https://ruggable.com",
    dates: "Mar 2022 – Present",
    location: "Remote · Los Angeles, CA",
    current: true,
    bullets: [
      "Build and maintain Ruggable's headless ecommerce storefront in React, Next.js and Tailwind CSS.",
      "Partner closely with UX to roll out new designs and features, turning mockups into polished, " +
        "pixel-perfect pages that improve the user experience and elevate the look of the site.",
      "Help design and evolve the site's Contentful content models, giving marketing and " +
        "merchandising self-serve control of pages, promotions and navigation.",
      "Delivered product listing, product detail, cart and checkout experiences on top of commerce and CMS APIs.",
      "Drove performance, SEO and accessibility gains with Next.js static and incremental rendering, " +
        "Core Web Vitals tuning and WCAG fixes.",
      "Set front end standards through code review and close collaboration with product and content teams.",
    ],
  },
  {
    title: "Co-Owner and Web Developer",
    company: "Rexine Spa Care",
    companyUrl: "https://rexinespacare.com",
    dates: "Sep 2023 – Present",
    location: "Greater Phoenix Area, AZ",
    current: true,
    bullets: [
      "Co-founded and run Rexine Spa Care with my husband alongside my full-time engineering role.",
      "Manage day-to-day operations, including logistics, scheduling and accounting.",
      "Designed, built and maintain the company website end to end, from layout and content to " +
        "hosting and ongoing updates.",
      "Bring a business owner's view of customer experience, conversion and content to my front end work.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "General Dynamics Mission Systems",
    dates: "Jan 2017 – Mar 2021",
    location: "Annapolis Junction, MD",
    badge: "Former TS/SCI · Full scope polygraph",
    bullets: [
      "Delivered React and Redux interfaces for mission-critical, high-volume data systems.",
      "Developed Java and Kotlin microservices as part of a team, supporting high-volume data-" +
        "processing applications on Docker and Kubernetes.",
      "Served as a go-to code reviewer and mentor, raising quality from local testing through production monitoring.",
    ],
  },
  {
    title: "Virtual Reality Tech Consultant",
    company: "Moving Image, LLC",
    dates: "Jun 2016 – Sep 2016",
    location: "New York, NY",
    bullets: [
      "Designed, tested and deployed Unity-based VR Android apps to the Google Play and Oculus stores for an art fair.",
      "Documented Samsung Gear VR setup for computers, Android phones and Unity projects, and " +
        "evaluated device performance with the headset, so artists could build their own work.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "StoryCorps",
    companyUrl: "https://storycorps.org",
    dates: "Jun 2015 – Dec 2015",
    location: "Brooklyn, NY",
    bullets: ["Helped relaunch StoryCorps.org and maintained its web properties and Android and iOS app."],
  },
];

export const highlightedSkills = new Set(["React", "Next.js", "Tailwind CSS", "Figma", "Contentful", "Motion"]);

export const skillGroups: SkillGroup[] = [
  { label: "Front end", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  {
    label: "Styling & design",
    skills: [
      "Tailwind CSS",
      "Figma",
      "Motion",
      "Responsive Design",
      "Logo Design",
      "BlueprintJS",
      "Swiper",
      "Embla",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    label: "CMS & commerce",
    skills: ["Contentful", "Content Modeling", "Localization", "REST", "Headless Storefronts"],
  },
  {
    label: "Quality & analytics",
    skills: ["WCAG", "axe-core", "Core Web Vitals", "SEO", "ESLint", "Optimizely", "Amplitude"],
  },
  { label: "Tooling", skills: ["Claude", "Git", "GitHub", "Bitbucket", "Jira", "Confluence", "Vercel"] },
  {
    label: "Back end & infrastructure",
    skills: ["Node.js", "Java", "Kotlin", "Spring Boot", "Kafka", "Supabase", "Docker", "Kubernetes", "Datadog"],
  },
];
