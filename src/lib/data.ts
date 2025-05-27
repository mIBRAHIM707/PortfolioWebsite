import { Linkedin, Github, Code, Mail, Brain, Target, Sparkles, Gamepad2, Database, Webhook, Cpu, Award, School, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const personalInfo = {
  name: "Muhammad Ibrahim",
  title: "Software Engineering Student",
  email: "ibrahimclash707@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-0b8083287/", // Placeholder
  github: "https://github.com/mIBRAHIM707", // Placeholder
  leetcode: "https://leetcode.com/u/m-ibrahim0077/", // Placeholder
  resumeUrl: "/resume_muhammad_ibrahim.pdf", // Placeholder PDF
  heroStatement: "Third-year Software Engineering student at GIKI with Dean's List honors, combining strong algorithmic problem-solving skills (ICPC top 12 nationally) with practical development experience in game development, full-stack web applications, and machine learning. Eager to contribute to innovative projects and grow as a software engineer.",
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
    name: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C/C++" },
      { name: "Python" },
      { name: "JavaScript/TypeScript" },
      { name: "C#" },
      { name: "Java" },
      { name: "HTML/CSS" },
    ],
  },
  {
    name: "Web Development",
    icon: Webhook,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Spotify Web API" },
    ],
  },
  {
    name: "Game Development",
    icon: Gamepad2,
    skills: [
      { name: "Unity" },
      { name: "Unreal Engine (Basic)" },
      { name: "Pygame" },
    ],
  },
  {
    name: "Database/Cloud",
    icon: Database,
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "AWS (EC2, S3 basics)" },
    ],
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    skills: [
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "TensorFlow (Keras basics)" },
    ],
  },
  {
    name: "Problem Solving & Tools",
    icon: Brain,
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Linux" },
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
    title: "O-Level Pseudocode Compiler",
    technologies: ["Python", "Flask"],
    description: "Engineered a compiler translating pseudocode into step-by-step Python logic and Implemented tokenizer, parser, semantic analyzer, and code generator components",
    role: "Lead Developer",
    features: ["Lexical Analysis", "Syntax Parsing", "Code Execution", "Error Highlighting"],
    imageUrl: "/pseudo.ico",
    imageHint: "compiler code",
    githubUrl: "https://github.com/mIBRAHIM707/Compiler-for-O-level-Pseudocode",
    liveDemoUrl: "#", // Placeholder
  },
  
  {
    id: "2",
    title: "Spotify Album Finder",
    technologies: ["Node.js", "Spotify Web API", "React"],
    description: "A web application that integrates with the Spotify API to allow users to search for albums, view details, and manage a personalized list of favorite albums.",
    role: "Backend Developer",
    features: ["Search for artists and albums", "View detailed artist information including popularity metrics", "Browse albums and track listings", "RESTful Endpoints"],
    imageUrl: "/spotify.png",
    imageHint: "music api",
    githubUrl: "https://github.com/mIBRAHIM707/Album-Finder-with-Spotify-API",
  },
  {
    id: "3",
    title: "Sehat Saathi",
    technologies: ["React", "Django", "Python", "Postgres SQL", "JS"],
    description: "A Hospital Management System develeped for my university GIKI which manages hospital operations including patient records, appointments, and staff information. Focused on robust data handling and user-friendly interface.",
    role: "Full-Stack Developer",
    features: ["Patient Management", "Appointment Scheduling", "Doctor Management", "Billing", "Admin records"],
    imageUrl: "/hms.png",
    imageHint: "hospital system",
    githubUrl: "https://github.com/mIBRAHIM707/Sehat-Saathi",
  },
  {
    id: "4",
    title: "Game Development Internship",
    technologies: ["Unity", "C#"],
    description: "Developed a simple mobile game during an internship. Worked on gameplay mechanics, UI elements, and bug fixing.",
    role: "Game Developer Intern",
    features: ["Gameplay Mechanics", "UI Implementation", "Performance Optimization"],
    imageUrl: "/lab.png",
    imageHint: "game development",
    githubUrl: "", // May not have a public repo
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
    title: "Dean's List Honors",
    description: "Awarded Dean's List for academic excellence at GIKI.",
    icon: Award,
    year: "Multiple Semesters"
  },
  {
    id: "2",
    title: "ICPC National Top 12",
    description: "Achieved Top 12 position nationally in the International Collegiate Programming Contest.",
    icon: Target,
    year: "2023"
  },
  {
    id: "3",
    title: "Microsoft Hackathon 3rd Place",
    description: "Secured 3rd place in a Microsoft-sponsored hackathon for an innovative project.",
    icon: Sparkles,
    year: "2022"
  },
  {
    id: "4",
    title: "50% Merit Scholarship",
    description: "Awarded a 50% merit-based scholarship for outstanding academic performance.",
    icon: School,
    year: "Ongoing"
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
    degree: "Bachelor of Science in Software Engineering",
    years: "2021 - Present",
    description: "Currently in the third year, focusing on AI, web development, and competitive programming.",
    icon: School,
  },
  {
    id: "2",
    institution: "Lahore Grammar School (LGS)",
    degree: "A-Levels & O-Levels",
    years: "Completed 2021",
    description: "Achieved strong academic results, fostering a foundation in STEM subjects.",
    icon: School,
  },
];

export const socialLinks = [
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: Linkedin },
  { name: 'GitHub', url: personalInfo.github, icon: Github },
  { name: 'LeetCode', url: personalInfo.leetcode, icon: Code },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: Mail },
];
