import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import ScrollUp from "@/components/ScrollUp";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80">
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills  */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me  */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href='#hero'>
          <ScrollUp />
        </Link>
      </footer>
    </main>
  );
}
