import WaitlistDialog from "@/components/auth/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    titleStart: "The ",
    titleHighlight: "Bitcoin",
    titleEnd: " Machine",
    subtitle: "planB is the best way to convert your BRL to BTC.",
    description: "Exit the inflationary system and build your wealth with us.",
    stats: {
      wallet: {
        title: "Free",
        subtitle: "Wallet creation"
      },
      withdrawals: {
        title: "On-chain",
        subtitle: "Withdrawals"
      },
      security: {
        title: "Secure",
        subtitle: "Open source code"
      }
    }
  },
  "pt-BR": {
    titleStart: "Fuja do Real, compre ",
    titleHighlight: "Bitcoin",
    titleEnd: "",
    subtitle: "planB é a melhor maneira de converter seu BRL para BTC.",
    description: "Saia do sistema inflacionário e crie sua riqueza conosco.",
    stats: {
      wallet: {
        title: "100% BTC",
        subtitle: "App simples e direto"
      },
      withdrawals: {
        title: "Saques",
        subtitle: "On-chain"
      },
      security: {
        title: "Código Aberto",
        subtitle: "Auditado e seguro"
      }
    }
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 pt-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.titleStart}
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF6B00] to-[#FF4D00] text-transparent bg-clip-text">
              {t.titleHighlight}
            </span>
            {t.titleEnd}
          </h1>
          <p className="text-lg opacity-80">{t.subtitle}</p>
          <p className="text-lg opacity-80 max-w-xl">{t.description}</p>
          <WaitlistDialog />
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(t.stats).map(([key, stat]) => (
              <div key={key} className="space-y-1">
                <div className="text-2xl font-bold">{stat.title}</div>
                <div className="text-sm opacity-60">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/87a1f9f1-2cab-4a50-b92b-059d28c8c369.png"
              alt="Bitcoin Machine Illustration"
              className="w-full h-auto object-contain bg-background"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;