'use client';
import React from "react";
import { Job } from "./sampleData";
import JobCardItem from "./jobCardItem"; // Import new component
import Pagination from "../pagination";

interface JobCardProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JobCard: React.FC<JobCardProps> = ({ jobs, onJobClick, currentPage, totalPages, onPageChange }) => {
  const jobsPerPage = 10;
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="flex flex-col space-y-6">
      <p>Available Vacancies</p>

      {paginatedJobs.map((job) => (
        <JobCardItem key={job.jobId} job={job} onClick={onJobClick} />
      ))}

       <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
    </div>
  );
};

export default JobCard;