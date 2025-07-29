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

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for special offers, seasonal packages, and updates about Winpal Guest House.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="bg-card text-primary hover:bg-card/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">Winpal Guest House</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your home away from home, nestled in nature's embrace. 
                Experience comfort, tranquility, and hospitality at its finest.
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
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms & Conditions", href: "#" }
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
                    <div>123 Mountain View Drive</div>
                    <div className="text-primary-foreground/80">Scenic Valley, State 12345</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>winpalinvestments@gmail.com</span>
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
                  <div className="mb-2">Check-in: 3:00 PM onwards</div>
                  <div className="mb-2">Check-out: 11:00 AM</div>
                  <div className="mb-2">Breakfast: 7:00 AM - 10:00 AM</div>
                  <div>Concierge: 8:00 AM - 10:00 PM</div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="mt-6">
                <Button 
                  variant="secondary" 
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
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