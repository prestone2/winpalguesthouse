import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Home
} from "lucide-react";
import whitelogo from "@/assets/whitelogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      

      {/* Main Footer Content */}
       <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={whitelogo}
                  alt="Winpal Guest House Logo"
                  className="w-10 h-10 max-w-full object-contain"
                />
                <span className="text-lg font-semibold truncate">Winpal Guest House</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your Comfort Our Pride. Located at the heart of Cheptais, offering a cozy and homely 
                bed-and-breakfast experience with spacious rooms and modern amenities.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Our Rooms", href: "#rooms" },
                  { name: "Services", href: "#services" },
                  { name: "Location", href: "#location" },
                  { name: "Book Now", href: "#booking" },
                  { name: "Contact Us", href: "#contact" },
                  { name: "Privacy Policy", href: "/terms" },
                  { name: "Terms & Conditions", href: "/terms" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Cheptais, Kenya</div>
                    <div className="text-primary-foreground/80">Heart of Cheptais</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>+254743494577</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="break-all">winpalinvestments25@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>24/7 Reception</span>
                </div>
                <div className="text-primary-foreground/80">
                  <div className="mb-2">Check-in: 12:00 PM onwards</div>
                  <div className="mb-2">Check-out: 10:00 AM</div>
                  <div className="mb-2">Breakfast: 7:00 AM - 10:00 AM</div>
                  <div>Languages: English & Kiswahili</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div className="flex items-center space-x-1">
              <span>© 2024 Winpal Guest House. Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>for our guests.</span>
            </div>
            <div className="mt-4 md:mt-0">
              <span>Designed for comfort, built for memories.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;