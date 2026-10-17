
import { useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import ParallaxImage from "../components/ParallaxImage";
import { story, vision, mission, values } from "../data/about";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Cubiqal - Future of Workspaces";
  }, []);

  return (
    <div className="w-full min-w-0 overflow-x-clip">

      {/* Banner */}
      <section className="relative isolate overflow-hidden bg-charcoal-deep pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/AboutHero.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="absolute left-4 top-24 h-10 w-10 rounded-tl-xl border-l-2 border-t-2 border-brand sm:left-8 sm:top-28 sm:h-14 sm:w-14 md:left-12" />
        <div className="absolute bottom-6 right-4 h-10 w-10 rounded-br-xl border-b-2 border-r-2 border-silver sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 md:right-12" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="text-center text-5xl font-light leading-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl"
            >
              About Us
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/85 sm:mt-7 sm:text-base md:text-lg"
          >
            Meet the people and the principles behind Cubiqal, the future of
            workspaces.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-10 sm:py-12 md:py-14">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-7 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Story Image */}
          <motion.div
            className="mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ParallaxImage
              src={story.image}
              alt="Cubiqal workspace interiors"
              className="aspect-[4/3] w-full overflow-hidden rounded-xl"
            />
          </motion.div>

          {/* Story Content */}
          <Reveal>
            <div className="mx-auto w-full min-w-0 max-w-2xl lg:mx-0">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">
                {story.eyebrow}
              </p>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-charcoal sm:text-3xl xl:text-4xl">
                {story.title}
              </h2>

              <div className="mt-3 space-y-2 text-xs leading-[1.65] text-charcoal/75 sm:mt-4 sm:space-y-3 sm:text-sm">
                {story.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {story.tagline && (
                <p className="mt-4 border-l-2 border-brand pl-3 text-xs font-semibold leading-relaxed text-brand sm:text-sm">
                  {story.tagline}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-5 px-5 sm:px-8 md:grid-cols-2 md:gap-8 lg:gap-10">
          {[vision, mission].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.15}>
              <div className="h-full min-w-0 rounded-xl bg-white p-5 sm:rounded-2xl sm:p-7 md:p-8 lg:p-10">
                <h3 className="mb-3 text-xl font-bold leading-tight text-charcoal sm:mb-4 sm:text-2xl md:text-3xl">
                  {b.title}
                </h3>

                <p className="text-sm leading-6 text-charcoal/75 sm:text-base sm:leading-7 lg:text-lg">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl min-w-0 px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-8 max-w-2xl sm:mb-10 md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:mb-4 sm:text-sm">
              What Drives Us
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              Our core values
            </h2>
          </Reveal>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.1}>
                <div className="group h-full min-w-0 rounded-xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/5 sm:rounded-2xl sm:p-6 md:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 transition-colors duration-300 group-hover:bg-brand sm:mb-5 sm:h-12 sm:w-12">
                    <v.icon
                      className="text-brand transition-colors duration-300 group-hover:text-white"
                      size={25}
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold leading-snug text-charcoal transition-colors group-hover:text-brand sm:text-xl">
                    {v.title}
                  </h3>

                  <p className="text-sm leading-6 text-charcoal/70 sm:text-base sm:leading-7">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & CEO */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl min-w-0 px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-8 sm:mb-10 md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm">
              Leadership
            </p>

            <h4 className="text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              The person behind Cubiqal
            </h4>
          </Reveal>

          <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
            {/* Founder Card */}
            <Reveal>
              <div className="mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-2xl border border-silver/30 bg-white shadow-sm lg:mx-0">
                <div className="aspect-[4/4] w-full overflow-hidden bg-neutral-100">
                  <img
                    src="/images/ceo.jpg"
                    alt="Ajay Kumar Jangid, Founder and CEO of Cubiqal"
                    className="block h-full w-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        "CEO image failed to load:",
                        e.currentTarget.src
                      );
                    }}
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Founder & CEO
                  </p>

                  <h3 className="text-xl font-bold text-charcoal sm:text-2xl">
                    Ajay Kumar Jangid
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-charcoal/65">
                    Building with purpose. Earning trust through action.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Founder Biography */}
            <Reveal>
              <div className="w-full min-w-0 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm">
                  About the Founder
                </p>

                <h4 className="text-2xl font-bold leading-tight tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
                  Building lasting value through craftsmanship and execution.
                </h4>

                <div className="mt-5 space-y-3 text-sm leading-7 text-charcoal/75 sm:mt-6 sm:space-y-4 sm:text-base sm:leading-8">
                  <div>
 

                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Ajay Kumar Jangid <span className="text-gray-500">| Founder, Cubiqal</span>
                </p>

                <p>
                  Passionate about building lasting things — businesses,
                  relationships, and spaces that create meaningful value.
                </p>

                <p>
                  With a focus on commercial interiors and workspace
                  design-and-build, the vision is to bring together skilled
                  craftsmanship, reliable execution, and structured processes
                  to deliver quality-driven interior solutions.
                </p>

                <p>
                  Through Cubiqal, the goal is to build a trusted execution
                  partner known for accountability, consistency, and long-term
                  partnerships. The ambition extends beyond individual
                  projects to creating a scalable organization that sets
                  higher standards in interior execution.
                </p>

              
              </div>
                </div>

                <p className="mt-5 border-l-[3px] border-brand py-1 pl-4 text-sm font-semibold leading-relaxed text-brand sm:mt-6 sm:text-base">
                  Building with purpose. Earning trust through action. Creating
                  lasting value.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
