import {WWWIcon, WebAppIcon,MobileAppIcon} from "@/components/Icons";
const services = [
        {
            title: "Strony internetowe",
            description: "Projektuję i tworzę nowoczesne strony internetowe, które są szybkie, responsywne i zoptymalizowane pod kątem SEO oraz doświadczenia użytkownika.",
            icon: <WWWIcon fill="#8B5CF6" w="35px" h="35px" stroke="#8B5CF6" />, 
        },
        {
            title: "Aplikacje webowe",
            description: "Buduję skalowalne aplikacje webowe z naciskiem na wydajność, bezpieczeństwo oraz intuicyjny interfejs dopasowany do potrzeb użytkowników.",
            icon: <WebAppIcon fill="#8B5CF6" w="35px" h="35px"/>, 
        },
        {
            title: "Aplikacje mobilne",
            description: "Tworzę nowoczesne aplikacje mobilne na systemy iOS i Android, zapewniając płynne działanie, dopracowany UX oraz spójność wizualną z marką.",
            icon: <MobileAppIcon fill="#8B5CF6" w="35px" h="35px"/>, 
        },
    ];

const Services = () => {
    return (
        <section className="w-full relative flex items-center justify-center bg-slate-950 py-20">
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-white font-roboto text-center max-w-7xl">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 animate-fade-in-up">
                    Usługi
                </h1>

                <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.3)] animate-fade-in-up [animation-delay:400ms]"></div>

                <p className="text-slate-300 text-lg md:text-xl mt-6 max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">
                    Skupiam się na <span className="text-white font-medium border-b border-violet-500/30 pb-0.5">wydajności, intuicyjności i dopracowanych detalach</span>, aby każdy projekt realnie wspierał rozwój Twojego biznesu.
                </p>

                <div className="flex items-center flex-col md:flex-row justify-center gap-5 mt-14">
                    {services.map((service) => (
                        <div key={service.title} className="border border-violet-500/30 rounded-xl p-4 bg-violet-400/5 hover:bg-violet-400/10 transition-all duration-300 hover:border-violet-500/60 hover:scale-105">
                            <div className="flex items-center justify-center gap-3">
                                <div className="bg-violet-500/20 border border-violet-500/80 p-2 rounded-xl flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                            </div>
                            <p className="text-slate-300 text-md mt-6 max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;