import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    joinWaitlist: "Join the waiting list",
    joinNow: "Join now",
    joining: "Joining...",
    email: "Email",
    emailPlaceholder: "Enter your email",
    successMessage: "You've been added to the waitlist!",
    errorMessages: {
      alreadyJoined: "This email is already on the waitlist!",
      failed: "Failed to join waitlist. Please try again.",
      unexpected: "An unexpected error occurred. Please try again."
    }
  },
  "pt-BR": {
    joinWaitlist: "Entre na lista de espera",
    joinNow: "Entrar agora",
    joining: "Entrando...",
    email: "E-mail",
    emailPlaceholder: "Digite seu e-mail",
    successMessage: "Você foi adicionado à lista de espera!",
    errorMessages: {
      alreadyJoined: "Este e-mail já está na lista de espera!",
      failed: "Falha ao entrar na lista de espera. Tente novamente.",
      unexpected: "Ocorreu um erro inesperado. Tente novamente."
    }
  }
};

const WaitlistDialog = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === '23505') {
          toast.error(t.errorMessages.alreadyJoined);
        } else {
          toast.error(t.errorMessages.failed);
        }
        return;
      }

      toast.success(t.successMessage);
      setEmail("");
      setOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast.error(t.errorMessages.unexpected);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-8 py-6 text-lg bg-[#F7931A] text-white hover:bg-[#E88A19] flex items-center gap-2">
          {t.joinWaitlist}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t.joinWaitlist}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              {t.email}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#F7931A] text-white hover:bg-[#E88A19] flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.joining : t.joinNow}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;