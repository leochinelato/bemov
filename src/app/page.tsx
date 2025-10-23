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
    <div className="flex justify-center items-center flex-col" >

      <div
        className="w-full bg-transparent bg-[url('/fundos/breno-hero.png')] bg-contain bg-no-repeat bg-center"
      >

        <Navigation />
        <Hero />
        <SobreMim id="sobre-mim" />

      </div>

      {/* Novo contêiner para o wallpaper */}
      <div
        className="w-full bg-[url('/fundos/breno-projects.png')]  bg-no-repeat bg-cover bg-bottom"
      >
        <Projects id="projects" />
        {/* <Gallery id="gallery" /> */}
        <Contact id="contact" />
      </div>
      <Footer id="footer" />

    </div>
  );
}