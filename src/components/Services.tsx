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

    // Clone children once to create a seamless loop
    if (!carousel.dataset.cloned) {
      const children = Array.from(carousel.children);
      children.forEach((c) => carousel.appendChild(c.cloneNode(true)));
      carousel.dataset.cloned = "true";
    }

    let raf = 0;
    let last = performance.now();
  const speedPxPerSec = 180; // increased speed for snappier auto-scroll
    let running = true;

    const pause = () => (running = false);
    const resume = () => (running = true);

    let wheelTimeout: any = null;
    const onWheel = () => {
      running = false;
      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => (running = true), 700);
    };

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); // clamp to avoid jumps
      last = now;

      if (running) {
        carousel.scrollLeft += speedPxPerSec * dt;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          // wrap back smoothly
          carousel.scrollLeft -= carousel.scrollWidth / 2;
        }
      }

      raf = requestAnimationFrame(step);
    };

    // only enable on small screens (mobile) to match previous behavior
    if (window.innerWidth < 768) {
      raf = requestAnimationFrame(step);
      carousel.addEventListener("pointerenter", pause);
      carousel.addEventListener("pointerleave", resume);
      carousel.addEventListener("touchstart", pause, { passive: true });
      carousel.addEventListener("touchend", resume);
      carousel.addEventListener("wheel", onWheel, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      carousel.removeEventListener("pointerenter", pause);
      carousel.removeEventListener("pointerleave", resume);
      carousel.removeEventListener("touchstart", pause);
      carousel.removeEventListener("touchend", resume);
      carousel.removeEventListener("wheel", onWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, []);


  return (
    <section id="services" className="py-20 bg-gradient-primary relative overflow-hidden" aria-labelledby="services-heading">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Premium <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
            We go above and beyond to ensure your stay is comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center group hover-scale animate-fade-in bg-card/100 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 border border-accent/20 hover:border-accent/40 hover:bg-card/80 transition-all duration-500 hover:shadow-elegant"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-warm group-hover:shadow-glow group-hover:scale-110 transition-all duration-300 relative overflow-hidden" role="img" aria-label={service.title}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Icon className="w-5 h-5 md:w-8 md:h-8 text-background relative z-10" />
                </div>
                <h3 className="text-xs md:text-lg font-semibold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="hidden md:block text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
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