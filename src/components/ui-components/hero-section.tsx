import Hero from "./hero";
const HeroSection: React.FC = () => {
    return (
       <div className="relative min-h-screen">
            <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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