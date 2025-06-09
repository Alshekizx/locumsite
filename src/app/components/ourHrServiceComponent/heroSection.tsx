'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type Breadcrumb = {
  label: string;
  href?: string;
};

type HeroSectionProps = {
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  backgroundClassName?: string; // extra classes like bg-color or background-image
};

export default function HeroSection({
  title,
  description,
  breadcrumbs = [],
  backgroundClassName = 'bg-[var(--primary-color)] card-texture-bg',
}: HeroSectionProps) {
  return (
    <div
      className={`relative  w-full flex flex-col items-center justify-center pt-20 px-4 h-80 text-white text-center ${backgroundClassName}`}
    >
      {breadcrumbs.length > 0 && (
        <div className="absolute top-16 left-6 flex items-center gap-1 text-sm">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              {item.href ? (
                <Link className="underline" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-4xl font-bold mb-4">{title}</h3>
      <p className="max-w-[700px]" style={{ color: 'white' }}>
        {description}
      </p>
    </div>
  );
}
