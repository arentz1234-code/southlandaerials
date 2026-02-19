import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golf Coast Pilot Store",
  description:
    "Aviation spreadsheets and tools for pilots and aircraft owners. Calculate operating costs, plan your budget, and more.",
};

const products = [
  {
    id: "excel-business-plan-general-airplane-cost",
    title: "Excel Business Plan - General Airplane Cost",
    description:
      "Comprehensive spreadsheet for calculating general aviation airplane operating costs and creating a business plan.",
    price: "$7.99",
    category: "Spreadsheet",
    features: [
      "Operating cost calculations",
      "Maintenance tracking",
      "Fuel cost projections",
      "Business plan template",
    ],
  },
  {
    id: "cirrus-sr22-g6-operating-cost",
    title: "Cirrus SR22 G6 Operating Cost Calculator",
    description:
      "Detailed spreadsheet specifically designed for Cirrus SR22 G6 owners to track and project operating costs.",
    price: "$14.99",
    category: "Spreadsheet",
    features: [
      "SR22 G6 specific calculations",
      "Hourly cost breakdown",
      "Annual budget planning",
      "Maintenance schedule tracking",
    ],
  },
];

export default function GolfCoastPilotStorePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-900 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Golf Coast Pilot
            </span>
            <h1 className="mt-4 text-white">Aviation Tools & Resources</h1>
            <p className="mt-6 text-lg text-secondary-300">
              Professional spreadsheets and calculators designed for pilots and
              aircraft owners.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-xl border border-secondary-200 bg-white"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-accent-100 p-8">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-20 w-20 text-primary-300"
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

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-xl">{product.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-secondary-600">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-secondary-600"
                      >
                        <svg
                          className="h-4 w-4 text-primary-500"
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-500">
                      {product.price}
                    </span>
                    <Link
                      href={`/golfcoastpilotstore/p/${product.id}`}
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="section bg-secondary-50">
        <div className="container-narrow text-center">
          <h2>Browse by Category</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/golfcoastpilotstore/spreadsheet"
              className="rounded-full border border-secondary-200 bg-white px-6 py-2 text-sm font-medium text-secondary-700 transition-colors hover:border-primary-500 hover:text-primary-500"
            >
              Spreadsheets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
