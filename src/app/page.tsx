import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Up from "@/components/Up";

export default function Home() {
  return (
    <main>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(109,40,217,0.12),transparent_30%),radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.08),transparent_25%)]" />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <About/>
        <Contact />
        <Up/>
      </div>
    </main>
  );
}
