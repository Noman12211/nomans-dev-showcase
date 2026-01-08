import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "MSc Computer Science",
      institution: "University of the Punjab",
      year: "2021",
      description: "Advanced studies in computer science with focus on software engineering, algorithms, and system design. Developed strong analytical and problem-solving skills.",
      achievements: ["Software Engineering Specialization", "Advanced Database Systems", "Algorithm Design & Analysis"],
    },
    {
      degree: "ADP Computer Science",
      institution: "Superior University Lahore",
      year: "2018",
      description: "Foundation in computer science fundamentals including programming, data structures, and software development methodologies. Built core technical skills.",
      achievements: ["Programming Fundamentals", "Data Structures & Algorithms", "Web Development Basics"],
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg mb-2">My Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <Card 
              key={education.degree} 
              className="inbio-card border-0 overflow-hidden animate-slide-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Degree info */}
                  <div className="lg:w-1/3 p-8 bg-primary text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                      <p className="text-white/90 text-lg mb-4">{education.institution}</p>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-white/80" />
                        <span className="text-white/80 font-medium">{education.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:w-2/3 p-8">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {education.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        Key Areas of Study
                      </h4>
                      <div className="space-y-2">
                        {education.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Badge className="bg-accent text-foreground px-4 py-2 text-sm font-medium">
                      Graduated {education.year}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional certifications section */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies and best practices in software development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microsoft .NET Certification Path",
              "Web API Development",
              "Clean Architecture Principles",
              "Azure Cloud Services",
              "Modern Frontend Frameworks"
            ].map((cert) => (
              <div 
                key={cert} 
                className="bg-accent text-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;