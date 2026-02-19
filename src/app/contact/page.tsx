import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Southland Aerials for drone photography and aerial services inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1>Contact Us</h1>
            <p className="mt-6 text-lg text-secondary-600">
              Have a question or ready to start your project? We&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                >
                  <option value="">Select a topic</option>
                  <option value="photography">Aerial Photography</option>
                  <option value="3d-mapping">3D Mapping & Surveying</option>
                  <option value="inspection">Inspection Services</option>
                  <option value="pricing">Pricing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg">Email</h3>
              <p className="mt-2 text-secondary-600">
                info@southlandaerials.com
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg">Location</h3>
              <p className="mt-2 text-secondary-600">
                Alabama, USA
                <br />
                Serving the Southeast
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
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
              </div>
              <h3 className="mt-4 text-lg">Response Time</h3>
              <p className="mt-2 text-secondary-600">
                We typically respond
                <br />
                within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
