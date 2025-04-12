import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Unauthorized Access</h1>
        <p className="text-muted-foreground">You don't have permission to view this page.</p>
        <Button onClick={() => navigate("/")}>Return to Home</Button>
      </div>
    </div>
  );
} 