import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Prestone Ong`oro",
      location: "Karen, Kenya",
      rating: 5,
      text: "Winpal Guest House exceeded all our expectations! The mountain views were breathtaking, the room was spotless, and the staff went above and beyond to make our stay special. We'll definitely be returning!",
    },
    {
      id: 2,
      name: "Michael Odhiambo",
      location: "Bungoma, Kenya",
      rating: 5,
      text: "Perfect getaway location! The peaceful atmosphere, comfortable accommodations, and beautiful surroundings made for an unforgettable weekend. The breakfast was amazing too!",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "We stayed here for our anniversary and it was magical. The attention to detail, the cozy ambiance, and the stunning natural setting created the perfect romantic getaway.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Kisumu, Kenya",
      rating: 5,
      text: "Exceptional service and beautiful accommodations. The family room was perfect for our group, and the location offered both tranquility and convenient access to local attractions.",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white via-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 id="testimonials-heading" className="text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">            Don't just take our word for it – hear from the guests who have experienced the magic of Winpal Guest House.
          </p>
        </div>

        {/* Mobile - Horizontal Scroll */}
        <div className="block md:hidden -mx-4 px-1">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-border/30 min-w-[85vw] max-w-xs snap-center rounded-xl"
              >
                <CardContent className="p-6">
                  <Quote className="w-7 h-7 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="flex items-center space-x-1 pt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-border/30 rounded-xl"
            >
              <CardContent className="p-6">
                <Quote className="w-7 h-7 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="flex items-center space-x-1 pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-5 rounded-xl shadow-xl border border-border max-w-md w-full sm:w-auto">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold text-foreground">4.9/5 Average Rating</div>
              <div className="text-sm text-muted-foreground">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
