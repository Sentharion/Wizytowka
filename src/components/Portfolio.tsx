"use client";
import { projects } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight,ArrowLeft,ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
    id: number;
    name: string;
    description: string;
    image: StaticImageData;
    link: string;
}

const handleRedirect = (project: Project) => {
    window.open(project.link, "_blank");
}


const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 4;
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, endIndex);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
         <section id="work" className="relative border-y border-slate-800/70 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
                Portfolio
              </p>
              <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-5xl">
                Przegląd moich projektów
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="size-2 rounded-full bg-violet-400" />
              {projects.length} projektów · 2025-teraz
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 content-start">
            {currentProjects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/30"
              >
                <div className={`relative overflow-hidden bg-gradient-to-br`}>
                    <Image src={project.image} alt={project.name} width={500} height={500} className="w-full h-48 object-cover rounded-lg mb-4" />
                </div>
                <div className="p-7 sm:p-8">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-violet-400">
                        {project.type}
                      </p>
                      <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                    </div>
                    <span className="rounded-full border border-slate-700 p-2 text-slate-400 transition-colors cursor-pointer  group-hover:border-violet-500 group-hover:text-violet-300">
                      <ArrowUpRight />
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-col gap-5 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full bg-slate-900 px-3 py-1 font-mono text-xs text-slate-500">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))} 
          </div>
          <div className="mt-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-slate-800 p-3 text-sm text-slate-400">

            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Poprzednia strona" className="transition-colors cursor-pointer hover:text-violet-400 disabled:cursor-not-allowed disabled:opacity-30">
                <ArrowLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
                <button key={page} onClick={() => handlePageChange(page)} aria-current={currentPage === page ? "page" : undefined} className={`min-w-8 rounded-full cursor-pointer px-2 py-1 transition-colors ${currentPage === page ? "bg-violet-500/15 text-violet-400" : "hover:text-violet-400"}`}>
                    {page}
                </button>
            )
            )}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Następna strona" className="cursor-pointer transition-colors hover:text-violet-400 disabled:cursor-not-allowed disabled:opacity-30">
                <ArrowRight size={20} />
            </button>

          </div>
        </div>
      </section>
    );
};

export default Portfolio;