import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Pilot",
  description:
    "Join the Southland Aerials team as a drone pilot. We're looking for FAA Part 107 certified pilots.",
};

const benefits = [
  {
    title: "Flexible Schedule",
    description:
      "Work on your own schedule and accept projects that fit your availability.",
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Competitive Pay",
    description:
      "Earn competitive rates for each project you complete with transparent pricing.",
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
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Professional Growth",
    description:
      "Expand your portfolio and gain experience with diverse commercial projects.",
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
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    title: "Support & Resources",
    description:
      "Access to training materials, equipment recommendations, and ongoing support.",
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
];

const requirements = [
  "FAA Part 107 Remote Pilot Certificate",
  "Own professional-grade drone equipment",
  "Reliable transportation",
  "Strong attention to detail",
  "Excellent communication skills",
  "Liability insurance (or willingness to obtain)",
];

export default function PilotsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white">Join Our Pilot Network</h1>
            <p className="mt-6 text-lg text-secondary-300">
              Are you a skilled drone pilot looking for commercial work? Join
              our network of certified professionals serving clients across the
              Southeast.
            </p>
            <Link href="/pilotcontact" className="btn-primary mt-8">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Why Fly With Us?</h2>
            <p className="mt-4 text-secondary-600">
              Join a growing team of professional drone pilots
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-secondary-100 p-6 transition-shadow hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg">{benefit.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2>Requirements</h2>
              <p className="mt-4 text-secondary-600">
                We&apos;re looking for experienced drone pilots who meet the
                following criteria:
              </p>
              <ul className="mt-8 space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-secondary-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <h3 className="text-xl">Ready to Get Started?</h3>
              <p className="mt-4 text-secondary-600">
                Submit your application and we&apos;ll review your
                qualifications. If you&apos;re a good fit, we&apos;ll schedule
                an interview to discuss opportunities in your area.
              </p>
              <Link href="/pilotcontact" className="btn-primary mt-6 w-full">
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Application Process</h2>
            <p className="mt-4 text-secondary-600">
              Here&apos;s what to expect when you apply
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                1
              </div>
              <div>
                <h3 className="text-lg">Submit Application</h3>
                <p className="mt-2 text-secondary-600">
                  Fill out our pilot application form with your experience,
                  certifications, and equipment details.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                2
              </div>
              <div>
                <h3 className="text-lg">Review & Interview</h3>
                <p className="mt-2 text-secondary-600">
                  Our team will review your application and schedule a brief
                  interview if you meet our criteria.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                3
              </div>
              <div>
                <h3 className="text-lg">Onboarding</h3>
                <p className="mt-2 text-secondary-600">
                  Complete our onboarding process and start receiving project
                  opportunities in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
