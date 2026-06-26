import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = await cookies();
  
  // Delete the bypass cookie
  cookieStore.delete('maintenance_bypass');
  
  // Redirect back to the homepage (which will now show the maintenance screen)
  return NextResponse.redirect(new URL('/', request.url));
}
