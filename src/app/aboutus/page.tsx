import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Southland Aerials - professional drone photography and videography services since 2018. FAA Part 107 certified pilots.",
};

const timeline = [
  {
    year: "2018",
    title: "Founded",
    description:
      "Southland Aerials was established with a mission to provide professional aerial photography services to commercial real estate.",
  },
  {
    year: "2019",
    title: "Expanded Services",
    description:
      "Added 3D mapping and surveying capabilities to serve construction and development clients.",
  },
  {
    year: "2021",
    title: "Regional Growth",
    description:
      "Expanded service area to cover the entire Southeast region including Georgia, Florida, and Mississippi.",
  },
  {
    year: "2023",
    title: "500+ Projects",
    description:
      "Celebrated completing over 500 commercial aerial photography projects.",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality. Every image we deliver meets our professional standards.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Safety Certified",
    description:
      "All pilots are FAA Part 107 certified and follow strict safety protocols on every flight.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "We understand deadlines matter. Most projects are delivered within 48 hours.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Client Focused",
    description:
      "Your success is our priority. We work closely with you to ensure every project exceeds expectations.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1>About Southland Aerials</h1>
            <p className="mt-6 text-lg text-secondary-600">
              Since 2018, we&apos;ve been providing professional drone
              photography and videography services to commercial real estate
              clients across Alabama and the Southeast.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2>Our Story</h2>
              <p className="mt-6 text-secondary-600">
                Southland Aerials was founded with a simple mission: to provide
                commercial real estate professionals with stunning aerial
                imagery that helps them market and document their properties
                more effectively.
              </p>
              <p className="mt-4 text-secondary-600">
                Based in Alabama, we&apos;ve grown from a single-pilot operation
                to a team of FAA Part 107 certified professionals serving
                clients throughout the Southeast. Our commitment to quality,
                safety, and customer service has made us a trusted partner for
                commercial property owners, developers, and real estate
                professionals.
              </p>
              <p className="mt-4 text-secondary-600">
                With over 5 years of experience and 500+ completed projects, we
                bring the expertise and equipment needed to capture your
                property at its best.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-primary-300"
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Our Values</h2>
            <p className="mt-4 text-secondary-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Our Journey</h2>
            <p className="mt-4 text-secondary-600">
              Key milestones in our growth
            </p>
          </div>
          <div className="mt-12">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pb-12 pl-8 last:pb-0">
                {index < timeline.length - 1 && (
                  <div className="absolute bottom-0 left-3 top-6 w-0.5 bg-secondary-200" />
                )}
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-primary-500 bg-white" />
                <span className="text-sm font-semibold text-primary-500">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg">{item.title}</h3>
                <p className="mt-2 text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-500">
        <div className="container-narrow text-center">
          <h2 className="text-white">Ready to Work Together?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100">
            Let&apos;s discuss how we can help elevate your property marketing.
          </p>
          <Link
            href="/consultation"
            className="btn mt-8 bg-white text-primary-600 hover:bg-primary-50"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
