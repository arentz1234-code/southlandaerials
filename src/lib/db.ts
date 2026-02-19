// Simple in-memory database for form submissions
// For production, upgrade to Upstash Redis or Vercel Postgres

export interface Submission {
  id: string;
  type: 'contact' | 'consultation' | 'pilot';
  data: Record<string, string>;
  createdAt: string;
  read: boolean;
}

// In-memory store (resets on server restart/redeploy)
// For persistence, connect to Upstash Redis: https://upstash.com
let submissions: Submission[] = [];

export function addSubmission(type: Submission['type'], data: Record<string, string>): Submission {
  const submission: Submission = {
    id: crypto.randomUUID(),
    type,
    data,
    createdAt: new Date().toISOString(),
    read: false,
  };
  submissions.unshift(submission); // Add to beginning (newest first)
  return submission;
}

export function getSubmissions(): Submission[] {
  return submissions;
}

export function getSubmissionById(id: string): Submission | undefined {
  return submissions.find(s => s.id === id);
}

export function markAsRead(id: string): boolean {
  const submission = submissions.find(s => s.id === id);
  if (submission) {
    submission.read = true;
    return true;
  }
  return false;
}

export function deleteSubmission(id: string): boolean {
  const index = submissions.findIndex(s => s.id === id);
  if (index !== -1) {
    submissions.splice(index, 1);
    return true;
  }
  return false;
}

export function getUnreadCount(): number {
  return submissions.filter(s => !s.read).length;
}
