import WaitlistDialog from "@/components/auth/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    subtitle: (
      <>
        <a 
          href="https://planb.flarum.cloud/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-4xl md:text-5xl font-bold text-[#FF6B00] hover:text-[#FF4D00] transition-colors"
        >
          Join our community and win <span className="text-[#FF6B00]">sats</span> by contributing with new ideas!
        </a>
      </>
    )
  },
  "pt-BR": {
    subtitle: (
      <>
        <a 
          href="https://planb.flarum.cloud/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-4xl md:text-5xl font-bold text-[#FF6B00] hover:text-[#FF4D00] transition-colors"
        >
          Participe do nosso fórum e receba prêmios em <span className="text-[#FF6B00]">sats</span> sugerindo suas ideias!
        </a>
      </>
    )
  }
};

const Download = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <p className="text-xl dark:text-white/60 text-black/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex justify-center">
            <WaitlistDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;