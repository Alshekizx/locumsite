'use client';

import React from 'react';

type FilterOption = {
  label: string;
  value: string;
};

type JobFilterProps = {
  jobTypes: FilterOption[];
  workTypes: FilterOption[];
  industries: FilterOption[];
  filters: {
    jobType?: string;
    workType?: string;
    industry?: string;
  };
  onFilterChange: (filters: {
    jobType?: string;
    workType?: string;
    industry?: string;
  }) => void;
};

export const JobFilter: React.FC<JobFilterProps> = ({
  jobTypes,
  workTypes,
  industries,
  filters,
  onFilterChange,
}) => {
  const handleSelect = (key: keyof typeof filters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleSearch = () => {
    onFilterChange(filters); // Already updated via handleSelect
  };

  return (
    <div
      className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-lg border"
      style={{
        backgroundColor: 'var(--secondary-100)',
        borderColor: 'var(--secondary-200)',
      }}
    >
      <select
        value={filters.jobType || ''}
        onChange={(e) => handleSelect('jobType', e.target.value)}
        className="p-3 border border-[var(--secondary-200)] rounded-md w-full md:w-auto flex-1 custom-ring-color"
        
      >
        <option value="">Job Type</option>
        {jobTypes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={filters.workType || ''}
        onChange={(e) => handleSelect('workType', e.target.value)}
        className="p-3 border border-[var(--secondary-200)] rounded-md w-full md:w-auto flex-1 custom-ring-color"
        
      >
        <option value="">Work Type</option>
        {workTypes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={filters.industry || ''}
        onChange={(e) => handleSelect('industry', e.target.value)}
        className="p-3 border border-[var(--secondary-200)] rounded-md w-full md:w-auto flex-1 custom-ring-color"
        
      >
        <option value="">Industry</option>
        {industries.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleSearch}
        className=" button w-full max-w-[200px] text-white  py-3 px-6 rounded-md  transition"
      >
        Search
      </button>
    </div>
  );
};