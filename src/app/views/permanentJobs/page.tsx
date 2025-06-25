'use client';
import { useState } from "react";
import { Job, sampleJobs } from "../../components/permanentJobsComponent/sampleData";
import JobFilter2 from "../../components/permanentJobsComponent/jobFilter";
import JobCard from "../../components/permanentJobsComponent/jobCard";
import JobApplicationDetail from "../../components/permanentJobsComponent/jobApplicationDetails";
import type { FilterOptions } from "../../components/permanentJobsComponent/jobFilter"; 
import StickyBox from 'react-sticky-box';
import CountryFilter from "../../components/permanentJobsComponent/CountryFilter";







export default function ForJobSeeker() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [filters, setFilters] = useState<FilterOptions>({});
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const countries = [...new Set(sampleJobs.map((job) => job.country))];
    
 
  


  // Filtering logic
  const filteredJobs = sampleJobs.filter(job =>
    (selectedCountry === "All" || job.country === selectedCountry) &&
    (!filters.jobType || job.jobType === filters.jobType) &&
    (!filters.profession || job.jobSector === filters.profession) &&
    (!filters.position || job.positionName === filters.position) &&
    (!filters.location || job.location === filters.location)
  );

const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  return (
    <div className="flex pt-30 flex-col items-center">
      <div className=" containerDiv flex flex-col gap-16">     
    <div className="">
        <CountryFilter
          selectedCountry={selectedCountry}
          onChange={setSelectedCountry}
          countries={countries}
        />
      </div>
        <div className="flex flex-row gap-10 min-h-[1000px]">
          <div className="hidden lg:block w-1/3" >
            <StickyBox offsetTop={100} offsetBottom={0}>
              <div>
                <JobFilter2
                  filters={filters}
                  sampleJobs={sampleJobs}
                  onFilterChange={setFilters}
                />
              </div>
            </StickyBox>
          </div>


          <div className="w-full lg:w-2/3">
            {selectedJob ? (
              <JobApplicationDetail
                job={selectedJob}
                onBack={() => setSelectedJob(null)} 
              />
            ) : (
              <JobCard jobs={filteredJobs} onJobClick={setSelectedJob} 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
