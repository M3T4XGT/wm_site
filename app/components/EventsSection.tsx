"use client";

import Image from "next/image";
import Link from "next/link";

export default function EventsSection() {
  const spotlightEvent = {
    date: "OCT 28",
    title: "Raft Debate",
    time: "5:00pm",
    location: "Sadler Center, Commonwealth Auditorium",
    description:
      "Join us for the annual Raft Debate, a W&M tradition! A judge presides but the audience decides... who will survive for the sake of humanity?",
    image: "/events_banner.jpg",
    link: "https://events.wm.edu/event/view/wm/151913",
  };

  const events = [
    {
      date: "OCT 28",
      color: "#7C2529",
      title: "Sharp Writer-in-Residence Interview Session – Hilary Holladay",
      location: "Tucker Hall, Tucker Hall Theater",
      time: "4:00pm",
      link: "https://events.wm.edu/event/view/wm/151910",
    },
    {
      date: "OCT 28",
      color: "#6BA539",
      title: "Trick or Treat on the Row",
      location: "Fraternity Row – 650 Ukrop Way",
      time: "4:30pm",
      link: "https://events.wm.edu/event/view/wm/151914",
    },
    {
      date: "OCT 28",
      color: "#48A7A1",
      title: "Raft Debate",
      location: "Sadler Center, Commonwealth Auditorium",
      time: "5:00pm",
      link: "https://events.wm.edu/event/view/wm/151913",
    },
    {
      date: "OCT 28",
      color: "#B54D3B",
      title: "Careers in Human Resources Panel",
      location: "Cohen Career Center, Presentation Room A&B",
      time: "5:00pm",
      link: "https://events.wm.edu/event/view/wm/151915",
    },
  ];

  return (
    <section className="bg-[#F5F5F2] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Spotlight Event */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white rounded-t-md overflow-hidden">
          {/* Left: Spotlight Card */}
          <div className="bg-[#557346] text-white text-center py-8 md:py-16 flex flex-col items-center justify-center">
            <p className="uppercase text-xs sm:text-sm tracking-widest mb-2 text-[#F0B323]">
              Spotlight Event
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold">{spotlightEvent.date}</h3>
          </div>

          {/* Right: Spotlight Details */}
          <div className="px-5 sm:px-6 py-6 flex flex-col justify-center text-center md:text-left">
            <p className="italic text-xs sm:text-sm text-[#555] mb-1">
              {spotlightEvent.location} · {spotlightEvent.time}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-[#115740] mb-2">
              <Link
                href={spotlightEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B9975B] transition-colors"
              >
                {spotlightEvent.title}
              </Link>
            </h3>
            <p className="text-sm sm:text-base text-[#333] mb-0">
              {spotlightEvent.description}
            </p>
          </div>
        </div>

        {/* Spotlight Image */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-b-md overflow-hidden">
          <Image
            src={spotlightEvent.image}
            alt={spotlightEvent.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Upcoming Events List */}
        <div className="bg-white p-5 sm:p-8 md:p-10 mt-0 rounded-md rounded-t-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                {/* Circular Date Badge */}
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-white rounded-full flex-shrink-0"
                  style={{ backgroundColor: event.color }}
                >
                  <span className="text-[10px] sm:text-xs font-semibold">{event.date.split(" ")[0]}</span>
                  <span className="text-base sm:text-lg font-bold">{event.date.split(" ")[1]}</span>
                </div>

                {/* Event Info */}
                <div>
                  <h4 className="text-[#115740] font-semibold mb-1 leading-snug text-sm sm:text-base">
                    <Link
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B9975B] transition-colors"
                    >
                      {event.title}
                    </Link>
                  </h4>
                  <p className="italic text-xs sm:text-sm text-[#555] mb-1">
                    {event.location}
                  </p>
                  <p className="text-xs sm:text-sm text-[#444]">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
