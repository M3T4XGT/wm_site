"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { gtagEvent } from "../utils/gtag"; // ✅ import GA4 helper

export default function AdmissionsJourney() {
  const sections = [
    {
      title: "Admission & Aid",
      link: "https://www.wm.edu/admission/",
      image: "/admission-row-photo-admission-aid-comp.jpg",
    },
    {
      title: "Visits & Tours",
      link: "https://www.wm.edu/admission/visit/",
      image: "/admission-row-photo-visits-tours-comp.jpg",
    },
    {
      title: "Student Life",
      link: "https://www.wm.edu/offices/studentaffairs/",
      image: "/admission-row-photo-campus-life-comp.jpg",
    },
    {
      title: "Research & Applied Learning",
      link: "https://www.wm.edu/as/undergraduate/research/",
      image: "/admission-row-photo-research-comp.jpg",
    },
  ];

  const defaultImage = "/admission-row-photo-base-comp.jpg";
  const [activeImage, setActiveImage] = useState(defaultImage);

  // ✅ Track click & hover interactions
  const handleClick = (label: string) => {
    gtagEvent("click", {
      category: "Admissions Journey",
      label,
      type: "Link Click",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  const handleHover = (label: string) => {
    gtagEvent("hover", {
      category: "Admissions Journey",
      label,
      type: "Image Preview",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#115740] mb-4 leading-snug">
          Start Your William &amp; Mary Admission Journey Here
        </h2>
        <p className="text-[#333] text-base sm:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Choose from 115+ majors, minors and pre-professional programs — anything from business analytics 
          to integrative conservation to a major you design yourself. W&amp;M consistently ranks in the top 20 
          of public universities for undergraduate teaching, career services, internship connections, 
          science lab facilities, study abroad opportunities and more.
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch text-left overflow-hidden rounded-lg shadow-md">
          {/* Left: Dynamic Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-auto order-1 md:order-none">
            <Image
              key={activeImage}
              src={activeImage}
              alt="Admissions section visual"
              fill
              priority
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Right: Interactive Links */}
          <div className="flex flex-col divide-y divide-[#D0D3D4] bg-[#F5F5F2]">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  setActiveImage(section.image);
                  handleHover(section.title); // ✅ track hover
                }}
                onMouseLeave={() => setActiveImage(defaultImage)}
                onClick={() => handleClick(section.title)} // ✅ track click
                className="flex items-center justify-between px-6 sm:px-8 py-6 sm:py-8 hover:bg-[#115740] group transition-all duration-300"
              >
                <span className="text-lg sm:text-xl font-semibold text-[#115740] group-hover:text-white transition-colors">
                  {section.title}
                </span>
                <div className="bg-[#115740] group-hover:bg-[#B9975B] text-white p-2 sm:p-3 rounded-sm transition-colors">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
