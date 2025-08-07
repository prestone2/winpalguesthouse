import { Wifi, Coffee, Car, ChefHat, Shield, Clock, Phone, Shirt, Zap } from "lucide-react";
import { useRef, useEffect } from "react";

const Services = () => {
  const services = [
    { icon: Wifi, title: "Strong WiFi", description: "Complimentary high-speed internet access throughout the property" },
    { icon: Coffee, title: "Breakfast", description: "Start your day with our complimentary breakfast service" },
    { icon: Car, title: "Parking", description: "Secure and convenient parking available for all guests" },
    { icon: Clock, title: "24/7 Reception", description: "Round-the-clock reception desk for all your needs" },
    { icon: ChefHat, title: "Self-Catering Kitchen", description: "Fully equipped kitchen available on request for your convenience" },
    { icon: Phone, title: "Room Service", description: "Optional room service available for your comfort" },
    { icon: Shield, title: "Quiet Atmosphere", description: "Cool, peaceful environment perfect for relaxation" },
    { icon: Zap, title: "Uninterrupted Power", description: "Reliable electricity supply around the clock" }

  ];

  const infoItems = [
    { label: "Check-in", value: "12:00 PM onwards" },
    { label: "Check-out", value: "10:00 AM" },
    { label: "Support", value: "24/7 Available" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    let scrollAmount = 10.5;

    function animate() {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    carousel.innerHTML += carousel.innerHTML;

    if (window.innerWidth < 768) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e0f7fa] via-[#f3e5f5] to-[#ede7f6]">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-300" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow-sm">
            We go above and beyond to ensure your stay is comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-[0.5deg] min-w-[50vw] max-w-xs snap-center md:min-w-0 md:max-w-none transform perspective-1000 hover:translate-z-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-tr from-purple-400 to-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="block md:hidden">
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto no-scrollbar whitespace-nowrap"
              style={{ scrollBehavior: "smooth" }}
            >
              {infoItems.concat(infoItems).map((item, idx) => (
                <div key={idx} className="min-w-[70vw] max-w-xs flex-shrink-0 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{item.label}</div>
                  <div className="text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

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
