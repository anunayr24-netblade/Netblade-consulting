import fs from 'fs';
import path from 'path';
import { BlogPost } from './blogTypes';

const DATA_DIR = path.join(process.cwd(), 'data');
const BLOGS_FILE = path.join(DATA_DIR, 'blogs.json');

// Ensure data directory exists
export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Read all blogs
export function getAllBlogs(): BlogPost[] {
  try {
    ensureDataDir();
    if (!fs.existsSync(BLOGS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(BLOGS_FILE, 'utf-8');
    return JSON.parse(data) as BlogPost[];
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// Get single blog by ID
export function getBlogById(id: string): BlogPost | null {
  const blogs = getAllBlogs();
  return blogs.find(blog => blog.id === id) || null;
}

// Save blogs
export function saveBlogs(blogs: BlogPost[]): boolean {
  try {
    ensureDataDir();
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving blogs:', error);
    return false;
  }
}

// Create new blog
export function createBlog(blog: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  const blogs = getAllBlogs();
  const newBlog: BlogPost = {
    ...blog,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  blogs.push(newBlog);
  saveBlogs(blogs);
  return newBlog;
}

// Update blog
export function updateBlog(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const blogs = getAllBlogs();
  const index = blogs.findIndex(blog => blog.id === id);
  if (index === -1) return null;

  blogs[index] = {
    ...blogs[index],
    ...updates,
    id: blogs[index].id,
    createdAt: blogs[index].createdAt,
    updatedAt: new Date().toISOString(),
  };
  saveBlogs(blogs);
  return blogs[index];
}

// Delete blog
export function deleteBlog(id: string): boolean {
  const blogs = getAllBlogs();
  const filtered = blogs.filter(blog => blog.id !== id);
  if (filtered.length === blogs.length) return false;
  saveBlogs(filtered);
  return true;
}
