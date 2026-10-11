"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
            <Link href="#top" className="group flex items-center gap-3 text-sm font-semibold text-white">
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-xl" />
                <span>Michał Bertman</span>
            </Link>
            <div className="hidden items-center gap-8 text-sm text-slate-400 sm:flex">
                <Link href="#services" className="transition-colors hover:text-white">{t("navbar.services")}</Link>
                <Link href="#work" className="transition-colors hover:text-white">{t("navbar.portfolio")}</Link>
                <Link href="#about" className="transition-colors hover:text-white">{t("navbar.about")}</Link>
            </div>
            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <Link href="#contact" className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-violet-500 hover:bg-violet-500/10">
                    {t("navbar.contact")}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;