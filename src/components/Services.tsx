"use client";
import SectionTitle from "./SectionTitle";
import { Globe, Smartphone, AppWindow } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            key: "web",
            icon: <Globe className="size-8" />,
            accent: "bg-gradient-to-r from-violet-700 to-violet-800",
            hover: "hover:border-violet-500/40",
        },
        {
            key: "webapp",
            icon: <AppWindow className="size-8" />,
            accent: "bg-gradient-to-r from-blue-700 to-blue-800",
            hover: "hover:border-blue-500/40",
        },
        {
            key: "mobile",
            icon: <Smartphone className="size-8" />,
            accent: "bg-gradient-to-r from-emerald-700 to-emerald-800",
            hover: "hover:border-emerald-500/40",
        },
    ];

    return (
        <section id="services" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
                <SectionTitle eyebrow={t("services.eyebrow")}>
                    {t("services.headline")}
                </SectionTitle>
                <p className="max-w-md pb-1 text-sm leading-7 text-slate-400">
                    {t("services.description")}
                </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
                {services.map((service) => (
                    <article key={service.key} className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 ${service.hover} sm:p-8`}>
                        <div className={`mb-14 flex h-16 w-16 items-center rounded-xl p-4 ${service.accent}`}>
                            <span className="font-mono text-xs text-white">
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{t(`services.items.${service.key}.title`)}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-400">{t(`services.items.${service.key}.description`)}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;