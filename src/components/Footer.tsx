import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    title: "planB",
    subtitle: "It's always good to have a planB",
    copyright: "© 2024 planB. All rights reserved.",
    switchLanguage: "Mudar para Português 🇧🇷",
    builtWith: "Built with 🧠 + 🤖 in 🇧🇷 and 🇦🇷"
  },
  "pt-BR": {
    title: "planB",
    subtitle: "É sempre bom ter um planB",
    copyright: "© 2024 planB. Todos os direitos reservados.",
    switchLanguage: "Switch to English 🇺🇸",
    builtWith: "Feito com 🧠 + 🤖 no 🇧🇷"
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
          <h3 className="text-2xl font-bold dark:text-white text-black">{t.title}</h3>
          <p className="dark:text-white/60 text-black/60">
            {t.subtitle}
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/planbexchange" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5 dark:text-white text-black" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="space-y-2">
              <p className="dark:text-white/60 text-black/60">
                {t.copyright}
              </p>
              <p className="dark:text-white/60 text-black/60 font-bold">
                {t.builtWith}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="dark:text-white/60 text-black/60 hover:text-black dark:hover:text-white"
                onClick={toggleLanguage}
              >
                {t.switchLanguage}
              </Button>
              <Link to="/admin" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/lovable-uploads/4f2417e7-fadb-4ae7-928c-d280f53e7748.png" 
                  alt="Admin Access" 
                  className="w-16 h-16"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;