import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, BedDouble, MapPin, Phone } from "lucide-react";
import logo from "@/assets/whitelogo.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Rooms", href: "#rooms", icon: BedDouble },
    { name: "Location", href: "#location", icon: MapPin },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-warm">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={logo}
                alt="winpal Guest House Logo"
                className="w-48 h-48 rounded-lg object-cover" // Increased size to w-60 h-60 (15rem)
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
               onClick={() => {
                  const targetId = item.href.replace('#', '');
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}>
                {item.name}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b shadow-elegant">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      const targetId = item.href.replace('#', '');
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 w-full text-left"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <div className="pt-4">
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;