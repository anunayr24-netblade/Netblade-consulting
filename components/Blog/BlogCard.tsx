'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blogTypes';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const excerpt = post.content.substring(0, 150) + '...';

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {post.featuredImage && (
        <div className="relative h-48 w-full">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 hover:text-blue-600">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                {keyword}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.id}`}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
