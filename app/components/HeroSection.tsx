"use client";

import Link from "next/link";
import { gtagEvent } from "../utils/gtag"; // ✅ Import your GA4 helper

export default function HeroSection() {
  // ✅ Track clicks on CTA buttons
  const handleClick = (label: string, url: string) => {
    gtagEvent("click", {
      category: "Hero Section",
      label,
      destination: url,
      type: "CTA Button Click",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <section className="relative w-full h-[90vh] sm:h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/wm-hero-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 text-left max-w-3xl">
        {/* Title Box */}
        <div className="bg-[#115740]/90 text-white p-3 sm:p-4 md:p-6 rounded-md mb-3 w-fit max-w-[95%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-snug">
            Distinct &amp; Distinguished
          </h1>
        </div>

        {/* Description Box */}
        <div className="bg-[#0B3D2C]/90 text-white p-3 sm:p-4 md:p-5 rounded-md w-fit max-w-[95%]">
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Located in Williamsburg, Virginia, William &amp; Mary brings
            together the global opportunities of a public research university
            with the personal education of a liberal arts and sciences
            institution.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-6">
          <Link
            href="https://www.wm.edu/about/"
            onClick={() =>
              handleClick("W&M at a Glance", "https://www.wm.edu/about/")
            }
            className="bg-[#B9975B] hover:bg-[#9C844C] text-[#002A1E] font-semibold 
                       px-5 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base 
                       transition-colors shadow-md"
          >
            W&amp;M at a Glance
          </Link>

          <Link
            href="https://www.wm.edu/academics/"
            onClick={() =>
              handleClick("Explore Programs", "https://www.wm.edu/academics/")
            }
            className="border-2 border-[#B9975B] text-white hover:bg-[#B9975B] hover:text-[#002A1E] 
                       font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base 
                       transition-all shadow-md"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] sm:h-[8px] bg-[#B9975B]"></div>
    </section>
  );
}
