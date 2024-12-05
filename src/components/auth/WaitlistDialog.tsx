import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const translations = {
  en: {
    joinWaitlist: "Join the waiting list",
    joinNow: "Join now",
    joining: "Joining...",
    email: "Email",
    emailPlaceholder: "Enter your email",
    invalidEmail: "Please enter a valid email",
    alreadyJoined: "You're already on the waiting list!",
    joinSuccess: "Welcome to the waiting list!",
    joinError: "Something went wrong. Please try again.",
    buttonText: "Join the waiting list"
  },
  "pt-BR": {
    joinWaitlist: "Entre na lista de espera",
    joinNow: "Entrar agora",
    joining: "Entrando...",
    email: "E-mail",
    emailPlaceholder: "Digite seu e-mail",
    invalidEmail: "Digite um e-mail válido",
    alreadyJoined: "Você já está na lista de espera!",
    joinSuccess: "Bem-vindo à lista de espera!",
    joinError: "Algo deu errado. Tente novamente.",
    buttonText: "Entre na lista de espera"
  }
};

const WaitlistDialog = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleJoinWaitlist = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    if (!email) {
      setError(t.invalidEmail);
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      setError(t.joinError);
    } else {
      setSuccess(t.joinSuccess);
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t.joinWaitlist}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.joinNow}</DialogTitle>
        </DialogHeader>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <Input
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="mt-4"
        />
        <Button onClick={handleJoinWaitlist} disabled={loading}>
          {loading ? t.joining : t.buttonText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
