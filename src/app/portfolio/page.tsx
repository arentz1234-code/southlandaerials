import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of professional aerial photography and drone videography projects for commercial real estate.",
};

const categories = ["All", "Retail", "Industrial", "Commercial", "Land"];

const portfolioItems = [
  {
    id: 1,
    title: "Birmingham Shopping Plaza",
    category: "Retail",
    description: "Comprehensive aerial coverage of 150,000 sq ft retail center",
  },
  {
    id: 2,
    title: "Montgomery Industrial Park",
    category: "Industrial",
    description: "Drone mapping and photography for industrial complex",
  },
  {
    id: 3,
    title: "Mobile Office Tower",
    category: "Commercial",
    description: "High-rise commercial property aerial photography",
  },
  {
    id: 4,
    title: "Huntsville Tech Campus",
    category: "Commercial",
    description: "Multi-building tech campus documentation",
  },
  {
    id: 5,
    title: "Tuscaloosa Retail Center",
    category: "Retail",
    description: "Strip mall and parking lot aerial views",
  },
  {
    id: 6,
    title: "Gulf Shores Development",
    category: "Land",
    description: "Coastal land survey and mapping project",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1>Our Portfolio</h1>
            <p className="mt-6 text-lg text-secondary-600">
              Browse our collection of aerial photography projects showcasing
              commercial properties across the Southeast.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary-500 text-white"
                    : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-secondary-100 bg-white transition-shadow hover:shadow-soft"
              >
                {/* Placeholder Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="h-16 w-16 text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-secondary-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-500">
        <div className="container-narrow text-center">
          <h2 className="text-white">Ready to Start Your Project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100">
            Get professional aerial photography for your commercial property.
          </p>
          <Link
            href="/consultation"
            className="btn mt-8 bg-white text-primary-600 hover:bg-primary-50"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
