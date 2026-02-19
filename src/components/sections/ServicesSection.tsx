import Link from "next/link";

const services = [
  {
    title: "Aerial Photography",
    description:
      "Professional drone photography for commercial real estate, showcasing your property from stunning angles.",
    price: "Starting at $200",
    features: [
      "12-15 high-resolution images",
      "Professional editing included",
      "48-hour turnaround",
      "Multiple angles & perspectives",
    ],
    href: "/investment",
  },
  {
    title: "3D Mapping & Surveying",
    description:
      "Precise 3D models and orthomosaic maps for construction sites, land surveys, and property analysis.",
    price: "Starting at $495",
    features: [
      "High-accuracy 3D models",
      "Orthomosaic mapping",
      "Volume calculations",
      "Progress documentation",
    ],
    href: "/investment",
    featured: true,
  },
  {
    title: "Solar Inspection",
    description:
      "Thermal imaging and visual inspection services for solar panel arrays to identify issues and optimize performance.",
    price: "Call for pricing",
    features: [
      "Thermal imaging",
      "Defect detection",
      "Performance analysis",
      "Detailed reports",
    ],
    href: "/contact",
  },
];

export function ServicesSection() {
  return (
    <section className="section bg-secondary-50">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Our Services</h2>
          <p className="mt-4 text-lg text-secondary-600">
            Professional aerial solutions for every commercial need
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-card ${
                service.featured
                  ? "ring-2 ring-primary-500 lg:-mt-4 lg:mb-4"
                  : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-3 flex-1 text-secondary-600">
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
                    <span className="text-sm text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className={`mt-8 text-center ${
                  service.featured ? "btn-primary" : "btn-secondary"
                }`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
