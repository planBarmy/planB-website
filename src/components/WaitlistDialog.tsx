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

const WaitlistDialog = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast.success("You've been added to the waitlist!");
      setEmail("");
      setOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-8 py-6 text-lg bg-[#F7931A] text-white hover:bg-[#E88A19] flex items-center gap-2">
          Join the waiting list
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join the Waiting list</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#F7931A] text-white hover:bg-[#E88A19]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;