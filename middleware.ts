// middleware.ts

import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Initialize Clerk's middleware without using 'publicRoutes'
const middleware = clerkMiddleware();

// Export the middleware as default
export default middleware;

// Configure the matcher to exclude public routes
export const config = {
  matcher: [
    /*
     * Apply middleware to all routes except:
     * - API routes (starting with /api/)
     * - Static files (starting with /_next/static/)
     * - Favicon and robots.txt
     * - Public routes like /sign-in and /sign-up
     */
    '/((?!api|_next/static|favicon.ico|robots.txt|sign-in|sign-up).*)',
  ],
};
