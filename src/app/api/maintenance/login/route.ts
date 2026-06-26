import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const maintenancePassword = process.env.MAINTENANCE_PASSWORD;

    if (!maintenancePassword) {
      return NextResponse.json(
        { success: false, error: 'Maintenance password not configured on server' },
        { status: 500 }
      );
    }

    if (password === maintenancePassword) {
      // Set the cookie
      const cookieStore = await cookies();
      cookieStore.set('maintenance_bypass', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Incorrect password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Bad request' },
      { status: 400 }
    );
  }
}
