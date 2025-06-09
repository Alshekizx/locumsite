import Image from "next/image";
import Link from "next/link";

export default function OurHrApps() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center relative" style={{ minHeight: '50vh' }}>
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full p-6 rounded-lg  text-white card-texture-bg3 ">

  {/* Text Section */}
  <div className="w-full md:w-3/5 flex flex-col gap-6 justify-center lg:py-1 py-5">
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our Locum Mobile App</h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
     Easily find and apply for locum shifts on the go. Our app connects healthcare professionals with verified job opportunities and helps manage your locum schedule all in one place.
    </p>

  <div className="flex space-x-4">
  <Link href="#" className="">
    <div className="relative w-full ">
      <Image
        src="/images/GooglePlay.png"
        alt="Google Play"
        width={150}
        height={70}
        className="w-full h-auto"
      />
    </div>
  </Link>
  <Link href="#" className="">
    <div className="relative w-full">
      <Image
        src="/images/Apple.png"
        alt="Apple Store"
        width={150}
        height={70}
        className="w-full h-auto"
      />
    </div>
  </Link>
</div>
 
    </div>

  {/* Image Section */}
  <div className="absolute hidden md:flex flex-col justify-center items-center w-2/5 h-[100%] right-16 top-0 ">
    <Image
      src="/images/iPhone17.png"
      alt="Other Recruitment Solutions"
      height={655}
      width={549}
      className="object-cover w-full h-auto"
      priority
    />
  </div>

</div>
    </div>
  );
}