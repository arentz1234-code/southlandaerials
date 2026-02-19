import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-wide section">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance">
            Professional Drone Photography for{" "}
            <span className="text-primary-500">Commercial Real Estate</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-600 md:text-xl">
            Elevate your property listings with stunning aerial photography and
            videography. FAA Part 107 certified pilots serving Alabama and the
            Southeast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/consultation" className="btn-primary text-lg">
              Get Drone Photos Now
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 md:text-5xl">
              5+
            </div>
            <div className="mt-2 text-secondary-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 md:text-5xl">
              500+
            </div>
            <div className="mt-2 text-secondary-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 md:text-5xl">
              100%
            </div>
            <div className="mt-2 text-secondary-600">FAA Certified</div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-100/50 blur-3xl" />
    </section>
  );
}
