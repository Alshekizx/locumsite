'use client';
import React from 'react';
import { LocumJob } from './locumJobData';
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';

interface Props {
  job: LocumJob;
}

const LocumJobDetailView: React.FC<Props> = ({ job }) => {
  return (
    <div className="p-6 overflow-y-auto scrollbar-hide h-[85vh] rounded-md bg-white space-y-6">
      {/* Job Title and Header */}
      <div>
        <span className="text-sm text-[var(--secondary-400)] ">{job.companyName}</span>
        <h3 className="text-[var(--primary-color)] text-xl font-semibold">{job.positionName}</h3>
      </div>

      {/* Country, Rate and Share Button */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2 text-sm">
          <span className="bg-[var(--secondary-200)] flex items-center justify-between gap-2 text-[var(--secondary-400)]  px-5 py-2 rounded-md">
            <MapPinIcon className="h-5 w-5 text-[var(--secondary-color)]" />
            {job.country}
          </span>
          <span className="bg-[var(--secondary-200)] flex items-center justify-between gap-2 text-[var(--secondary-400)]  px-5 py-2 rounded-md">
            <CurrencyDollarIcon className="h-5 w-5 text-[var(--secondary-color)]" /> 
            {job.ratePerHour} / hr
          </span>
        </div>
        <button className="flex items-center gap-1 bg-[var(--secondary-200)] text-[var(--primary-color)] px-5 py-2 rounded-md">
          <ShareIcon className="h-4 w-4" />
          Share Shift
        </button>
      </div>

      {/* Details Table Style Section */}
      <div className="space-y-4 text-sm">
        {/* Date */}
        <div className="flex flex-row justify-between items-center ">
          
          <div className="flex flex-row gap-2 items-center">
            <CalendarDaysIcon className="h-5 w-5 text-[var(--secondary-color)]" />
            <p className="font-medium">Date</p>
          </div>
          <p>{job.date}</p>
        </div>
        <hr />

        {/* Time */}
        <div className="flex  justify-between items-center gap-3">
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-[var(--secondary-color)]" />
            <p className="font-medium">Time</p>
          </div>
          <div>
              <p>{job.time} ({job.hours} hrs)</p>
              <p className="text-xs text-[var(--secondary-400)] ">{job.unpaidMinutes} min break (unpaid)</p>
          </div>
        </div>
        <hr />

        {/* Rate */}
        <div className="flex flex-row justify-between items-center ">
         
          <div className="flex  gap-2 items-center">
            <CurrencyDollarIcon className="h-5 w-5 text-[var(--secondary-color)]" />
            <p className="font-medium">Rate</p>
          </div>
            <div>
              <p>{job.ratePerHour}</p>
              <p className="text-xs text-[var(--secondary-400)] ">Total Pay: {job.totalPay}</p>
            </div>
        </div>
        <hr />

        {/* Location */}
        <div className="flex justify-between items-center">
          
          <div className="flex gap-2 items-center">
            <MapPinIcon className="h-5 w-5 text-[var(--secondary-color)]" />
            <p className="font-medium">Location</p>
          </div>
           <p>{job.location}, {job.country}</p>
        </div>
        <hr />

        {/* Apply Button */}
       <div className="flex justify-end mt-2">
          <button
            className="button w-full lg:w-1/2"
            style={{ borderRadius: '10px' }}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Map Image */}
      <div>
        <h3 className="font-semibold mb-2">Shift Location</h3>
        <div className="w-full h-64 rounded-md overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="rounded-md"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
              job.location + ', ' + job.country
            )}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LocumJobDetailView;
