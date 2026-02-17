'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BlogEditor from '@/components/Blog/BlogEditor';

export default function NewBlogPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (!auth) {
      router.push('/admin/blog');
    } else {
      setIsAuthenticated(true);
      setChecking(false);
    }
  }, [router]);

  const handleSave = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('Blog post created successfully!');
        router.push('/admin/blog');
      } else {
        throw new Error(result.error || 'Failed to create blog post');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (checking) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/blog" className="text-blue-600 hover:text-blue-800 mb-4 block">
          ← Back to Blog Management
        </Link>
        <BlogEditor onSave={handleSave} isLoading={isLoading} />
      </div>
    </div>
  );
}
