import Link from "next/link";

export function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-narrow text-center">
        <h2 className="text-white">Ready to Elevate Your Property?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
          Book a free consultation and see how professional aerial photography
          can transform your property listings.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/consultation"
            className="btn bg-white text-primary-600 hover:bg-primary-50"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/contact"
            className="btn border-2 border-white text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
