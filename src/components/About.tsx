import SectionTitle from "./SectionTitle";
import Image from "next/image";
import aboutPhoto from "@/assets/aboutPhoto.jpg"

const About = () => {
    return (
        <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionTitle eyebrow="O mnie">Programista z pasji. Inżynier z natury.</SectionTitle>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <figure>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-violet-500/10" />
              <Image
                src={aboutPhoto}
                alt="Portrait of Alex Carter, full-stack developer"
                className="aspect-square w-full object-cover object-center saturate-75 transition duration-700 hover:scale-105 hover:saturate-100"
              />
            </div>
          </figure>
          <div className="space-y-6 text-base leading-8 text-slate-400">
            <p className="text-xl leading-9 text-slate-200">
              Jestem Michał, full stack developer z półtorarocznym doświadczeniem w tworzeniu aplikacji internetowych i mobilnych.
            </p>
            <p>
              Pracuję nad projektami, które łączą funkcjonalność z estetyką, dbając o każdy szczegół i zapewniając płynne działanie na wszystkich urządzeniach.
            </p>
            <p>
              Poza pracą interesuje mnie sport oraz nowe technologie, a także poznawanie świata i odkrywanie nowych miejsc.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
              <div><strong className="block text-2xl font-medium text-white">1.5+</strong><span className="text-xs">Lata doświadczenia</span></div>
              <div><strong className="block text-2xl font-medium text-white">10+</strong><span className="text-xs">Zrealizowanych projektów</span></div>
              <div><strong className="block text-2xl font-medium text-white">5</strong><span className="text-xs">Zadowolonych klientów</span></div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;