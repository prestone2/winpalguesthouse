import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactModal from "./ContactModal";

export default function QuickContact() {
  const contactInfo = [
     {
      icon: Phone,
      label: "Call",
      value: "+254 743494577",
      action: () => window.open("tel:+254743494577"),
    },
    {
      icon: Mail,
      label: "Email",
      value: "winpalinvestments25@gmail.com",
      action: () => window.open("mailto:winpalinvestments25@gmail.com"),
    },
    {
      icon: MapPin,
      label: "Visit",
      value: "Cheptais, Bungoma",
      action: () =>
        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: Clock,
      label: "Support",
      value: "24/7",
      action: null,
    },
  ];

  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Need Help? We're Here 24/7</h2>
          <p className="text-amber-400 text-lg font-semibold">
            Get in touch with our dedicated team for any assistance — we're here 24/7.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-elegant transition-all duration-300 min-w-0 ${
                item.action ? 'cursor-pointer hover:scale-105' : ''
              }`}
              onClick={item.action || undefined}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className={`text-muted-foreground text-sm ${item.icon === Mail ? 'break-words whitespace-normal' : 'truncate'}`}>
                  {item.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ContactModal type="general">
            <Button size="lg" className="text-lg px-8">
              Send Us a Message
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}