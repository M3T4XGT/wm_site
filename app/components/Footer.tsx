"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFlickr,
  FaThreads,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="text-white border-t-[8px]"
      style={{
        borderImage:
          "linear-gradient(270deg, #6B552E 0%, #C2A470 50%, #6B552E 100%) 1",
        background: "linear-gradient(0deg, #115740 0%, #00221a 100%)",
      }}
    >
      {/* Top Footer Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-8 flex flex-col md:flex-row md:justify-between md:gap-10 text-center md:text-left">

        {/* Left Section - Logo & Campus Map */}
        <div className="md:w-[18rem] flex flex-col items-center md:items-start mb-10 md:mb-0 space-y-6">
          {/* Logo */}
          <Link href="/" className="mb-2">
            <img
              src="/wm_vertical_single_line.svg"
              alt="William & Mary Logo"
              className="h-14 sm:h-16 mx-auto md:mx-0"
            />
          </Link>

          {/* Campus Map */}
          <div className="w-full">
            <div className="rounded-lg overflow-hidden shadow-md border border-[#B9975B]/30 hover:shadow-lg transition-shadow">
              <a
                href="https://www.wm.edu/about/visiting/campusmap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group">
                  <img
                    src="/campus-map.jpg"
                    alt="Campus Map"
                    className="w-full h-32 sm:h-40 object-cover rounded-md transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[#F0B323] text-sm font-semibold">
                    View Full Map →
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="pt-2">
            <p className="text-sm text-[#D0D3D4]">WILLIAMSBURG, VIRGINIA</p>
            <Link
              href="/contact"
              className="text-sm text-white underline hover:text-[#F0B323]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 flex-grow text-sm text-[#D0D3D4]">
          {/* Resources for */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white tracking-wide">Resources</h3>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              {[
                ["Current Students", "https://www.wm.edu/currentstudents/"],
                ["Faculty & Staff", "https://www.wm.edu/offices/"],
                ["Parents & Families", "https://www.wm.edu/parentsfamilies/"],
                ["Alumni & Friends", "https://www.wm.edu/alumni/"],
              ].map(([label, url]) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F0B323] hover:underline underline-offset-4 decoration-[#F0B323] transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white tracking-wide">Discover</h3>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              {[
                ["Admission & Aid", "https://www.wm.edu/admission/"],
                ["Academics", "https://www.wm.edu/academics/"],
                ["Student Life", "https://www.wm.edu/studentlife/"],
                ["Research", "https://www.wm.edu/research/"],
                ["About", "https://www.wm.edu/about/"],
                ["News", "https://news.wm.edu/"],
              ].map(([label, url]) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F0B323] hover:underline underline-offset-4 decoration-[#F0B323] transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              {[
                ["Search W&M", "https://www.wm.edu/search/index.php"],
                ["W&M A–Z", "https://www.wm.edu/a-z/"],
                ["Employers", "https://www.wm.edu/offices/hr/employers/index.php"],
                ["Careers at W&M", "https://jobs.wm.edu/"],
                ["Emergency", "https://www.wm.edu/emergency/"],
                ["Report Concerns", "https://www.wm.edu/offices/compliance/reporting/index.php"],
              ].map(([label, url]) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F0B323] hover:underline underline-offset-4 decoration-[#F0B323] transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="md:w-[18rem] flex flex-col items-center md:items-end mt-10 md:mt-0 md:-translate-y-3 md:translate-x-2">
          <p className="text-sm mb-3 text-[#D0D3D4]">Follow W&amp;M:</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xl text-white mb-3">
            <a href="https://www.facebook.com/williamandmary" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://x.com/williamandmary" target="_blank" aria-label="Twitter/X">
              <FaXTwitter className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://www.youtube.com/williamandmary" target="_blank" aria-label="YouTube">
              <FaYoutube className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/school/william-&-mary/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://instagram.com/william_and_mary" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://www.flickr.com/photos/william-and-mary" target="_blank" aria-label="Flickr">
              <FaFlickr className="hover:text-[#F0B323] transition-colors" />
            </a>
            <a href="https://www.threads.net/@williamandmary" target="_blank" aria-label="Threads">
              <FaThreads className="hover:text-[#F0B323] transition-colors" />
            </a>
          </div>

          <a
            href="https://www.wm.edu/social/index.php"
            className="text-sm underline text-[#B9975B] hover:text-[#F0B323]"
          >
            Social Stream
          </a>
        </div>
      </div>

      {/* Subfooter (Dark Section) */}
      <div
        className="text-xs text-[#A0BCB3] py-4"
        style={{
          background: "linear-gradient(0deg, #0E4633 0%, #183028 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-3 text-left">
          <p className="text-[#A0BCB3]">©2025 All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-start md:justify-end gap-4 sm:gap-6">
            <li><a href="https://www.wm.edu/accessibility/" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
            <li><a href="https://www.wm.edu/offices/compliance/consumerinfo/index.php" target="_blank" rel="noopener noreferrer">Consumer Information</a></li>
            <li><a href="https://www.wm.edu/offices/compliance/policies/nondiscrimination/index.php" target="_blank" rel="noopener noreferrer">Non-Discrimination Notice</a></li>
            <li><a href="https://www.wm.edu/offices/compliance/policies/index.php" target="_blank" rel="noopener noreferrer">Policies</a></li>
            <li><a href="https://www.wm.edu/privacy/" target="_blank" rel="noopener noreferrer">Privacy &amp; Security</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
