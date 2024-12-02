import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
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

const HeroStats = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
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
  );
};

export default HeroStats;