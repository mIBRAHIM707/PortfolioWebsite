import { Linkedin, Github, Code, Mail, Brain, Target, Sparkles, Gamepad2, Database, Webhook, Cpu, Award, School, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const personalInfo = {
  name: "Muhammad Ibrahim",
  title: "Software Engineering Student",
  email: "ibrahimclash707@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammadibrahim-portfolio-placeholder", // Placeholder
  github: "https://github.com/muhammadibrahim-placeholder", // Placeholder
  leetcode: "https://leetcode.com/u/muhammadibrahim-placeholder/", // Placeholder
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
    technologies: ["Python", "Flask", "Lex", "Yacc"],
    description: "Developed a compiler for O-Level standard pseudocode, enabling execution and debugging. Implemented lexical analysis, parsing, and code generation.",
    role: "Lead Developer",
    features: ["Lexical Analysis", "Syntax Parsing", "Code Execution", "Error Highlighting"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "compiler code",
    githubUrl: "https://github.com/muhammadibrahim-placeholder/pseudocode-compiler",
    liveDemoUrl: "#", // Placeholder
  },
  {
    id: "2",
    title: "Hospital Management System",
    technologies: ["Java", "Swing", "MySQL"],
    description: "A desktop application for managing hospital operations including patient records, appointments, and staff information. Focused on robust data handling and user-friendly interface.",
    role: "Full-Stack Developer",
    features: ["Patient Management", "Appointment Scheduling", "Staff Records", "Billing"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "hospital system",
    githubUrl: "https://github.com/muhammadibrahim-placeholder/hospital-management",
  },
  {
    id: "3",
    title: "Album Finder API",
    technologies: ["Node.js", "Express.js", "MongoDB", "Spotify API"],
    description: "A RESTful API that integrates with the Spotify API to allow users to search for albums, view details, and manage a personalized list of favorite albums.",
    role: "Backend Developer",
    features: ["Album Search", "Spotify Integration", "User Favorites", "RESTful Endpoints"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "music api",
    githubUrl: "https://github.com/muhammadibrahim-placeholder/album-finder-api",
  },
  {
    id: "4",
    title: "Game Development Internship Project",
    technologies: ["Unity", "C#"],
    description: "Contributed to the development of a mobile game during an internship. Worked on gameplay mechanics, UI elements, and bug fixing. (Details might be under NDA, generic description used).",
    role: "Game Developer Intern",
    features: ["Gameplay Mechanics", "UI Implementation", "Performance Optimization"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "game development",
    githubUrl: "#", // May not have a public repo
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
