'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import BlogEditor from '@/components/Blog/BlogEditor';
import { BlogPost } from '@/lib/blogTypes';

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (!auth) {
      router.push('/admin/blog');
    } else {
      setIsAuthenticated(true);
      fetchBlog();
    }
  }, [id, router]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blog?id=${id}`);
      const data = await response.json();

      if (data.success && data.data) {
        setBlog(data.data);
      } else {
        alert('Blog not found');
        router.push('/admin/blog');
      }
    } catch (error) {
      alert('Failed to fetch blog');
      router.push('/admin/blog');
    } finally {
      setIsFetching(false);
    }
  };

  const handleSave = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/blog?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('Blog post updated successfully!');
        router.push('/admin/blog');
      } else {
        throw new Error(result.error || 'Failed to update blog post');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated || isFetching) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/blog" className="text-blue-600 hover:text-blue-800 mb-4 block">
          ← Back to Blog Management
        </Link>
        <BlogEditor initialData={blog} onSave={handleSave} isLoading={isLoading} />
      </div>
    </div>
  );
}
