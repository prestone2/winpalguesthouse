import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactModal from "./ContactModal";

export default function QuickContact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+254 743494577",
      action: () => window.open("tel:+254743494577"),
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "winpalinvestments25@gmail.com",
      action: () => window.open("mailto:winpalinvestments25@gmail.com"),
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Cheptais, Bungoma",
      action: () =>
        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: Clock,
      label: "24/7 Support",
      value: "Always Available",
      action: null,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-800">
            Need Help? We're Here 24/7
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Reach out to our dedicated team for assistance any time of day or night.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              onClick={item.action || undefined}
              className={`text-center shadow-sm hover:shadow-xl transition-transform duration-300 ${
                item.action ? "cursor-pointer hover:scale-105" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ContactModal type="general">
            <Button
              size="lg"
              className="text-lg px-8 py-5 rounded-full bg-primary hover:bg-primary/90 transition duration-300"
            >
              Send Us a Message
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}
