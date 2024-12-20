import WaitlistDialog from "@/components/auth/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroStats from "./HeroStats";

const translations = {
  en: {
    titleStart: "Be unstoppable,",
    titleMiddle: "buy ",
    titleHighlight: "Bitcoin",
    titleEnd: "",
    subtitle: {
      prefix: "",
      highlight: "planB",
      suffix: " is the best way to convert your BRL to BTC."
    },
    description: "Exit the inflationary system and build your wealth with us."
  },
  "pt-BR": {
    titleStart: "Seja livre,",
    titleMiddle: "compre ",
    titleHighlight: "Bitcoin",
    titleEnd: "",
    subtitle: {
      prefix: "",
      highlight: "planB",
      suffix: " é a melhor maneira de converter seu BRL para BTC."
    },
    description: "Fuja do Real inflacionário e construa seu patrimônio conosco."
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 dark:bg-black bg-background pt-20 md:pt-0">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full max-w-xl space-y-6 mt-16 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t.titleStart}
            <br />
            {t.titleMiddle}
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF6B00] to-[#FF4D00] dark:from-metallic-orange dark:via-metallic-orange dark:to-metallic-orange text-transparent bg-clip-text">
              {t.titleHighlight}
            </span>
            {t.titleEnd}
          </h1>
          <div className="space-y-2 max-w-md">
            <p className="text-lg opacity-80">
              {t.subtitle.prefix}
              <span className="font-bold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-metallic-orange dark:via-metallic-orange dark:to-metallic-orange bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                {t.subtitle.highlight}
              </span>
              {t.subtitle.suffix}
            </p>
            <p className="text-lg opacity-80">{t.description}</p>
          </div>
          <WaitlistDialog />
          <HeroStats />
        </div>
        <div className="relative w-full">
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