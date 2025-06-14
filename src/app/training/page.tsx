'use client';
import React from "react";
import TrainingCard from "../components/ourHrServiceComponent/trainingCard";
import FocusedPharmacy from "../components/ourHrServiceComponent/focusedPham";
import ContactForm from "../components/homepage/contactUs";


 const hrData5 = {
  title: null,
  description:
    "At Mployus Locums, we are committed to supporting healthcare professionals through tailored training and development programs. Whether you're a pharmacist, nurse, healthcare assistant, doctor, or GP, our goal is to help you stay compliant, confident, and career-ready. Our training equips you with the tools to thrive in any clinical setting, while ensuring you meet the highest standards of care.",
  features: [
    {
      title: null,
      description: 'Compliance and clinical upskilling.',
    },
    {
      title: null,
      description: ' Flexible training designed around your schedule.',
    },
    {
      title: null,
      description: 'Career development resources and expert support.',
    },
    {
      title: null,
      description: 'Real-world guidance to build confidence on the job.',
    },
  ],
  image: '/images/Rectangle34624380.png', // ensure it's in /public
};

const Training = () => {
  
  
  return (
    <div className="flex flex-col gap-6  mt-16">
        <div className="relative flex bg-hero-locum flex-col gap-6 h-100 bg-black py-20 px-10">
        <div className="absolute z-0 inset-0 bg-[#000000bb]"></div>
        <div className="z-10 max-w-xl mx-auto flex flex-col items-center justify-center gap-6">
            <div className="LocumTag  " style={{  backgroundColor:"transparent"}} ><span>Locum Training Programs</span></div>
            <h3 className="text-center  text-white">
           Boost your skills and stay ahead with practical, healthcare-focused <span className="text-[var(--primary-color)]">training</span>  for <span className="text-[var(--primary-color)]">locum</span> professionals.
            </h3>
            <button className="button">
                Explore Trainings
            </button>
        </div>
        
      </div>

      <div className=" py-10 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6  ">
            <div className=" flex flex-col items-center text-center w-full max-w-[800px] ">
                <p className="LocumTag">Grow Your Healthcare Career with Mployus Locums Training</p>
            </div>
            <TrainingCard {...hrData5}/>
        </div>

        <FocusedPharmacy />
      </div>
      <ContactForm/>
    </div>
      
  );
};

export default Training;


