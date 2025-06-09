'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type HrSectionProps = {
  title?: string | null;
  description?: string | null;
  image: string; // public path, e.g. "/image-name.png"
  reverse?: boolean; // determines layout direction on large screens
};

export default function AnotherHrSection({
  title,
  description,
  image,
  reverse = false,
}: HrSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [title, description]);

  return (
    <section
      className="containerDiv bg-[var(--background-light)] w-full"
      style={{ padding: '0 auto', minHeight: '50px' }}
    >
      <div
        className={`flex flex-col ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center justify-between gap-12`}
      >
        {/* Text Content */}
        <div
          ref={textRef}
          className="flex flex-col gap-6 text-center lg:text-left lg:w-2/3"
        >
          {title && (
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg text-[var(--text-muted)] whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

         {/* Image Content */}
        <div
          className="w-full lg:w-1/3 rounded-lg overflow-hidden flex items-center justify-center"
          style={{ height: textHeight ? `${textHeight}px` : 'auto' }}
        >
          <Image
            src={image}
            alt={title ?? 'Section image'}
            width={600}
            height={textHeight ?? 600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}