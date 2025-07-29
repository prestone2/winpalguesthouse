import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import SpecialOffers from "@/components/SpecialOffers";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Services />
        {/* <SpecialOffers /> */}
        <BookingForm />
        <Testimonials />
        <Newsletter />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
