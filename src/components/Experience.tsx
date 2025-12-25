import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Developed and maintained multiple RESTful APIs serving thousands of users daily",
    "Implemented JWT authentication system improving security by 40%",
    "Integrated external APIs including payment gateways and third-party services",
    "Built robust background services for automated data processing",
    "Designed and implemented scalable database architecture using Entity Framework",
    "Collaborated with cross-functional teams to deliver projects on time",
    "Optimized application performance resulting in 30% faster load times",
    "Mentored junior developers and conducted code reviews"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-primary rounded-full"></div>
            
            <Card className="relative ml-20 hover-lift transition-all animate-slide-up border-primary/20">
              {/* Timeline dot */}
              <div className="absolute -left-[54px] top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <CardContent className="p-8">
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Software Developer</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-primary">Bit&Byte Lab</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">2022 – Present</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium lg:ml-4">
                    Full-time • 2+ years
                  </Badge>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As a Software Developer at Bit&Byte Lab, I specialize in building enterprise-level applications 
                  using ASP.NET Core and modern web technologies. I focus on creating scalable, secure, and 
                  high-performance solutions that meet complex business requirements.
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4">Core Technologies & Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "ASP.NET Core", "Web API", "MVC", "Entity Framework", "JWT Authentication", 
                      "SQL Server", "Bootstrap", "JavaScript", "jQuery", "API Integration", 
                      "Background Services", "Azure", "Git", "Agile Methodology"
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1 text-xs border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;