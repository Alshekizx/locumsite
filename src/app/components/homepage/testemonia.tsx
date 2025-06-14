import Image from "next/image";

const testimonials = [
  {
    name: "Jane A.",
    role: "General Nurse, Cork University Hospital",
    message:
      "The platform is super easy to use and the support team is responsive. I’ve picked up consistent shifts across Dublin.",
    avatar: "/images/default.jpg", // Replace with actual image path
  },
  // Duplicate or map real testimonials as needed
  {
    name: "Jane A.",
    role: "General Nurse, Cork University Hospital",
    message:
      "The platform is super easy to use and the support team is responsive. I’ve picked up consistent shifts across Dublin.",
    avatar: "/images/default.jpg",
  },
  {
    name: "Jane A.",
    role: "General Nurse, Cork University Hospital",
    message:
      "The platform is super easy to use and the support team is responsive. I’ve picked up consistent shifts across Dublin.",
    avatar: "/images/default.jpg",
  },
  {
    name: "Jane A.",
    role: "General Nurse, Cork University Hospital",
    message:
      "The platform is super easy to use and the support team is responsive. I’ve picked up consistent shifts across Dublin.",
    avatar: "/images/default.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className=" containerDiv bg-white text-center">
      <div className="max-w-4xl flex flex-col items-center  mx-auto mb-8">
        <p className="LocumTag mb-4">
          Testimonials
        </p>
        <p className="text-[var(--primary-color)]">
          Hear what other healthcare professionals are saying about working with us.
        </p>
      </div>

      <div className="flex justify-center items-center overflow-x-auto scrollbar-hide gap-6 py-10 px-4 md:px-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[300px] p-6 bg-[var(--header-color)] rounded-lg  "
          >
            <div className="relative flex items-center gap-4 mb-4">
               <div className="text-left">
                <p className="font-semibold text-sm text-[var(--primary-color)]">{testimonial.name}</p>
                <span className="text-xs text-[var(--primary-color)]">{testimonial.role}</span>
              </div>
              <div className=" absolute top-[-60px] right-0 h-20 w-20  rounded-full overflow-hidden">
                <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                className="object-cover  h-full w-full"
              />
              </div>
              
             
            </div>
            <p className="text-sm text-[var(--primary-color)] text-left">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}