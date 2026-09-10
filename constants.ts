
export const METADATA = {
  title: "Portfolio | Chirag Jain",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://chiragjain.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I turn ideas into digital products",
  "I solve problems through product thinking",
  "I bridge business and technology",
  "I build products people need",
];

export const EMAIL = "jainchist@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/62chiragjain",
  github: "https://github.com/Mark085-alt",
  instagram: "https://www.instagram.com/chirag_jain_62",
  x: "https://twitter.com/CHIRAG_JAIN_62",
};

export const CONTACT_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=jainchist@gmail.com&su=Let's%20Talk&body=Hi%20Chirag,";

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
}

export const PROJECTS: IProject[] = [
  {
    name: "Job University",
    image: "/projects/JobUniversity.jpg",
    blurImage: "/projects/JobUniversity.jpg",
    description: "A digital platform focused on helping students discover and explore university opportunities.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.jobuniversity.eu/en",
  },
  {
    name: "Atomic Cal",
    image: "/projects/AtomicCal.jpg",
    blurImage: "/projects/AtomicCal.jpg",
    description:
      "A productivity-focused calendar platform designed to simplify scheduling, planning, and managing daily activities.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://staging.atomiccal.com/#/dashboard",
  },
  {
    name: "Twocents",
    image: "/projects/Twocents.jpg",
    blurImage: "/projects/Twocents.jpg",
    description:
      "A digital platform where businesses like restraunts cafes or any other are listed and users can give their twocents or feedback to them in an engaging easy to use interface.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.twocents.io/",
  },
  {
    name: "JPMA – Euro a Gogo",
    image: "/projects/JPMA.jpg",
    blurImage: "/projects/JPMA.jpg",
    description:
      "A digital product focused on delivering a seamless user experience for JPMA global event, where I contributed to requirements, feature planning, documentation, and project coordination.",
    gradient: ["#003052", "#167187"],
    url: "https://jpmaglobal.com/",
  },
  {
    name: "Rajshree Lottery",
    image: "/projects/RajshreeLottery.jpg",
    blurImage: "/projects/RajshreeLottery.jpg",
    description:
      "A digital lottery platform involving user flows, business rules, referral features, and requirement-driven product development.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.bookmyrajshree.com/",
  },
  {
    name: "Study Notion",
    image: "/projects/StudyNotion.jpg",
    blurImage: "/projects/StudyNotion.jpg",
    description:
      "An education-focused platform designed to help students organize and manage their learning experience.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://study-notion-client-five.vercel.app/",
  },
  {
    name: "NutriLens",
    image: "/projects/NutriLens.jpg",
    blurImage: "/projects/NutriLens.jpg",
    description:
      "A digital health and nutrition platform focused on helping users identify product's nutrional information",
    gradient: ["#5E4C06", "#746528"],
    url: "NA",
  },
];

export const SKILLS = {
  business: [
    "Business Analysis",
    "Requirements Gathering",
    "User Stories",
    "Process Mapping",
    "Stakeholder Management",
    "Product Management",
    "Product Thinking",
  ],
  delivery: [
    "Feature Planning",
    "Project Management",
    "Agile / Scrum",
    "Sprint Planning",
  ],
  tools: ["Jira", "Figma", "Notion", "Azure DevOps", "SQL"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021 – 2025",
    size: ItemSize.SMALL,
    subtitle:
      "B.Tech in Computer Science. Built a strong foundation in technology, software development, and problem-solving.",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "May 2024 – July 2024",
    size: ItemSize.SMALL,
    subtitle:
      "Web Development Intern — ADM Software Solutions. Worked on web development projects and gained practical experience in building and maintaining web applications.",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "July 2024 – January 2025",
    size: ItemSize.SMALL,
    subtitle:
      "Data Analyst & Web Development Intern — 6W Research. Worked across data analysis and web development, gaining experience in data-driven problem solving and digital solutions.",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "February 2025 – June 2025",
    size: ItemSize.SMALL,
    subtitle:
      "Business Development Trainee — Intellipaat Software Solutions. Gained experience in business development, client interaction, and understanding business requirements.",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "July 2025 – Present",
    size: ItemSize.SMALL,
    subtitle:
      "Associate Business Analyst — GeekyAnts. Working across business analysis and project management, translating business needs into clear requirements and coordinating digital product delivery.",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
