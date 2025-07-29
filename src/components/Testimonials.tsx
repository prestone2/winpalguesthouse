import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Winpal Guest House exceeded all our expectations! The mountain views were breathtaking, the room was spotless, and the staff went above and beyond to make our stay special. We'll definitely be returning!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b739?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "Perfect getaway location! The peaceful atmosphere, comfortable accommodations, and beautiful surroundings made for an unforgettable weekend. The breakfast was amazing too!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "We stayed here for our anniversary and it was magical. The attention to detail, the cozy ambiance, and the stunning natural setting created the perfect romantic getaway.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Exceptional service and beautiful accommodations. The family room was perfect for our group, and the location offered both tranquility and convenient access to local attractions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the guests who have experienced the magic of Winpal Guest House.
          </p>
        </div>

        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mobile horizontal carousel */}
          <div className="block md:hidden -mx-4 px-1">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="bg-card shadow-warm hover:shadow-elegant transition-shadow duration-300 border-border/50 min-w-[85vw] max-w-xs snap-center"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed mb-4 italic line-clamp-5">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover shadow-warm"
                            />
                            <div>
                              <div className="font-semibold text-foreground">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Desktop grid restored */}
          <div className="hidden md:block col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-card shadow-warm hover:shadow-elegant transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover shadow-warm"
                            />
                            <div>
                              <div className="font-semibold text-foreground">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card px-8 py-4 rounded-full shadow-warm">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-accent" />
              ))}
            </div>
            <div className="text-lg font-semibold text-foreground">
              4.9/5 Average Rating
            </div>
            <div className="text-muted-foreground">
              Based on 200+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;