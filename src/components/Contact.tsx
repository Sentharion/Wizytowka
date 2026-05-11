const Contact = () => {
    return (
        <section className="w-full relative flex items-center justify-center bg-slate-950 py-20">
            <div className="relative z-10 flex flex-col justify-center items-center px-6 text-white font-roboto text-center max-w-7xl">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 animate-fade-in-up">
                    Kontakt
                </h1>

                <div className="w-35 h-0.5 bg-linear-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.3)] animate-fade-in-up [animation-delay:400ms]"></div>

                <p className="text-slate-300 text-lg md:text-xl mt-6 max-w-3xl font-light leading-relaxed tracking-wide animate-fade-in-up [animation-delay:200ms]">
                    Masz pytania lub jesteś zainteresowany współpracą? Skontaktuj się ze mną!
                </p>
                <div className="flex flex-col gap-4 mt-10">
                    <button type="submit" className="bg-violet-700 text-white rounded-lg px-4 py-3 hover:bg-violet-600 transition-all duration-300 hover:scale-105 cursor-pointer">Napisz do mnie!</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;