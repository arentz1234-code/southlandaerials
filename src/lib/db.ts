import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const SUBMISSIONS_KEY = 'submissions';

export interface Submission {
  id: string;
  type: 'contact' | 'consultation' | 'pilot';
  data: Record<string, string>;
  createdAt: string;
  read: boolean;
}

export async function addSubmission(type: Submission['type'], data: Record<string, string>): Promise<Submission> {
  const submission: Submission = {
    id: crypto.randomUUID(),
    type,
    data,
    createdAt: new Date().toISOString(),
    read: false,
  };

  // Get existing submissions
  const submissions = await getSubmissions();

  // Add new submission at the beginning
  submissions.unshift(submission);

  // Save back to Redis
  await redis.set(SUBMISSIONS_KEY, JSON.stringify(submissions));

  return submission;
}

export async function getSubmissions(): Promise<Submission[]> {
  try {
    const data = await redis.get<string>(SUBMISSIONS_KEY);
    if (!data) return [];

    // Handle both string and already-parsed object
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data as unknown as Submission[];
  } catch {
    return [];
  }
}

export async function getSubmissionById(id: string): Promise<Submission | undefined> {
  const submissions = await getSubmissions();
  return submissions.find(s => s.id === id);
}

export async function markAsRead(id: string): Promise<boolean> {
  const submissions = await getSubmissions();
  const submission = submissions.find(s => s.id === id);

  if (submission) {
    submission.read = true;
    await redis.set(SUBMISSIONS_KEY, JSON.stringify(submissions));
    return true;
  }
  return false;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const submissions = await getSubmissions();
  const index = submissions.findIndex(s => s.id === id);

  if (index !== -1) {
    submissions.splice(index, 1);
    await redis.set(SUBMISSIONS_KEY, JSON.stringify(submissions));
    return true;
  }
  return false;
}

export async function getUnreadCount(): Promise<number> {
  const submissions = await getSubmissions();
  return submissions.filter(s => !s.read).length;
}
