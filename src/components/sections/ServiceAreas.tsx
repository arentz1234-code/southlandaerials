const serviceAreas = [
  "Birmingham, AL",
  "Montgomery, AL",
  "Mobile, AL",
  "Huntsville, AL",
  "Tuscaloosa, AL",
  "Pensacola, FL",
  "Atlanta Metro",
  "Southeast Region",
];

export function ServiceAreas() {
  return (
    <section className="section bg-secondary-900 text-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-white">Service Areas</h2>
          <p className="mt-4 text-lg text-secondary-300">
            We proudly serve commercial clients throughout Alabama and the
            greater Southeast region
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-secondary-700 bg-secondary-800/50 px-6 py-2 text-sm font-medium text-secondary-200"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-400">
            Don&apos;t see your area?{" "}
            <a
              href="/contact"
              className="font-medium text-primary-400 underline-offset-4 hover:underline"
            >
              Contact us
            </a>{" "}
            to check availability.
          </p>
        </div>
      </div>
    </section>
  );
}
