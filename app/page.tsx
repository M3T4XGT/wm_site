"use client";
import usePageView from "./usePageView";

import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import AdmissionsJourney from "./components/AdmissionsJourney";
import AcademicPrograms from "./components/AcademicPrograms";
import ByTheNumbers from "./components/ByTheNumbers";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

export default function Home() {
  usePageView(); // ✅ Track page view when the route changes

  return (
    <main>
      <Hero />
      <HeroSection />
      <AdmissionsJourney />
      <ByTheNumbers />
      <AcademicPrograms />
      <NewsSection />
      <PhotoGallery />
      <EventsSection />
      <Footer />
    </main>
  );
}
