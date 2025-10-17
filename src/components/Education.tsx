import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    period: "2023 - présent",
    school: "ENSA-B (UHP)",
    degree: "Diplôme d'ingénieur d'état",
    field: "Ingénierie industrielle et logistique",
    description: "Élève ingénieur en ingénierie industrielle et logistique"
  },
  {
    period: "2021 - 2022",
    school: "FST-T (UAE)",
    degree: "Licence sciences et techniques",
    field: "Génie industriel",
    description: "Formation en génie industriel avec focus sur l'optimisation des processus"
  },
  {
    period: "2019 - 2021",
    school: "FST-T (UAE)",
    degree: "DEUST",
    field: "Génie électrique / Génie mécanique",
    description: "Formation technique en génie électrique et mécanique"
  },
  {
    period: "2018 - 2019",
    school: "Lycée Abis Abas Sebti",
    degree: "Baccalauréat Sciences Expérimentales",
    field: "Filière Physique-Chimie",
    description: "Baccalauréat avec spécialisation en sciences physiques et chimie"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ma <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parcours académique en ingénierie et sciences techniques
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-primary/50 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold">{edu.field}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium whitespace-nowrap">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-foreground">
                    {edu.school}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
