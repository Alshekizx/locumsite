import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/24/solid"; // Importing the bag/briefcase icon

export default function Hero() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="flex flex-col gap-12 items-start w-full lg:w-3/5">
        <div className="LocumTag">
          <span>Find Locum Shifts. Work on Your Terms.</span>
        </div>

        <h3>
          Browse and apply for flexible{" "}
          <span className="text-[var(--primary-color)]">healthcare shifts</span>{" "}
          near you. Join our growing network of trusted{" "}
          <span className="text-[var(--primary-color)]">medical</span>{" "}
          professionals.
        </h3>

        <div className="flex gap-4">
          <button className="button">Browse Available Shifts</button>
          <button className="inverseButton">Register as a Locum</button>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/3 relative">
        {/* Floating card */}
        <div className="flex flex-row items-center gap-3 card absolute left-[-75px] top-[-35px] p-4  z-10" style={{padding: '10px 15px'}} >
          <BriefcaseIcon className="w-8 h-8 text-[var(--primary-color)]" />
          <div>
            <p className="font-semibold text-sm text-[var(--text-dark)]">Available Jobs</p>
            <span className="text-[var(--text-muted)] text-xs">Find out!</span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/Rectangle3463567.png"
            alt="Team Hero Pic"
            width={630}
            height={460}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}