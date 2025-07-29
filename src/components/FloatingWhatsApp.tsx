import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "+1234567890"; // Replace with actual number
  const message = "Hi! I'd like to inquire about booking a room at Winpal Guest House.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 animate-scale-in">
          <Card className="w-80 shadow-elegant border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-medium">Winpal Guest House</CardTitle>
                    <p className="text-green-100 text-sm">Typically replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none mb-3">
                  <p className="text-sm text-gray-700">
                    Hello! 👋 How can we help you today?
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                  <p className="text-sm text-gray-700">
                    Feel free to ask about our rooms, amenities, or make a booking!
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Start Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-6 right-4 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;