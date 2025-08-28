import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  Coffee,
  Users,
  Bed,
  Bath,
  Camera,
} from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import LazyImage from "@/components/LazyImage";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpeg";
import room3 from "@/assets/room3.jpg";
import room4 from "@/assets/room4.jpeg";
import rg11 from "@/assets/rg11.jpg";
import rg12 from "@/assets/rg12.jpg";
import rg13 from "@/assets/rg13.jpg";
import rg14 from "@/assets/rg14.jpg";
import rg15 from "@/assets/rg15.jpg";
import rg16 from "@/assets/rg16.jpg";
import rg17 from "@/assets/rg17.jpg";
import rg18 from "@/assets/rg18.jpg";

const Rooms = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState<
    { src: string; alt: string; title?: string }[]
  >([]);
  const { elementRef, isVisible } = useLazyLoad(0.1, '100px');

  const rooms = [
    {
      id: 1,
      name: "Single Bed Deluxe",
      description:
        "Perfect for couples with queen bed and premium amenities.",
      price: "KES 1,200",
      image: room2,
      amenities: ["Smart TV", "Reading table"],
      gallery: [
        { src: room2, alt: "Single Deluxe  - Main View", title: "Cozy Room" },
        { src: rg14, alt: "Single Deluxe  - Side View", title: "Hot shower" },
        { src: rg15, alt: "Single Deluxe  - Side View", title: "Room Side View" },
        { src: rg16, alt: "Single Deluxe  - Side View", title: "Compound" },
      ],
      features: [
        { icon: Bed, text: "4*6 sized Bed" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "WiFi Available" },
        { icon: Users, text: "Up to 3 Guests" },
      ],
      capacity: 3,
    },
    {
      id: 2,
      name: "Single Bed Deluxe",
      description:
        "Comfortable single accommodation with queen bed and modern amenities.",
      price: "KES 1,500",
      image: room1,
      amenities: [ "Smart TV", "Mountain View"],
      gallery: [
        { src: room1, alt: "Single Bed Deluxe - Main View", title: "Comfortable Single Room" },
        { src: rg11, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg12, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg13, alt: "Single Bed Deluxe - Side View", title: "Room Side View" },
      ],
      features: [
        { icon: Bed, text: "5*6 Sized Bed" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "WiFi Available" },
        { icon: Coffee, text: "Smart TV" },
      ],
      capacity: 7,
    },
    {
      id: 3,
      name: "Double Bed Deluxe",
      description:
        "Spacious room with two queen beds, ideal for friends or family.",
      price: "KES 2,000",
      image: room3,
      amenities: ["Smart TV", "Spacious"],
      gallery: [
        { src: room3, alt: "Double Bed Deluxe - Main View", title: "Spacious Twin Room" },
        { src: rg17, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg18, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
      ],
      features: [
        { icon: Bed, text: "Two Queen Beds" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "WiFi Available" },
        { icon: Users, text: "Up to 1 Guests" },
      ],
      capacity: 1,
    },
    {
      id: 4,
      name: "Executive Suite",
      description:
        "Spacious room with king size bed.",
      price: "KES 1,750",
      image: room4,
      amenities: ["Room coffee", "Dstv/Smart TV", "Mountain view" ],
      gallery: [
        { src: room4, alt: "Double Bed Deluxe - Main View", title: "Spacious Room" },
        { src: rg11, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
        { src: rg12, alt: "Double Bed Deluxe - Side View", title: "Room Side View" },
      ],
      features: [
        { icon: Bed, text: "King Size Bed" },
        { icon: Bath, text: "Hot Shower" },
        { icon: Wifi, text: "WiFi Availble" },
        { icon: Users, text: "Up to 2 Guests" },
      ],
      capacity: 2,
    },
  ];

  const openGallery = (roomGallery: { src: string; alt: string; title?: string }[]) => {
    setSelectedRoomImages(roomGallery);
    setGalleryOpen(true);
  };

  return (
    <section
      ref={elementRef}
      id="rooms"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100 overflow-hidden"
      aria-labelledby="rooms-heading"
    >
      {/* QuickContact-like animated small shapes (placed behind content) */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-12">
        <div className="absolute top-10 left-10 w-20 h-20 bg-sky-300/80 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-300/75 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-cyan-300/70 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200/70 rounded-full animate-pulse"></div>
      </div>

      {/* Background Blurs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-200 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-100 opacity-20 rounded-full blur-3xl z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 id="rooms-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful <span className="text-primary">Rooms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide comfort, style, and unforgettable views of our natural surroundings.
          </p>
        </div>

        {/* grid changed: 1 / 2 / 3 / 4 cols (xl) and smaller cards */}
        <div className="md:px-0">
          {/* Mobile: horizontal scroll; Desktop (md+): grid */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 px-4 md:px-0 no-scrollbar">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="snap-start min-w-[80%] sm:min-w-[60%] md:min-w-0"
              >
                <Card
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
                >
                  <div className="relative overflow-hidden rounded-t-lg group cursor-pointer">
                    <LazyImage
                      src={room.image}
                      alt={`${room.name} - Premium accommodation at Winpal Guest House Cheptais`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDgwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MDAuNSAxMjhMMzgwIDEwNy41VjE0OC41TDQwMC41IDEyOFpNNDIxIDEwNy41VjE0OC41TDQwMC41IDEyOFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+"
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
                      <span className="text-lg font-bold text-accent bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {room.price}
                        <span className="text-xs font-normal">/night</span>
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
                    <CardTitle className="text-lg text-foreground">{room.name}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {room.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {room.features.map((feature, index) => {
                          const Icon = feature.icon;
                          return (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <span>{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="default"
                        className="w-full mt-2"
                        onClick={() => {
                          const bookingSection = document.getElementById("booking");
                          bookingSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Book This Room
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
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
