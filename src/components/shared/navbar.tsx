import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between p-4">
        <div>
          <Link to="/" className="text-xl">
            Le Luxe
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <ModeToggle />
          <Link to="/admin">Admin</Link>
          <Link to="/">Home</Link>
          <Link to="/">Sign In</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
