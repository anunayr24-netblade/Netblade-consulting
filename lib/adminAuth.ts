// Simple password-based authentication for admin panel
// In production, use proper authentication (JWT, OAuth, etc.)

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Change this!

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function setAdminSession(sessionToken: string): string {
  // In a real app, store this in a secure cookie or session
  return sessionToken;
}

// Generate a simple session token
export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
