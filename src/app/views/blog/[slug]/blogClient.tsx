'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import BlogCard from '@/app/components/blogComponent/blogCard';
import { blogData, BlogPost } from '../blogSampleData';
import HeroSection from '@/app/components/ourHrServiceComponent/heroSection';

interface BlogClientProps {
  blog: BlogPost;
}

export default function BlogClient({ blog }: BlogClientProps) {
 
const [selectedCategory] = useState<string | null>(null);
 const filteredPosts = selectedCategory
  ? blogData.filter(
      (post) => post.slug !== blog.slug && post.category === selectedCategory
    )
  : blogData.filter((post) => post.slug !== blog.slug);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log the form data
    console.log({ name, email, message });

    // Reset form and show a thank you message
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };


  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 pt-10">
      <HeroSection
             title="HR Blogs"
             description="Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
             breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Learning Hub' },
               { label: 'HR Blogs',  href: '/blog' },
               { label: ' Blog Details' },
             ]}
           />

      {/* Blog Content */}
  <div className="containerDiv flex flex-col lg:flex-row gap-10 px-4 sm:px-8 lg:px-16">
  
  <div className="w-full lg:w-3/4 space-y-8"> 
          {/* Main Blog Section */}
  <div className="space-y-8">
        
        
 
  {/*✅ Regular Blog Header Card*/} 
  <div className="flex flex-col-reverse lg:flex-row bg-[var(--primary-color)] rounded-lg overflow-hidden p-4">
    <div className="p-6 flex-1 text-white">
      <h3 className=" font-bold mb-2">{blog.title}</h3>
      <p className="text-sm mb-4" style={{ color: "white" }}>{blog.category}</p>
      <div className="flex items-center gap-3">
        <div className="h-10 bg-[var(--primary-100)] rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/logos/logo-icon.png"
            alt="MployUs Logo"
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="font-semibold" style={{ color: "white" }}>MployUs Team</p>
          <span className="text-sm">MployUs Team</span>
        </div>
      </div>
    </div>

    <div className="relative w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-lg">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover"
      />
    </div>
  </div>
          <p className="text-[var(--text-muted)]">{blog.summary}</p>
          <div className="space-y-8">
            {blog.subtopics.map((subtopic, index) => (
              <div key={index}>
                <h3 className=" font-semibold mb-2 text-[var(--text-dark)]">{subtopic.heading}</h3>
                <p className="text-[var(--text-muted)]">{subtopic.content}</p>
              </div>
            ))}
          </div>
  </div>
          {/* Get in Touch Form */}
    <div className="mt-16 py-6 border-t-1 border-[var(--border-color)] w-full max-w-3xl ">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--text-dark)]">Get in Touch with Us</h3>
            {submitted && (
              <p className="mb-4 text-green-600 font-medium">
                Thank you for reaching out! We&apos;ll get back to you soon.
              </p>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 flex-grow">
          
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 px-2 py-3 border border-gray-300 rounded  custom-ring-color custom-placeholder"
                  placeholder="Your name"
                />
             

              
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 px-2 py-3 border border-gray-300 rounded  custom-ring-color custom-placeholder"
                  placeholder="you@example.com"
                />
           

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="mt-1 p-2 border border-gray-300 md:col-span-2 rounded resize-y  custom-ring-color custom-placeholder"
                  placeholder="Write your message here..."
                />

              <button
                type="submit"
                className=" bg-[var(--primary-color)] text-white px-6 py-3 rounded hover:bg-opacity-90 transition duration-200"
              >
                Send now ➔ 
              </button>
            </form>
    </div>
  </div>
  
            {/* Related Posts */}
        <aside className="w-full hidden lg:block lg:w-1/4 space-y-6">
          <h4 className="text-lg font-semibold text-[var(--text-dark)]">Related Posts</h4>

            <div className="w-full max-h-[150vh] overflow-auto scrollbar-hide grid grid-cols-2 lg:grid-cols-1 gap-6">
              {filteredPosts.map((post) =>
          (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              image={post.image}
              title={post.title}
              date={post.datePosted}
              readTime={post.readTime}
              description={post.summary}
              category={post.category}
              author={post.author}
            />
          )
        )}
            </div>
        </aside>

  </div>

        
      </div>
    
  );
}
