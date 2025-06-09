'use client';
import React from 'react';
import Image from 'next/image';

interface CountryFilterProps {
  selectedCountry: string;
  onChange: (value: string) => void;
  countries: string[];
  isShowLabel?: boolean; // optional prop
}

// Map country names to ISO 3166-1 alpha-2 codes or special codes
const countryCodeMap: Record<string, string> = {
  All: "",
  England: "gb",
  "United Kingdom": "gb",
  Scotland: "gb-sct",
  Wales: "gb-wls",
  "Northern Ireland": "gb-nir",
  "Republic of Ireland": "ie",
  UK: "gb",
  // add other mappings here
};

const CountryFilter: React.FC<CountryFilterProps> = ({
  selectedCountry,
  onChange,
  countries,
  isShowLabel = true, // default to true
}) => {
  // Flag URL builder helper
  const getFlagUrl = (country: string) => {
    const code = countryCodeMap[country];
    if (!code) return null;
    return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {isShowLabel && (
        <span className="text-md font-medium">Select Country:</span>
      )}
      <div className="flex flex-wrap justify-between gap-3">
        <button
          onClick={() => onChange("All")}
          className="hidden"
          aria-pressed={selectedCountry === "All"}
          type="button"
        ></button>

        {countries.map((country) => {
          const flagUrl = getFlagUrl(country);
          return (
            <button
              key={country}
              onClick={() => onChange(country)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition text-[var(--text-muted)]`}
              aria-pressed={selectedCountry === country}
              type="button"
            >
              <input
                type="checkbox"
                checked={selectedCountry === country}
                onChange={() => onChange(country)}
                className="h-5 w-5 cursor-pointer"
              />
              {flagUrl ? (
                <div className="w-5 h-5 rounded-full overflow-hidden">
                  <Image
                    src={flagUrl}
                    alt={`${country} flag`}
                    width={40}
                    height={40}
                    className="object-cover h-full rounded-sm"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ) : (
                <span className="w-6 h-4 inline-block bg-gray-300 rounded-sm" />
              )}
              {country}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CountryFilter;