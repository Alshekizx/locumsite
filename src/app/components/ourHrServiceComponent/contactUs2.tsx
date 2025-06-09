"use client";
import Image from "next/image";

const ContactForm2 = () => {
  return (
    <section className="flex  flex-col lg:flex-row items-stretch ">
      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 bg-[var(--primary-100)] px-[2rem] lg:pl-[5rem]  py-16">
        <div className="form-container border border-[var(--primary-color)] bg-white rounded-t-lg overflow-hidden flex flex-col h-full">
          <div className="py-6 px-6 bg-[var(--primary-color)] space-y-2">
            <p className="font-semibold text-white text-lg">Contact Us</p>
            <span className="text-white text-sm">
              Feel free to use the form or drop us an email. Phone calls also work too.
            </span>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 flex-grow">
            <div>
              <label className="block mb-2 font-medium text-[var(--text-dark)]">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-[var(--text-dark)]">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-[var(--text-dark)]">Company</label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-[var(--text-dark)]">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[var(--text-dark)]">
                Best number to call you on
              </label>
              <input
                type="tel"
                placeholder="+353 123 4567"
                className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
              />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full button py-3" style={{borderRadius: "5px", padding:'15px' }}>
                Book Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right: Image Section (visible only on large screens) */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center p-y px-[2rem] lg:pr-[5rem] relative overflow-hidden min-h-[600px]">
        <Image
          src="/images/contactFormImg2.png"
          alt="Contact Form Illustration"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default ContactForm2;
