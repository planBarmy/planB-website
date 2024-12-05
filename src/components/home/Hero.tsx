import WaitlistDialog from "@/components/auth/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroStats from "./HeroStats";

const translations = {
  en: {
    titleStart: "Be unstoppable,",
    titleMiddle: "buy ",
    titleHighlight: "Bitcoin",
    titleEnd: "",
    subtitle: "planB is the best way to convert your BRL to BTC.",
    description: "Exit the inflationary system and build your wealth with us."
  },
  "pt-BR": {
    titleStart: "Seja livre,",
    titleMiddle: "compre ",
    titleHighlight: "Bitcoin",
    titleEnd: "",
    subtitle: "planB é a melhor maneira de converter seu BRL para BTC.",
    description: "Fuja do Real inflacionário e construa seu patrimônio conosco."
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
            {t.titleStart}
            <br />
            {t.titleMiddle}
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF6B00] to-[#FF4D00] text-transparent bg-clip-text">
              {t.titleHighlight}
            </span>
            {t.titleEnd}
          </h1>
          <div className="space-y-2">
            <p className="text-lg opacity-80">{t.subtitle}</p>
            <p className="text-lg opacity-80 max-w-xl">{t.description}</p>
          </div>
          <WaitlistDialog />
          <HeroStats />
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/6763a7cb-2ea7-4a9d-bc0a-a9c208a68c55.png"
              alt="Bitcoin Rebellion Illustration"
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
