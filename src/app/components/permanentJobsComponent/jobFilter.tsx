'use client';
import React, { useEffect, useState } from 'react';

export type FilterOptions = {
  jobType?: string;
  profession?: string;
  position?: string;
  location?: string;
};

type Job = {
  jobType: string;
  jobSector: string;
  positionName: string;
  location: string;
};

type JobFilter2Props = {
  sampleJobs: Job[];
  filters: FilterOptions;
  onFilterChange?: (filters: FilterOptions) => void;
};

const JobFilter2: React.FC<JobFilter2Props> = ({
  sampleJobs,
  filters,
  onFilterChange,
}) => {
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [professions, setProfessions] = useState<string[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);

  // Populate dropdown options from sampleJobs
  useEffect(() => {
    const jobTypeSet = new Set<string>();
    const professionSet = new Set<string>();
    const positionSet = new Set<string>();
    const locationSet = new Set<string>();

    sampleJobs.forEach((job) => {
      jobTypeSet.add(job.jobType);
      professionSet.add(job.jobSector);
      positionSet.add(job.positionName);
      locationSet.add(job.location);
    });

    setJobTypes(Array.from(jobTypeSet));
    setProfessions(Array.from(professionSet));
    setPositions(Array.from(positionSet));
    setLocations(Array.from(locationSet));
  }, [sampleJobs]);

  const handleSelect = (key: keyof FilterOptions, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    onFilterChange?.(updatedFilters);
  };

  const resetFilters = () => {
    onFilterChange?.({});
  };

  const renderDropdown = (
    label: string,
    key: keyof FilterOptions,
    options: string[]
  ) => (
    <div className="">
      <select
        value={filters[key] || ''}
        onChange={(e) => handleSelect(key, e.target.value)}
        className="block w-full border border-[var(--secondary-200)] px-6 py-4 custom-ring-color"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-medium">Filter Applied</p>

      {/* Filter Tags */}
      <div className='rounded-lg border border-[var(--primary-200)] p-6 bg-[var(--primary-100)]'>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(filters).map(([key, value]) =>
            value ? (
              <span
                key={key}
                className="rounded-full bg-white border border-[var(--primary-color)] text-[var(--primary-color)] text-xs px-3 py-1"
              >
                {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
              </span>
            ) : null
          )}
        </div>

        <button
          onClick={resetFilters}
          className="mb-4 w-full py-3 rounded-md border border-[var(--primary-color)] text-[var(--primary-color)] transition"
        >
          Reset Filter
        </button>
      </div>

      {/* Dropdowns */}
      <div>
        {renderDropdown('Job Type', 'jobType', jobTypes)}
        {renderDropdown('Profession', 'profession', professions)}
        {renderDropdown('Position', 'position', positions)}
        {renderDropdown('Location', 'location', locations)}
      </div>
    </div>
  );
};

export default JobFilter2;