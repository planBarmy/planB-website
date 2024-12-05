import { Shield, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FeatureCard from "./FeatureCard";

const translations = {
  en: {
    title: "Built over next-gen tech",
    subtitle: "So you can build your next-gen wealth",
    features: [
      {
        title: "Your keys, your Bitcoins",
        description: "We are a non-custodial wallet,\nthis means we can never access your funds"
      },
      {
        title: "Spend in person, abroad or online",
        description: "Generate virtual cards with your USD balance,\nor spend with your BTC over lightning ⚡️"
      },
      {
        title: "PIX + Open Finance = ❤️",
        description: "Automate your investments with us!\nSet a recurring buy - from hourly to monthly periods,\nand watch your stack growing effortlessly"
      }
    ]
  },
  "pt-BR": {
    title: "Feito com tech de última geração",
    subtitle: "Para você construir sua riqueza do futuro",
    features: [
      {
        title: "Suas chaves, seus Bitcoins",
        description: "Somos uma carteira não custodial, isso significa que nunca podemos acessar seus fundos"
      },
      {
        title: "Gaste presencialmente, no exterior ou online",
        description: "Gere cartões virtuais com seu saldo em USD, ou gaste com seu BTC via lightning ⚡️"
      },
      {
        title: "PIX + Open Finance = ❤️",
        description: "Automatize seus investimentos\nDefina uma compra recorrente - de hora em hora até mensalmente e veja sua stack crescer sem esforço algum"
      }
    ]
  }
};

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Shield className="w-6 h-6 dark:text-white text-black" />,
      title: t.features[0].title,
      description: t.features[0].description
    },
    {
      icon: <CreditCard className="w-6 h-6 dark:text-white text-black" />,
      title: t.features[1].title,
      description: t.features[1].description
    },
    {
      icon: <img src="/lovable-uploads/660406c5-6dc8-409d-9cbe-8d6cf55a447e.png" alt="PIX + Open Finance" className="w-6 h-6 dark:invert" />,
      title: t.features[2].title,
      description: t.features[2].description
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold dark:text-white text-black">
              {t.title}
            </h2>
            <p className="text-2xl dark:text-white/80 text-black/80 font-medium">
              {t.subtitle}
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;