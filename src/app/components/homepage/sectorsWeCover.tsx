import Image from "next/image";

export default function SectorsWeCover() {
 const services = [
  {
    title: "🩺 Registered Nurses (RNs)",
    bgImage: "/images/locumImg1.png",
  },
  {
    title: "💊 Pharmacists",
    bgImage: "/images/locumImg2.png",
  },
  {
    title: "🩺 Doctors & Consultants",
    bgImage: "/images/locumImg3.png",
  },
  {
    title: "🧑‍⚕️ Healthcare Assistants (HCAs)",
    bgImage: "/images/locumImg4.png",
  },
  {
    title: "🧪 Laboratory Technicians",
    bgImage: "/images/locumImg1.png",
  },
  {
    title: "🩻 Radiographers",
    bgImage: "/images/locumImg2.png",
  },
  {
    title: "👩‍⚕️ Midwives",
    bgImage: "/images/locumImg3.png",
  },
  {
    title: "🧠 Mental Health Professionals",
    bgImage: "/images/locumImg4.png",
  },
];
  return (
    <div className="containerDiv flex flex-col items-center justify-center gap-20">
      <div className="text-center flex flex-col items-center w-full max-w-[800px]">
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

        <p className="text-base">
          MployyUs Locum connects certified healthcare professionals with flexible
          shifts at trusted hospitals and clinics. If you&apos;re qualified and
          passionate about care, join us today.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
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
    </div>
  );
}