import { Linkedin, Github, Code, Mail, Brain, Target, Sparkles, Database, Webhook, Cpu, Award, School, Layers, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const personalInfo = {
  name: "Muhammad Ibrahim",
  title: "Software Engineer",
  email: "ibrahimclash707@gmail.com",
  linkedin: "https://www.linkedin.com/in/ibrahim707/",
  github: "https://github.com/mIBRAHIM707", 
  leetcode: "https://leetcode.com/u/m-ibrahim0077/", 
  resumeUrl: "/resume_muhammad_ibrahim.pdf", 
  heroStatement: "Driven by performance. Architecting scalable environments and high-precision machine learning models. I combine competitive algorithmic rigor (ICPC National Top 12) with modern edge computing to ship resilient, state-of-the-art software.",
};

export type Skill = {
  name: string;
  icon?: LucideIcon;
};

export type SkillCategory = {
  name: string;
  icon?: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Core",
    icon: Code,
    skills: [
      { name: "C++ (STL, Memory)" },
      { name: "Python 3" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "SQL" },
    ],
  },
  {
    name: "Web & Edge",
    icon: Webhook,
    skills: [
      { name: "Next.js 16" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Supabase" },
      { name: "PostGIS" },
    ],
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    skills: [
      { name: "Data Pipelines" },
      { name: "scikit-learn" },
      { name: "TensorFlow" },
      { name: "pandas / NumPy" },
      { name: "Isolation Forest" },
    ],
  },
  {
    name: "Architecture & Config",
    icon: Layers,
    skills: [
      { name: "Microservices" },
      { name: "Docker" },
      { name: "REST/GraphQL" },
      { name: "Git Workflows" },
      { name: "Linux" },
    ],
  },
  {
    name: "Algorithms & Logic",
    icon: Brain,
    skills: [
      { name: "Advanced Data Structures" },
      { name: "Dynamic Programming" },
      { name: "Object Pooling" },
      { name: "Lexical Analysis" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  role: string;
  features: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveDemoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "CrowdServe",
    technologies: ["Next.js", "Supabase", "PostGIS"],
    description: "Architected a real-time, location-based crowdsourcing ecosystem. Engineered via robust Postgres triggers and validated PMF with 50+ localized active users within the first two weeks of launch.",
    role: "Full-Stack Engineer",
    features: ["Geospatial Querying", "Real-time subscriptions", "Role-Based Access", "High-conversion UI"],
    imageUrl: "/Crowd%20Serve.png",
    imageHint: "dashboard interface",
    githubUrl: "https://github.com/mIBRAHIM707/CrowdServe",
    liveDemoUrl: "https://crowdserve.vercel.app", 
  },
  {
    id: "2",
    title: "Pseudocode Compiler & Web IDE",
    technologies: ["Python", "Lex/Yacc", "React"],
    description: "Designed a deterministic Lexer and Parser capable of bridging abstract structural logic into execution-ready Python. Integrated a real-time browser IDE to drastically cut the learning curve for syntax.",
    role: "Core Developer",
    features: ["Abstract Syntax Tree Parsing", "Tokenization Engine", "Browser Interpreter Execution", "Strict Typed AST"],
    imageUrl: "/pseudo.ico",
    imageHint: "compiler logic",
    githubUrl: "https://github.com/mIBRAHIM707/Compiler-for-O-level-Pseudocode",
  },
  {
    id: "3",
    title: "Zero-Dependency Neural Network",
    technologies: ["Python", "NumPy", "Math"],
    description: "Built a fully functional deep learning framework utilizing contiguous mathematical models. Wrote the forward and backward propagation and gradient descent algorithms precisely from scratch.",
    role: "Machine Learning Researcher",
    features: ["Matrix Calculations", "Backpropagation Algebra", "Custom Loss Functions", "90%+ MNIST Validation"],
    imageUrl: "/neural%20(2).jpg",
    imageHint: "mathematics graphs",
    githubUrl: "https://github.com/mIBRAHIM707/neural-network-using-only-math",
  },
  {
    id: "4",
    title: "Banking Anomaly Framework",
    technologies: ["pandas", "scikit-learn", "Power BI"],
    description: "Formulated highly precise Random Forest and Isolation Forest models explicitly to unmask underlying banking transactional anomalies, achieving an 85% validation precision hit rate.",
    role: "ML Operations / Internship",
    features: ["Fraud Detection Algorithm", "Pipeline Automation", "Feature Engineering", "Data Modeling"],
    imageUrl: "/bop.png",
    imageHint: "data visualization",
    githubUrl: "",
  },
];

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  year?: string;
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "ICPC National Top 12",
    description: "Ranked amongst the nation's elite algorithmic problem solvers in the rigorous ICPC Regional Programming Contest.",
    icon: Brain,
    year: "2024"
  },
  {
    id: "2",
    title: "2nd Place GDGoC x BAVE",
    description: "Led the architectural blueprint for a 4-person team, out-engineering 10+ competing teams under strict time constraints.",
    icon: Sparkles,
    year: "2025"
  },
  {
    id: "3",
    title: "3rd Place Microsoft Hack",
    description: "Achieved podium finish by rapidly prototyping and scaling complex infrastructural requirements.",
    icon: Target,
    year: "2024"
  },
  {
    id: "4",
    title: "Dean's List Designation",
    description: "Maintained rigorous academic excellence throughout the software engineering program.",
    icon: Award,
    year: "2023 - Present"
  },
];

export type Education = {
  id: string;
  institution: string;
  degree: string;
  years: string;
  description?: string;
  icon?: LucideIcon;
};

export const education: Education[] = [
  {
    id: "1",
    institution: "Ghulam Ishaq Khan Institute (GIKI)",
    degree: "Bachelor of Software Engineering (CGPA 3.34)",
    years: "2023 - 2027",
    description: "Current focus spans distributed system infrastructures, deep learning matrices, and competitive algorithmic paradigms.",
    icon: School,
  },
];

export const socialLinks = [
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: Linkedin },
  { name: 'GitHub', url: personalInfo.github, icon: Github },
  { name: 'LeetCode', url: personalInfo.leetcode, icon: Code },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: Mail },
];

