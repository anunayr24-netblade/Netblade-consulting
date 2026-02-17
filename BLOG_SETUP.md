# Blog System - Setup & Usage Guide

## Overview

A complete blog management system has been added to your Netblade Consulting website with the following features:

- **Real-time Blog Editor**: Create and edit blog posts directly from your browser
- **Admin Panel**: Secure, password-protected admin dashboard
- **Image Upload**: Upload featured images for blog posts
- **SEO-Friendly**: Support for keywords, metadata, and search functionality
- **File-Based Storage**: Posts stored as JSON files (no database needed)

## Accessing the Blog

### Public Blog Pages
- **Blog Listing**: Visit `/blog` to see all published blog posts
- **Individual Post**: Click on any post to view the full article

### Admin Panel
- **Admin Dashboard**: Go to `/admin/blog` to access the admin panel
- **Default Password**: `admin123` (change this immediately!)

## How to Use

### 1. Create a New Blog Post

1. Navigate to `/admin/blog`
2. Enter the default password (`admin123`)
3. Click **"+ New Blog Post"**
4. Fill in the form:
   - **Title**: Your blog post title
   - **Author**: Author name
   - **Publish Date**: When the post was published
   - **Keywords**: Tags for SEO (comma-separated)
   - **Featured Image**: Upload a cover image
   - **Content**: Write your blog post content
5. Click **"Create Post"**

### 2. Edit an Existing Post

1. Go to `/admin/blog` and log in
2. Find the post you want to edit
3. Click the **"Edit"** button
4. Make your changes
5. Click **"Update Post"**

### 3. Delete a Post

1. Go to `/admin/blog` and log in
2. Find the post you want to delete
3. Click the **"Delete"** button
4. Confirm the deletion

## Security - Important!

⚠️ **Change the Admin Password Immediately!**

1. Open the `.env.local` file in your project root
2. Change:
   ```
   ADMIN_PASSWORD=admin123
   ```
   to a strong password:
   ```
   ADMIN_PASSWORD=YourSecurePasswordHere
   ```

**In Production:**
- Use proper authentication (JWT tokens, OAuth, etc.)
- Never store passwords in plain text
- Implement HTTPS
- Add rate limiting to prevent brute force attacks

## File Structure

```
Your Project/
├── app/
│   ├── admin/
│   │   └── blog/
│   │       ├── page.tsx          # Admin dashboard
│   │       ├── new/
│   │       │   └── page.tsx       # Create new post
│   │       └── edit/[id]/
│   │           └── page.tsx       # Edit post
│   ├── api/blog/
│   │   └── route.ts              # Blog API endpoints
│   ├── api/admin/login/
│   │   └── route.ts              # Admin authentication
│   └── blog/
│       ├── page.tsx              # Blog listing page
│       └── [id]/
│           └── page.tsx          # Individual blog post
├── components/Blog/
│   ├── BlogEditor.tsx            # Editor form component
│   └── BlogCard.tsx              # Blog card display
├── lib/
│   ├── blogTypes.ts              # TypeScript types
│   ├── blogStorage.ts            # File storage logic
│   └── adminAuth.ts              # Authentication logic
├── data/
│   └── blogs.json                # Stored blog posts (auto-created)
└── .env.local                    # Environment variables
```

## API Endpoints

### GET /api/blog
- Fetch all blog posts
- Optional query: `?id=<blog-id>` to fetch a specific post

### POST /api/blog
- Create a new blog post
- Body: `{ title, content, author, publishDate, keywords, featuredImage }`

### PUT /api/blog?id=<blog-id>
- Update an existing blog post
- Body: Partial or full blog post data

### DELETE /api/blog?id=<blog-id>
- Delete a blog post

### POST /api/admin/login
- Authenticate admin user
- Body: `{ password }`

## Features

✅ Full CRUD Operations (Create, Read, Update, Delete)
✅ Real-time Editing
✅ Image Upload & Display
✅ Search Functionality
✅ Responsive Design
✅ Admin Authentication
✅ SEO Keywords & Metadata
✅ Automatic Timestamps

## Customization

### Change Blog Path
To change the blog URL from `/blog` to something else, rename the folder:
```
app/blog → app/your-path
app/admin/blog → app/admin/your-path
```

### Customize Blog Fields
To add more fields (e.g., category, reading time):

1. Update `lib/blogTypes.ts` with new fields
2. Update `lib/blogStorage.ts` if needed
3. Update `BlogEditor.tsx` component
4. Update API routes in `app/api/blog/route.ts`

### Improve Security
Replace the password-based auth with:
- NextAuth.js for OAuth integration
- JWT tokens with secure cookies
- Database-backed sessions

## Troubleshooting

**Q: Posts aren't saving**
- Check that the `/data` directory was created
- Verify file permissions allow writing

**Q: Images not displaying**
- Ensure the featured image is being uploaded
- Check browser console for errors

**Q: Admin login failing**
- Verify the password in `.env.local`
- Clear browser localStorage and try again

**Q: Blog page shows no posts**
- Make sure at least one post has been created
- Check that `/data/blogs.json` exists

## Next Steps

1. ✅ Change the admin password
2. ✅ Add navigation links to the blog (already done!)
3. ✅ Create your first blog post
4. ✅ Customize the blog design to match your branding
5. ✅ Consider adding categories/tags
6. ✅ Implement email notifications when posts are published
7. ✅ Add social sharing buttons
8. ✅ Implement comments (optional)

## Questions or Issues?

The blog system is fully functional and ready to use. If you need additional features or have questions, let me know!
