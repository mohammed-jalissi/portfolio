import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";

const projects = [
  {
    title: "Logigame (Beer Game)",
    description: "Développement d'un jeu en VBA pour l'apprentissage de la gestion de la chaîne d'approvisionnement.",
    tags: ["VBA", "Supply Chain", "Simulation", "Apprentissage"],
    category: "Logistique"
  },
  {
    title: "Outils d'aide à la décision (AHP & ELECTRE)",
    description: "Automatisation des méthodes multicritères pour faciliter l'analyse et la prise de décision.",
    tags: ["AHP", "ELECTRE", "Aide à la décision", "Automatisation"],
    category: "Analyse décisionnelle"
  },
  {
    title: "Système d'information entrepôt (WMS/TMS)",
    description: "Conception d'un SI complet incluant gestion des produits, achats, stockage et transport.",
    tags: ["WMS", "TMS", "Système d'information", "Logistique"],
    category: "Système d'information"
  },
  {
    title: "Robot préparateur de commandes intelligent",
    description: "Robot mobile automatisé via IA et caméra pour reconnaissance visuelle et optimisation des opérations.",
    tags: ["IA", "Robotique", "Vision par ordinateur", "Automatisation"],
    category: "Industrie 4.0"
  },
  {
    title: "Outil d'audit logistique (AHP & SCOR)",
    description: "Sélection des KPI pertinents par processus avec tableau de bord dynamique.",
    tags: ["AHP", "SCOR", "KPI", "Audit logistique"],
    category: "Performance"
  }
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations professionnelles et académiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge 
                    variant="secondary" 
                    className="mb-2 bg-primary/10 text-primary border-primary/20"
                  >
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <Badge 
                    key={idx}
                    variant="outline"
                    className="border-primary/30 text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                variant="outline" 
                className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                Voir les détails
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Plus de projets à découvrir bientôt...
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(25_95%_53%/0.4)]"
          >
            Contactez-moi pour en savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
