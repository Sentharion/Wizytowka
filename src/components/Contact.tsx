import { ArrowRight } from "lucide-react";
import {FaGithub,FaLinkedin} from "react-icons/fa"

const Contact = () => {
    return (
       <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 ">
        <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/80 via-slate-900 to-blue-950/80 px-7 py-16 text-center sm:px-12 sm:py-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
            Masz jakiś pomysł?
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-medium tracking-tight text-white sm:text-6xl">
            Stwórzmy coś razem!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-400">
            Jestem otwarty na współpracę przy ciekawych projektach. Chętnie poznam Twoje pomysły i pomogę Ci w ich realizacji.
          </p>
          <a
            href="mailto:[EMAIL_ADDRESS]"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Napisz do mnie <ArrowRight />
          </a>
        </div>
        <footer className="flex flex-col items-center justify-between gap-5 py-8 text-xs text-slate-600 sm:flex-row">
          <p>© 2025 Michał Bertman. Stworzono z pasją.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Sentharion" className="flex items-center gap-2 transition-colors hover:text-white">
                <FaGithub className="size-4" />
                Github
            </a>
            <a href="https://www.linkedin.com/in/michal-bertman-90a676239/" className="flex items-center gap-2 transition-colors hover:text-white">
                <FaLinkedin className="size-4" />
                LinkedIn
            </a>
          </div>
        </footer>
      </section>
    );
};

export default Contact;