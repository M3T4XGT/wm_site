import "./globals.css";
import Script from "next/script";

import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import AdmissionsJourney from "./components/AdmissionsJourney";
import AcademicPrograms from "./components/AcademicPrograms";
import ByTheNumbers from "./components/ByTheNumbers";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import AnalyticsTracker from "./components/AnalyticsTracker"; // ✅ import new client component

export const metadata = {
  title: "William & Mary Clone",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>

        {/* Page Sections */}
        <Hero />
        <HeroSection />
        <AdmissionsJourney />
        <ByTheNumbers />
        <AcademicPrograms />
        <NewsSection />
        <PhotoGallery />
        <EventsSection />
        <Footer />

        {/* ✅ Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* ✅ Handles route changes (client-only) */}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
