import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Globe, Smartphone, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "ASP.NET Core", level: 90 },
        { name: "Web API", level: 88 },
        { name: "MVC", level: 85 },
        { name: "Entity Framework", level: 82 },
        { name: "JWT Authentication", level: 80 },
      ]
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 88 },
        { name: "CSS3", level: 85 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "jQuery", level: 78 },
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "MAUI", level: 75 },
        { name: "Cross-platform", level: 70 },
        { name: "Mobile UI/UX", level: 72 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "Code First", level: 82 },
        { name: "Database Design", level: 80 },
        { name: "LINQ", level: 78 },
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        { name: "Visual Studio", level: 90 },
        { name: "Git", level: 82 },
        { name: "API Testing", level: 80 },
        { name: "Azure DevOps", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="hover-lift hover-glow transition-all animate-scale-in border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs", "API Integration", "Background Services", "Microservices", 
              "Clean Architecture", "SOLID Principles", "Unit Testing", "Performance Optimization"
            ].map((skill) => (
              <div key={skill} className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium shadow-md hover-lift">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;