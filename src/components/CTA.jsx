
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <Reveal>
        <div
          className="relative max-w-6xl mx-auto rounded-3xl
          px-8 py-20 md:py-28 text-center overflow-hidden
          bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta.jpg')" }}
        >
          {/* Dark overlay for readable text */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Decorative corners */}
          <div className="absolute top-6 left-6 w-14 h-14
            border-t-4 border-l-4 border-brand rounded-tl-2xl" />

          <div className="absolute bottom-6 right-6 w-14 h-14
            border-b-4 border-r-4 border-silver rounded-br-2xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-5xl
              font-bold leading-tight max-w-3xl mx-auto">
              Ready to build the future of{" "}
              <span className="text-brand">
                your workspace?
              </span>
            </h2>

            <p className="text-white/85 text-lg mt-6
              max-w-2xl mx-auto">
              Tell us about your project and our team will
              get back to you within one working day.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-10 bg-brand
              hover:bg-brand-dark text-white font-semibold
              px-10 py-4 rounded-full transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
