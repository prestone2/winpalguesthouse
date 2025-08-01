import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageGallery, { GalleryGrid } from "@/components/ImageGallery";

// Import your local images from assets

import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";
// Add more imports as needed

const Gallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Use your imported images here
  const galleryImages = [
    {
      src: gallery1,
      alt: "Beautiful lake view from guest house",
      title: "Outside Compound"
    },
    {
      src: gallery2,
      alt: "Cozy guest house garden",
      title: "Winpal Paradise"
    },
    {
      src: gallery3,
      alt: "Guest house surrounded by forest",
      title: "Winpal Office"
    },
    {
      src: gallery4,
      alt: "Mountain view from guest house",
      title: "Dining rooms"
    },
    {
      src: gallery5,
      alt: "Guest house near the beach",
      title: "Outside View"
    },
    {
      src: gallery6,
      alt: "Beautiful flowers in guest house garden",
      title: "Hallway"
    },
    {
      src: gallery7,
      alt: "Wildlife near guest house",
      title: "Natural Surroundings"
    },
    {
      src: gallery8,
      alt: "Peaceful surroundings",
      title: "Serene Environment"
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="border-royal/20 bg-background/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-royal mb-4">
              Photo Gallery
            </CardTitle>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the beauty and tranquility of our guest house through these stunning photographs
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <GalleryGrid 
              images={galleryImages} 
              onImageClick={handleImageClick} 
            />
          </CardContent>
        </Card>
      </div>

      <ImageGallery
        images={galleryImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </section>
  );
};

export default Gallery;