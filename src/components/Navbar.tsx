"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Menu,X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();

    const handleMenu = () => {
        setMenuOpen(!MenuOpen);
    }

    return (
        <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
            <Link href="#top" className="group flex items-center gap-3 sm:text-lg text-md font-semibold text-white">
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-xl" />
                <span>Michał Bertman</span>
            </Link>
            <div className="hidden items-center gap-8 text-md text-slate-400 sm:flex">
                <Link href="#services" className="transition-colors hover:text-white">{t("navbar.services")}</Link>
                <Link href="#work" className="transition-colors hover:text-white">{t("navbar.portfolio")}</Link>
                <Link href="#about" className="transition-colors hover:text-white">{t("navbar.about")}</Link>
            </div>
            <div className="hidden sm:flex items-center gap-4">
                <LanguageSwitcher />
                <Link href="#contact" className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-violet-500 hover:bg-violet-500/10">
                    {t("navbar.contact")}
                </Link>
            </div>

            <button onClick={handleMenu} className="sm:hidden text-white" aria-label="Otwórz menu" aria-expanded={MenuOpen}>
                <Menu className="h-7 w-7" />
            </button>

            <div onClick={() => setMenuOpen(false)} className={`fixed inset-0 z-60 bg-black/60 transition-opacity duration-300 sm:hidden ${MenuOpen ? "visible opacity-100" : "invisible opacity-0"}`} />

            <aside className={`fixed right-0 top-0 z-70 h-dvh w-72 border-l border-slate-700 bg-slate-950 p-6 shadow-2xl sm:hidden transition-transform duration-300 ease-in-out ${MenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="mb-10 flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                        Menu
                    </span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-slate-400 transition-colors hover:text-white"
                        aria-label="Zamknij menu">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col gap-2">
                    <Link
                        href="#services"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
                        {t("navbar.services")}
                    </Link>
                    <Link
                        href="#work"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
                        {t("navbar.portfolio")}
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
                        {t("navbar.about")}
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-violet-500/20">
                        {t("navbar.contact")}
                    </Link>
                    <div className="mt-4 border-t flex justify-center border-slate-800 pt-4">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </aside>
        </nav>
    );
};

export default Navbar;