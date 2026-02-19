import { NextRequest, NextResponse } from 'next/server';
import { addSubmission, getSubmissions, getUnreadCount } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

// POST - Create new submission (public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing type or data' },
        { status: 400 }
      );
    }

    const submission = await addSubmission(type, data);

    return NextResponse.json({
      success: true,
      message: 'Submission received',
      id: submission.id,
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

// GET - Get all submissions (requires auth)
export async function GET() {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const submissions = await getSubmissions();
    const unreadCount = await getUnreadCount();

    return NextResponse.json({
      submissions,
      unreadCount,
      total: submissions.length,
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    return NextResponse.json(
      { error: 'Failed to get submissions' },
      { status: 500 }
    );
  }
}
