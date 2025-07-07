import React from "react";
import { Job } from "./sampleData";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface JobApplicationDetailProps {
  job: Job;
  onBack: () => void;
}

const JobApplicationDetail: React.FC<JobApplicationDetailProps> = ({ job, onBack }) => {
  const router = useRouter();
  
  return (
    <div className=" flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2  cursor-pointer group" onClick={onBack}>
        <p className="text-[var(--text-muted)] group-hover:text-[var(--primary-color)] transition">Available Vacancies</p>
        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[var(--primary-color)] transition" />
        <p style={{color:"var(--primary-color)"}}>{job.positionName}</p>
      </div>

      {/* Header Info */}
      <div className="">
        <h2 className="text-3xl font-semibold mb-2">{job.positionName}</h2>
        <p className=" ">Job No: {job.jobId}</p>
      </div>

      <div>
      <div className="flex flex-row gap-5 ">
        <p className="">Salary Range:</p>
          <p className=" font-semibold " style={{color:"var(--primary-color)"}}>{job.salaryRange}</p>
      </div>

      <div className="flex flex-row gap-5 ">
        <p className="">Location:</p>
          <p className=" font-semibold " style={{color:"var(--primary-color)"}}>{job.location}, {job.country}</p>
      </div>
      </div>

      {/* Job Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        
        <div className="p-4 rounded-lg bg-[var(---bg)] border border-[var(--border-color)] text-center">
          <p className="">Work Model</p>
          <p className=" font-semibold">{job.workType}</p>
        </div>
        <div className="p-4 rounded-lg bg-[var(---bg)] border border-[var(--border-color)] text-center">
          <p className="">Job Type</p>
          <p className=" font-semibold">{job.jobType}</p>
        </div>
        <div className="p-4 rounded-lg bg-[var(---bg)] border border-[var(--border-color)] text-center">
          <p className="">Level</p>
          <p className=" font-semibold">{job.jobLevel}</p>
        </div>
      </div>

      {/* Job Description */}
      <div className=" ">
        <h3 className="text-2xl font-semibold mb-4">Job Description</h3>
        <p>{job.jobDescription}</p>
      </div>

      {/* Responsibilities */}
      <div className=" ">
        <h3 className="text-2xl font-semibold mb-4">Responsibilities</h3>
        <ul className="list-disc pl-6 space-y-2">
          {job.jobResponsibility.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className=" ">
        <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
        <ul className="list-disc pl-6 space-y-2">
          {job.jobRequirement.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="text-end">

        <button  className="bLocumJobDetailViewutton w-full lg:w-1/2"
            style={{ borderRadius: '10px' }} onClick={() => router.push(`/views/permanentJobs/apply/${job.jobId}`)}>
            Apply
          </button>

      </div>
    </div>
  );
};

export default JobApplicationDetail;