'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/lib/blogTypes';

export default function AdminBlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth) {
      setIsAuthenticated(true);
      fetchBlogs();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin_auth', 'true');
        setIsAuthenticated(true);
        setPassword('');
        fetchBlogs();
      } else {
        setLoginError('Invalid password');
      }
    } catch (error) {
      setLoginError('Login failed');
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      if (data.success) {
        setBlogs(Array.isArray(data.data) ? data.data : []);
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
        const data = await response.json();

        if (data.success) {
          setBlogs(blogs.filter(blog => blog.id !== id));
          alert('Blog post deleted successfully');
        } else {
          alert('Failed to delete blog post');
        }
      } catch (error) {
        alert('Error deleting blog post');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

          {loginError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/admin/blog/new"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition inline-block"
          >
            + New Blog Post
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">No blog posts yet.</p>
            <Link
              href="/admin/blog/new"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    By {blog.author} • {new Date(blog.publishDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2">{blog.content.substring(0, 150)}...</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Link
                    href={`/admin/blog/edit/${blog.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
