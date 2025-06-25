// src/app/blog/[slug]/page.tsx
import { blogData } from '../blogSampleData';
import { notFound } from 'next/navigation';
import BlogClient from './blogClient'; // Client component

interface BlogViewProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogView({ params }: BlogViewProps) {
  const { slug } = await params; // ✅ Await params (Next.js 15 requirement)

  const blog = blogData.find((post) => post.slug === slug);

  if (!blog) return notFound();

  return <BlogClient blog={blog} />;

}