// Portfolio skills and experience migrated from the previous portfolio.

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VERCEL = "vercel",
  LINUX = "linux",
  LARAVEL = "laravel",
  PYTHON = "python",
  CSHARP = "csharp",
  PHP = "php",
  MYSQL = "mysql",
  VITE = "vite",
  POSTMAN = "postman",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: { id: 1, name: "js", label: "JavaScript", shortDescription: "Web development and interactive interfaces.", color: "#f0db4f", icon: icon("javascript") },
  [SkillNames.TS]: { id: 2, name: "ts", label: "TypeScript", shortDescription: "Typed JavaScript for scalable applications.", color: "#3178c6", icon: icon("typescript") },
  [SkillNames.HTML]: { id: 3, name: "html", label: "HTML", shortDescription: "Web page structure and semantics.", color: "#e34c26", icon: icon("html5") },
  [SkillNames.CSS]: { id: 4, name: "css", label: "CSS", shortDescription: "Responsive styling and layouts.", color: "#1572b6", icon: icon("css3") },
  [SkillNames.REACT]: { id: 5, name: "react", label: "React", shortDescription: "Component-based frontend development.", color: "#61dafb", icon: icon("react") },
  [SkillNames.NEXTJS]: { id: 6, name: "nextjs", label: "Next.js", shortDescription: "React framework for modern web apps.", color: "#000000", icon: icon("nextjs") },
  [SkillNames.TAILWIND]: { id: 7, name: "tailwind", label: "Tailwind CSS", shortDescription: "Utility-first responsive styling.", color: "#38bdf8", icon: icon("tailwindcss") },
  [SkillNames.NODEJS]: { id: 8, name: "nodejs", label: "Node.js", shortDescription: "Server-side JavaScript runtime.", color: "#6cc24a", icon: icon("nodejs") },
  [SkillNames.EXPRESS]: { id: 9, name: "express", label: "Express.js", shortDescription: "Backend APIs with Node.js.", color: "#000000", icon: icon("express") },
  [SkillNames.POSTGRES]: { id: 10, name: "postgres", label: "PostgreSQL", shortDescription: "Relational database management.", color: "#336791", icon: icon("postgresql") },
  [SkillNames.MONGODB]: { id: 11, name: "mongodb", label: "MongoDB", shortDescription: "NoSQL document database.", color: "#4db33d", icon: icon("mongodb") },
  [SkillNames.GIT]: { id: 12, name: "git", label: "Git", shortDescription: "Version control and collaboration.", color: "#f1502f", icon: icon("git") },
  [SkillNames.GITHUB]: { id: 13, name: "github", label: "GitHub", shortDescription: "Code hosting and collaboration.", color: "#000000", icon: icon("github") },
  [SkillNames.DOCKER]: { id: 14, name: "docker", label: "Docker", shortDescription: "Containerized development.", color: "#2496ed", icon: icon("docker") },
  [SkillNames.VERCEL]: { id: 15, name: "vercel", label: "Vercel", shortDescription: "Deployment and hosting.", color: "#000000", icon: icon("vercel") },
  [SkillNames.LINUX]: { id: 16, name: "linux", label: "Linux", shortDescription: "Open-source operating system.", color: "#000000", icon: icon("linux") },
  [SkillNames.LARAVEL]: { id: 17, name: "laravel", label: "Laravel", shortDescription: "PHP web framework.", color: "#ff2d20", icon: icon("laravel") },
  [SkillNames.PYTHON]: { id: 18, name: "python", label: "Python", shortDescription: "Programming and AI development.", color: "#3776ab", icon: icon("python") },
  [SkillNames.CSHARP]: { id: 19, name: "csharp", label: "C#", shortDescription: "Object-oriented programming.", color: "#9b4993", icon: icon("csharp") },
  [SkillNames.PHP]: { id: 20, name: "php", label: "PHP", shortDescription: "Dynamic web development.", color: "#777bb4", icon: icon("php") },
  [SkillNames.MYSQL]: { id: 21, name: "mysql", label: "MySQL", shortDescription: "Relational database.", color: "#4479a1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  [SkillNames.VITE]: { id: 22, name: "vite", label: "Vite", shortDescription: "Fast frontend tooling.", color: "#646cff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  [SkillNames.POSTMAN]: { id: 23, name: "postman", label: "Postman", shortDescription: "API testing and development.", color: "#ff6c37", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
  certificate?: {
    src: string;
    alt: string;
  };
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2024",
    endDate: "Mar 2025",
    title: "Web Developer Intern",
    company: "Codec Technologies India",
    description: [
      "Completed a 3-month Web Developer internship from 25 Dec 2024 to 25 Mar 2025.",
      "Built and contributed to assigned web-development projects with a focus on responsive interfaces and clean UI/UX.",
      "Applied JavaScript and modern frontend tools to create reusable, mobile-friendly components.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.TAILWIND,
      SkillNames.NODEJS,
      SkillNames.VITE,
    ],
    certificate: {
      src: "/assets/portfolio-content/certificates/codec-technologies-internship.png",
      alt: "Deutsche Telekom Digital Labs Full Stack Developer Internship Certificate for Jaswant Singh",
    },
  },
  {
  id: 2,
  startDate: "March 2026",
  endDate: "Sep 2026",
  title: "Full Stack Developer Intern",
  company: "Deutsche Telekom Digital Labs Pvt. Ltd.",
  description: [
    "Developed an AI-powered interview platform using the MERN stack.",
    "Implemented an interactive interview flow where users can practice role-based interviews with AI-generated questions.",
    "Worked on frontend and backend integration to handle interview sessions, user responses, and application data.",
    "Implemented AI-based evaluation to provide feedback on interview performance and identify areas for improvement.",
  ],
   certificate: {
      src: "/assets/portfolio-content/certificates/c5.png",
      alt: "Codec Technologies India Web Developer Internship Certificate for Jaswant Singh",
    },
  skills: [
    SkillNames.REACT,
    SkillNames.NODEJS,
    SkillNames.MONGODB,
  ],
},

{
  id: 3,
  startDate: "",
  endDate: "",
  title: "Freelance Project",
  company: "Freelance",
  description: [
    "Developed and delivered a full-stack Task Management application for a real-world client.",
    "Implemented task creation, editing, updating, and deletion with a structured task management workflow.",
    "Worked on frontend and backend integration to manage application data and user interactions.",
    "Focused on building a responsive and user-friendly interface based on the client's requirements.",
  ],
  skills: [
    SkillNames.REACT,
    SkillNames.NODEJS,
    SkillNames.MONGODB,
  ],
},
];

export const themeDisclaimers = {
  light: [
    "Light mode active!",
    "Bright mode is on.",
    "Welcome to light mode.",
  ],
  dark: [
    "Dark mode active.",
    "Welcome back to dark mode.",
    "Dark mode is on.",
  ],
};
