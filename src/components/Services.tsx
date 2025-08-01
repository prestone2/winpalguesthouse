import { Wifi, Coffee, Car, ChefHat, Shield, Clock, Phone, Shirt } from "lucide-react";
import { useRef, useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Complimentary high-speed internet access throughout the property"
    },
    {
      icon: Coffee,
      title: "Free Breakfast",
      description: "Start your day with our complimentary breakfast service"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure and convenient parking available for all guests"
    },
    {
      icon: Clock,
      title: "24/7 Reception",
      description: "Round-the-clock reception desk for all your needs"
    },
    {
      icon: Shirt,
      title: "Laundry Services",
      description: "Professional laundry and dry cleaning services available"
    },
    {
      icon: ChefHat,
      title: "Self-Catering Kitchen",
      description: "Fully equipped kitchen available on request for your convenience"
    },
    {
      icon: Phone,
      title: "Room Service",
      description: "Optional room service available for your comfort"
    },
    {
      icon: Shield,
      title: "Quiet Atmosphere",
      description: "Cool, peaceful environment perfect for relaxation"
    }
  ];

  // Carousel data for additional info
  const infoItems = [
    {
      label: "Check-in",
      value: "12:00 PM onwards",
    },
    {
      label: "Check-out",
      value: "10:00 AM",
    },
    {
      label: "Support",
      value: "24/7 Available",
    },
  ];

  // Infinite carousel logic for mobile
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    let scrollAmount = 10.5; // Adjust speed

    function animate() {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    // Duplicate items for infinite effect
    carousel.innerHTML += carousel.innerHTML;

    // Only auto-scroll on mobile
    if (window.innerWidth < 768) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure your stay is comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300 min-w-[50vw] max-w-xs snap-center md:min-w-0 md:max-w-none"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm group-hover:shadow-glow transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Carousel */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-warm">
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto no-scrollbar whitespace-nowrap"
              style={{ scrollBehavior: "smooth" }}
            >
              {infoItems.concat(infoItems).map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[70vw] max-w-xs flex-shrink-0 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">{item.label}</div>
                  <div className="text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 text-center">
            {infoItems.map((item, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-accent mb-2">{item.label}</div>
                <div className="text-muted-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;