"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function SectorsWeCover() {
  const services = [
    { title: "🩺 Registered Nurses (RNs)", bgImage: "/images/locumImg1.png" },
    { title: "💊 Pharmacists", bgImage: "/images/locumImg2.png" },
    { title: "🩺 Doctors & Consultants", bgImage: "/images/locumImg3.png" },
    { title: "🧑‍⚕️ Healthcare Assistants (HCAs)", bgImage: "/images/locumImg4.png" },
    { title: "🧪 Laboratory Technicians", bgImage: "/images/locumImg1.png" },
    { title: "🩻 Radiographers", bgImage: "/images/locumImg2.png" },
    { title: "👩‍⚕️ Midwives", bgImage: "/images/locumImg3.png" },
    { title: "🧠 Mental Health Professionals", bgImage: "/images/locumImg4.png" },
  ];

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  const containerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = 250 + 24; // min-w + gap
      const index = Math.round(scrollLeft / itemWidth);
      const page = Math.floor(index / ITEMS_PER_PAGE);
      setActivePage(page);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="containerDiv flex flex-col items-center justify-center ">
      <div className="text-center mb-20 flex flex-col items-center w-full max-w-[800px]">
        <div className="LocumTag mb-6 flex flex-row items-center">
          <Image
            src="/images/doctorStuff.png"
            alt="Locum Tag Icon"
            width={24}
            height={24}
            className="inline-block mr-2"
          />
          <span>Who Can Join MployUs Locums</span>
        </div>

        <p className="text-[var(--text-dark)]">
          MployUs Locum connects certified healthcare professionals with flexible
          shifts at trusted hospitals and clinics. If you&apos;re qualified and
          passionate about care, join us today.
        </p>
      </div>
      <p className="text-[var(--text-dark)] mb-10 w-full text-start">We welcome applications from:</p>
      <div className="w-full  items-center overflow-x-auto scrollbar-hide" ref={containerRef}>
        <div className="flex gap-10 w-max">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative rounded-lg overflow-hidden min-w-[250px] h-[400px]">
                <Image
                  src={service.bgImage}
                  alt={`${service.title} sector`}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
              </div>
              <div>
                <p className="text-[var(--primary-color)] font-semibold mt-6">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots: 1 per group of 3 */}
      <div className="flex items-center justify-center gap-2 ">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activePage ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}