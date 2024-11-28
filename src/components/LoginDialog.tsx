import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const LoginDialog = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Signup attempted",
      description: "This is a demo. Signup functionality is not implemented yet.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-8 py-6 text-lg bg-[#F7931A] text-white hover:bg-[#E88A19] flex items-center gap-2">
          Join the waiting list
          <LogIn className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sign up to PlanB</DialogTitle>
          <DialogDescription>
            Enter your email to join our waiting list
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#F7931A] text-white hover:bg-[#E88A19]">
            Join now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;