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
import { useRevealOnScroll } from './hooks';

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Mobile />
        <Pipeline />
        <Automation />
        <Marketing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
