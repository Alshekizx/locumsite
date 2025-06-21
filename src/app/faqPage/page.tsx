'use client';
import React from 'react';
import HeroSection from '../components/ourHrServiceComponent/heroSection';
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";


const faqs = [
  // ===== UK Locum FAQs =====
  {
    category: "locumFAQ",
    region: "UK",
    question: "What is the process for working as a locum through Mployus Locums?",
    answer:
      "Register online, set your location and travel preferences, and get instantly matched with jobs. You can view, apply for, and confirm shifts with a few clicks.",
  },
  {
    category: "locumFAQ",
    region: "UK",
    question: "Are there any fees involved in registering or working as a locum with Mployus Locums?",
    answer:
      "No. Registration and working through Mployus Locums is completely free.",
  },
  {
    category: "locumFAQ",
    region: "UK",
    question: "Does Mployus Locums deduct any commission from my earnings?",
    answer:
      "Absolutely not. You're paid directly by the pharmacy, so you receive 100% of the agreed rate.",
  },
  {
    category: "locumFAQ",
    region: "UK",
    question: "What is the payment process after completing a shift through Mployus Locums?",
    answer:
      "This depends on the individual pharmacy. Some may pay on-site via cash or cheque, while others may use BACS transfers, typically at the end of the month.",
  },
  {
    category: "locumFAQ",
    region: "UK",
    question: "Can I join Mployus Locums if I’m already signed up with another locum agency?",
    answer:
      "Yes. You're free to register with multiple agencies. Mployus aims to provide the best experience to be your top choice.",
  },
  {
    category: "locumFAQ",
    region: "UK",
    question: "What is the procedure for cancelling a booked shift with Mployus Locums?",
    answer:
      "If more than 3 working days away, use the 'Request Cancellation' button on our website and provide a reason. For shorter notice, send an email and wait for confirmation. Valid reasons or medical certificates are required for short-notice cancellations.",
  },

  // ===== UK Employer FAQs =====
  {
    category: "employeeFAQ",
    region: "UK",
    question: "What’s the process for posting a shift or position on the Mployus platform?",
    answer:
      "Log in and post shifts directly through the platform or email your requirements and we’ll post them for you.",
  },
  {
    category: "employeeFAQ",
    region: "UK",
    question: "Can Mployus Locums arrange urgent pharmacist or technician cover?",
    answer:
      "Yes. Our system instantly alerts available professionals in your area and our on-call locums are ready for emergencies.",
  },
  {
    category: "employeeFAQ",
    region: "UK",
    question: "Can I manage my locums directly on the Mployus platform?",
    answer:
      "Yes. You can log in to your account, add branches, post vacancies, and manage all bookings and applications in one place.",
  },
  {
    category: "employeeFAQ",
    region: "UK",
    question: "Does Mployus Locums confirm with me before finalising a booking?",
    answer:
      "Yes. We always require your approval before confirming any locum. You’ll be notified via email or the dashboard.",
  },
  {
    category: "employeeFAQ",
    region: "UK",
    question: "How can I book a locum during weekends or holidays?",
    answer:
      "Use the client portal to post shifts at any time. Once submitted, they’re instantly visible to suitable locums.",
  },

  // ===== Ireland Locum FAQs =====
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "How does the Mployus Locums process work in Ireland?",
    answer:
      "Sign up online, choose your location and travel radius, and receive job alerts. Browse, apply, and confirm shifts in seconds.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "I’m a self-employed locum based in Ireland—how does this work with Mployus?",
    answer:
      "You can receive contract or ad-hoc shifts. Contractors are paid monthly, and all admin is streamlined via the platform.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "When should I expect payment for a completed locum shift?",
    answer:
      "For shifts completed in a calendar month, payment is processed on the 15th of the next month, with funds received that day.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "Why is it important to verify my submitted timesheets?",
    answer:
      "Verifying your timesheets ensures you're paid correctly and on time. Discrepancies can be quickly resolved once reported.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "What is the deadline for timesheet verification?",
    answer:
      "All timesheets must be reviewed and verified by the final day of the month in which the work was completed.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "What are the benefits of working as a contractor with Mployus Locums?",
    answer:
      "Contracting offers higher rates and allows you to claim eligible expenses, increasing your net income.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "When do Mployus contractors receive their payments?",
    answer:
      "Contractors are paid on the 10th of the following month after work is completed, provided timesheets are verified on time.",
  },
  {
    category: "locumFAQ",
    region: "Ireland",
    question: "What is the process for cancelling a shift in Ireland?",
    answer:
      "If more than 3 working days away, request cancellation via the website. For short notice, email your cancellation and wait for written confirmation. Valid reasons or medical certificates are required for last-minute cancellations.",
  },

  // ===== Ireland Employer FAQs (Optional Future Additions) =====
  // You can add them here if needed, currently no specific ones listed in your input.
];



const BlogIndexPage = () => {

 const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"locumFAQ" | "employeeFAQ">("locumFAQ");
const [region, setRegion] = useState<"UK" | "Ireland">("UK");
const filteredFaqs = faqs.filter((faq) => faq.category === filter && faq.region === region);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10">
      <HeroSection
        title="Frequently Asked Questions"
        description=""
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />
      <div className='containerDiv'>

  <div className="flex gap-4 my-10">
  <button
    onClick={() => setRegion("UK")}
    className={`${region === "UK" ? "button" : "inverseButton"}`}
  >
   <p >UK & NI FAQs</p> 
  </button>
  <button
    onClick={() => setRegion("Ireland")}
    className={`${region === "Ireland" ? "button" : "inverseButton"}`}
  >
     <p>Ireland FAQs</p>
  </button>
</div>
        
             <div>
                    <h4 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4" style={{fontSize:'44px'}}>
                      Frequently Asked Questions
                    </h4>
                    <p className="text-start text-[var(--text-muted)] mb-10 text-sm" style={{fontSize:'18px'}}>
                      Got questions? Our FAQ section provides answers to common inquiries on hiring, workforce
                      management, locum staffing, and HR software, helping you navigate our solutions with ease.
                    </p>
            
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
                              <p className="" style={{fontSize:'24px'}}>
                                {faq.question}
                              </p>
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
                                <p style={{fontSize:'22px'}}>{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                  </div>

      </div>
    </div>
  );
};

export default BlogIndexPage;