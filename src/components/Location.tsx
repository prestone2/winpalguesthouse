import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-[#f3f4f6] via-white to-[#e5e7eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us in <span className="text-primary">Cheptais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Winpal Guest House is conveniently located at the heart of Cheptais, providing easy access to local attractions 
            and amenities. Our central location makes us the perfect base for exploring the area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.6538195633395!2d34.46238599999999!3d0.8045691999999971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f5f007bc51e79%3A0xf3e606549bbdc486!2sWinpal%20Guest%20House!5e1!3m2!1sen!2ske!4v1753993859217!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Our Address</span>
                </CardTitle>
                <CardDescription>
                  Cheptais, Kenya<br />
                  Heart of Cheptais<br />
                  Kenya
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Central Cheptais location</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Easy access to local attractions</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+254743494577</span>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-4">
            <Button 
                variant="default" 
                className="flex-1"
                onClick={() => window.open('https://www.google.com/maps/dir//Cheptais,+Kenya', '_blank')}
              >
                Get Directions
              </Button>
            
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        {/* <div className="mt-20">
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
              <div
                key={index}
                className="text-center bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="font-semibold text-foreground">{attraction.name}</div>
                <div className="text-sm text-muted-foreground">{attraction.distance}</div>
                <div className="text-xs text-accent font-medium">{attraction.type}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Location;
