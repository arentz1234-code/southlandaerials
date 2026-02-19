import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free consultation to discuss your aerial photography and drone service needs.",
};

export default function ConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white">Book Your Free Consultation</h1>
            <p className="mt-6 text-lg text-primary-100">
              Let&apos;s discuss your project and create a custom solution for
              your aerial photography needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl">Tell Us About Your Project</h2>
              <p className="mt-2 text-secondary-600">
                Fill out the form below and we&apos;ll get back to you within
                24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>

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
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  >
                    <option value="">Select property type</option>
                    <option value="retail">Retail / Shopping Center</option>
                    <option value="industrial">Industrial / Warehouse</option>
                    <option value="office">Office Building</option>
                    <option value="land">Land / Development</option>
                    <option value="construction">Construction Site</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="photography">Aerial Photography</option>
                    <option value="3d-mapping">3D Mapping & Surveying</option>
                    <option value="inspection">Solar Inspection</option>
                    <option value="construction">
                      Construction Documentation
                    </option>
                    <option value="not-sure">Not Sure - Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Property Location (City, State) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="Birmingham, AL"
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Tell us more about your project, timeline, and any specific requirements..."
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request Consultation
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="lg:pl-12">
              <div className="sticky top-24">
                <h2 className="text-2xl">What to Expect</h2>
                <p className="mt-2 text-secondary-600">
                  Our consultation process is designed to understand your needs
                  and provide the best solution.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                      <span className="font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">
                        Initial Discussion
                      </h3>
                      <p className="mt-1 text-sm text-secondary-600">
                        We&apos;ll discuss your project requirements, property
                        details, and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                      <span className="font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">
                        Custom Proposal
                      </h3>
                      <p className="mt-1 text-sm text-secondary-600">
                        Receive a tailored proposal with pricing, timeline, and
                        deliverables.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                      <span className="font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">
                        Schedule Your Shoot
                      </h3>
                      <p className="mt-1 text-sm text-secondary-600">
                        Once approved, we&apos;ll schedule the flight at your
                        convenience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-xl bg-secondary-50 p-6">
                  <h3 className="font-semibold text-secondary-900">
                    Why Choose Us?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-2 text-sm text-secondary-600">
                      <svg
                        className="h-5 w-5 text-primary-500"
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
                      FAA Part 107 Certified
                    </li>
                    <li className="flex items-center gap-2 text-sm text-secondary-600">
                      <svg
                        className="h-5 w-5 text-primary-500"
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
                      5+ Years Experience
                    </li>
                    <li className="flex items-center gap-2 text-sm text-secondary-600">
                      <svg
                        className="h-5 w-5 text-primary-500"
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
                      48-Hour Turnaround
                    </li>
                    <li className="flex items-center gap-2 text-sm text-secondary-600">
                      <svg
                        className="h-5 w-5 text-primary-500"
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
                      Southeast Coverage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
