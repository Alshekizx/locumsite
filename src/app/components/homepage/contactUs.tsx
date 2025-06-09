"use client";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section
      className="containerDiv flex flex-col lg:flex-row  items-stretch"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Left: Image Section */}
      <div className="hidden md:flex w-full lg:w-1/2 p-10 flex-col justify-between gap-10 bg-[var(--header-color)]">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold">
            Work Smarter with Our{" "}
            <span className="text-[var(--primary-color)]">Locum Mobile App</span>
          </h3>
          <p className="text-[var(--text-dark)]">
            Apply for shifts and set your availability on the go right from the
            MployUs Locum app.
          </p>
        </div>

        <div className="relative min-h-[300px] md:min-h-[500px]">
          <Image
            src="/images/iPhone16Pro2.png"
            alt="Contact Form Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center gap-10">
          <Link href="#" className="w-1/2">
            <Image
              src="/images/GooglePlay.png"
              alt="Google Play"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </Link>
          <Link href="#" className="w-1/2">
            <Image
              src="/images/Apple.png"
              alt="Apple Store"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="form-container w-full lg:w-1/2 bg-[var(--secondary-100)] p-10 flex flex-col justify-between gap-10">
        <div className="text-center flex flex-col items-center gap-6">
          <h3 className="text-3xl font-semibold">
            Get In <span className="text-[var(--primary-color)]">Touch</span>
          </h3>
          <p className="text-[var(--text-dark)] text-center">
            Have questions or want to discuss a project? I’m here to help! Fill
            out the form below or email me directly, and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        <form className="flex-grow flex flex-col gap-6">
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-4 border border-[var(--border-color)] custom-ring-color"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Message
            </label>
            <textarea
              placeholder="Your message here..."
              className="w-full h-48 p-4 border border-[var(--border-color)] custom-ring-color"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full button py-3 rounded-md"
              style={{ borderRadius: "5px", padding: "15px" }}
            >
              Send Now ➝
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;