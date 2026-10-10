"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png"

const Navbar = () => {

    return (
        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
            <Link href="#top" className="group flex items-center gap-3 text-sm font-semibold text-white">
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-xl"/>
                <span>Michał Bertman</span>
            </Link>
            <div className="hidden items-center gap-8 text-sm text-slate-400 sm:flex">
                <Link href="#services" className="transition-colors hover:text-white">Usługi</Link>
                <Link href="#work" className="transition-colors hover:text-white">Portfolio</Link>
                <Link href="#about" className="transition-colors hover:text-white">O mnie</Link>
            </div>
            <Link
                href="mailto:[EMAIL_ADDRESS]"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-violet-500 hover:bg-violet-500/10"
            >
                Kontakt
            </Link>
        </nav>
    );
};

export default Navbar;