import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Users, Bed, Bath, Camera } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const Rooms = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState<{ src: string; alt: string; title?: string }[]>([]);
  const rooms = [
    {
      id: 1,
      name: "Single Bed Deluxe",
      description: "Spacious room with garden views, perfect for couples seeking tranquility.",
      price: "Ksh 1500",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["King Bed", "Garden View", "Private Bath", "WiFi"],
      gallery: [
        { src: "photo-1721322800607-8c38375eef04", alt: "Single Bed Deluxe - Main View", title: "Spacious Garden Room" },
        { src: "photo-1566665797739-1674de7a421a", alt: "Garden Room - Bathroom", title: "Modern Private Bathroom" },
        { src: "photo-1578662996442-48f60103fc96", alt: "Garden Room - Garden View", title: "Peaceful Garden View" }
      ],
      features: [
        { icon: Bed, text: "queen Size Bed" },
        { icon: Bath, text: "Private Bathroom" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Coffee Station" }
      ],
      capacity: 1
    },
    {
      id: 2,
      name: "Single Bed Deluxe",
      description: "Premium suite with panoramic mountain views and luxury amenities.",
      price: "Ksh 1500",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Mountain View", "Balcony", "Luxury Bath", "Mini Fridge"],
      gallery: [
        { src: "photo-1472396961693-142e6e269027", alt: "Single Bed Deluxe - Main View", title: "Premium Mountain Suite" },
        { src: "photo-1631049307264-da0ec9d70304", alt: "Mountain Suite - Bedroom", title: "Luxury Bedroom with Mountain View" },
        { src: "photo-1584132967334-10e028bd69f7", alt: "Mountain Suite - Balcony", title: "Private Balcony Overlooking Mountains" }
      ],
      features: [
        { icon: Bed, text: "Queen Size Bed" },
        { icon: Bath, text: "Luxury Bathroom" },
        { icon: Wifi, text: "High-Speed WiFi" },
        { icon: Users, text: "Up to 2 Guests" }
      ],
      capacity: 2
    },
    {
      id: 3,
      name: " Double Bed Deluxe",
      description: "Perfect for families with forest views and extra space for children.",
      price: "Ksh 2500",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Forest View", "Two Beds", "Family Space", "Parking"],
      gallery: [
        { src: "photo-1509316975850-ff9c5deb0cd9", alt: " Double Bed Deluxe - Main View", title: "Spacious Family Room" },
        { src: "photo-1586023492125-27b2c045efd7", alt: "Family Room - Sleeping Area", title: "Comfortable Twin Beds" },
        { src: "photo-1566665797739-1674de7a421a", alt: "Family Room - Living Space", title: "Family Relaxation Area" }
      ],
      features: [
        { icon: Bed, text: "Two queen size Beds" },
        { icon: Bath, text: "Full Bathroom" },
        { icon: Car, text: "Free Parking" },
        { icon: Users, text: "Up to 2 Guests" }
      ],
      capacity: 2
    }
  ];

  const openGallery = (roomGallery: { src: string; alt: string; title?: string }[]) => {
    setSelectedRoomImages(roomGallery);
    setGalleryOpen(true);
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful <span className="text-primary">Rooms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide comfort, style, and unforgettable views of our natural surroundings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
              <div className="relative overflow-hidden rounded-t-lg group cursor-pointer">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    <Users className="w-3 h-3 mr-1" />
                    Up to {room.capacity}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => openGallery(room.gallery)}
                    className="bg-card/90 backdrop-blur-sm hover:bg-card text-primary font-medium"
                  >
                    <Camera className="h-4 w-4 mr-1" />
                    {room.gallery.length} Photos
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-accent bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {room.price}<span className="text-sm font-normal">/night</span>
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    onClick={() => openGallery(room.gallery)}
                    className="bg-card/90 hover:bg-card text-primary font-medium"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">{room.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="default" className="w-full mt-4">
                    Book This Room
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <ImageGallery
        images={selectedRoomImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
};

export default Rooms;