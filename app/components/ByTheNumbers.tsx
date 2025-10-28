"use client";

import Link from "next/link";

export default function ByTheNumbers() {
  const stats = [
    {
      number: "6",
      label: "Best Public School for Internships",
      source: "The Princeton Review (2025)",
      linkText: "Student Outcomes",
      link: "https://www.wm.edu/about/bythenumbers/student-outcomes/",
    },
    {
      number: "2",
      label: "Best Public School for Undergraduate Teaching",
      source: "U.S. News (2026)",
      linkText: "Academics",
      link: "https://www.wm.edu/academics/",
    },
    {
      number: "11",
      label: "Best Value Public Schools",
      source: "The Princeton Review (2025)",
      linkText: "Costs & Aid",
      link: "https://www.wm.edu/admission/financialaid/",
    },
    {
      number: "1",
      label: "Study Abroad Participation",
      source: "Institute of International Education (2024)",
      linkText: "Study Abroad",
      link: "https://www.wm.edu/offices/revescenter/studyabroad/",
    },
  ];

  return (
    <section
      className="relative text-white py-16 sm:py-20 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 34, 26, 0.85), rgba(0, 34, 26, 0.4)), url('/statistic-row-bg-base-comp.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-snug sm:leading-tight">
          William &amp; Mary by the Numbers: A Top School <br className="hidden sm:block" /> for Academics
          and Beyond
        </h2>

        <p className="text-base sm:text-lg italic text-[#D0D3D4] mb-10 sm:mb-12 max-w-3xl mx-auto px-2">
          Personalized, career-focused education to fit your goals.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group p-6 sm:p-8 rounded-md relative border border-transparent bg-transparent 
                         transition-all duration-300 ease-in-out 
                         hover:border-[#B9975B] hover:font-bold hover:scale-[1.02] hover:bg-[#0E4633]/40"
            >
              <div className="text-[#B9975B] font-bold text-lg sm:text-xl mb-1">#</div>
              <div className="text-4xl sm:text-5xl font-bold mb-3">{item.number}</div>
              <h3 className="text-base sm:text-lg font-serif leading-snug mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0BCB3] mb-4">{item.source}</p>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B9975B] font-semibold hover:text-[#F0B323] transition-colors flex items-center gap-1"
              >
                {item.linkText} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
