
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { expertise } from "../data/expertise";

/* Parallax image with responsive sizing */
function ParallaxImage({ src, alt }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div
      ref={ref}
      className="relative w-full min-w-0 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 block h-full w-full max-w-full object-cover"
      />
    </div>
  );
}

/* Individual service section */
function ServiceBlock({ item, index }) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={item.id}
      data-section
      className="scroll-mt-40 w-full min-w-0 overflow-x-clip border-b border-silver/20 py-14 sm:py-16 md:py-24 last:border-0"
    >
      <div
        className={`mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className="w-full min-w-0"
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ParallaxImage src={item.image} alt={item.title} />
        </motion.div>

        {/* Text */}
        <div className="relative min-w-0 max-w-full">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 -top-8 select-none text-7xl font-bold leading-none text-brand/10 sm:-top-10 sm:text-8xl lg:text-[9rem]"
          >
            {number}
          </span>

          <Reveal className="relative min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand sm:tracking-[0.3em]">
              {number}
            </p>

            <h2 className="break-words text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {item.title}
            </h2>

            <p className="mt-5 break-words text-base leading-relaxed text-charcoal/70 sm:mt-6 sm:text-lg">
              {item.text}
            </p>
          </Reveal>

          {/* Service features */}
          <ul className="mt-6 grid min-w-0 grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
            {item.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.08,
                }}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-silver/30 px-3 py-3 transition-colors hover:border-brand hover:bg-brand/5 sm:px-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Check size={16} className="text-brand" />
                </span>

                <span className="min-w-0 break-words text-sm font-medium sm:text-base">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Expertise() {
  const [active, setActive] = useState(expertise[0]?.id ?? "");

  /* Page title */
  useEffect(() => {
    document.title = "Expertise | Cubiqal - Future of Workspaces";
  }, []);

  /* Active service navigation */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* Smooth navigation */
  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="w-full min-w-0 max-w-full overflow-x-clip">
      {/* Hero banner */}
      <section className="relative isolate w-full min-w-0 overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-28">
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/ExpertiesHero.jpg')",
          }}
        />

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-charcoal-deep/55"
        />

        {/* Decorative corners */}
        <div className="pointer-events-none absolute left-4 top-28 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-brand sm:left-6 sm:top-32 sm:h-14 sm:w-14 md:left-12" />

        <div className="pointer-events-none absolute bottom-6 right-4 h-10 w-10 rounded-br-xl border-b-4 border-r-4 border-silver sm:bottom-8 sm:right-6 sm:h-14 sm:w-14 md:right-12" />

        {/* Hero content */}
        <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-brand sm:text-sm sm:tracking-[0.3em]"
          >
           
          </motion.p>

        <div className="max-w-full overflow-hidden text-center">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="break-words text-5xl font-light leading-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Expertise
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 w-full max-w-2xl break-words text-center text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl"
        >
          A multi-skilled team that takes your workspace from first idea to
          everyday operation. Explore each service to see how we bring your
          vision to life.
        </motion.p>
        </div>

      </section>

      {/* Sticky service navigation */}
      <nav className="sticky top-16 z-40 w-full min-w-0 border-b border-silver/20 bg-white/95 backdrop-blur md:top-20">
        <div className="mx-auto flex w-full min-w-0 max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {expertise.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => jumpTo(item.id)}
              aria-current={active === item.id ? "location" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-wide transition-colors sm:px-4 sm:text-xs md:text-sm ${
                active === item.id
                  ? "bg-brand text-white"
                  : "text-charcoal/70 hover:bg-brand/10 hover:text-brand"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Service sections */}
      <div className="w-full min-w-0 bg-white">
        {expertise.map((item, index) => (
          <ServiceBlock
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="w-full min-w-0 overflow-x-clip">
        <CTA />
      </div>
    </main>
  );
}
