import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment & Pricing",
  description:
    "View our pricing packages for aerial photography, 3D mapping, and drone services for commercial real estate.",
};

const photographyPackages = [
  {
    name: "Single Parcel Package",
    price: "$200",
    description: "Perfect for individual properties",
    features: [
      "12-15 high-resolution images",
      "Multiple angles and elevations",
      "Professional editing included",
      "48-hour delivery",
      "Web and print ready formats",
    ],
  },
  {
    name: "Shopping Center Package",
    price: "$250",
    description: "Ideal for retail properties",
    features: [
      "15-20 high-resolution images",
      "Complete property coverage",
      "Parking lot aerial views",
      "Professional editing included",
      "48-hour delivery",
    ],
    featured: true,
  },
  {
    name: "Drone Image Markup",
    price: "$50/image",
    description: "Enhanced images with annotations",
    features: [
      "Property boundary markup",
      "Measurement overlays",
      "Custom annotations",
      "Text and labels",
      "Multiple revision rounds",
    ],
  },
];

const advancedServices = [
  {
    name: "3D Mapping & Surveying",
    price: "Starting at $495",
    description:
      "Create detailed 3D models and orthomosaic maps of your property for surveying, planning, and documentation.",
    features: [
      "High-accuracy 3D models",
      "Orthomosaic mapping",
      "Volume calculations",
      "Topographic analysis",
      "CAD-compatible exports",
    ],
  },
  {
    name: "Construction Site Inspection",
    price: "Starting at $495",
    description:
      "Document construction progress with regular aerial photography and mapping for project management.",
    features: [
      "Progress documentation",
      "Before/after comparisons",
      "Site planning support",
      "Safety inspections",
      "Stakeholder reports",
    ],
  },
  {
    name: "Solar Inspection",
    price: "Call for Pricing",
    description:
      "Thermal imaging and visual inspection for solar arrays to identify defects and optimize performance.",
    features: [
      "Thermal imaging analysis",
      "Hotspot detection",
      "Panel defect identification",
      "Performance reports",
      "Maintenance recommendations",
    ],
  },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1>Investment & Pricing</h1>
            <p className="mt-6 text-lg text-secondary-600">
              Transparent pricing for professional aerial photography and drone
              services. All packages include professional editing and fast
              turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Photography Packages */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Aerial Photography</h2>
            <p className="mt-4 text-secondary-600">
              Professional drone photography packages for commercial properties
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {photographyPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                  pkg.featured
                    ? "border-primary-500 shadow-lg"
                    : "border-secondary-200"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl">{pkg.name}</h3>
                <p className="mt-2 text-sm text-secondary-600">
                  {pkg.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary-500">
                    {pkg.price}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
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
                      <span className="text-sm text-secondary-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/consultation"
                  className={`mt-8 text-center ${
                    pkg.featured ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2>3D Modeling Services</h2>
            <p className="mt-4 text-secondary-600">
              Advanced aerial solutions for construction, surveying, and
              inspection
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {advancedServices.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-2xl border border-secondary-200 bg-white p-8"
              >
                <h3 className="text-xl">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm text-secondary-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-primary-500">
                    {service.price}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
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
                      <span className="text-sm text-secondary-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/consultation" className="btn-secondary mt-8">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section">
        <div className="container-narrow">
          <div className="rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl text-primary-900">
              Custom Projects Welcome
            </h3>
            <p className="mt-3 text-primary-700">
              Have a unique project or need a custom quote? We&apos;re happy to
              work with you to create a package that fits your specific needs
              and budget. Our team takes full responsibility for delivering
              quality results on every project.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
