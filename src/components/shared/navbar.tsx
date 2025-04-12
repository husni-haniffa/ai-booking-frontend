import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { checkRole } from "@/auth/roles";


const Navbar: React.FC = () => {
 
  const isAdmin = checkRole("admin")

  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <div>
        <Link to="/" className="text-xl">
          Le Luxe
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        {isAdmin && <Link to="/admin">Admin</Link>} {/* Show admin link if authorized */}
        <Link to="/">Home</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link to="/sign-in">Sign In</Link>
          <Button asChild>
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
