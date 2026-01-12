import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Database, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code, text: "ASP.NET Core & Web APIs" },
    { icon: Database, text: "Entity Framework & JWT" },
    { icon: Smartphone, text: "Mobile Apps with MAUI" },
    { icon: User, text: "Full-Stack Development" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-xl hover-lift">
                <User className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Software Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated software developer with expertise in <strong className="text-primary">ASP.NET Core</strong>, 
              building robust <strong className="text-primary">RESTful APIs</strong>, and implementing secure authentication 
              with <strong className="text-primary">JWT tokens</strong>. My experience spans across modern web development 
              using <strong className="text-primary">MVC architecture</strong> and <strong className="text-primary">Entity Framework Code First</strong> approach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              On the frontend, I work with <strong className="text-primary">HTML5</strong>, <strong className="text-primary">CSS3</strong>, 
              <strong className="text-primary">Bootstrap</strong>, <strong className="text-primary">JavaScript</strong>, and 
              <strong className="text-primary">jQuery</strong>. I also have experience in mobile app development using 
              <strong className="text-primary">MAUI</strong> for cross-platform solutions.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <Card key={index} className="hover-lift cursor-pointer border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["ASP.NET Core", "Web API", "MVC", "Entity Framework", "JWT", "Bootstrap", "JavaScript", "MAUI"].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm font-medium">
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