import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sublime Groceria",
      description: "A comprehensive e-commerce grocery platform built with ASP.NET Core featuring user authentication, shopping cart functionality, order management, and secure payment processing. Includes admin panel for inventory management and real-time order tracking.",
      icon: ShoppingCart,
      technologies: ["ASP.NET Core", "Web API", "Entity Framework", "JWT", "Bootstrap", "JavaScript"],
      features: [
        "User Authentication & Authorization",
        "Shopping Cart & Checkout",
        "Order Management System",
        "Admin Dashboard",
        "Real-time Notifications"
      ],
    },
    {
      title: "QAMC – College Management System",
      description: "A complete college management system designed for educational institutions. Features student enrollment, course management, faculty administration, grade tracking, and comprehensive reporting. Built with modern web technologies for optimal performance.",
      icon: GraduationCap,
      technologies: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Bootstrap", "jQuery"],
      features: [
        "Student Management",
        "Course & Curriculum Management",
        "Faculty Administration",
        "Grade & Assessment Tracking",
        "Comprehensive Reporting"
      ],
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications that demonstrate my expertise in building scalable, secure, and high-performance software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="inbio-card border-0 overflow-hidden animate-scale-in group" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <project.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
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
                      <Badge 
                        key={tech} 
                        className="bg-accent text-foreground hover:bg-primary hover:text-white px-3 py-1 text-sm transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="btn-outline-primary flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="btn-hero flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" className="btn-outline-primary">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;