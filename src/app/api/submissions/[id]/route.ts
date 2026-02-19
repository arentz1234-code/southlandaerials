import { NextRequest, NextResponse } from 'next/server';
import { getSubmissionById, markAsRead, deleteSubmission } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

// GET - Get single submission
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const submission = await getSubmissionById(id);

    if (!submission) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Mark as read when viewed
    await markAsRead(id);

    return NextResponse.json(submission);
  } catch (error) {
    console.error('Get submission error:', error);
    return NextResponse.json({ error: 'Failed to get submission' }, { status: 500 });
  }
}

// PATCH - Mark as read
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const success = await markAsRead(id);

    if (!success) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mark as read error:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE - Delete submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const success = await deleteSubmission(id);

    if (!success) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete submission error:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
