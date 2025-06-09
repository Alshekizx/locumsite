'use client';
import React, { useState } from 'react';
import BlogCard from '../components/blogComponent/blogCard';
import { blogData } from './blogSampleData';
import HeroSection from '../components/ourHrServiceComponent/heroSection';
import CountryFilter from '../components/permanentJobsComponent/CountryFilter';


const sideFilters = [
  'Latest News',
  'News',
  'Our Guides',
  'Tips & Tricks',
  'Uncategorised',
  'Pharmacy',
  'Agency Nursing',
  'General Practitioners',
  'Healthcare Assistants',
  'Student Nurses',
  'Allied Health Professionals',
];


const BlogIndexPage = () => {
   const countries = [...new Set(blogData.map((job) => job.country))];
  const [activeSideFilter, setActiveSideFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });


     // Sort blogData by date ascending to get 5 earliest
  const blogDataWithLatest = blogData
    .slice() // clone to avoid mutating original
    .sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime())
    .map((post, index) => ({
      ...post,
      LatestNews: index < 10, // true for first 10
    }));


    const filteredPosts = blogDataWithLatest.filter((post) => {
    const matchCountry = selectedCountry === "All" || post.country === selectedCountry;
    const matchSide = activeSideFilter === 'All' || post.sideCategory === activeSideFilter;
    return matchCountry && matchSide;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.datePosted).getTime();
    const dateB = new Date(b.datePosted).getTime();

    switch (sortBy) {
      case 'Newest':
        return dateB - dateA;
      case 'Oldest':
        return dateA - dateB;
      case 'ReadTimeAsc':
        return parseInt(a.readTime.replace(/\D/g, ''), 10) - parseInt(b.readTime.replace(/\D/g, ''), 10);
      case 'ReadTimeDesc':
        return parseInt(b.readTime.replace(/\D/g, ''), 10) - parseInt(a.readTime.replace(/\D/g, ''), 10);
      default:
        return 0;
    }
  });

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 pb-20">
      <HeroSection
        title="Locum Blogs"
        description=""
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locum Blogs' },
        ]}
      />
      <div className='containerDiv'>

        {/* Top Filters */}
        <div className="sticky mb-5 top-20 z-10 px-4 flex ">
  
</div>

        {/* Main Content */}
        <div className="flex w-full px-4 gap-8">
          {/* Side Filters */}
          <aside className="hidden pt-16 lg:block w-1/4">
            <div className="sticky top-20 space-y-2">
              {sideFilters.map((filter) => (
                <button
                  key={filter}
                  className={`block w-full text-left transition-colors duration-200 ${
                    activeSideFilter === filter
                      ? 'text-[var(--primary-color)] no-underline font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--primary-200)] underline'
                  }`}
                  onClick={() => setActiveSideFilter(filter)}
                  aria-pressed={activeSideFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </aside>


        <div className="w-full flex flex-col lg:w-3/4 gap-6">
          <div className="flex justify-between flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]  overflow-x-auto">
              <div className="flex items-center gap-2 w-max">
                <CountryFilter
                  selectedCountry={selectedCountry}
                  onChange={setSelectedCountry}
                  countries={countries}
                  isShowLabel={false}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <span>Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg text-sm bg-[var(--secondary-100)] text-[var(--secondary-300)] border-[var(--secondary-300)]"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="ReadTimeAsc">Shortest Read</option>
                <option value="ReadTimeDesc">Longest Read</option>
              </select>
            </div>
          </div>
          {/* Blog Cards */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post) =>
                (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    image={post.image}
                    title={post.title}
                    date={formatDate(post.datePosted)}
                    readTime={post.readTime}
                    description={post.summary}
                    category={post.category}
                    author={post.author}
                  />
                )
              )
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blogs found for selected filters.
              </p>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;