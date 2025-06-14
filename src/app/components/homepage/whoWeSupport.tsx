import Image from "next/image";

export default function WhoWeSupport() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between lg:gap-30 gap-10 px-4 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-4/10 relative h-[400px]">
        <Image
          src="/images/doctor-standing-hospital-premises1.png"
          alt="Who We Support"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-6/10 flex flex-col items-start py-6 sm:py-10">
        <div className="LocumTag mb-6 flex flex-row items-center">
          <Image
            src="/images/doctorStuff.png"
            alt="Locum Tag Icon"
            width={24}
            height={24}
            className="inline-block mr-2"
          />
          <p className="font-semibold text-[var(--primary-color)]">About MployUs Locums</p>
        </div>

        <p className="text-[var(--text-muted)] leading-relaxed text-base">
          At MployUs Locums, we connect healthcare professionals with flexible,
          reliable shift opportunities at trusted medical facilities. Whether
          you&apos;re a nurse, doctor, pharmacist, or allied health worker, our
          platform helps you take control of your schedule and work on your
          terms.
        </p>

        <p className="text-[var(--text-muted)] leading-relaxed mt-4 text-base">
          For small Irish businesses with 1 to 50 employees, our expert consultants 
          offer hands-on support to address HR challenges and stay legally compliant. 
          We are committed to empowering small businesses with customised HR solutions 
          that foster growth and sustainability.
        </p>
      </div>
    </div>
  );
}