import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold">
                Bonjour,
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold">
                je suis <span className="text-gradient">Mohammed</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Élève Ingénieur en Industrie et logistique
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Étudiant en ingénierie industrielle et logistique à l'ENSA Berrechid, passionné par 
              la digitalisation des processus industriels, l'Industrie 4.0 et l'application de l'intelligence 
              artificielle au génie industriel. Intéressé par l'optimisation de la performance, l'automatisation 
              et la transformation numérique de la chaîne logistique et de la production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-[0_0_30px_hsl(25_95%_53%/0.4)] hover:shadow-[0_0_40px_hsl(25_95%_53%/0.6)] transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactez-moi
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-lg transition-all duration-300"
                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes projets
              </Button>
            </div>
            
            <div className="flex flex-col gap-2 pt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>0770718538</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>m.jalissi02@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Tanger, Val Fleuri</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Photo */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
              
              {/* Photo container with blob shape */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 blob-shape"></div>
                <div className="absolute inset-2 overflow-hidden blob-shape">
                  <img 
                    src={profilePhoto} 
                    alt="Mohammed El Habib Jalissi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
