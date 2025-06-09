"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const countryCodeMap: Record<string, string> = {
  "Republic of Ireland": "ie",
  "Northern Ireland": "gb-nir",
  England: "gb",
  Scotland: "gb-sct",
  Wales: "gb-wls",
};

const countries = [
  "Republic of Ireland",
  "Northern Ireland",
  "England",
  "Scotland",
  "Wales",
];

const northernIrelandProfessions = [
  "Locum Pharmacist",
  "Locum GP",
  "Agency Nurse",
  "Optometrist",
  "Locum ACT",
  "Locum pre-registered pharmacists",
];

const republicOfIrelandProfessions = [
  "Locum Pharmacist",
  "Locum Pharmacy Technician",
  "Locum GP",
  "Agency Nurse",
  "Agency HCA",
  "Locum Optician",
];

const englandProfessions = [
  "Locum Pharmacist",
  "Locum GP",
  "Agency Nurse",
  "Optometrist",
  "Locum ACT",
  "Locum pre-registered pharmacists",
];

const scotlandProfessions = [
  "Locum Pharmacist",
  "Locum GP",
  "Agency Nurse",
  "Optometrist",
  "Locum ACT",
  "Locum pre-registered pharmacists",
];

const walesProfessions = [
  "Locum Pharmacist",
  "Locum GP",
  "Agency Nurse",
  "Optometrist",
  "Locum ACT",
  "Locum pre-registered pharmacists",
];


export default function EmployersTabs() {
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("Republic of Ireland");

   const [northernIrelandList, setNorthernIrelandList] = useState("Locum Pharmacist");

  const [republicOfIrelandList, setRepublicOfIrelandList] = useState("Locum Pharmacist");

  const [englandList, setEnglandList] = useState("Locum Pharmacist");

  const [scotlandList, setScotlandList] = useState("Locum Pharmacist");

  const [walesList, setWalesList] = useState("Locum Pharmacist");
   const flagUrl = countryCodeMap[selectedCountry]
    ? `https://flagcdn.com/w40/${countryCodeMap[selectedCountry]}.png`
    : null;
    
  const [formData, setFormData] = useState({
  jobType: '',
  location: '',
  jobTitle: '',
  details: '',
  firstName: '',
  lastName: '',
  dob: '',
  country: '',
  mobile: '',
  email: '',
  companyName: '',
  contactEmail: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  PSNI_Number: '',
  IMC_Number: '',
  NMBI_Number: '',
  CORURegistrationNumber:'',
  GMC_Number: '',
  NMC_PIN: '',
  GOCRegistrationNumber: '',
  GPhCNumber: '',
  verificationCode: '',
  address1: '',
  address2: '',
  city: '',
  region: '',
  postalCode: '',
});


 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const nextStep = () => {
  setStep((prev) => {
    if (prev === 2) {
      return 2.5; // Go to verification step
    } else if (prev === 2.5) {
      return 3; // After verification, proceed to step 3
    } else {
      return Math.min(prev + 1, 3); // Normal flow
    }
  });
};
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

const stepIndicator = (current: number) => {
  return (
    <div className="relative mb-6 w-full max-w-lg">
      {/* Base Track */}
      <div
        className="absolute top-4 z-0 h-1 bg-[var(--secondary-200)] rounded"
        style={{
          left: 'calc(16.6667%)', // aligns to center of step 1
          width: '66.6667%',      // spans between the centers of step 1 and step 3
        }}
      />

      {/* Active Progress */}
      <div
        className="absolute top-4 z-10 h-1 bg-[var(--color-primary)] rounded transition-all duration-300"
        style={{
          left: 'calc(16.6667%)',
          width: `${((current - 1) / 2) * 66.6667}%`,
        }}
      />

      <div className="flex justify-between relative w-full z-20">
        {[1, 2, 3].map((num) => {
          const isCompleted = num < current;
          const isActive = num === current;

          const baseCircle = `w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300`;
          const circleState = isActive
            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
            : isCompleted
            ? 'text-white border-[var(--color-primary)] bg-[var(--color-primary)]'
            : 'text-[var(--secondary-400)] border-[var(--secondary-200)] bg-white';

          const textColor = isCompleted
            ? 'text-[var(--color-primary)]'
            : 'text-[var(--color-text-muted)]';

          return (
            <div key={num} className="flex flex-col items-center w-1/3">
              <div className={`${baseCircle} ${circleState}`}>{num}</div>
              <span className={`text-sm mt-1 transition-colors ${textColor}`}>
                {num === 1
                  ? 'Account Setup'
                  : num === 2
                  ? 'Personal Information'
                  : 'Address Details'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

  return (
     <main className="min-h-screen grid grid-cols-1 pt-16 md:grid-cols-2">
      {/* Left side */}
      <div className="relative bg-[var(--primary-color)] min-h-50 flex items-center justify-center p-6 card-texture-bg2"
      
      >
        <div className="absolute top-6 left-6">
          <button
            onClick={prevStep}
            className="inverseButton flex items-center gap-1"
            style={{
              borderRadius: 0,
              borderWidth: '1.5px',
              borderColor: 'white',
              color: 'white'
            }}
          >
            <ChevronLeftIcon className="w-4 h-4 text-white" />
            Back
          </button>
        </div>
        <Image
          src="/logos/WhiteMployusRecruitmentLogo2.png"
          alt="Mployus Logo"
          width={220}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right side */}
      <div className="w-full p-10 flex flex-col items-center " >
       {stepIndicator(step)}
       <AnimatePresence mode="wait">
         <motion.div
           key={step}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 0.4 }}
           className='w-full'
         >
         

  {step === 1 && (
  <div className="flex flex-col gap-4">
    <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-4">Account Setup</h3>
     
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Country:</label>
      <div className="relative w-full">
        {/* Flag inside the select border */}
        {flagUrl && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full overflow-hidden pointer-events-none">
            <Image
              src={flagUrl}
              alt={`${selectedCountry} flag`}
              className="object-cover h-full w-full rounded-sm"
              loading="lazy"
              draggable={false}
              width={40}
              height={40}
            />
          </div>
        )}

        {/* The select dropdown */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full border border-[var(--secondary-400)] rounded-md pl-10 pr-4 py-3 text-sm custom-ring-color"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>



             {selectedCountry === "Republic of Ireland" && (
               <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Profession:</label>
                 {/* The select dropdown */}
                  <select
                    value={republicOfIrelandList}
                    onChange={(e) => setRepublicOfIrelandList(e.target.value)}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  >
                    {republicOfIrelandProfessions.map((republicOfIrelandProfession) => (
                      <option key={republicOfIrelandProfession} value={republicOfIrelandProfession}>
                        {republicOfIrelandProfession}
                      </option>
                    ))}
                  </select>

                  {republicOfIrelandList === "Locum Pharmacist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">PSNI Number:</label>
                      <input
                        type="text"
                        name="PSNI_Number"
                        value={formData.PSNI_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter PSNI Number"
                      />
                    </div>
                    )}

                    {republicOfIrelandList === "Locum GP" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">IMC Number:</label>
                      <input
                        type="text"
                        name="IMC_Number"
                        value={formData.IMC_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter IMC Number"
                      />
                    </div>

                    )}

                    {republicOfIrelandList === "Agency Nurse" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">NMBI Number:</label>
                      <input
                        type="text"
                        name="NMBI_Number"
                        value={formData.NMBI_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter NMBI Number"
                      />
                    </div>

                    )}

                    {republicOfIrelandList === "Locum Optician" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">CORURegistrationNumber:</label>
                      <input
                        type="text"
                        name="CORURegistrationNumber"
                        value={formData.CORURegistrationNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter CORU Registration Number"
                      />
                    </div>

                    )}

               </div>
              )}

              {selectedCountry === "Northern Ireland" && (
               <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Profession:</label>
                 {/* The select dropdown */}
                  <select
                    value={northernIrelandList}
                    onChange={(e) => setNorthernIrelandList(e.target.value)}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  >
                    {northernIrelandProfessions.map((northernIrelandProfession) => (
                      <option key={northernIrelandProfession} value={northernIrelandProfession}>
                        {northernIrelandProfession}
                      </option>
                    ))}
                  </select>

                     {northernIrelandList === "Locum Pharmacist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">PSNI Number:</label>
                      <input
                        type="text"
                        name="PSNI_Number"
                        value={formData.PSNI_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter PSNI Number"
                      />
                    </div>
                    )}

                    {northernIrelandList === "Locum GP" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GMC Number:</label>
                      <input
                        type="text"
                        name="GMC_Number"
                        value={formData.GMC_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GMC Number"
                      />
                    </div>

                    )}

                    {northernIrelandList === "Agency Nurse" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">NMC PIN:</label>
                      <input
                        type="text"
                        name="NMC_PIN"
                        value={formData.NMC_PIN}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter NMC PIN"
                      />
                    </div>

                    )}

                    {northernIrelandList === "Optometrist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GOC Registration Number:</label>
                      <input
                        type="text"
                        name="GOCRegistrationNumber"
                        value={formData.GOCRegistrationNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GOC Registration Number"
                      />
                    </div>

                    )}

               </div>
              )}

              {selectedCountry === "England" && (
               <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Profession:</label>
                 {/* The select dropdown */}
                  <select
                    value={englandList}
                    onChange={(e) => setEnglandList(e.target.value)}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  >
                    {englandProfessions.map((englandProfession) => (
                      <option key={englandProfession} value={englandProfession}>
                        {englandProfession}
                      </option>
                    ))}
                  </select>

                   {englandList === "Locum Pharmacist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GPhC Number:</label>
                      <input
                        type="text"
                        name="GPhCNumber"
                        value={formData.GPhCNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GPhC Number"
                      />
                    </div>
                    )}

                    {englandList === "Locum GP" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GMC Number:</label>
                      <input
                        type="text"
                        name="GMC_Number"
                        value={formData.GMC_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GMC Number"
                      />
                    </div>

                    )}

                    {englandList === "Agency Nurse" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">NMC PIN:</label>
                      <input
                        type="text"
                        name="NMC_PIN"
                        value={formData.NMC_PIN}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter NMC PIN"
                      />
                    </div>

                    )}

                    {englandList === "Optometrist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GOC Registration Number:</label>
                      <input
                        type="text"
                        name="GOCRegistrationNumber"
                        value={formData.GOCRegistrationNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GOC Registration Number"
                      />
                    </div>

                    )}
               </div>
              )}

              {selectedCountry === "Scotland" && (
               <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Profession:</label>
                 {/* The select dropdown */}
                  <select
                    value={scotlandList}
                    onChange={(e) => setScotlandList(e.target.value)}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  >
                    {scotlandProfessions.map((scotlandProfession) => (
                      <option key={scotlandProfession} value={scotlandProfession}>
                        {scotlandProfession}
                      </option>
                    ))}
                  </select>

                     {scotlandList === "Locum Pharmacist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GPhC Number:</label>
                      <input
                        type="text"
                        name="GPhCNumber"
                        value={formData.GPhCNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GPhC Number"
                      />
                    </div>
                    )}

                    {scotlandList === "Locum GP" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GMC Number:</label>
                      <input
                        type="text"
                        name="GMC_Number"
                        value={formData.GMC_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GMC Number"
                      />
                    </div>

                    )}

                    {scotlandList === "Agency Nurse" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">NMC PIN:</label>
                      <input
                        type="text"
                        name="NMC_PIN"
                        value={formData.NMC_PIN}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter NMC PIN"
                      />
                    </div>

                    )}

                    {scotlandList === "Optometrist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GOC Registration Number:</label>
                      <input
                        type="text"
                        name="GOCRegistrationNumber"
                        value={formData.GOCRegistrationNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GOC Registration Number"
                      />
                    </div>

                    )}

               </div>
              )}

              {selectedCountry === "Wales" && (
               <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Profession:</label>
                 {/* The select dropdown */}
                  <select
                    value={walesList}
                    onChange={(e) => setWalesList(e.target.value)}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  >
                    {walesProfessions.map((walesProfession) => (
                      <option key={walesProfession} value={walesProfession}>
                        {walesProfession}
                      </option>
                    ))}
                  </select>

                        {walesList === "Locum Pharmacist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GPhC Number:</label>
                      <input
                        type="text"
                        name="GPhCNumber"
                        value={formData.GPhCNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GPhC Number"
                      />
                    </div>
                    )}

                    {walesList === "Locum GP" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GMC Number:</label>
                      <input
                        type="text"
                        name="GMC_Number"
                        value={formData.GMC_Number}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GMC Number"
                      />
                    </div>

                    )}

                    {walesList === "Agency Nurse" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">NMC PIN:</label>
                      <input
                        type="text"
                        name="NMC_PIN"
                        value={formData.NMC_PIN}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter NMC PIN"
                      />
                    </div>

                    )}

                    {walesList === "Optometrist" && (
                      <div className="mt-4" >
                      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">GOC Registration Number:</label>
                      <input
                        type="text"
                        name="GOCRegistrationNumber"
                        value={formData.GOCRegistrationNumber}
                        onChange={handleChange}
                        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                        placeholder="Enter GOC Registration Number"
                      />
                    </div>

                    )}

               </div>
              )}


  
             <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Create Password</label>
                 <input
                   type="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                   className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                   placeholder="Enter password"
                 />
               </div>

                <div>
                 <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Confirm Password:</label>
                 <input
                   type="password"
                   name="confirmPassword"
                   value={formData.confirmPassword}
                   onChange={handleChange}
                   className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                   placeholder="Enter password"
                 />
               </div>

               <button onClick={nextStep} className="button w-full" style={{borderRadius: "10px"}}>Continue</button>


           </div>
           )}


            {step === 2 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-4">
                  Personal Information
                </h3>

              <div className='flex flex-row gap-4 w-full'>
                  <div className='w-1/2'>
                    <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                    />
                  </div>

                  <div className='w-1/2'>
                    <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                    />
                  </div>
              </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Mobile Number:</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Country:</label>
                  <div >
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
                    >
                      <option value="">Select a country</option>
                      {[
                        "Republic of Ireland","Northern Ireland","England","Scotland","Wales","Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
                        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
                      "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", 
                      "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
                      "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                      "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                      "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
                      "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
                      "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan",
                      "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
                      "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
                      "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
                      "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
                      "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
                      "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                      "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
                      "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                      "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
                      "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
                      "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
                      "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
                      "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ].map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  </div>
                  
                </div>
                <button onClick={nextStep} className="button w-full" style={{borderRadius: "10px"}}>Register</button>
              </div>
            )}

            {step === 2.5 && (
  <div className="flex flex-col gap-4">
    <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-4">
     SMS Verification
    </h3>


    <label htmlFor="verificationCode">SMS Verification Code</label>
    <input
      type="text"
      name="verificationCode"
      value={formData.verificationCode}
      onChange={handleChange}
      placeholder="_ _ _ _"
      className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color tracking-widest"
    />

        <button
          onClick={() => setStep(3)}
          className="button w-full"
          style={{ borderRadius: '10px' }}
        >
          Verify & Continue
        </button>

        <button
          className="text-xs text-center underline text-[var(--color-primary)] mt-2"
          onClick={() => alert('Resend code functionality not implemented yet')}
        >
          Resend Code
        </button>
      </div>
    )}


           {step === 3 && (
  <div className="flex flex-col gap-4">
    <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-4">
         Address Details
       </h3>
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Address 1:</label>
      <input
        type="text"
        name="address1"
        value={formData.address1 || ''}
        onChange={handleChange}
        placeholder="Street address or P.O. Box"
        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Address 2:</label>
      <input
        type="text"
        name="address2"
        value={formData.address2 || ''}
        onChange={handleChange}
        placeholder="Apartment, suite, unit, building, floor, etc."
        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Town/City:</label>
      <input
        type="text"
        name="city"
        value={formData.city || ''}
        onChange={handleChange}
        placeholder="enter city or town"
        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">County / Region:</label>
      <input
        type="text"
        name="region"
        value={formData.region || ''}
        onChange={handleChange}
        placeholder="enter region"
        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Post Code:</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode || ''}
        onChange={handleChange}
        placeholder="e.g. 100001"
        className="w-full border border-[var(--secondary-400)] rounded-md px-4 py-3 text-sm custom-ring-color"
      />
    </div>
    <button
      onClick={nextStep}
      className="button w-full"
      style={{ borderRadius: "10px" }}
    >
      Continue
    </button>
  </div>
)}


         </motion.div>
       </AnimatePresence>
     </div>


    </main>
  );
}
