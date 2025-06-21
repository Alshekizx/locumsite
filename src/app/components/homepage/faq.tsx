"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const faqs = [
  {
    category: "locumFAQ",
    question: "What services does Mployus Locums offer?",
    answer:
      "Mployus Locums connects healthcare professionals with flexible shift opportunities across various facilities. We provide an easy-to-use platform where you can register, set your preferences, and get matched with relevant locum shifts. You can browse, apply, and manage your bookings directly from your dashboard.",
  },
  {
    category: "locumFAQ",
    question: "Are there any fees involved in registering or working as a locum with Mployus Locums?",
    answer:
      "No, registering and working as a locum with Mployus Locums is completely free. We do not charge healthcare professionals any fees to use our platform.",
  },
  {
    category: "locumFAQ",
    question: "Does Mployus Locums deduct any commission from my earnings?",
    answer:
      "No, Mployus Locums does not take any commission from your earnings. The full amount you earn from shifts goes directly to you.",
  },
  {
    category: "locumFAQ",
    question: "What is the payment process after completing a shift through Mployus Locums?",
    answer:
      "After completing your shift, your hours are confirmed by the employer, and payment is processed quickly—typically within a few business days. You’ll receive your earnings directly into your registered bank account.",
  },
  {
    category: "employeeFAQ",
    question: "How can I post a locum job on Mployus?",
    answer:
      "Simply log in to your employer account, go to the 'Post a Job' section, fill in the shift details, and publish. Your shift will immediately become visible to qualified locums in the area.",
  },
  {
    category: "employeeFAQ",
    question: "Can I manage multiple job postings at once?",
    answer:
      "Yes, Mployus provides a centralized dashboard where you can create, manage, and update multiple job postings and shift schedules easily.",
  },
  {
    category: "employeeFAQ",
    question: "How are locums verified before they can apply to shifts?",
    answer:
      "All locums undergo a thorough verification process including license validation, ID checks, and reference screening to ensure you're hiring qualified professionals.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"locumFAQ" | "employeeFAQ">("locumFAQ");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => faq.category === filter);

  return (
    <section className="containerDiv">
      <div>
        <h3 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-start text-[var(--text-muted)] mb-10 text-sm">
          Got questions? Our FAQ covers everything from shift requests and time
          tracking to payments and availability—helping both locum professionals
          and employers work smoothly and confidently with MployUs.
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter("locumFAQ")}
            className={`px-4 py-2 text-lg font-bold rounded ${
              filter === "locumFAQ"
                ? "text-[var(--primary-color)]"
                : " text-[var(--text-muted)]"
            }`}
          >
            Locum
          </button>
         
          <button
            onClick={() => setFilter("employeeFAQ")}
            className={`px-4 py-2 text-lg font-bold rounded ${
              filter === "employeeFAQ"
                ? "text-[var(--primary-color)]"
                : " text-[var(--text-muted)]"
            }`}
          >
            Employer
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-lg p-6  transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-[var(--primary-100)] text-[var(--text-dark)]"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="font-semibold text-base">{faq.question}</h3>
                  <div
                    className="rounded-lg p-2"
                    style={{
                      backgroundColor: "var(--primary-200)",
                    }}
                  >
                    {isOpen ? (
                      <XMarkIcon className="w-5 h-5 text-[var(--primary-color)]" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-[var(--primary-color)]" />
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="mt-4 border-t border-white/30 pt-4 text-sm text-white"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
          <div>
          <Link className=" " href="/faqPage"><p className="text-primary mt-10 hover:underline" style={{fontSize:'24px'}}>View More</p></Link>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;