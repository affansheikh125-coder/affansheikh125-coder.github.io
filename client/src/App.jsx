import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Mobile from './components/Mobile';
import Pipeline from './components/Pipeline';
import Automation from './components/Automation';
import Marketing from './components/Marketing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Showreel from './components/Showreel';
import Process from './components/Process';
import CtaBand from './components/CtaBand';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Faq from './components/Faq';
import { useRevealOnScroll, usePageProgress } from './hooks';

export default function App() {
  useRevealOnScroll();
  usePageProgress();
  return (
    <>
      <div className="scroll-bar" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Process />
        <Skills />
        <Mobile />
        <Pipeline />
        <Automation />
        <CtaBand />
        <Marketing />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
