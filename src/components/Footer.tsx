import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    title: "PlanB",
    subtitle: "It's always good to have a planB",
    copyright: "© 2024 PlanB. All rights reserved.",
    switchLanguage: "Mudar para Português"
  },
  "pt-BR": {
    title: "PlanB",
    subtitle: "É sempre bom ter um planB",
    copyright: "© 2024 PlanB. Todos os direitos reservados.",
    switchLanguage: "Switch to English"
  }
};

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{t.title}</h3>
          <p className="text-white/60">
            {t.subtitle}
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              {t.copyright}
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-white/60 hover:text-white"
                onClick={toggleLanguage}
              >
                {t.switchLanguage}
              </Button>
              <Link 
                to="/admin" 
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;