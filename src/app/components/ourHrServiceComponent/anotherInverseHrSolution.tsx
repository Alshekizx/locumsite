'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

type Feature = {
  title: string | null;
  description: string | null;
};

type HrSectionProps = {
  title: string | null;
  description: string | null;
  features: Feature[] | null;
  image: string | null;
};

export default function AnotherHrSectionInverse({
  title,
  description,
  features,
  image,
}: HrSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [title, description, features]);

  return (
    <section
      className="bg-[var(--background-light)] containerDiv  py-2"
      style={{ minHeight: '50px' }}
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
        {/* Image */}
        <div
          style={{ height }}
          className="w-full md:w-1/2 flex justify-center items-center rounded-lg overflow-hidden "
        >
          {image && (
            <Image
              src={image}
              alt={title || 'Section Image'}
              width={600}
              height={600}
              className="w-full h-full object-contain lg:object-cover"
            />
          )}
        </div>

        {/* Text content */}
        <div
          ref={contentRef}
          className="w-full md:w-1/2 flex flex-col gap-6 justify-center h-fit"
        >
          {title && <h3 className="text-3xl text-[var(--primary-color)]">{title}</h3>}
          {description && (
            <p className="text-[var(--text-muted)] text-lg">{description}</p>
          )}

          {features && features.length > 0 && (
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircleIcon
                    className="w-[20px] h-[20px] text-[var(--primary-color)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[var(--text-muted)]">
                      <strong className="text-[var(--primary-color)]">
                        {feature.title || 'Untitled'}
                      </strong>{' '}
                      – {feature.description || 'No description provided'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}