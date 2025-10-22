import Contact from "@/components/Contact";
import SobreMim from "@/components/SobreMim";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    // A div principal continua como está
    <div className="flex justify-center items-center flex-col">
      <Navigation />
      <Hero />

      {/* Novo contêiner para o wallpaper */}
      <div 
        className="w-full bg-[url('/fundos/breno-projects.png')] bg-cover bg-center "
      >
        <SobreMim id="sobre-mim" />
        <Projects id="projects" />
        {/* <Gallery id="gallery" /> */}
        <Contact id="contact" />
      </div>

      <Footer id="footer" />
    </div>
  );
}