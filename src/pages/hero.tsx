import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/hero-background.jpg";
import { Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex max-w-xl w-full mx-8 bg-black/10 backdrop-blur-md p-4 rounded-full">
        <Input
          className="rounded-full shadow-sm  bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0 text-white"
          placeholder="Describe your destination, experience, or hotel..."
        />
        <Button className="rounded-full">
          <Sparkles className="animate-pulse text-sky-400" />
          AI Search
        </Button>
      </div>
    </div>
  );
};

export default Hero;
