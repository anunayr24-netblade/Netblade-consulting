'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { BlogPost } from '@/lib/blogTypes';

interface BlogEditorProps {
  initialData?: BlogPost;
  onSave: (data: any) => Promise<void>;
  isLoading?: boolean;
}

export default function BlogEditor({ initialData, onSave, isLoading = false }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [publishDate, setPublishDate] = useState(
    initialData?.publishDate || new Date().toISOString().split('T')[0]
  );
  const [keywords, setKeywords] = useState(initialData?.keywords?.join(', ') || '');
  const [featuredImage, setFeaturedImage] = useState<string>(initialData?.featuredImage || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFeaturedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title || !content || !author) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      await onSave({
        title,
        content,
        author,
        publishDate,
        keywords: keywords.split(',').map(k => k.trim()).filter(k => k),
        featuredImage,
      });
      setSuccess('Blog post saved successfully!');
      if (!initialData) {
        setTitle('');
        setContent('');
        setAuthor('');
        setPublishDate(new Date().toISOString().split('T')[0]);
        setKeywords('');
        setFeaturedImage('');
      }
    } catch (err) {
      setError((err as Error).message || 'Failed to save blog post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">
        {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Author *
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter author name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Publish Date
          </label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. react, nextjs, web"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Featured Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {featuredImage && (
          <div className="mt-4">
            <img
              src={featuredImage}
              alt="Featured"
              className="max-w-xs h-auto rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">
          Content *
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog content"
          rows={12}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
      >
        {isLoading ? 'Saving...' : initialData ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
}
