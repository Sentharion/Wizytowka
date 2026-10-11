"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const technologies = [
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
];

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section id="top" className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 lg:px-8 lg:pb-36 lg:pt-20">
        <div className="absolute right-8 top-16 hidden size-72 rounded-full border border-violet-500/10 lg:block">
          <div className="absolute inset-12 rounded-full border border-blue-500/10" />
          <div className="absolute inset-24 rounded-full bg-violet-500/10 blur-2xl" />
        </div>
        <div className="relative max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            {t("hero.available")}
          </div>
          <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-8xl">
            {t("hero.headline1")}{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              {t("hero.headline2")}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            {t("hero.description")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta_projects")}
              <ArrowRight size={18}/>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500"
            >
              {t("hero.cta_about")}
            </Link>
          </div>
        </div>

        <div className="mt-24 border-t border-slate-800/80 pt-8">
          <p className="mb-6 font-mono text-xs text-center sm:text-start uppercase tracking-[0.2em] text-slate-600">
            {t("hero.tech_label")}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center sm:justify-start">
            {technologies.map((technology) => (
              <span key={technology} className="font-mono text-sm text-slate-400">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Hero;