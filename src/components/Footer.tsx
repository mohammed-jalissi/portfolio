import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Mohammed El Habib Jalissi. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Conçu avec</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>et passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
