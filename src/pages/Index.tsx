import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import SpecialOffers from "@/components/SpecialOffers";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuickContact from "@/components/QuickContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="rooms">
          <Rooms />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="offers">
          <SpecialOffers />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="booking">
          <BookingForm />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="contact">
          <QuickContact />
        </section>
        <Newsletter />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
