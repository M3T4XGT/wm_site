"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { gtagEvent } from "../utils/gtag"; // ✅ Import your GA4 helper

export default function Header() {
  // ✅ GA4 tracking for header interactions
  const handleClick = (label: string, category: string, url?: string) => {
    gtagEvent("click", {
      category,
      label,
      destination: url || "internal",
      type: "Header Interaction",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 via-black/50 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 relative">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0"
          onClick={() => handleClick("Header Logo", "Header - Branding", "/")}
        >
          <Image
            src="/wm_wordmark_single_line_white.png"
            alt="William & Mary"
            width={200}
            height={45}
            className="object-contain w-[160px] sm:w-[200px] md:w-[220px]"
            priority
          />
        </Link>

        {/* Center Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10 text-white text-[15px] font-medium tracking-wide mr-12">
          <Link
            href="https://www.wm.edu/visit/"
            onClick={() =>
              handleClick("Visit", "Header - Navigation", "https://www.wm.edu/visit/")
            }
            className="hover:text-[#F0B323] transition-colors"
          >
            Visit
          </Link>
          <Link
            href="https://www.wm.edu/admission/apply/"
            onClick={() =>
              handleClick("Apply", "Header - Navigation", "https://www.wm.edu/admission/apply/")
            }
            className="hover:text-[#F0B323] transition-colors"
          >
            Apply
          </Link>
          <Link
            href="https://www.wm.edu/requestinfo/"
            onClick={() =>
              handleClick("Request Info", "Header - Navigation", "https://www.wm.edu/requestinfo/")
            }
            className="hover:text-[#F0B323] transition-colors"
          >
            Request Info
          </Link>
        </nav>

        {/* W&M MENU Box */}
        <div
          className="bg-[#8B784C] text-white px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 font-semibold text-xs sm:text-sm shadow-md rounded-sm fixed md:absolute right-4 md:right-0 top-3 md:top-0 md:h-auto"
          onClick={() => handleClick("W&M Menu Box", "Header - Menu")}
        >
          <span className="hidden sm:inline">W&amp;M MENU</span>
          <div className="flex items-center gap-2">
            <Menu
              size={20}
              strokeWidth={2.25}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleClick("Menu Icon", "Header - Menu");
              }}
            />
            <Search
              size={20}
              strokeWidth={2.25}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleClick("Search Icon", "Header - Search");
              }}
            />
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex md:hidden flex-1 justify-end pr-[5.5rem]">
          <nav className="flex gap-5 text-white text-sm font-medium">
            <Link
              href="https://www.wm.edu/visit/"
              onClick={() =>
                handleClick("Visit (Mobile)", "Header - Navigation", "https://www.wm.edu/visit/")
              }
              className="hover:text-[#F0B323]"
            >
              Visit
            </Link>
            <Link
              href="https://www.wm.edu/admission/apply/"
              onClick={() =>
                handleClick("Apply (Mobile)", "Header - Navigation", "https://www.wm.edu/admission/apply/")
              }
              className="hover:text-[#F0B323]"
            >
              Apply
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
