'use client';

import { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blogTypes';

export default function BlogPostPage() {
  const params = useParams();
  const pathname = usePathname();
  const id = params?.id as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  useEffect(() => {
    // Track pageview with Google Analytics including blog title
    if (typeof window !== 'undefined' && 'gtag' in window && blog) {
      (window as any).gtag('pageview', {
        page_path: pathname,
        page_title: `Blog: ${blog.title}`,
      });
    }
  }, [pathname, blog]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blog?id=${id}`);
      const data = await response.json();

      if (data.success && data.data) {
        setBlog(data.data);
      } else {
        setError('Blog post not found');
      }
    } catch (err) {
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 block">
          ← Back to Blog
        </Link>

        <header className="bg-white rounded-lg shadow p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.keywords.map((keyword) => (
              <span key={keyword} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                #{keyword}
              </span>
            ))}
          </div>
        </header>

        {blog.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-8 prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {blog.content}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
