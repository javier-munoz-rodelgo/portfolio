import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ScrollProgress from "@/app/components/ScrollProgress";
import ScrollToTop from "@/app/components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
