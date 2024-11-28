import { Button } from "@/components/ui/button";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img 
            src="/lovable-uploads/eb97a2c9-aa44-4ce5-bbce-712a43408fbc.png" 
            alt="PlanB Logo" 
            className="h-12"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Open your account
          </Button>
          <LoginDialog />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;