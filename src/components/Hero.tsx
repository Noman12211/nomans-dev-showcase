import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <div className="mb-6">
            <p className="text-lg font-medium opacity-90 mb-2">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Noman Ejaz
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold opacity-90 mb-6">
              Software Developer | ASP.NET Core | Web API | MVC | Mobile Apps
            </h2>
          </div>

          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Building secure, scalable, and high-performance applications with modern technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-hero text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline-primary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;