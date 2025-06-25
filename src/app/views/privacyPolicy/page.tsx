'use client';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const PrivacyPolicy = () => {
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
        <h4 className="text-3xl font-bold text-center">Privacy Policy</h4>
      </div>

      {/* Terms Content */}
      <article className="containerDiv prose prose-lg max-w-full text-gray-900">
        <h4 className="text-lg font-semibold">Introduction</h4>
        <p>
          This document outlines the privacy rights of Data Subjects as defined by the General Data Protection Regulation (GDPR), which pertains to living individuals. Privacy applies exclusively to non-public information, and GDPR governs the protection of such personal data.
        </p>

        <h4 className="text-lg font-semibold">GDPR Overview</h4>
        <p>
          The General Data Protection Regulation (GDPR) is a European Union law that defines the data rights of individuals and the responsibilities of those processing personal data. It aims to protect and enhance individual rights, ensuring the secure handling of personal data and facilitating its free movement within the EU.
        </p>

        <h4 className="text-lg font-semibold">Data Subjects</h4>
        <p>We recognize the following as our data subjects:</p>
        <ul>
          <li>Candidates: permanent staff, temporary agency workers, contractors</li>
          <li>Contacts at client, prospective client, and supplier businesses</li>
          <li>Employees (employee data processing details are in the employee handbook)</li>
        </ul>

        <h4 className="text-lg font-semibold">Legal Basis for Processing Personal Data</h4>
        <h4 className="text-lg font-semibold">Contractual Necessity</h4>
        <p>
          Candidates: We require information to fulfil our role as an &rdquo; Employment agent&rdquo; for candidates with potential employers. This includes identification, educational background, and reference checks.
          <br />
          Clients/Suppliers: We process data for business transactions, relying on the necessity of contract performance within this relationship.
        </p>

        <h4 className="text-lg font-semibold">Statutory/Legal Obligation</h4>
        <p>
          We collect information to comply with legal requirements such as tax returns and employment permits, including PPS numbers and work entitlement evidence for temporary agency workers and contractors.
        </p>

        <h4 className="text-lg font-semibold">Legitimate Interest</h4>
        <p>
          Clients: We use personal data, such as email addresses and phone numbers, to keep clients and prospects informed about careers and market trends.
          <br />
          Candidates: We process data to provide job placement services and related information, balancing this with your data protection rights.
        </p>

        <h4 className="text-lg font-semibold">Consent</h4>
        <p>
          Occasionally, we may rely on consent for data processing, but this is rare due to the nature of our relationships with candidates and clients.
        </p>

        <h4 className="text-lg font-semibold">Personal Data Handling</h4>
        <p>
          This Privacy Statement details how Mployus Recruitment or Mployus Ireland or Mployus Group UK & Ireland, collects, transfers, processes, uses, and discloses personal data and outlines our security measures.
        </p>

        <h4 className="text-lg font-semibold">Collection of Personal Data</h4>
        <p><strong>Candidates:</strong> We gather personal data that identifies you as an individual, including:</p>
        <ul>
          <li>Name, address, email, phone numbers</li>
          <li>Education and employment history</li>
          <li>CV and other job placement information</li>
        </ul>
        <p>
          We may also source contact details from social media. Data is processed to provide our recruitment services, which includes:
        </p>
        <ul>
          <li>Receiving and screening applications</li>
          <li>Matching skills with available positions</li>
          <li>Contacting you about job opportunities</li>
          <li>Sharing your data with potential employers</li>
        </ul>
        <p>
          Registered candidates have their data processed and stored in our secure system. Data of unsuitable candidates is deleted after one year. We maintain long-term relationships with many candidates, keeping their data indefinitely unless they request deletion. Annually, we request updates to ensure accuracy.
        </p>

        <p><strong>Clients/Suppliers:</strong> We collect personal information provided directly by contacts or from public sources, including social media.</p>

        <h4 className="text-lg font-semibold">Use of Personal Information</h4>
        <p><strong>Candidates:</strong> Mployus Recruitment uses your data to:</p>
        <ul>
          <li>Match your skills with job opportunities</li>
          <li>Notify you of new employment opportunities</li>
          <li>Respond to your requests</li>
          <li>Improve our services</li>
          <li>Share your data with prospective employers</li>
        </ul>
        <p><strong>Clients/Suppliers:</strong> We use your data to:</p>
        <ul>
          <li>Discuss service requirements and candidate profiles</li>
          <li>Schedule candidate interviews</li>
          <li>Update you on candidate progress</li>
          <li>Manage business transactions</li>
        </ul>
        <p>We do not sell, lease, or distribute your data for marketing purposes.</p>

        <h4 className="text-lg font-semibold">Security of Personal Information</h4>
        <p>
          Mployus Recruitment employs security technology to protect your data. While we strive to secure data transmission over the internet, it is not completely secure, and any transmission is at your own risk. Once received, we use strict procedures to prevent unauthorized access.
        </p>

        <h4 className="text-lg font-semibold">External Links and Cookies</h4>
        <p>
          Links to third-party websites are not endorsements. Users should review third-party privacy policies. Our website uses cookies to distinguish users and gather statistical data. You can adjust your computer settings to decline cookies if desired.
        </p>

        <h4 className="text-lg font-semibold">Data Retention</h4>
        <p>
          We process personal data during contracts and retain necessary data post-contract to fulfill legal obligations. Unneeded data is deleted after these periods.
        </p>

        <h4 className="text-lg font-semibold">Data Subject Rights Under GDPR</h4>
        <p>
          We aim to keep your personal data for five years from the date you provide it to us, based on our experience that individuals may seek new employment opportunities within this timeframe. You have the right to withdraw consent and request the deletion of your personal information at any time.
        </p>

        <h4 className="text-lg font-semibold">Your Rights</h4>
        <ul>
          <li><strong>Right of Access:</strong> You can request a copy of the information we hold about you, although this is subject to the privacy rights of others.</li>
          <li><strong>Right of Rectification:</strong> You can correct inaccurate or incomplete data we hold about you.</li>
          <li><strong>Right to Erasure:</strong> You can request the deletion of your data under certain circumstances, though this is subject to statutory data retention obligations.</li>
          <li><strong>Right to Restrict Processing:</strong> You can request limitations on the processing of your data under specific conditions.</li>
          <li><strong>Right to Data Portability:</strong> You can request the transfer of your data to another organisation, provided it is processed automatically, provided by you, and processed based on your consent or contractual necessity.</li>
          <li><strong>Right to Object:</strong> You can object to certain types of processing, such as direct marketing.</li>
        </ul>

        <p>
          These rights may occasionally be modified due to statutory or other obligations. For example, if we have been your employer, we can only delete your data after the statutory retention period has expired. If we must refuse your request or impose conditions, we will provide you with an explanation, which you have the right to legally challenge.
        </p>

        <p>
          Upon your request, we will confirm the information we hold about you, as well as how and why it is being processed.
        </p>

        <h4 className="text-lg font-semibold">Information You Can Request</h4>
        <ul>
          <li>Identity and contact details of the data controller</li>
          <li>Contact details of the data protection officer, if applicable</li>
          <li>Purpose and legal basis of processing</li>
          <li>Information on legitimate interests pursued by Mployus Recruitment or third parties</li>
          <li>Categories of personal data collected, stored, and processed</li>
          <li>Recipients or categories of recipients of the data</li>
          <li>Data retention period</li>
          <li>Your rights to correct, erase, restrict, or object to processing</li>
          <li>Information on your right to withdraw consent at any time</li>
          <li>How to lodge a complaint with the supervisory authority</li>
          <li>Whether the provision of personal data is a statutory or contractual requirement and the consequences of not providing such data</li>
          <li>Source of personal data if not collected directly from you</li>
          <li>Details on automated decision-making, including profiling, and its significance and consequences</li>
        </ul>

        <h4 className="text-lg font-semibold">Identification Required to Access Personal Data</h4>
        <p>
          To request your personal data, we require identification, such as a copy of your national ID card, driving licence, passport, birth certificate, and a recent utility bill. At least one photographic ID and one proof of address document are required.
        </p>

        <h4 className="text-lg font-semibold">Changes to this Privacy Statement</h4>
        <p>
          We may update this Privacy Statement periodically. The most recent version is available on our website.
        </p>

        <h4 className="text-lg font-semibold">Data Protection Officer</h4>
        <p>
          For further information or if you have any questions regarding this Privacy Statement, please contact our Data Protection Officer at: <br />
          Email: dpo@mployus.com <br />
          Phone: +353 1 234 5678
        </p>
      </article>
    </section>
  );
};

export default PrivacyPolicy;