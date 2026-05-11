"use client";
import { projects } from "@/constants";
import Image, { StaticImageData } from "next/image";

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
    return (
        <section id="portfolio" className="w-full relative flex items-center justify-center bg-transparent py-24 overflow-hidden">
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-white font-roboto text-center max-w-7xl w-full">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 animate-fade-in-up">
                    Portfolio
                </h1>

                <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.3)] animate-fade-in-up [animation-delay:400ms]"></div>

                <p className="text-slate-300 text-lg md:text-xl mt-6 max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">
                    Poznaj projekty które realizowałem – <span className="text-white font-medium border-b border-violet-500/30 pb-0.5">od nowoczesnych stron internetowych po zaawansowane aplikacje.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {projects.map((project) => (
                    <div key={project.id} className="bg-violet-400/5 rounded-lg shadow-lg p-4 flex flex-col items-center border border-violet-500/30 hover:bg-violet-400/10 transition-all duration-300 hover:border-violet-500/60 hover:scale-105 cursor-pointer" onClick={() => handleRedirect(project)}>
                        <Image src={project.image} alt={project.name} width={500} height={500} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-slate-300 text-md max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">{project.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Portfolio;