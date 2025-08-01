import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Users, Bed, Bath, Camera } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import room1 from "@/assets/room1.jpg";
import room3 from "@/assets/room3.jpg";
import rg11 from "@/assets/rg11.jpg";
import rg12 from "@/assets/rg12.jpg";
import rg13 from "@/assets/rg13.jpg";
import rg14 from "@/assets/rg14.jpg";
import rg15 from "@/assets/rg15.jpg";
import rg16 from "@/assets/rg16.jpg";
import rg17 from "@/assets/rg17.jpg";
import rg18 from "@/assets/rg18.jpg";
import rg19 from "@/assets/rg19.jpg";


const Rooms = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState<{ src: string; alt: string; title?: string }[]>([]);
  const rooms = [
    {
      id: 1,
      name: "Single Bed Deluxe",
      description: "Comfortable single accommodation with queen bed and modern amenities.",
      price: "KES 1,500",
      image: room1, // Use imported image
      amenities: ["Queen Bed", "Hot Shower", "Free WiFi", "Smart TV"],
      gallery: [
        { src: room1, alt: "Single Bed Deluxe - Main View", title: "Comfortable Single Room" },
        { src: rg11, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg12, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg13, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
        // Add more images from assets as needed
      ],
      features: [
        { icon: Bed, text: "Queen Size Bed" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Smart TV" }
      ],
      capacity: 1
    },
    {
      id: 2,
      name: "Single Bed Deluxe (Couple)",
      description: "Perfect for couples with queen bed and premium amenities.",
      price: "KES 2,000",
      image: room1,
      amenities: ["Queen Bed", "Hot Shower", "Free WiFi", "Smart TV", "Spacious"],
      gallery: [
        { src: room1, alt: "Single Deluxe Couple - Main View", title: "Cozy Couple's Room" },
        { src: rg14, alt: "Single Deluxe Couple - Side View", title: "Room Side View" },
        { src: rg15, alt: "Single Deluxe Couple - Side View", title: "Room Side View" },
        { src: rg16, alt: "Single Deluxe Couple - Side View", title: "Room Side View" },
        // ...
      ],
      features: [
        { icon: Bed, text: "Queen Size Bed" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Users, text: "Up to 2 Guests" }
      ],
      capacity: 2
    },
    {
      id: 3,
      name: "Double Bed Deluxe",
      description: "Spacious room with two queen beds, ideal for friends or family.",
      price: "KES 2,500",
      image: room3,
      amenities: ["2 x Queen Beds", "Hot Shower", "Free WiFi", "Smart TV", "Spacious"],
      gallery: [
        { src: room3, alt: "Double Bed Deluxe - Main View", title: "Spacious Twin Room" },
        { src: rg17, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg18, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
        // ...
      ],
      features: [
        { icon: Bed, text: "Two Queen Beds" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "Free WiFi" },
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