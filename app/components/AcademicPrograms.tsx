"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function AcademicPrograms() {
  const programs = [
    { title: "College of Arts & Sciences", link: "https://www.wm.edu/as/" },
    { title: "Raymond A. Mason School of Business", link: "https://mason.wm.edu/" },
    { title: "Batten School of Coastal & Marine Sciences", link: "https://www.wm.edu/as/marine-science/" },
    { title: "School of Computing, Data Sciences & Physics", link: "https://www.wm.edu/as/data-science/" },
    { title: "School of Education", link: "https://education.wm.edu/" },
    { title: "Law School", link: "https://law.wm.edu/" },
  ];

  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-[#115740] text-3xl sm:text-4xl lg:text-5xl font-serif mb-5 sm:mb-6 leading-snug sm:leading-tight text-center lg:text-left">
            Explore William & Mary&apos;s <br className="hidden lg:block" /> Academic Programs
          </h2>

          <p className="text-[#282626] text-base sm:text-lg leading-relaxed mb-8 text-center lg:text-left">
            W&amp;M students think critically and express themselves creatively.
            Here, you&apos;ll learn to question and to innovate. From our
            state-of-the-art science labs to the new, expansive Arts Quarter,
            W&amp;M&apos;s well-earned reputation delivers a world-class education.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="https://www.wm.edu/majors/"
              className="bg-[#8B7335] text-white font-semibold px-8 py-3 rounded-sm 
                         hover:bg-[#6B552E] transition-all duration-300 hover:scale-105 text-center"
            >
              Majors & Minors
            </Link>
            <Link
              href="https://www.wm.edu/admission/graduate/"
              className="bg-[#8B7335] text-white font-semibold px-8 py-3 rounded-sm 
                         hover:bg-[#6B552E] transition-all duration-300 hover:scale-105 text-center"
            >
              Graduate Programs
            </Link>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {programs.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0E5641] text-white p-5 sm:p-6 rounded-md 
                         flex justify-between items-start h-[130px] sm:h-[150px] transition-all duration-300 
                         hover:bg-[#0F3D30] shadow-sm overflow-hidden"
            >
              <div className="flex-1">
                <span className="font-semibold text-base sm:text-lg transition-colors duration-300">
                  {item.title}
                </span>
              </div>
              <FiArrowUpRight className="text-[#A0BCB3] group-hover:text-[#B9975B] mt-1 text-lg sm:text-xl transition-colors" />

              {/* Gold underline bar on hover */}
              <span
                className="absolute bottom-0 left-0 w-0 h-[5px] sm:h-[6px] bg-[#B9975B] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
