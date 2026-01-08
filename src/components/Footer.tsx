import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/nomanejaz",
    },
    {
      name: "GitHub", 
      icon: Github,
      href: "https://github.com/nomanejaz",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nomanejaz407@gmail.com",
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Noman Ejaz</h3>
              <p className="text-primary text-lg mb-4">.NET Full Stack Developer</p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about building secure, scalable, and high-performance applications. 
                Always ready to take on new challenges and deliver exceptional solutions.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:nomanejaz407@gmail.com"
                  className="text-primary hover:underline"
                >
                  nomanejaz407@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Phone</p>
                <a 
                  href="tel:+923068511368"
                  className="text-primary hover:underline"
                >
                  +92-3068511368
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Noman Ejaz. All rights reserved.
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="btn-outline-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;