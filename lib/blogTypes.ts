export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  keywords: string[];
  featuredImage: string; // base64 or URL
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  success: boolean;
  message?: string;
  data?: BlogPost | BlogPost[];
  error?: string;
}
