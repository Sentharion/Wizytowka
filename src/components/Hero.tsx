import {ArrowDown} from "@/components/Icons";
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
    return (
        <section className="w-full relative flex items-center justify-center py-40">
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-white font-roboto text-center">
                
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
                    Michał <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-indigo-700">Bertman</span>
                </h1>
                                
                <p className="text-slate-300 text-lg md:text-2xl mt-6 max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">
                    Tworzę <span className="text-white font-medium border-b border-violet-500/30 pb-0.5">strony internetowe</span> oraz <span className="text-white font-medium border-b border-violet-500/30 pb-0.5">aplikacje mobilne i webowe</span>, które działają płynnie i responsywnie na <span className="text-white font-medium border-b border-violet-500/30 pb-0.5">wszystkich urządzeniach</span>, unosząc Twoją markę w cyfrowy kosmos.
                </p>

                <div className="w-1/2 h-px mt-16 bg-linear-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.3)] animate-fade-in-up [animation-delay:400ms]"></div>

                <div className="flex flex-col items-center mt-12 animate-fade-in-up [animation-delay:600ms]">
                    <p className="text-violet-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8 opacity-80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5">
                        Moje narzędzia do budowania cyfrowych galaktyk
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech) => (
                            <span key={tech} className="flex items-center bg-violet-700/20 px-4 py-2 hover:bg-violet-700/40 rounded-xl border border-violet-500/40 hover:border-violet-500/60 text-slate-300 hover:text-white transition-all duration-500 backdrop-blur-sm cursor-default hover:scale-105">
                                <span className="text-violet-500 mr-2 opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">&#x2022;</span> {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-20 animate-bounce">
                    <ArrowDown fill="#8B5CF6" w="35px" h="35px"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;