import { Mail, Gift, Bell, Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "This email is already on our newsletter list.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive exclusive offers and updates.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    // {
    //   icon: Gift,
    //   title: "Exclusive Offers",
    //   description: "Get first access to special deals and discounts"
    // },
    // {
    //   icon: Bell,
    //   title: "Early Notifications",
    //   description: "Be the first to know about new rooms and amenities"
    // },
    // {
    //   icon: Star,
    //   title: "VIP Treatment",
    //   description: "Enjoy special perks and personalized recommendations"
    // }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-elegant bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-full w-fit">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
              Stay in the Loop
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our newsletter for exclusive offers, seasonal deals, and the latest updates from Winpal Guest House
            </p>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mx-auto mb-3 p-2 bg-accent/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-2 border-border focus:border-primary transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 px-8 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center justify-center gap-2 text-accent font-medium">
                <Gift className="h-4 w-4" />
                <span>🎉 Welcome Bonus: 10% off your first booking!</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;