import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              
              <Card className="p-6 bg-card border-border hover:border-primary/50 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:m.jalissi02@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      m.jalissi02@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a 
                      href="tel:0770718538" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      0770718538
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localisation</h4>
                    <p className="text-muted-foreground">
                      Tanger, Val Fleuri<br />
                      Maroc
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex gap-4">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
              <Card className="p-6 bg-card border-border">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(25_95%_53%/0.4)]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
