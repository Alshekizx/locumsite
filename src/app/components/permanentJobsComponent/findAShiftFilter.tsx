'use client';
import React, { useState, useEffect } from 'react';

interface FindAShiftFilterProps {
  professions: string[];
  specialisations: string[];
  locations: string[];
  onFilterChange: (filters: {
    profession: string;
    specialisation: string;
    location: string;
    earliestStartDate: string;
  }) => void;
}

const FindAShiftFilter: React.FC<FindAShiftFilterProps> = ({
  professions,
  specialisations,
  locations,
  onFilterChange,
}) => {
  const [profession, setProfession] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [location, setLocation] = useState('');
  const [earliestStartDate, setEarliestStartDate] = useState('');
  const [showFilters, setShowFilters] = useState(false); // NEW: toggle state

  useEffect(() => {
    onFilterChange({ profession, specialisation, location, earliestStartDate });
  }, [profession, specialisation, location, earliestStartDate, onFilterChange]);

  return (
    <div className="w-full">
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 bg-[var(--secondary-100)]">
      <span className="hidden lg:block text-white font-semibold">Find a shift</span>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm px-3 py-1 bg-[var(--primary-color)] text-white rounded"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>


      {/* Filters Section */}
      <div
        className={`${
          showFilters ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 justify-between items-end w-full px-4 md:px-10 py-4 bg-[var(--secondary-100)]`}
      >
        {/* Profession */}
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="profession" className="text-sm font-medium mb-1">
            Profession
          </label>
          <select
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="border rounded px-3 py-2 custom-ring-color"
          >
            <option value="">All Professions</option>
            {professions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Specialisation */}
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="specialisation" className="text-sm font-medium mb-1">
            Specialisation
          </label>
          <select
            id="specialisation"
            value={specialisation}
            onChange={(e) => setSpecialisation(e.target.value)}
            className="border rounded px-3 py-2 custom-ring-color"
          >
            <option value="">All Specialisations</option>
            {specialisations.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="location" className="text-sm font-medium mb-1">
            Shift Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded px-3 py-2 custom-ring-color"
          >
            <option value="">All Locations</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Start Date */}
        <div className="flex flex-col w-full md:w-auto">
          <label htmlFor="earliestStartDate" className="text-sm font-medium mb-1">
            Earliest Start Date
          </label>
          <input
            id="earliestStartDate"
            type="date"
            value={earliestStartDate}
            onChange={(e) => setEarliestStartDate(e.target.value)}
            className="border rounded px-3 py-2 custom-ring-color"
          />
        </div>

        {/* Search Button */}
        <button className="button mt-2 md:mt-0" style={{ borderRadius: '4px' }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FindAShiftFilter;