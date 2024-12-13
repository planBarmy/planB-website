import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const translations = {
  en: {
    button: "Get beta access",
    title: "Join the waitlist",
    placeholder: "Enter your email",
    success: "You've been added to the waitlist!",
    error: "Error joining waitlist. Please try again.",
    invalid: "Please enter a valid email"
  },
  "pt-BR": {
    button: "Acesse o beta",
    title: "Entre na lista de espera",
    placeholder: "Digite seu email",
    success: "Você foi adicionado à lista de espera!",
    error: "Erro ao entrar na lista de espera. Tente novamente.",
    invalid: "Digite um email válido"
  }
};

const WaitlistDialog = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.includes('@')) {
      toast.error(t.invalid);
      return;
    }

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      toast.success(t.success);
      setEmail("");
      setOpen(false);
    } catch (error) {
      toast.error(t.error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-metallic-orange hover:bg-metallic-orange/90 text-white font-medium rounded-full px-6 py-2 text-sm sm:text-base w-full sm:w-auto">
          {t.button} →
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full bg-metallic-orange hover:bg-metallic-orange/90">
            {t.button}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;