import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { checkRole } from "@/auth/roles";


const Navbar: React.FC = () => {
 
const isAdmin = checkRole("admin")

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center text-white">
        <div>
          <header className="text-2xl">
            <Link to="/">Le Luxe</Link>
          </header>
        </div>
        <div className="space-x-3">
          {
            isAdmin ? <Link to="/admin">Admin</Link> : ""
          }
          <Link to="/">Home</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
            <Button className="bg-blue-500 font-bold">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
