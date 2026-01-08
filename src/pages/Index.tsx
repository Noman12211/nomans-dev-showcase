import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => { 
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      {/* Main content with left margin for sidebar on desktop */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;