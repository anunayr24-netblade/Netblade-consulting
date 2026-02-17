import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, message: 'Password required' },
        { status: 400 }
      );
    }

    if (verifyAdminPassword(password)) {
      return NextResponse.json({ success: true, message: 'Login successful' });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    );
  }
}
