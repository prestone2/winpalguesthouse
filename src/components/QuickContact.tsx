import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactModal from "./ContactModal";

export default function QuickContact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      action: () => window.open("tel:+15551234567")
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@havenguesthouse.com",
      action: () => window.open("mailto:info@havenguesthouse.com")
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Royal Street, City",
      action: () => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: Clock,
      label: "24/7 Support",
      value: "Always Available",
      action: null
    }
  ];

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Need Help? We're Here 24/7</h2>
          <p className="text-muted-foreground text-lg">
            Get in touch with our dedicated team for any assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-elegant transition-all duration-300 ${
                item.action ? 'cursor-pointer hover:scale-105' : ''
              }`}
              onClick={item.action || undefined}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
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