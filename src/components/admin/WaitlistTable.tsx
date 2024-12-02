import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { format } from "date-fns";

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

interface WaitlistTableProps {
  waitlist: WaitlistEntry[];
  onDeleteClick: (id: string, email: string) => void;
}

const WaitlistTable = ({ waitlist, onDeleteClick }: WaitlistTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Joined At</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {waitlist?.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.email}</TableCell>
              <TableCell>
                {format(new Date(entry.created_at), "PPpp")}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteClick(entry.id, entry.email)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WaitlistTable;