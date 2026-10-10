import SectionTitle from "./SectionTitle";
import {Globe,Smartphone,AppWindow} from "lucide-react";
const services = [
    {
        title: "Strony internetowe",
        description: "Projektuję i tworzę nowoczesne strony internetowe, które są szybkie, responsywne i zoptymalizowane pod kątem SEO oraz doświadczenia użytkownika.",
        icon: <Globe className="size-8" />,
        accent: "bg-gradient-to-r from-violet-700 to-violet-800",
        hover: "hover:border-violet-500/40",
    },
    {
        title: "Aplikacje webowe",
        description: "Buduję skalowalne aplikacje webowe z naciskiem na wydajność, bezpieczeństwo oraz intuicyjny interfejs dopasowany do potrzeb użytkowników.",
        icon: <AppWindow className="size-8" />,
        accent: "bg-gradient-to-r from-blue-700 to-blue-800",
        hover: "hover:border-blue-500/40",
    },
    {
        title: "Aplikacje mobilne",
        description: "Tworzę nowoczesne aplikacje mobilne na systemy iOS i Android, zapewniając płynne działanie, dopracowany UX oraz spójność wizualną z marką.",
        icon: <Smartphone className="size-8" />,
        accent: "bg-gradient-to-r from-emerald-700 to-emerald-800",
        hover: "hover:border-emerald-500/40",
    },
];

const Services = () => {
    return (
        <section id="services" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
                <SectionTitle eyebrow="Usługi">
                    Od pomysłu do niezawodnego produktu.
                </SectionTitle>
                <p className="max-w-md pb-1 text-sm leading-7 text-slate-400">
                    Skupiam się na wydajności, intuicyjności i dopracowanych detalach, aby każdy projekt realnie wspierał rozwój Twojego biznesu.
                </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
                {services.map((service) => (
                    <article key={service.title} className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 ${service.hover} sm:p-8`}>
                        <div className={`mb-14 flex h-16 w-16 items-center rounded-xl p-4 ${service.accent}`}>
                            <span className="font-mono text-xs text-white">
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{service.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;