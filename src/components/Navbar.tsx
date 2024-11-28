import { Button } from "@/components/ui/button";
import LoginDialog from "./LoginDialog";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black dark:bg-black bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img 
            src={theme === 'dark' 
              ? "/lovable-uploads/eb97a2c9-aa44-4ce5-bbce-712a43408fbc.png"
              : "/lovable-uploads/bf691c30-de5e-42c8-b57c-30eb658d5974.png"
            } 
            alt="PlanB Logo" 
            className={`h-12 ${theme === 'light' ? 'invert' : ''}`}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-black dark:text-white"
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