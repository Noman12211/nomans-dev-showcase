import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">Welcome to my world</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Noman Ejaz</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-muted-foreground">a </span>
            <span className="text-primary">
              <Typewriter
                words={[
                  '.NET Full Stack Developer',
                  'ASP.NET Core Specialist',
                  'Web API Developer',
                  'Software Engineer',
                  'Mobile App Developer'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building secure, scalable, and high-performance applications with modern technologies. 
            Passionate about clean code, best practices, and delivering exceptional solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-hero text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="btn-outline-primary px-8 py-6 text-lg font-semibold rounded-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;