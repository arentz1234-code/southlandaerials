import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cirrus SR22 G6 Operating Cost Calculator",
  description:
    "Detailed spreadsheet specifically designed for Cirrus SR22 G6 owners to track and project operating costs. Download now for $14.99.",
};

export default function CirrusSR22Page() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-secondary-100 bg-secondary-50 py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-secondary-500">
            <Link href="/golfcoastpilotstore" className="hover:text-primary-500">
              Store
            </Link>
            <span>/</span>
            <Link
              href="/golfcoastpilotstore/spreadsheet"
              className="hover:text-primary-500"
            >
              Spreadsheets
            </Link>
            <span>/</span>
            <span className="text-secondary-700">Cirrus SR22 G6</span>
          </nav>
        </div>
      </section>

      {/* Product */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 p-8">
              <div className="flex h-full items-center justify-center">
                <svg
                  className="h-32 w-32 text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
                Spreadsheet
              </span>
              <h1 className="mt-2 text-3xl md:text-4xl">
                Cirrus SR22 G6 Operating Cost Calculator
              </h1>
              <p className="mt-4 text-lg text-secondary-600">
                Detailed spreadsheet specifically designed for Cirrus SR22 G6
                owners to accurately track and project all operating costs.
              </p>

              <div className="mt-8">
                <span className="text-4xl font-bold text-primary-500">
                  $14.99
                </span>
              </div>

              <button className="btn-primary mt-8 w-full text-lg sm:w-auto">
                Purchase Now
              </button>

              <div className="mt-12">
                <h2 className="text-xl">What&apos;s Included</h2>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      SR22 G6 specific cost calculations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      Hourly cost breakdown (fuel, oil, maintenance)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      Annual budget planning and projections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      Maintenance schedule and reserve tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      CAPS repack cost amortization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span className="text-secondary-700">
                      Compatible with Excel and Google Sheets
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section bg-secondary-50">
        <div className="container-narrow">
          <h2>Product Description</h2>
          <div className="mt-6 space-y-4 text-secondary-600">
            <p>
              Built specifically for Cirrus SR22 G6 owners, this comprehensive
              spreadsheet takes the guesswork out of calculating your true
              operating costs. From hourly fuel burn to annual maintenance
              reserves, every aspect of SR22 ownership is covered.
            </p>
            <p>
              The spreadsheet includes pre-populated data specific to the SR22
              G6, including typical fuel consumption rates, insurance estimates,
              and maintenance intervals. Simply adjust the values to match your
              specific situation and get accurate cost projections.
            </p>
            <p>
              Special attention is given to Cirrus-specific costs like CAPS
              repack amortization, Perspective+ avionics updates, and
              Continental engine overhaul reserves.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
