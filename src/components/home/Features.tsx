import { Card } from "@/components/ui/card";
import { Shield, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
    title: "Feito com tecnologia de última geração",
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
        description: "Automatize seus investimentos\nDefina uma compra recorrente - de hora em hora até mensalmente\ne veja sua stack crescer sem esforço algum"
      }
    ]
  }
};

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: t.features[0].title,
      description: t.features[0].description
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: t.features[1].title,
      description: t.features[1].description
    },
    {
      icon: <img src="/lovable-uploads/660406c5-6dc8-409d-9cbe-8d6cf55a447e.png" alt="PIX + Open Finance" className="w-5 h-5 dark:invert" />,
      title: t.features[2].title,
      description: t.features[2].description
    }
  ];

  return (
    <div className="py-16 px-4 bg-background relative">
      <div className="absolute inset-0 bg-accent/5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              {t.title}
            </h2>
            <p className="text-xl opacity-80">
              {t.subtitle}
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-4 hover-lift glass-effect flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="opacity-60 text-sm whitespace-pre-line">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;