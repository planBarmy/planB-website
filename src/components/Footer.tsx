import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">PlanB</h3>
          <p className="text-white/60">
            It's always good to have a planB
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
          <div className="flex justify-between items-center">
            <p className="text-white/60">
              © 2024 PlanB. All rights reserved.
            </p>
            <Link 
              to="/admin" 
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;