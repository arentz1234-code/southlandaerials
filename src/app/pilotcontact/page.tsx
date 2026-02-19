import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilot Application",
  description:
    "Apply to join the Southland Aerials drone pilot network. FAA Part 107 certified pilots welcome.",
};

export default function PilotContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h1>Pilot Application</h1>
            <p className="mt-6 text-lg text-secondary-600">
              Ready to join our pilot network? Fill out the application below
              and we&apos;ll be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl">Personal Information</h2>
                <div className="mt-6 space-y-6">
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
                        className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
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
                        className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
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
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
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
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      City, State *
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
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xl">Certifications & Experience</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="part107"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Do you have an FAA Part 107 certificate? *
                    </label>
                    <select
                      id="part107"
                      name="part107"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="in-progress">In Progress</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Years of drone flying experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="commercialExp"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Do you have commercial drone experience? *
                    </label>
                    <select
                      id="commercialExp"
                      name="commercialExp"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No, but willing to learn</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h2 className="text-xl">Equipment</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="droneModel"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      What drone(s) do you own? *
                    </label>
                    <input
                      type="text"
                      id="droneModel"
                      name="droneModel"
                      required
                      placeholder="e.g., DJI Mavic 3 Pro, DJI Air 3"
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="insurance"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Do you have drone liability insurance? *
                    </label>
                    <select
                      id="insurance"
                      name="insurance"
                      required
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="willing">No, but willing to obtain</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-xl">Additional Information</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Portfolio Link (Optional)
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      placeholder="https://yourportfolio.com"
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Tell us about yourself
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      placeholder="Share your background, why you're interested in joining our team, and any relevant experience..."
                      className="mt-2 block w-full rounded-lg border border-secondary-300 px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
