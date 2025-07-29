import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Our Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nestled in the heart of nature, yet conveniently accessible. Discover our peaceful retreat location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3537834707413!2d-74.00369368459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-card shadow-warm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Our Address</span>
                </CardTitle>
                <CardDescription>
                  123 Mountain View Drive<br />
                  Scenic Valley, State 12345<br />
                  Cheptais, Kenya
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>15 minutes from downtown</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 minutes from airport</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+2 (547) 434-577</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-warm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Getting Here</CardTitle>
                <CardDescription>
                  Multiple convenient ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">By Car:</strong> Take Highway 101 North, exit at Mountain View Drive
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">By Public Transport:</strong> Bus Route 45 stops 5 minutes away
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Airport Shuttle:</strong> We offer complimentary pickup service
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="flex-1">
                Get Directions
              </Button>
              <Button variant="outline" className="flex-1">
                Download Map
              </Button>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Mountain Trail", distance: "0.5 miles", type: "Hiking" },
              { name: "Crystal Lake", distance: "2 miles", type: "Swimming" },
              { name: "Historic Village", distance: "3 miles", type: "Sightseeing" },
              { name: "Adventure Park", distance: "5 miles", type: "Activities" }
            ].map((attraction, index) => (
              <div key={index} className="text-center bg-card p-4 rounded-lg shadow-warm">
                <div className="font-semibold text-foreground">{attraction.name}</div>
                <div className="text-sm text-muted-foreground">{attraction.distance}</div>
                <div className="text-xs text-accent font-medium">{attraction.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;