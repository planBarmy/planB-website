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
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    toast({
      title: "Login attempted",
      description: "This is a demo. Login functionality is not implemented yet.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
          Sign in
          <LogIn className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sign in to PlanB</DialogTitle>
          <DialogDescription>
            Enter your email and password to access your account
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
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Sign in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;