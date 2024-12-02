import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">{title}</h3>
        <p className="dark:text-white/60 text-black/60 whitespace-pre-line">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;