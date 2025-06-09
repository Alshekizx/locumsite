'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

type Feature = {
  title: string;
  description: string;
};

type HrSectionProps = {
  title: string;
  description: string;
  features: Feature[];
  image: string; // public path, e.g. "/image-name.png"
};

export default function HrSectionInverse({
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
    <section className="bg-[var(--background-light)] containerDiv" style={{padding:'auto 100px ', minHeight: '50px'}}>
      {/* Use flex-col-reverse on mobile and grid on md+ */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">

         {/* Image */}
        <div
          style={{ height }}
          className="rounded-lg overflow-hidden w-full"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div ref={contentRef} className="flex flex-col gap-6 justify-center h-fit">
          <h3 className="text-3xl text-[var(--primary-color)]">{title}</h3>
          <p className="text-[var(--text-muted)] text-lg">{description}</p>

          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircleIcon
                  className="w-[20px] h-[20px] text-[var(--primary-color)] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[var(--text-muted)]">
                  <strong className="text-[var(--primary-color)]">{feature.title}</strong>{' '}
                  – {feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

       
      </div>
    </section>
  );
}