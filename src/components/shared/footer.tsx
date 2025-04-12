import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 md:px-16 lg:px-28 py-4">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Le Luxe</h3>
          <p className="text-sm text-gray-600">
            Experience luxury at its finest. Book your perfect stay with us and enjoy world-class amenities and exceptional service.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Connect with us</h3>
          <ul className="flex space-x-4 mt-2">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col md:flex-row md:justify-between text-sm text-gray-600">
          <div>©2024 Le Luxe. All rights reserved.</div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
