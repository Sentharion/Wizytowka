import winnica from "./assets/winnica.png";
import parafia from "./assets/parafia.png";
import moonight from "./assets/moonight.png";
import superquiz from "./assets/superquiz.png";
import walker from "./assets/walker.png";
import type { TFunction } from "i18next";

export const getProjects = (t: TFunction) => [
    
    {
        id: 1,
        name: t("projects.winnica.name"),
        description: t("projects.winnica.description"),
        image: winnica,
        link: "https://dawinnica.pl",
        type: t("projects.winnica.type"),
        stack: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
        id: 2,
        name: "Walker",
        description: t("projects.walker.description"),
        image: walker,
        link: "https://github.com/Sentharion/Walker",
        type: t("projects.walker.type"),
        stack: ["React-Native", "Nativewind CSS", "Expo"],
    },
    {
        id: 3,
        name: t("projects.parafia.name"),
        description: t("projects.parafia.description"),
        image: parafia,
        link: "https://gdansk.jezuici.pl",
        type: t("projects.parafia.type"),
        stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
        id: 4,
        name: "Moonight",
        description: t("projects.moonight.description"),
        image: moonight,
        link: "https://moonight.vercel.app/",
        type: t("projects.moonight.type"),
        stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PWA", "Next.js"],
    },
    {
        id: 5,
        name: "SuperQuiz",
        description: t("projects.superquiz.description"),
        image: superquiz,
        link: "https://github.com/Sentharion/SuperQuiz",
        type: t("projects.superquiz.type"),
        stack: ["React-Native", "Expo", "TypeScript", "Nativewind CSS", "Supabase"],
    },
    {
        id: 6,
        name: "Super Quiz Desktop",
        description: t("projects.superquizdesktop.description"),
        image: superquiz,
        link: "https://github.com/Sentharion/SuperQuizDesktop",
        type: t("projects.superquizdesktop.type"),
        stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Electron"],
    }
];


export const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Astro.js",
    "TypeScript",
    "Tailwind CSS",
    "C#",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "SQL",
    "Supabase",
    "WordPress"
];