import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    buttonText: "Join the waiting list",
    title: "Join our Waitlist",
    description: "Be the first to know when we launch!"
  },
  "pt-BR": {
    buttonText: "Entre na lista de espera",
    title: "Participe da nossa lista de espera",
    description: "Seja o primeiro a saber quando lançarmos!"
  }
};

const WaitlistDialog = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Clear email field
      setEmail("");
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-2xl">{t.title}</h2>
      <p className="mb-4">{t.description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="mb-2 p-2 border rounded"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Please wait..." : t.buttonText}
        </Button>
      </form>
      {success && <p className="mt-2 text-green-600">Successfully joined the waitlist!</p>}
    </div>
  );
};

export default WaitlistDialog;
