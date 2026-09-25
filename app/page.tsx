import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        
      </main>
    </>
  );
}