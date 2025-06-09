'use client';
import React, { useState } from "react";
import LocumJobCardItem from "../components/permanentJobsComponent/locumJobCard";
import LocumJobDetailView from "../components/permanentJobsComponent/LocumJobDetailView";
import { LocumJobs, LocumJob } from "../components/permanentJobsComponent/locumJobData";
import CountryFilter from "../components/permanentJobsComponent/CountryFilter";
import FindAShiftFilter from "../components/permanentJobsComponent/findAShiftFilter";
import Pagination from "../components/pagination";

const LocumShift = () => {
  const [selectedJob, setSelectedJob] = useState<LocumJob | null>(LocumJobs[0]);
  const [sortBy, setSortBy] = useState<string>("dateAdded");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  

  const [filters, setFilters] = useState({
    profession: '',
    specialisation: '',
    location: '',
    earliestStartDate: '',
  });

  const countries = [...new Set(LocumJobs.map((job) => job.country))];
  const professions = [...new Set(LocumJobs.map((job) => job.positionName))];
  const specialisations = [...new Set(LocumJobs.map((job) => job.specialisation))];
  const locations = [...new Set(LocumJobs.map((job) => job.location))];

  const handleJobClick = (job: LocumJob) => {
    setSelectedJob(job);
  };

  const getSortedJobs = (jobs: LocumJob[]) => {
    const multiplier = sortOrder === "asc" ? 1 : -1;

    switch (sortBy) {
      case "startDate":
        return jobs.sort(
          (a, b) =>
            multiplier * (new Date(a.date).getTime() - new Date(b.date).getTime())
        );
      case "hourlyRate":
        return jobs.sort(
          (a, b) =>
            multiplier * (parseFloat(a.ratePerHour) - parseFloat(b.ratePerHour))
        );
      case "distance":
        return jobs.sort(
          (a, b) => multiplier * ((a.distance || 0) - (b.distance || 0))
        );
      case "dateAdded":
      default:
        return jobs; // you can implement sorting by dateAdded if needed
    }
  };

  const getFilteredJobs = () => {
    let filtered = [...LocumJobs];

    if (selectedCountry !== "All") {
      filtered = filtered.filter((job) => job.country === selectedCountry);
    }

    if (filters.profession) {
      filtered = filtered.filter((job) => job.positionName === filters.profession);
    }

    if (filters.specialisation) {
      filtered = filtered.filter((job) => job.specialisation === filters.specialisation);
    }

    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (filters.earliestStartDate) {
      filtered = filtered.filter(
        (job) => new Date(job.date) >= new Date(filters.earliestStartDate)
      );
    }

    return getSortedJobs(filtered);
  };

      const [currentPage, setCurrentPage] = useState(1);
      const jobsPerPage = 5;

      const filteredJobs = getFilteredJobs();
      const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

      const indexOfLastJob = currentPage * jobsPerPage;
      const indexOfFirstJob = indexOfLastJob - jobsPerPage;
      const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

      const onPageChange = (page: number) => {
        setCurrentPage(page);
      };

  return (
    <div className="flex flex-col gap-6 containerDiv mt-20">
      <div className="relative flex bg-hero-locum flex-col gap-6 h-70 bg-black py-16 px-10">
        <div className="absolute z-0 inset-0 bg-[#000000bb]"></div>
        <span className='text-center z-10 text-white'>Find Your Next Healthcare Shift</span>
        <h3 className="text-center z-10 text-white">
          Explore flexible locum shifts, apply instantly, and manage your availability in one place.
        </h3>
        <div className="mt-4 z-10">
          <FindAShiftFilter
              professions={professions}
              specialisations={specialisations}
              locations={locations}
              onFilterChange={setFilters}
            />
        </div>
      </div>
      

      <div className="mt-20">
        <CountryFilter
          selectedCountry={selectedCountry}
          onChange={setSelectedCountry}
          countries={countries}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Job List */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <p className="text-lg font-semibold">Available Shifts</p>

            <div className="flex flex-col items-start">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Sort Shifts By
              </label>
              <div className="flex border border-[var(--secondary-300)] flex-wrap p-2 rounded-full gap-2">
                {[
                  { label: "Start Date", value: "startDate" },
                  { label: "Hourly Rate", value: "hourlyRate" },
                  { label: "Distance", value: "distance" },
                  { label: "Date Added", value: "dateAdded" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      if (sortBy === option.value) {
                        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                      } else {
                        setSortBy(option.value);
                        setSortOrder("asc");
                      }
                    }}
                    className={`rounded-full px-2 py-1 text-sm transition-all duration-200 ${
                      sortBy === option.value
                        ? "bg-[var(--primary-color)] text-white "
                        : "bg-white text-[var(--text-muted)] "
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {currentJobs.map((job) => (
            <LocumJobCardItem
              key={job.jobId}
              job={job}
              onClick={handleJobClick}
              selected={selectedJob?.jobId === job.jobId}
            />
          ))}
         <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        </div>

        {/* Job Detail */}
        <div className="md:w-1/2">
          {selectedJob && <LocumJobDetailView job={selectedJob} />}
        </div>
      </div>
    </div>
  );
};

export default LocumShift;