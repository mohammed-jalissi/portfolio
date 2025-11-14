import { Card } from "@/components/ui/card";
import { 
  Package, 
  Cog, 
  BarChart3, 
  Code, 
  Brain, 
  Wrench,
  Database
} from "lucide-react";

const skillsData = [
  {
    icon: Package,
    title: "Logistique & Supply Chain",
    skills: [
      "Planification MRP & DDMRP",
      "Gestion des stocks",
      "WMS/TMS",
      "Audit logistique",
      "Référentiel SCOR",
      "Indicateurs de performance (KPI)"
    ]
  },
  {
    icon: Cog,
    title: "Management Industriel",
    skills: [
      "Gestion de production",
      "Maintenance",
      "Qualité",
      "Amélioration continue",
      "DMAIC, PDCA, VSM"
    ]
  },
  {
    icon: BarChart3,
    title: "Analyse & Visualisation",
    skills: [
      "Statistiques",
      "Power BI",
      "Excel avancé",
      "Prévision",
      "Cartes thermiques"
    ]
  },
  {
    icon: Code,
    title: "Développement",
    skills: [
      "Applications desktop (Tkinter, PyQt5)",
      "Applications web",
      "Interfaces interactives",
      "Outils métiers pour logistique"
    ]
  },
  {
    icon: Brain,
    title: "Data Science & ML",
    skills: [
      "Modélisation prédictive",
      "Pandas, Numpy",
      "Matplotlib, Seaborn",
      "Scikit-learn"
    ]
  },
  {
    icon: Wrench,
    title: "Résolution de Problèmes",
    skills: [
      "Méthodes Six Sigma",
      "AMDEC",
      "AHP",
      "SPC"
    ]
  }
];

const softwareData = [
  { icon: Code, name: "Python", description: "Tkinter, PyQt5, Pandas, Scikit-learn" },
  { icon: Database, name: "SGBD", description: "MySQL, PostgreSQL" },
  { icon: Cog, name: "ODOO ERP", description: "Gestion d'entreprise" },
  { icon: BarChart3, name: "ARENA", description: "Simulation" },
  { icon: Package, name: "Office 365", description: "Word, Excel, PowerPoint" },
  { icon: Code, name: "VBA / SPSS", description: "Automatisation & Statistiques" }
];


const Skills = () => {
  return (
    <section id="competences" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un ensemble de compétences techniques et managériales pour optimiser les processus industriels
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Software Tools */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Logiciels</span> & Outils
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareData.map((software, index) => (
              <Card 
                key={index}
                className="p-5 bg-card border-border hover:border-primary/50 card-hover group"
              >
                <div className="flex items-center gap-3">
                  <software.icon className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {software.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{software.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
