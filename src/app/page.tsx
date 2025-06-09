
import Hero from "./components/homepage/hero";
import WhoWeSupport from "./components/homepage/whoWeSupport";

import SectorsWeCover from "./components/homepage/sectorsWeCover";
import OurHrApps from "./components/homepage/ourHrApp";
import FaqAccordion from "./components/homepage/faq";


import AnotherHrSectionInverse from "./components/ourHrServiceComponent/anotherInverseHrSolution";
import TestimonialSection from "./components/homepage/testemonia";

export default function Home() {

  const hrData5 = {
  title: null,
  description:
    null,
  features: [
    {
      title: 'Flexible Scheduling',
      description: 'Work when it suits you. Pick shifts based on your availability and preferences.',
    },
    {
      title: 'Verified Healthcare Employers ',
      description: ' All listed shifts come from trusted, vetted healthcare institutions.',
    },
    {
      title: 'Location-Based Shift Listings',
      description: 'Find shifts near you or in preferred regions without stress.',
    },
    {
      title: 'Transparent Shift Details',
      description: 'See shift duration, pay rate, role, and employer details upfront, no guesswork.',
    },
    {
      title: 'Supportive Community',
      description: 'Connect with professionals who choose flexible, high-standard healthcare shifts.',
    },
  ],
  image: '/images/wmremove-transformed.png', // ensure it's in /public
};

  return (
    <div className="pt-16 flex flex-col gap-10">
     <Hero/>
     <WhoWeSupport/>
     <SectorsWeCover/>
     <OurHrApps/>
     <div  className="flex flex-col items-center gap-6  ">
              <div className=" flex flex-col items-center text-center w-full max-w-[800px] ">
               <p className="LocumTag mb-5">How Our Service Benefits You</p>
               <p className="text-base max-w-[600px]">
                 Discover the benefits of choosing a locum platform built specifically for healthcare professionals.
               </p>
           </div>
             <AnotherHrSectionInverse {...hrData5}/>
      </div>

      <TestimonialSection/>
     <FaqAccordion/>
     
    </div>
  );
}
