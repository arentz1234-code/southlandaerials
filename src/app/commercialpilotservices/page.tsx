import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Pilot Services",
  description:
    "Professional commercial drone services for businesses. Contact us for enterprise aerial solutions.",
};

const services = [
  {
    title: "Real Estate Marketing",
    description:
      "Comprehensive aerial photography and video packages for commercial real estate listings and marketing.",
  },
  {
    title: "Construction Progress",
    description:
      "Regular aerial documentation of construction sites for progress reports, stakeholder updates, and records.",
  },
  {
    title: "Property Inspection",
    description:
      "Detailed aerial inspection services for roofs, solar panels, and large infrastructure.",
  },
  {
    title: "Mapping & Surveying",
    description:
      "High-precision 3D mapping, orthomosaic generation, and volumetric analysis for land and development.",
  },
  {
    title: "Event Coverage",
    description:
      "Aerial photography and videography for corporate events, groundbreakings, and grand openings.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored aerial solutions for unique business needs and enterprise-level requirements.",
  },
];

export default function CommercialPilotServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white">Commercial Pilot Services</h1>
            <p className="mt-6 text-lg text-secondary-300">
              Enterprise-grade aerial solutions for businesses across the
              Southeast. Partner with our certified professionals for your
              commercial drone needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Our Commercial Services</h2>
            <p className="mt-4 text-secondary-600">
              Professional aerial solutions tailored for business needs
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-secondary-100 p-6 transition-shadow hover:shadow-soft"
              >
                <h3 className="text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2>Request Commercial Services</h2>
              <p className="mt-4 text-secondary-600">
                Tell us about your business needs and we&apos;ll create a custom
                solution.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                >
                  <option value="">Select a service</option>
                  <option value="real-estate">Real Estate Marketing</option>
                  <option value="construction">Construction Progress</option>
                  <option value="inspection">Property Inspection</option>
                  <option value="mapping">Mapping & Surveying</option>
                  <option value="event">Event Coverage</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={5}
                  required
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  className="mt-2 block w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
