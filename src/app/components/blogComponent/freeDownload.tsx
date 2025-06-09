import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

type BlogCardProps = {
  slug: string;
  image: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  author: {
    name: string;
    position: string;
    profilePicture: string;
  };
};

const FreeDownloadCard: React.FC<BlogCardProps> = ({
  slug,
 
  title,
  date,
  readTime,
  description,
  
  author,
}) => {
  return (
   <Link
        href={`/blog/${slug}`}
        className="block w-full rounded-tl-[100] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] hover:shadow-md transition-shadow"
        >
      {/* Thumbnail + Category Badge */}
      <div className="w-full bg-primary h-48 relative">
       
        <div className="py-1 px-2 bg-[var(--card-bg)] absolute right-5 top-5 rounded-lg text-sm font-medium">
          Free Download
        </div>

        <div className=" absolute left-5 bottom-5 h-10 w-10 flex items-center justify-center ">
        <Image
        src="/logos/logo-icon.png"
        alt="MployUs Logo"
        width={100}
        height={100}
        />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Date + Read Time */}
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <CalendarDaysIcon className="w-4 h-4 text-[var(--text-muted)]" />
          <span>{date}</span>
          <span className="mx-1">·</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <p className="font-bold leading-snug text-[var(--text-dark)]">
          {title}
        </p>

        {/* Description */}
        <p className="text-[0.95rem] text-[var(--text-muted)] line-clamp-2">
          {description}
        </p>

        {/* Author Info */}
        {author && (
  <div className="flex items-center gap-3 mt-3">
    <div className="h-10 w-10 bg-[var(--primary-100)] rounded-full overflow-hidden">
      <Image
        src="/logos/logo-icon.png"
        alt='mployUs'
        width={100}
        height={100}
        className=""
      />
    </div>
    <div>
      <p className="font-semibold text-[var(--text-dark)]">MployUs Team</p>
      <span className="text-sm text-[var(--text-muted)]">MployUs Team</span>
    </div>
  </div>
)}
      </div>

      {/* Tag */}
      <span className="mx-4 mb-4 inline-block px-4 py-1 bg-[var(--primary-100)] text-[var(--primary-color)] rounded-full text-sm">
        Employment Contract
      </span>
    </Link>
  );
};

export default FreeDownloadCard;
