import { Button } from "@/components/ui/button";
import LoginDialog from "../auth/LoginDialog";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 dark:bg-black bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={theme === 'dark' 
              ? "/lovable-uploads/eb97a2c9-aa44-4ce5-bbce-712a43408fbc.png"
              : "/lovable-uploads/bf691c30-de5e-42c8-b57c-30eb658d5974.png"
            } 
            alt="PlanB Logo" 
            className="h-8 w-auto object-contain md:h-12"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={toggleLanguage}
          >
            {language === 'en' ? 'PT-BR 🇧🇷' : 'EN 🇺🇸'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <LoginDialog />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;