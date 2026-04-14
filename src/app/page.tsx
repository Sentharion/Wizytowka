import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#060613]">
      <div className="fixed inset-0 bg-linear-to-br from-[#250d5e] via-[#060613] to-[#100852] z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </main>
  );
}
