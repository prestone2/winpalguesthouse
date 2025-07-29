import { Calendar, Percent, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book 30 days in advance and save 20% on your stay",
      discount: "20% OFF",
      validUntil: "Valid until March 31, 2025",
      icon: Calendar,
      color: "bg-gradient-to-br from-accent/20 to-accent/5",
      badge: "Limited Time"
    },
    {
      id: 2,
      title: "Weekend Getaway",
      description: "Stay 2 nights on weekends and get the 3rd night free",
      discount: "1 Night FREE",
      validUntil: "Available all year round",
      icon: Gift,
      color: "bg-gradient-to-br from-primary/20 to-primary/5",
      badge: "Popular"
    },
    {
      id: 3,
      title: "Extended Stay",
      description: "Book 7+ nights and enjoy 15% off your entire stay",
      discount: "15% OFF",
      validUntil: "Valid for bookings made this month",
      icon: Clock,
      color: "bg-gradient-to-br from-secondary/30 to-secondary/10",
      badge: "Best Value"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Percent className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium">Special Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-4">
            Exclusive Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special offers and create unforgettable memories at unbeatable prices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <Card 
                key={offer.id} 
                className={`${offer.color} border-0 shadow-warm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-white/80 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
                      {offer.badge}
                    </Badge>
                  </div>
                  <CardTitle className="font-playfair text-xl text-foreground">
                    {offer.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {offer.discount}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {offer.description}
                  </CardDescription>
                  <p className="text-sm text-accent font-medium mb-6">
                    {offer.validUntil}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
                  >
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            * Offers cannot be combined with other promotions. Terms and conditions apply.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;