import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    period: "07/2024 – 08/2024",
    company: "OCP",
    location: "Benddir, Khouribga",
    position: "Stagiaire – Bureau des Méthodes",
    description: "Optimisation de la disponibilité du four de séchage 7, le plus critique, à l'aide de la méthode DMAIC.",
    achievements: [
      "Développement d'un outil VBA pour enregistrer les pannes",
      "Calcul des KPI (MTBF, MTTR, TRS)",
      "Génération d'un tableau de bord de performance",
      "Prévision des arrêts du four"
    ],
    tags: ["DMAIC", "VBA", "KPI", "Optimisation"]
  },
  {
    period: "04/2022 – 06/2022",
    company: "Elec Recyclage",
    location: "Tanger",
    position: "Stagiaire – Département Maintenance (PFE Licence)",
    description: "Réalisation d'une analyse AMDEC sur un broyeur plastique et élaboration d'un plan de maintenance préventive.",
    achievements: [
      "Analyse AMDEC complète sur broyeur plastique",
      "Élaboration d'un plan de maintenance préventive",
      "Codification des pièces de rechange",
      "Intégration dans un outil Excel de gestion de stock"
    ],
    tags: ["AMDEC", "Maintenance", "Excel", "Gestion de stock"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parcours professionnel dans l'industrie et la logistique
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline indicator */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-8 w-0.5 h-20 bg-border"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.position}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Réalisations clés :</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
