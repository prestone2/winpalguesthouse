import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Users, Mail, Phone, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !roomType || !formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData: Database['public']['Tables']['bookings']['Insert'] = {
        check_in_date: format(checkIn, 'yyyy-MM-dd'),
        check_out_date: format(checkOut, 'yyyy-MM-dd'),
        room_type: roomType,
        guests: parseInt(guests),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        special_requests: formData.requests || null
      };

      const { data, error } = await supabase
        .from('bookings')
        .insert(bookingData)
        .select()
        .single();

      if (error) {
        throw error;
      }

       // Send email notification to manager
       try {
        const emailPayload = {
          id: data.id,
          guest_name: formData.name,
          guest_email: formData.email,
          guest_phone: formData.phone || 'Not provided',
          check_in: format(checkIn, 'yyyy-MM-dd'),
          check_out: format(checkOut, 'yyyy-MM-dd'),
          room_type: roomType,
          guests: parseInt(guests),
          special_requests: formData.requests || 'None'
        };
        const { error: emailError } = await supabase.functions.invoke('send-booking-notification', {
          body: { bookingData: emailPayload }
        });
        if (emailError) {
          console.error('Email notification failed:', emailError);
          // Don't fail the booking if email fails
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Continue with success message even if email fails
      }



      toast({
        title: "Booking Request Submitted!",
        description: `Your booking request #${data.id.slice(0, 8)} has been submitted successfully. We'll contact you within 24 hours to confirm your reservation.`,
      });

      // Reset form
      setCheckIn(undefined);
      setCheckOut(undefined);
      setGuests("2");
      setRoomType("");
      setFormData({ name: "", email: "", phone: "", requests: "" });

    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Submission Failed",
        description: "We couldn't process your booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute -top-40 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-2xl opacity-25"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Perfect Stay</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your dates and let us create an unforgettable experience for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant bg-white/70 backdrop-blur-md border border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Reservation Details
              </CardTitle>
              <CardDescription>
                Fill in your details below and we'll get back to you with confirmation
              </CardDescription>
              <p className="text-sm text-muted-foreground mb-2">
                Check-in: 12:00 PM | Check-out: 10:00 AM
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Payment: On arrival or online via Mpesa PayBill 522533, Account: 7994303
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="checkin"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="checkout"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) =>
                            date < new Date() || (checkIn && date <= checkIn)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Room Type & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="room-type">Room Type *</Label>
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-deluxe">
                          Single Bed Deluxe - KES 1,100
                        </SelectItem>
                        <SelectItem value="single-deluxe-couple">
                          Single Bed Deluxe - KES 1,350
                        </SelectItem>
                        <SelectItem value="double-deluxe">
                          Double Bed Deluxe - KES 2,000
                        </SelectItem>
                        <SelectItem value="double-deluxe">
                          Executive Suite - KES 1,750
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(6)].map((_, i) => (
                          <SelectItem key={i} value={`${i + 1}`}>
                            {i + 1} {i === 0 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Textarea
                    id="requests"
                    placeholder="Any special requests or requirements..."
                    value={formData.requests}
                    onChange={(e) => setFormData(prev => ({ ...prev, requests: e.target.value }))}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your reservation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
