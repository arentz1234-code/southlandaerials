import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Commercial Plaza",
    category: "Retail",
    image: "/images/portfolio/commercial-plaza.jpg",
  },
  {
    title: "Industrial Complex",
    category: "Industrial",
    image: "/images/portfolio/industrial.jpg",
  },
  {
    title: "Shopping Center",
    category: "Retail",
    image: "/images/portfolio/shopping-center.jpg",
  },
  {
    title: "Office Building",
    category: "Commercial",
    image: "/images/portfolio/office.jpg",
  },
];

export function PortfolioPreview() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2>Recent Work</h2>
            <p className="mt-2 text-secondary-600">
              See examples of our aerial photography
            </p>
          </div>
          <Link href="/portfolio" className="btn-secondary">
            View Full Portfolio
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <Link
              key={item.title}
              href="/portfolio"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary-100"
            >
              {/* Placeholder for portfolio images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                <svg
                  className="h-12 w-12 text-primary-300"
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
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-primary-300">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
