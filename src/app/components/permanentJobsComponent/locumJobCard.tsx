'use client';
import React from "react";
import { LocumJob } from "./locumJobData";
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface LocumJobCardItemProps {
  job: LocumJob;
  onClick: (job: LocumJob) => void;
  selected: boolean;
}

const LocumJobCardItem: React.FC<LocumJobCardItemProps> = ({ job, onClick, selected }) => {
  return (
    <div
      onClick={() => onClick(job)}
      className={clsx(
        "group flex flex-col space-y-3 rounded-lg p-6 transition duration-300  cursor-pointer",
        selected
          ? "bg-[var(--primary-color)] text-white "
          : "bg-[var(--secondary-100)]  hover:bg-[var(--primary-color)]"
      )}
    >
      {/* Header */}
      <div>
        <span className="font-medium group-hover:text-white ">{job.companyName}</span>
        <p className={clsx(
          "text-lg font-semibold transition-colors",
          selected ? "text-[var(--primary-500)]" : "text-[var(--primary-color)] group-hover:text-[var(--primary-500)]"
        )}>
          {job.positionName}
        </p>
      </div>

      {/* Info Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
        {/* Left Details */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-4 w-4  group-hover:text-white" />
            <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>{job.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4  group-hover:text-white" />
            <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>{job.time}</span>
            <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>({job.hours} hours)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4  group-hover:text-white" />
            <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>{job.location}</span>
          </div>
        </div>

        {/* Right Payment */}
        <div className="flex flex-col items-start gap-1">
          <p className={clsx(
          "text-lg font-semibold transition-colors",
          selected ? "text-[var(--primary-500)]" : "text-[var(--primary-color)] group-hover:text-[var(--primary-500)]"
        )}>
            {job.ratePerHour} per hour
          </p>
          <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>Total Pay: {job.totalPay}</span>
          <span className={clsx(selected ? "text-white" : "group-hover:text-white")}>Unpaid: {job.unpaidMinutes} mins</span>
        </div>
      </div>
    </div>
  );
};

export default LocumJobCardItem;