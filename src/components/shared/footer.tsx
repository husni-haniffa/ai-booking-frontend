import { Label } from "@radix-ui/react-label";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className=" bg-gray-100 px-4 md:px-16 lg:px-28 py-4">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Label className="text-xl font-semibold">Le Luxe</Label>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, fugit placeat. Ipsa, consectetur atque voluptatum
              accusantium ratione perferendis quaerat aliquid. Ratione cumque
              consequatur laudantium illo officiis consectetur vitae asperiores
              soluta.
            </p>
          </div>
          <div>
            <Label className="text-lg font-semibold">About</Label>
            <ul className="text-sm">
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <Label className="text-lg font-semibold">Connect with us</Label>
            <ul className="flex space-x-2">
              <li>
                <Github />
              </li>
              <li>
                <Linkedin />
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col md:flex-row md:justify-between text-sm">
            <div>
              <Label>©2024 Le Luxe. All rights reserved.</Label>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-2 md:mt-0">
              <Label>Privacy Policy</Label>
              <Label>Terms & Conditions</Label>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
