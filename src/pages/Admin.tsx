import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const { data: waitlist, isLoading } = useQuery({
    queryKey: ["waitlist"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("waitlist")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: isAuthenticated, // Only fetch data when authenticated
  });

  const handleLogin = () => {
    if (password === "Sorage23#") {
      setIsAuthenticated(true);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid password",
        description: "Please try again with the correct password.",
      });
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Access</h1>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button 
              className="w-full" 
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Waitlist Entries</h1>
          <Button 
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Joined At</th>
              </tr>
            </thead>
            <tbody>
              {waitlist?.map((entry) => (
                <tr key={entry.id} className="border-b">
                  <td className="p-4">{entry.email}</td>
                  <td className="p-4">
                    {format(new Date(entry.created_at), "PPpp")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;