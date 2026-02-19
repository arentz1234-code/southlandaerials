import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spreadsheets - Golf Coast Pilot Store",
  description:
    "Aviation spreadsheets for pilots and aircraft owners. Operating cost calculators, business plans, and more.",
};

const products = [
  {
    id: "excel-business-plan-general-airplane-cost",
    title: "Excel Business Plan - General Airplane Cost",
    description:
      "Comprehensive spreadsheet for calculating general aviation airplane operating costs and creating a business plan.",
    price: "$7.99",
  },
  {
    id: "cirrus-sr22-g6-operating-cost",
    title: "Cirrus SR22 G6 Operating Cost Calculator",
    description:
      "Detailed spreadsheet specifically designed for Cirrus SR22 G6 owners to track and project operating costs.",
    price: "$14.99",
  },
];

export default function SpreadsheetCategoryPage() {
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
            <span className="text-secondary-700">Spreadsheets</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="bg-secondary-50 py-12">
        <div className="container-wide">
          <h1>Spreadsheets</h1>
          <p className="mt-4 text-lg text-secondary-600">
            Professional spreadsheets and calculators for pilots and aircraft
            owners
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/golfcoastpilotstore/p/${product.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-secondary-200 bg-white transition-shadow hover:shadow-soft"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-accent-100 p-8">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-16 w-16 text-primary-300 transition-transform group-hover:scale-110"
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
                  <h2 className="text-xl">{product.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-secondary-600">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-500">
                      {product.price}
                    </span>
                    <span className="text-sm font-medium text-primary-500 group-hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
