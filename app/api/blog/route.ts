import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '@/lib/blogStorage';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const blog = getBlogById(id);
      if (!blog) {
        return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: blog });
    }

    const blogs = getAllBlogs();
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newBlog = createBlog({
      title: body.title,
      content: body.content,
      author: body.author,
      publishDate: body.publishDate || new Date().toISOString().split('T')[0],
      keywords: body.keywords || [],
      featuredImage: body.featuredImage || '',
    });

    return NextResponse.json({ success: true, message: 'Blog created', data: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create blog' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Blog ID required' }, { status: 400 });
    }

    const updated = updateBlog(id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog updated', data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Blog ID required' }, { status: 400 });
    }

    const success = deleteBlog(id);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete blog' }, { status: 500 });
  }
}
