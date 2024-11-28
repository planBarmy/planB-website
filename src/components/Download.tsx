import WaitlistDialog from "@/components/WaitlistDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    title: "Ready to Start Your Bitcoin Journey?",
    subtitle: "Join our community and receive an early adopter invitation to our app"
  },
  "pt-BR": {
    title: "Pronto para Começar sua Jornada Bitcoin?",
    subtitle: "Junte-se à nossa comunidade e receba um convite de adoção antecipada para nosso aplicativo"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t.title}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
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