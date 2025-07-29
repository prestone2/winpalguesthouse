import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import heroBg from "@/assets/home.jpeg"; // adjust filename as needed

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-center space-x-4 text-primary-foreground/90">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Scenic Mountain Location</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-accent" />
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">Family Friendly</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Welcome to <br />
          <span className="text-accent">Winpal Guest House</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience comfort and tranquility in our beautifully appointed rooms, 
          nestled in nature's embrace with breathtaking mountain views.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" className="text-lg px-8 py-4">
            Book Your Stay
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-card/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-card/30">
            Take a Tour
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">12</div>
            <div className="text-sm opacity-90">Luxury Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm opacity-90">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">24/7</div>
            <div className="text-sm opacity-90">Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;