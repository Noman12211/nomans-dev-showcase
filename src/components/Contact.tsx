import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nomanejaz407@gmail.com",
      href: "mailto:nomanejaz407@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92-3068511368",
      href: "tel:+923068511368",
      description: "Call me for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#",
      description: "Available for remote work worldwide"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations. 
                Whether you need a custom web application, API development, or technical consultation, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.title} 
                  className="inbio-card border-0 group" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                        <a 
                          href={contact.href}
                          className="text-primary font-medium text-lg hover:underline"
                        >
                          {contact.value}
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary text-white p-6 rounded-2xl">
              <h4 className="font-semibold text-lg mb-2">Quick Response Guarantee</h4>
              <p className="text-white/90">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                don't hesitate to call me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="inbio-card border-0 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                <Send className="w-6 h-6 text-primary mr-3" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-accent border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-accent border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    required
                    className="bg-accent border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    required
                    className="bg-accent border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-hero text-white font-semibold py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;