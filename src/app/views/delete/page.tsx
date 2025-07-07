'use client';

import React, { useState } from 'react';
import HeroSection from '../../components/ourHrServiceComponent/heroSection';
import Link from 'next/link';

const DeleteAccountPage = () => {
  const [form, setForm] = useState({ email: '', reason: '', confirm: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' && 'checked' in e.target ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.confirm) return alert('Please confirm your request before submitting.');
    console.log('Delete request submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 pb-20 bg-[var(--background)]">
      <HeroSection
        title="Delete My Account – Mployus Locum"
        description="Submit a request to permanently delete your account and associated personal data."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Delete Account' },
        ]}
      />

      <div className="containerDiv mt-8 max-w-3xl w-full">
        <div className="">
          {submitted ? (
            <div className="text-center space-y-4">
              <h2 className=" font-bold ">Request Submitted</h2>
              <p className=" ">
                Thank you. Your account deletion request has been received.
                <br />
                You will receive a confirmation email within the next <strong>7 working days</strong>.
              </p>
              <p className=" ">
                For urgent concerns, contact our support team at{' '}
                <Link href="mailto:support@mployus.com" className="text-[var(--primary-color)] underline">
                  support@mployus.com
                </Link>.
              </p>
            </div>
          ) : (
            <>
              <h3 className=" font-semibold mb-4 text-[var(--primary-color)]">
                Request Deletion of Your Account
              </h3>

              <p className="mb-4">
                By submitting this request:
              </p>
              <ul className="list-disc list-inside  mb-6 space-y-1">
                <li>All your account information will be permanently deleted.</li>
                <li>Your personal data will no longer be retained or used.</li>
                <li>Minimal data may be retained for legal, security, or tax reasons.</li>
                <li>
                  Your account and data will be <strong>permanently deleted within 5–7 business days</strong>.
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block  font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 custom-ring-color"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block  font-medium mb-1">
                    Reason for deletion (optional)
                  </label>
                  <textarea
                    name="reason"
                    id="reason"
                    placeholder="Let us know why you’re deleting your account"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 custom-ring-color"
                    rows={4}
                    value={form.reason}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="confirm"
                    name="confirm"
                    checked={form.confirm}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="confirm" className=" text-gray-700">
                    I understand this action is permanent and all data will be deleted accordingly.
                  </label>
                </div>

                <button type="submit" className="button w-full">
                  Submit Deletion Request
                </button>
              </form>

              {/* ✅ Google Play Compliance Section */}
              <div className="mt-10 border-t pt-6  space-y-3">
                <h4 className="font-semibold text-[var(--primary-color)]">Important Information</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>App/Developer:</strong> Mployus Locum</li>
                  <li><strong>Steps:</strong> Fill the form, confirm checkbox, and click submit.</li>
                  <li><strong>What Will Be Deleted:</strong> Account profile, personal data, and activity logs.</li>
                  <li><strong>What May Be Retained:</strong> Legal records (e.g., invoices, logs) for up to 7 years as required by law.</li>
                  <li><strong>Retention Period:</strong> Your data will be deleted within 5–7 business days.</li>
                </ul>
                <p>
                  You can review our{' '}
                  <Link
                    href="/views/privacyPolicy"
                    className="text-[var(--primary-color)] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>{' '}
                  for more details.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
