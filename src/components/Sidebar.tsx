import { useState, useEffect } from "react";
import { Home, Briefcase, User, FolderOpen, GraduationCap, Mail, Linkedin, Github } from "lucide-react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/nomanejaz" },
    { name: "GitHub", icon: Github, href: "https://github.com/nomanejaz" },
    { name: "Email", icon: Mail, href: "mailto:nomanejaz407@gmail.com" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const sectionId of sections.slice(1)) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar flex flex-col items-center py-8 z-50 border-r border-border hidden lg:flex">
      {/* Profile Image */}
      <div className="mb-8">
        <div className="w-28 h-28 rounded-full bg-gradient-primary p-1">
          <div className="w-full h-full rounded-full bg-sidebar flex items-center justify-center overflow-hidden">
            <User className="w-16 h-16 text-primary" />
          </div>
        </div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-foreground mb-2">Noman Ejaz</h2>
      <p className="text-sm text-muted-foreground mb-8">.NET Developer</p>

      {/* Navigation */}
      <nav className="flex-1 w-full px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex gap-3 mt-auto">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;