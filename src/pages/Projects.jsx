import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.title = "Projects | Cubiqal - Future of Workspaces";
  }, []);

  return (
    <>
      {/* Banner */}
     
      <section className="relative isolate w-full min-w-0 overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-28">
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/projectHero.jpg')",
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
              Projects
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 w-full max-w-2xl break-words text-center text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl"
          >
            Explore our portfolio of thoughtfully designed workspaces.
            Discover how we transform ideas into inspiring, functional
            environments built around the way people work.
          </motion.p>
        </div>
      </section>


      {/* Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.12}>
              <button
                onClick={() => setSelected(p)}
                className="group relative block w-full text-left overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-charcoal to-charcoal-deep shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/60"
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal/20 to-transparent group-hover:from-charcoal-deep/95 transition-colors" />

                {/* Photo count badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Images size={14} /> {p.images.length} photos
                </span>

                {/* Arrow */}
                <span className="absolute top-4 right-4 w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="text-silver text-sm mt-1 line-clamp-1">
                    {p.description}
                  </p>
                  <span className="block h-0.5 w-0 group-hover:w-16 bg-brand mt-4 transition-all duration-500" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />

      {/* Viewer */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            key={selected.id}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}