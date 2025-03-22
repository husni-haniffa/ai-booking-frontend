import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { CheckRole } from "@/utils/roles";

const Navbar: React.FC = () => {
 
  const isAdmin = CheckRole("admin");

  return (
    <nav className="flex justify-between p-4">
      <div>
        <Link to="/" className="text-xl">
          Le Luxe
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <ModeToggle />
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
