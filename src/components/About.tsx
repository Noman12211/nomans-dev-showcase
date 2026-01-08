import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Database, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code, text: "ASP.NET Core & Web APIs", description: "Building robust backend solutions" },
    { icon: Database, text: "Entity Framework & JWT", description: "Secure data management" },
    { icon: Smartphone, text: "Mobile Apps with MAUI", description: "Cross-platform development" },
    { icon: User, text: "Full-Stack Development", description: "End-to-end solutions" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Know Me More
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-card inbio-card flex items-center justify-center">
                <User className="w-32 h-32 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">
              I'm <span className="text-primary">Noman Ejaz</span>, a Passionate Software Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated software developer with expertise in <strong className="text-primary">ASP.NET Core</strong>, 
              building robust <strong className="text-primary">RESTful APIs</strong>, and implementing secure authentication 
              with <strong className="text-primary">JWT tokens</strong>. My experience spans across modern web development 
              using <strong className="text-primary">MVC architecture</strong> and <strong className="text-primary">Entity Framework Code First</strong> approach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              On the frontend, I work with <strong className="text-primary">HTML5</strong>, <strong className="text-primary">CSS3</strong>, 
              <strong className="text-primary"> Bootstrap</strong>, <strong className="text-primary">JavaScript</strong>, and 
              <strong className="text-primary"> jQuery</strong>. I also have experience in mobile app development using 
              <strong className="text-primary"> MAUI</strong> for cross-platform solutions.
            </p>

            {/* Highlight cards - Inbio style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <Card key={index} className="inbio-card border-0 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.text}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["ASP.NET Core", "Web API", "MVC", "Entity Framework", "JWT", "Bootstrap", "JavaScript", "MAUI"].map((tech) => (
                <Badge key={tech} className="bg-accent text-foreground hover:bg-primary hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;