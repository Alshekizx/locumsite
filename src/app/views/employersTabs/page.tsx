"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmployersTabs() {
  const [step, setStep] = useState(1);
  const [selectedJobType, setSelectedJobType] = useState<string>("");

  const [formData, setFormData] = useState({
  jobType: '',
  location: '',
  jobTitle: '',
  details: '',
  firstName: '',
  lastName: '',
  companyName: '',
  contactEmail: '',
  phoneNumber: '',
});

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
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
            ? 'text-[var(--color-primary)] border-[var(--color-primary)] bg-white'
            : 'text-[var(--secondary-400)] border-[var(--secondary-200)] bg-white';

          const textColor = isCompleted
            ? 'text-[var(--color-primary)]'
            : 'text-[var(--color-text-muted)]';

          return (
            <div key={num} className="flex flex-col items-center w-1/3">
              <div className={`${baseCircle} ${circleState}`}>{num}</div>
              <span className={`text-sm mt-1 transition-colors ${textColor}`}>
                {num === 1
                  ? 'Shift Type'
                  : num === 2
                  ? 'Shift Details'
                  : 'Contact Details'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

  return (
    <div className="flex flex-col items-center pb-40 min-h-screen h-[150vh]  pb-100 relative" >
    <div className=' flex flex-col items-center pt-40 pb-40 bg-[var(--primary-color)] w-full card-texture-bg'>
      <h3 className="font-bold text-center" style={{color:"white" }}>Open Shift Postings</h3>
      <div className='max-w-xl mt-4'>
      <span className="text-center " style={{color:"white" }}>
        Get Requests from Qualified Professionals to Fill Your Gaps
      </span>
      </div>
    </div>
      <div className="card2 rounded-lg absolute top-70 w-full max-w-lg" style={{padding: "2rem"}}>
        {stepIndicator(step)}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 && (
             <div className="flex flex-col gap-4">

          <label className="block mb-1 font-semibold">Shift Type:</label>

        <div className='flex flex-row justify-between items-center gap-4'>
          {/* Locum Shift */}
          <div
            className={`flex items-center gap-2 py-2 px-5 border border-[var(--secondary-200)] rounded-lg w-1/2 cursor-pointer transition
              ${selectedJobType === 'Locum Shift' ? 'bg-[var(--primary-color)] text-white' : 'bg-[var(--secondary-100)]'}`}
            onClick={() => setSelectedJobType('Locum Shift')}
          >
            <input
              type="radio"
              id="locum-shift"
              name="jobType"
              value="Locum Shift"
              className={`appearance-none rounded-full h-5 w-5 border border-1
                ${selectedJobType === 'Locum Shift' ? 
                  'bg-white border-white ring-2 ring-inset ring-[var(--primary-color)]': 
                  'bg-transparent border-[var(--secondary-color)]'}`}
              checked={selectedJobType === 'Locum Shift'}
              onChange={() => setSelectedJobType('Locum Shift')}
            />
            <label htmlFor="locum-shift">
              <p className="text-sm">Locum Shift</p>
            </label>
          </div>

          {/* Permanent Job */}
          <div
            className={`flex items-center gap-2 py-2 px-5 border border-[var(--secondary-200)] rounded-lg w-1/2 cursor-pointer transition
              ${selectedJobType === 'Permanent Job' ? 'bg-[var(--primary-color)] text-white' : 'bg-[var(--secondary-100)]'}`}
            onClick={() => setSelectedJobType('Permanent Job')}
          >
            <input
              type="radio"
              id="permanent-job"
              name="jobType"
              value="Permanent Job"
                  className={`appearance-none rounded-full h-5 w-5 border border-1 
                ${selectedJobType === 'Permanent Job' ? 
                  'bg-white border-white ring-2 ring-inset ring-[var(--primary-color)]': 
                  'bg-transparent border-[var(--secondary-color)]'}`}
              checked={selectedJobType === 'Permanent Job'}
              onChange={() => setSelectedJobType('Permanent Job')}
            />
            <label htmlFor="permanent-job">
              <p className="text-sm">Permanent Job</p>
            </label>
          </div>
        </div>


              {selectedJobType === 'Locum Shift' && (
                <div>
                  <label className="block mb-1 font-semibold">Shift Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border p-2 rounded custom-ring-color bg-white"
                    placeholder="Enter shift location"
                  />
                </div>
              )}

              {selectedJobType === 'Permanent Job' && (
                <>
                  <div>
                    <label className="block mb-1 font-semibold">Job Type:</label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="w-full border p-2 rounded custom-ring-color bg-white"
                    >
                      <option value="">Select a job type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 font-semibold">Location:</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border p-2 rounded custom-ring-color bg-white"
                    >
                      <option value="">Select a location</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </>
              )}

            </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                {selectedJobType === 'Locum Shift' && (
                  <div>
                    <label className="block mb-1 font-semibold">Shift Position</label>
                    <input
                      type="text"
                      name="Shift Position"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Shift Position"
                      className="w-full border p-2 rounded custom-ring-color"
                    />
                  </div>
                )}

                {selectedJobType === 'Permanent Job' && (
                    <div>
                      <label className="block mb-1 font-semibold">Job Title(s):</label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Job title of position you are hiring for"
                        className="w-full border p-2 rounded custom-ring-color"
                      />
                    </div>
                  )}
                
                <div>
                  <label className="block mb-1 font-semibold">Details:</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Any specific details? Estimated salary, urgency of turnaround"
                    className="w-full border p-2 rounded custom-ring-color"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
            <div className="flex flex-col gap-4">
            <div className='flex flex-row gap-4'>
                <div>
                    <label className="block mb-1 font-semibold">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className="w-full border p-2 rounded custom-ring-color"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className="w-full border p-2 rounded custom-ring-color"
                    />
                </div>
            </div>
            <div>
                <label className="block mb-1 font-semibold">Company Name:</label>
                <input
                type="text"
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Work Email Address:</label>
                <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Phone Number:</label>
                <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber || ''}
                onChange={handleChange}
                placeholder="e.g. +1 555 123 4567"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            </div>
            )}

            <div className="flex gap-4 justify-between mt-6">
              <button onClick={prevStep} className="inverseButton w-1/2" style={{borderRadius: "10px"}}>Back</button>
              {step < 3 ? (
                <button onClick={nextStep} className="button w-1/2" style={{borderRadius: "10px"}}>Next</button>
              ) : (
                <button className="button w-1/2" style={{borderRadius: "10px"}}>Submit</button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
