"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const photos = [
  "/376131514.webp",
  "/376212584.webp",
  "/376388001.webp",
  "/376519526.webp",
  "/376628945.webp",
  "/376893563.webp",
  "/377255268.webp",
  "/377735562.webp",
  "/377934353.webp",
  "/378251534.webp",
  "/378434597.webp",
];

export default function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame: number;

    const scroll = () => {
      if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += 0.7; // Scroll speed
      }
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);

    // Pause on hover
    const stop = () => cancelAnimationFrame(frame);
    const start = () => (frame = requestAnimationFrame(scroll));

    scroller.addEventListener("mouseenter", stop);
    scroller.addEventListener("mouseleave", start);

    return () => {
      scroller.removeEventListener("mouseenter", stop);
      scroller.removeEventListener("mouseleave", start);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3 sm:gap-0">
          <div>
            <p className="text-[#115740] uppercase tracking-widest font-semibold text-xs sm:text-sm mb-1">
              William & Mary on Instagram
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#115740]">
              The University in Photos
            </h2>
          </div>

          {/* See All Photos Link */}
          <a
            href="https://www.instagram.com/william_and_mary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#115740] font-semibold hover:text-[#F0B323] flex items-center text-sm sm:text-base transition-colors"
          >
            See All Photos <span className="ml-1 text-lg">→</span>
          </a>
        </div>

        {/* Auto-Scrolling Row */}
        <div
          ref={scrollerRef}
          className="flex gap-3 sm:gap-4 overflow-x-hidden whitespace-nowrap"
        >
          {photos.concat(photos).map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] h-[130px] sm:h-[160px] md:h-[180px] 
                         rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={src}
                alt={`Campus photo ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
