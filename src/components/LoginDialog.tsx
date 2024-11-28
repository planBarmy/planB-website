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
import WaitlistDialog from "@/components/WaitlistDialog";

const LoginDialog = () => {
  return <WaitlistDialog />;
};

export default LoginDialog;