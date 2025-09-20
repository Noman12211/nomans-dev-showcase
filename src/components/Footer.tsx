import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/nomanejaz",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: Github,
      href: "https://github.com/nomanejaz",
      color: "hover:text-gray-900"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nomanejaz407@gmail.com",
      color: "hover:text-red-600"
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
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Profile section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-3">Noman Ejaz</h3>
                <p className="text-white/90 text-lg mb-4">Software Developer | ASP.NET Core Specialist</p>
                <p className="text-white/80 leading-relaxed">
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
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white/80 mb-1">Email</p>
                  <a 
                    href="mailto:nomanejaz407@gmail.com"
                    className="text-white hover:underline"
                  >
                    nomanejaz407@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-white/80 mb-1">Phone</p>
                  <a 
                    href="tel:+923068511368"
                    className="text-white hover:underline"
                  >
                    +92-3068511368
                  </a>
                </div>
                <div>
                  <p className="text-white/80 mb-1">Location</p>
                  <p className="text-white">Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-white/80 mb-4 md:mb-0">
                <span>© {new Date().getFullYear()} Noman Ejaz. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>and lots of coffee.</span>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;