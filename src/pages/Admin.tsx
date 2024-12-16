import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, ArrowLeft } from "lucide-react";
import WaitlistTable from "@/components/admin/WaitlistTable";
import DeleteConfirmDialog from "@/components/admin/DeleteConfirmDialog";
import { Link } from "react-router-dom";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<{ id: string; email: string } | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
    enabled: isAuthenticated,
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

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["waitlist"] });
    toast({
      title: "Refreshed",
      description: "The waitlist has been refreshed.",
    });
  };

  const handleDeleteClick = (id: string, email: string) => {
    setSelectedEntry({ id, email });
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedEntry) return;

    const { error } = await supabase
      .from("waitlist")
      .delete()
      .eq("id", selectedEntry.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete the entry. Please try again.",
      });
    } else {
      queryClient.invalidateQueries({ queryKey: ["waitlist"] });
      toast({
        title: "Deleted",
        description: `${selectedEntry.email} has been removed from the waitlist.`,
      });
    }
    setDeleteDialogOpen(false);
    setSelectedEntry(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative">
        <Link to="/" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors absolute top-4 left-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center justify-center min-h-screen p-4">
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
      </div>
    );
  }

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Waitlist Entries</h1>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button 
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>
        
        <WaitlistTable 
          waitlist={waitlist || []}
          onDeleteClick={handleDeleteClick}
        />

        <DeleteConfirmDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onConfirm={handleDelete}
          email={selectedEntry?.email || ""}
        />
      </div>
    </div>
  );
};

export default Admin;
