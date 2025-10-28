"use client";

import Image from "next/image";
import Link from "next/link";
import { gtagEvent } from "../utils/gtag"; // ✅ Import GA4 helper

export default function NewsSection() {
  const newsItems = [
    {
      title:
        "Spooky artifacts haunt Swem Library’s Special Collections for Halloween",
      link: "https://news.wm.edu/2024/10/29/spooky-artifacts-haunt-swems-special-collections-for-halloween/",
    },
    {
      title: "Fair highlights vibrant campus research community",
      link: "https://news.wm.edu/2024/10/21/fair-highlights-vibrant-campus-research-community/",
    },
    {
      title: "A picture-perfect Homecoming",
      link: "https://news.wm.edu/2024/10/18/a-picture-perfect-homecoming/",
    },
    {
      title:
        "‘Responsible stewardship’: How William & Mary shapes conservation around the globe",
      link: "https://news.wm.edu/2024/10/07/responsible-stewardship-how-wm-shapes-conservation-around-the-globe/",
    },
  ];

  // ✅ Tracking function
  const handleClick = (label: string, category: string, url: string) => {
    gtagEvent("click", {
      category,
      label,
      destination: url,
      type: "News Interaction",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <h2 className="text-[#115740] text-3xl sm:text-4xl font-serif mb-8 sm:mb-10 text-center md:text-left">
          William & Mary News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Feature 1 */}
          <div>
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden mb-4 group">
              <Image
                src="/owl-story-cover-photo.jpg"
                alt="On the prowl for owls"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <p className="text-lg text-[#115740] font-serif">
              <Link
                href="https://news.wm.edu/2024/10/31/on-the-prowl-for-owls/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleClick(
                    "On the prowl for owls",
                    "News - Featured Story",
                    "https://news.wm.edu/2024/10/31/on-the-prowl-for-owls/"
                  )
                }
                className="hover:text-[#B9975B] transition-transform duration-300 inline-block hover:scale-[1.05]"
              >
                On the prowl for owls
              </Link>
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden mb-4 group">
              <Image
                src="/vcrc-1260.jpg"
                alt="Environmental initiative conference"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <p className="text-lg text-[#115740] font-serif">
              <Link
                href="https://news.wm.edu/2024/10/24/wm-environmental-initiative-hosts-inaugural-conference/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleClick(
                    "Environmental initiative hosts inaugural conference",
                    "News - Featured Story",
                    "https://news.wm.edu/2024/10/24/wm-environmental-initiative-hosts-inaugural-conference/"
                  )
                }
                className="hover:text-[#B9975B] transition-transform duration-300 inline-block hover:scale-[1.05]"
              >
                W&amp;M’s cross-university environmental initiative hosts
                inaugural conference
              </Link>
            </p>
          </div>

          {/* Headlines Column */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6 border-t border-[#D0D3D4] pt-4">
              {newsItems.map((item, i) => (
                <div key={i} className="border-b border-[#D0D3D4] pb-4">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      handleClick(item.title, "News - Headline", item.link)
                    }
                    className="text-[#282626] font-serif text-lg leading-snug transition-transform duration-300 inline-block hover:text-[#B9975B] hover:scale-[1.04]"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-8 sm:mt-10">
              <Link
                href="https://news.wm.edu/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleClick("See All News", "News - CTA", "https://news.wm.edu/")
                }
                className="bg-[#B9975B] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm hover:bg-[#866F45] transition-colors w-full sm:w-auto text-center"
              >
                See All News
              </Link>
              <Link
                href="https://news.wm.edu/category/video/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleClick(
                    "News in Video",
                    "News - CTA",
                    "https://news.wm.edu/category/video/"
                  )
                }
                className="text-[#115740] font-semibold hover:text-[#F0B323] transition-colors w-full sm:w-auto text-center"
              >
                News In Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
