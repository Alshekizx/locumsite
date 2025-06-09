import Image from "next/image";

export default function FocusedPharmacy() {
  return (
    <div className="containerDiv bg-[var(--header-color)] flex flex-col lg:flex-row items-center justify-between gap-10 px-4 py-10"
    style={{ minHeight: "40vh",  }}
    >

      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col items-start py-6 sm:py-10">
        <div className="LocumTag mb-6 flex flex-row items-center">
         
          <p className="font-semibold text-[var(--primary-color)]">Focused Pharmacy CPD Support</p>
        </div>

        <p className="text-[var(--text-muted)] leading-relaxed text-base">
         For pharmacists, we provide dedicated Continuing Professional Development 
         (CPD) support. Our in-house pharmacist, Ezebuchi H. Nwafor (MPSI), plays 
         a hands-on role in guiding pharmacy professionals through their CPD journey.
        </p>

        
      </div>

       {/* Image Section */}
      <div className="w-full lg:w-1/5 relative h-auto">
        <Image
          src="/images/Rectangle346243801.png"
          alt="Who We Support"
          width={500}
          height={500}
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}