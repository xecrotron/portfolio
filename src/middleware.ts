import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Admin functionality has been removed, so middleware is no longer needed.
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
