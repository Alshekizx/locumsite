'use client';

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const CookiesPolicy = () => {
  return (
    <section className="w-full pt-10 min-h-screen flex flex-col items-center justify-start pb-20 ">
      {/* Hero Section */}
      <div className="bg-[var(--primary-color)] relative w-full flex flex-col items-center justify-center h-80 text-white mb-10 card-texture-bg "
      >
        <div className="absolute top-16 left-6 flex items-center gap-1 text-sm">
          <Link href="/" className="underline hover:text-gray-300">Home</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Privacy Policy</span>
        </div>
        <h3 className="text-3xl font-bold text-center">Cookies Policy</h3>
      </div>

      {/* Content */}
      <div className="text-sm containerDiv md:text-base leading-relaxed text-gray-800 space-y-6">
        <section>
          <h4 className="text-lg font-semibold">Policy Overview</h4>
          <p>
            At Mployus Ireland, we are committed to being transparent about how we use cookies and similar tracking technologies.
            This Cookies Policy outlines the types of cookies we use on our website, why we use them, and how you can control or manage your cookie preferences.
          </p>
          <p>
            This Policy forms part of our broader commitment to user privacy and should be read alongside our Privacy Policy. We may update this Policy periodically to reflect changes in our cookie usage or regulatory requirements.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">What Are Cookies?</h4>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help us remember your preferences, enhance your browsing experience, understand how our site is used, and display personalised content or advertisements.
          </p>
          <p>
            Cookies are essential for improving site functionality and providing you with a more tailored and efficient user experience.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Types of Cookies We Use</h4>
          <p>We use both first-party cookies (set by Mployus.ie) and third-party cookies (set by service providers such as Google) for various purposes. These include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Strictly Necessary Cookies:</strong> Essential for site functionality, such as security, network management, and accessibility. These cannot be disabled via our cookie banner.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand site usage, which pages are popular, and where improvements are needed. Data is collected anonymously.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember preferences such as language or region to provide more personalized features.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> Set by advertising partners to build a profile of your interests and display relevant ads.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Other Tracking Technologies</h4>
          <p>
            Besides cookies, we use tracking technologies like web beacons (tracking pixels), which help monitor website traffic, measure email campaign success, or determine referral sources. These may depend on cookies to function effectively.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Social Media Features</h4>
          <p>
            Our website includes features such as Facebook Like and LinkedIn Share buttons. These may collect your IP address and track the page you&lsquo;re visiting. Interactions are governed by the privacy policy of the respective platform.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Do Cookies Expire?</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Session Cookies:</strong> Temporary cookies that expire when the browser is closed. They enable seamless navigation without reauthentication.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> Remain on your device until expiry or manual deletion. Some may last up to five years for analytics or advertising purposes.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold">How to Manage Your Cookie Preferences</h4>
          <p>
            On visiting mployus.ie, you can manage cookie preferences through our consent banner. Except for strictly necessary cookies, you can choose which categories to allow.
          </p>
          <p>
            You can update preferences at any time by clicking the &ldquo;Manage Cookie Settings &ldquo; link on our website.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Browser Settings and Third-Party Tools</h4>
          <p>
            In addition to our banner, you can manage cookies using your browser settings. Most browsers allow deleting, blocking, or warning before storing cookies.
          </p>
          <p>
            Useful tools and links include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>All About Cookies – Browser Settings</li>
            <li>About Cookies</li>
            <li>Ad-Aware by Lavasoft</li>
            <li>Spybot Search & Destroy</li>
            <li>Webroot Spy Sweeper</li>
          </ul>
          <p className="text-red-600 italic">Note: Disabling cookies may affect site functionality.</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Cookie Management via Google Tag Manager</h4>
          <p>
            Mployus Ireland uses Google Tag Manager to ensure compliant and accurate cookie script deployment across our site.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Changes to This Policy</h4>
          <p>
            We may update this Cookies Policy to reflect changes in legal requirements, technology, or usage. Updates will be posted on this page with a revised date.
          </p>
          <p>
            By continuing to use our site, you agree to the practices outlined in this Policy.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Last Updated</h4>
          <p>April 2025</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p>
            If you have questions regarding this policy, please contact us at: <a href="mailto:privacy@mployus.ie" className="text-blue-600 underline">privacy@mployus.ie</a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default CookiesPolicy;