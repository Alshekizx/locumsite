import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10"
      style={{ minHeight: "90vh" }}
    >
      {/* Left Content */}
      <div className="flex flex-col gap-12 items-start w-full lg:w-3/5 h-full justify-center">
        <div className="LocumTag">
          <span>Find Locum Shifts. Work on Your Terms.</span>
        </div>

        <h2 className="text-[var(--secondary-color)]">
          Browse and apply for flexible{" "}
          <span className="text-[var(--primary-color)]">healthcare shifts</span>{" "}
          near you. Join our growing network of trusted{" "}
          <span className="text-[var(--primary-color)]">medical</span>{" "}
          professionals.
        </h2>

        <div className="flex gap-4">
          <Link href="/views/locumShifts" className="button">Browse Available Shifts</Link>
          <Link href="/auth/signup" className="inverseButton">Register as a Locum</Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-2/5 h-full flex items-center relative">
        {/* Floating card */}
        <div
          className="flex flex-row items-center gap-3 card absolute left-[-25px] md:left-[-50px] lg:left-[-75px] top-[-35px] p-4 z-10"
          style={{ padding: "10px 20px" }}
        >
          <BriefcaseIcon className="w-8 h-8 text-[var(--primary-color)]" />
          <div>
            <p className="font-semibold text-sm " style={{color:"var(--text-dark)"}}>Available Jobs</p>
            <span className="text-[var(--text-dark)] text-sm">Find out!</span>
          </div>
        </div>

        {/* Image */}
        <div className="h-full w-full">
          <Image
            src="/images/Rectangle3463567.png"
            alt="Team Hero Pic"
            width={630}
            height={460}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}