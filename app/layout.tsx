import "./globals.css";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import AdmissionsJourney from "./components/AdmissionsJourney"
import AcademicPrograms from "./components/AcademicPrograms";
import ByTheNumbers from "./components/ByTheNumbers"
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";


export const metadata = {
  title: "William & Mary Clone",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Hero/>
        <HeroSection/>
        <AdmissionsJourney/>
        <ByTheNumbers/>
        <AcademicPrograms/>
        <NewsSection/>
         <PhotoGallery />
         <EventsSection/>
        <Footer />
      </body>
    </html>
  );
}
