import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageGallery, { GalleryGrid } from "@/components/ImageGallery";
import LazyImage from "@/components/LazyImage";
import { useLazyLoad } from "@/hooks/useLazyLoad";

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
  const { elementRef, isVisible } = useLazyLoad(0.1, '100px');

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
      title: "Dining Rooms"
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
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      {/* Decorative Background Blobs or Texture */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <Card className="border border-royal/20 bg-white/70 backdrop-blur-sm shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-royal mb-4">
              Photo Gallery
            </CardTitle>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the beauty and tranquility of our guest house through these stunning photographs.
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer group overflow-hidden rounded-lg shadow-md"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="bg-black/50 text-white text-sm p-1 text-center">
                    {img.title}
                  </div>
                </div>
              ))}
            </div>
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
