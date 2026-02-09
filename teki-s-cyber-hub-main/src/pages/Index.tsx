import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import LearningPath from "@/components/LearningPath";
import SmartLight from "@/components/SmartLight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <LearningPath />
      <SmartLight />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
