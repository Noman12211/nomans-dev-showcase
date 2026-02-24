import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sublime Groceria",
      description: "A Comprihensive RESTful API built with ASP.NET Core that powers a grocery list and recipe management application. It enables users to create categorized grocery lists, manage recipes, and collaborate with family and friends for efficient shopping planning.The system integrates with an external nutrition API to fetch and store nutritional information for food items, helping users make informed dietary decisions.The API is consumed by a Flutter mobile application, with selected features also available through a web interface.",
      icon: ShoppingCart,
      technologies: ["ASP.NET Core", "Web API", "Entity Framework", "JWT","External API","Background Services","MVC","Bootstrap", "JavaScript"],
      features: [
        "🔐 JWT-based User Authentication & Role Management",
        "🗂 Categorized Grocery Items",
        "📝 Grocery List Creation & Sharing",
        "👨‍👩‍👧 Collaborative List Management",
        "⚖ Quantity Management & Unit Conversions",
        "🍲 Recipe & Ingredient Management",
        "🥗 Nutrition Data Integration (via External API)",
        "📊 Nutritional Record Storage & Tracking",
        "📡 RESTful API for Mobile (Flutter) & Web " 
      ],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "QAMC – College Management System",
      description: "A comprehensive College Management System designed to manage academic and administrative operations within higher education institutions. The system streamlines student enrollment, faculty management, course coordination, attendance tracking, lecture scheduling, and institutional communication.It provides centralized control over departments, degrees, academic sessions, and reporting to improve operational efficiency and transparency.",
      icon: GraduationCap,
      technologies: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Bootstrap", "jQuery"],
      features: [
        "🎓 Student Management  ", 
        "🏢 Department Management", 
        "📘 Subject Management", 
        "👩‍🏫 Teacher & Faculty Management", 
        "🏷 Designation Management", 
        "📜 Degree & Program Management", 
        "🗓 Academic Session Management", 
        "📝 Lecture & Lecture Type Management", 
        "📊 Attendance Management", 
        "📆 Holiday Management", 
        "📩 SMS Notification System", 
        "📈 Reports & Analytics"
      ],
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications that demonstrate my expertise in building scalable, secure, and high-performance software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="hover-lift hover-glow transition-all animate-scale-in border-primary/20 overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">{project.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="btn-outline-primary flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="btn-hero flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" className="btn-outline-primary">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
