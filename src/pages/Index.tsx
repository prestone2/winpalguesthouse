import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load components for better performance
const Rooms = lazy(() => import("@/components/Rooms"));
const Services = lazy(() => import("@/components/Services"));
const Gallery = lazy(() => import("@/components/Gallery"));
const BookingForm = lazy(() => import("@/components/BookingForm"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Newsletter = lazy(() => import("@/components/Newsletter"));
const Location = lazy(() => import("@/components/Location"));
const Footer = lazy(() => import("@/components/Footer"));
const QuickContact = lazy(() => import("@/components/QuickContact"));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Rooms />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BookingForm />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Location />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <QuickContact />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
