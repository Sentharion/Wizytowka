"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060613] border-b border-violet-500/10 transition-all duration-300">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-white font-roboto">
                <a href="#" className="flex flex-col items-start gap-0 group">
                    <p className="text-xl text-violet-500 m-0 leading-relaxed group-hover:scale-110 transition-transform">&lt;/&gt;</p>
                    <p className="text-lg font-bold m-0 leading-none">M<span className="text-violet-500">B</span></p>
                </a>

                <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <li>
                        <a href="#uslugi" className="text-slate-300 hover:text-violet-500 transition-colors duration-200">Usługi</a>
                    </li>
                    <li>
                        <Link href="#portfolio" className="text-slate-300 hover:text-violet-500 transition-colors duration-200">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="#o-mnie" className="text-slate-300 hover:text-violet-500 transition-colors duration-200">O mnie</Link>
                    </li>
                    <li>
                        <a href="#kontakt" className="px-5 py-2 bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/20 hover:border-violet-500/40 rounded-xl text-violet-100 transition-all duration-300 backdrop-blur-sm">
                            Kontakt
                        </a>
                    </li>
                </ul>

                <button className="md:hidden text-violet-500 p-2 hover:bg-violet-500/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
                </button>

                <div 
                    className={`fixed inset-0 z-50 transition-opacity duration-300 pointer-events-none ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
                >
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div 
                        className={`absolute top-0 right-0 h-full w-[300px] bg-[#060613] border-l border-violet-500/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className="flex items-center justify-end p-6">
                            <button 
                                className="text-violet-500 p-2 hover:bg-violet-500/10 rounded-lg transition-colors" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        
                        <div className="px-10 py-4 flex flex-col gap-10 mt-10 justify-center items-center">
                            <a href="#uslugi" className="text-xl font-medium text-slate-300 hover:text-violet-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Usługi</a>
                            <Link href="#portfolio" className="text-xl font-medium text-slate-300 hover:text-violet-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                            <Link href="#o-mnie" className="text-xl font-medium text-slate-300 hover:text-violet-500 transition-colors" onClick={() => setIsMenuOpen(false)}>O mnie</Link>
                            <a 
                                href="#kontakt" 
                                className="inline-block text-center px-6 py-3 bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/20 hover:border-violet-500/40 rounded-xl text-violet-100 transition-all duration-300 backdrop-blur-sm mt-4" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Kontakt
                            </a>
                        </div>
                        
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-600/5 blur-[80px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;