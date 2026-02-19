import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golf Coast Pilot Blog",
  description:
    "Aviation content, tips, and videos from Golf Coast Pilot. Learn about flying, aircraft ownership, and more.",
};

const featuredVideos = [
  {
    title: "Pre-Flight Checklist Walkthrough",
    description:
      "A complete guide to conducting a thorough pre-flight inspection.",
    category: "Training",
  },
  {
    title: "Understanding Weather Patterns",
    description: "How to read weather reports and make safe flying decisions.",
    category: "Safety",
  },
  {
    title: "Aircraft Ownership Costs Explained",
    description:
      "Breaking down the true costs of owning and operating an aircraft.",
    category: "Ownership",
  },
];

const blogPosts = [
  {
    title: "Getting Your Private Pilot License",
    excerpt:
      "Everything you need to know about starting your journey to becoming a pilot.",
    category: "Training",
    date: "January 15, 2024",
  },
  {
    title: "Best Aviation Apps for Pilots",
    excerpt:
      "Our top picks for flight planning, weather, and navigation apps.",
    category: "Technology",
    date: "January 8, 2024",
  },
  {
    title: "Tips for Your First Cross-Country Flight",
    excerpt:
      "Preparation and planning advice for pilots taking on longer flights.",
    category: "Training",
    date: "December 28, 2023",
  },
];

export default function GolfCoastPilotBlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-900 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Golf Coast Pilot
            </span>
            <h1 className="mt-4 text-white">Aviation Blog & Videos</h1>
            <p className="mt-6 text-lg text-secondary-300">
              Aviation content, flying tips, and insights for pilots and
              aviation enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <h2>Featured Videos</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredVideos.map((video) => (
              <div
                key={video.title}
                className="group overflow-hidden rounded-xl border border-secondary-100"
              >
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-secondary-800 to-secondary-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:scale-110">
                      <svg
                        className="h-6 w-6 pl-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                    {video.category}
                  </span>
                  <h3 className="mt-2 text-lg">{video.title}</h3>
                  <p className="mt-1 text-sm text-secondary-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <h2>Recent Articles</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-xl border border-secondary-200 bg-white transition-shadow hover:shadow-soft"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-accent-100" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-secondary-500">
                    <span className="font-semibold uppercase tracking-wider text-primary-500">
                      {post.category}
                    </span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg">{post.title}</h3>
                  <p className="mt-2 text-sm text-secondary-600">
                    {post.excerpt}
                  </p>
                  <button className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600">
                    Read More &rarr;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container-narrow">
          <div className="rounded-2xl bg-primary-500 p-8 text-center md:p-12">
            <h2 className="text-white">Subscribe to Our Newsletter</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              Get the latest aviation tips, videos, and content delivered to
              your inbox.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-0 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="btn bg-white text-primary-600 hover:bg-primary-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Store Link */}
      <section className="section bg-secondary-50">
        <div className="container-narrow text-center">
          <h2>Aviation Resources</h2>
          <p className="mt-4 text-secondary-600">
            Check out our spreadsheets and tools designed for pilots and
            aircraft owners.
          </p>
          <Link href="/golfcoastpilotstore" className="btn-primary mt-8">
            Visit Store
          </Link>
        </div>
      </section>
    </>
  );
}
