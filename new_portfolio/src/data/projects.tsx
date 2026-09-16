import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPython, SiSqlite, SiTailwindcss } from "react-icons/si";

const BASE_PATH = "/assets/portfolio-content/projectimg";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    {live && <Link target="_blank" rel="noopener" href={live}><Button size="sm">Live Demo <ArrowUpRight className="ml-3 w-5 h-5" /></Button></Link>}
    {repo && <Link target="_blank" rel="noopener" href={repo}><Button size="sm">GitHub <ArrowUpRight className="ml-3 w-5 h-5" /></Button></Link>}
  </div>
);

export type Skill = { title: string; bg: string; fg: string; icon: ReactNode };
const PROJECT_SKILLS = {
  react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  tailwind: { title: "Tailwind CSS", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  express: { title: "Express.js", bg: "black", fg: "white", icon: <SiExpress /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  sqlite: { title: "SQLite", bg: "black", fg: "white", icon: <SiSqlite /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "study-notion",
    category: "Codec Internship Project",
    title: "Study Notion",
    src: `${BASE_PATH}/study-notion-cover-v2.png`,
    screenshots: ["study-notion-cover-v2.png"],
    skills: { frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind], backend: [] },
    github: "https://github.com/jaswanttyagi",
    live: "https://study-notion-three-lyart.vercel.app",
    get content() {
      return <div>
        <TypographyP className="font-mono text-2xl text-center">Study Notion</TypographyP>
        <TypographyP className="font-mono">Study Notion is a web-based learning management platform I built during my Codec internship. It helps students organize and track study resources through a structured dashboard for notes, tasks, and learning materials.</TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">Dashboard UI, notes management, task organization, responsive design, and productivity-focused workflows.</p>
        <SlideShow images={[`${BASE_PATH}/study-notion-cover-v2.png`]} />
      </div>;
    },
  },
  {
    id: "ai-interview-agent",
    category: "Deutsche Internship Project",
    title: "AI Interview Agent",
    src: `${BASE_PATH}/ai-interview-agent-cover.png`,
    screenshots: ["ai-interview-agent-cover.png"],
    skills: { frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind], backend: [] },
    live: "https://client-beta-azure-95.vercel.app/",
    get content() {
      return <div>
        <TypographyP className="font-mono text-2xl text-center">AI Interview Agent</TypographyP>
        <TypographyP className="font-mono">An AI-powered interview agent I built during my second internship. Users can practice interviews through dynamically generated questions based on their selected role and skills, then review evaluated responses and previous results.</TypographyP>
        <ProjectsLinks live={this.live} />
        <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
        <p className="font-mono mb-2">AI-based question generation, response evaluation, interview history, result tracking, and MERN stack frontend/backend integration with API communication.</p>
        <SlideShow images={[`${BASE_PATH}/ai-interview-agent-cover.png`]} />
      </div>;
    },
  },
  {
    id: "freelance-task-manager",
    category: "Freelance Client Project",
    title: "Task Manager",
    src: `${BASE_PATH}/task-manager-cover.png`,
    screenshots: ["task-manager-cover.png"],
    skills: { frontend: [PROJECT_SKILLS.react], backend: [] },
    live: "https://task-manager-1-44yo.onrender.com/",
    get content() {
      return <div>
        <TypographyP className="font-mono text-2xl text-center">Industrial Water Supply Website</TypographyP>
        <TypographyP className="font-mono">A responsive corporate website I built for a freelance client in the industrial water-supply sector. The website presents the client's services clearly while serving different users through multi-language support.</TypographyP>
        <ProjectsLinks live={this.live} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">Multi-language support, SPA navigation, structured service and content pages, SEO, responsive UI, and production deployment delivered according to the client's requirements.</p>
        <SlideShow images={[`${BASE_PATH}/task-manager-cover.png`]} />
      </div>;
    },
  },
];

export default projects;
