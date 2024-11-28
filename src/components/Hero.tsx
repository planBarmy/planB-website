import WaitlistDialog from "@/components/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    title: "The Bitcoin Machine",
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
    title: "A Máquina de Bitcoin",
    subtitle: "planB é a melhor maneira de converter seu BRL para BTC.",
    description: "Saia do sistema inflacionário e crie sua riqueza conosco.",
    stats: {
      wallet: {
        title: "Grátis",
        subtitle: "Criação de carteira"
      },
      withdrawals: {
        title: "On-chain",
        subtitle: "Saques"
      },
      security: {
        title: "Seguro",
        subtitle: "Código aberto"
      }
    }
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 dark:bg-black bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t.title}
          </h1>
          <div className="space-y-2">
            <p className="text-lg opacity-80">{t.subtitle}</p>
            <p className="text-lg opacity-80 max-w-xl">{t.description}</p>
          </div>
          <WaitlistDialog />
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold">{t.stats.wallet.title}</div>
              <div className="opacity-60">{t.stats.wallet.subtitle}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{t.stats.withdrawals.title}</div>
              <div className="opacity-60">{t.stats.withdrawals.subtitle}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{t.stats.security.title}</div>
              <div className="opacity-60">{t.stats.security.subtitle}</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/87a1f9f1-2cab-4a50-b92b-059d28c8c369.png"
              alt="Bitcoin Machine Illustration"
              className="w-full h-auto object-contain bg-background backdrop-blur-sm"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;