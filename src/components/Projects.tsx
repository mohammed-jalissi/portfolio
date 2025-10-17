import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Play, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    title: "Optimisation Four de Séchage - OCP",
    description: "Développement d'un outil VBA complet pour l'optimisation de la disponibilité du four de séchage 7 via la méthode DMAIC. L'outil permet l'enregistrement des pannes, le calcul automatique des KPI (MTBF, MTTR, TRS), et la génération de tableaux de bord.",
    tags: ["VBA", "DMAIC", "KPI", "Optimisation"],
    category: "Industrie 4.0",
    hasVideo: true,
    hasImages: true
  },
  {
    title: "Analyse AMDEC - Broyeur Plastique",
    description: "Réalisation d'une analyse AMDEC complète sur un broyeur plastique chez Elec Recyclage. Élaboration d'un plan de maintenance préventive, codification des pièces de rechange et développement d'un système de gestion de stock sous Excel.",
    tags: ["AMDEC", "Maintenance", "Excel", "Gestion"],
    category: "Maintenance",
    hasVideo: false,
    hasImages: true
  },
  {
    title: "Applications Desktop Python",
    description: "Développement d'applications desktop interactives pour la logistique et l'industrie utilisant Tkinter et PyQt5. Outils métiers personnalisés pour l'optimisation des processus industriels.",
    tags: ["Python", "Tkinter", "PyQt5", "Desktop"],
    category: "Développement",
    hasVideo: true,
    hasImages: true
  },
  {
    title: "Tableaux de Bord Power BI",
    description: "Création de tableaux de bord interactifs pour l'analyse et la visualisation des données industrielles. Suivi en temps réel des KPI et aide à la prise de décision.",
    tags: ["Power BI", "KPI", "Visualisation", "Analytics"],
    category: "Data Analytics",
    hasVideo: true,
    hasImages: true
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

              {/* Media Placeholder */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 mb-4 text-center bg-secondary/30">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-4">
                    {project.hasVideo && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Play className="h-5 w-5 text-primary" />
                        <span className="text-sm">Vidéo à venir</span>
                      </div>
                    )}
                    {project.hasImages && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <ImageIcon className="h-5 w-5 text-primary" />
                        <span className="text-sm">Photos à venir</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Espace réservé pour le contenu multimédia
                  </p>
                </div>
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
