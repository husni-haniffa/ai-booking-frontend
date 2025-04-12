import heroBackground from "@/assets/hero-background.jpg"
import Hero from "./hero";
const HeroSection: React.FC = () => {
    return (
       <div className="relative min-h-screen">
            <img
                src={heroBackground}
                alt="hero-background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="relative z-10">
                <Hero/>
            </div>
       </div>
    )
}

export default HeroSection;