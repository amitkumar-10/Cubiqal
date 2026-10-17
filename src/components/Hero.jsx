import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SLIDES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero4.jpg",
];
const VIDEO = ""; // e.g. "/videos/hero.mp4" (leave empty to use the image slideshow)
const INTERVAL = 6000;

const line = {
  hidden: { y: "110%" },
  show: (delay) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero({ ready = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (VIDEO) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  const state = ready ? "show" : "hidden";

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-charcoal-deep">
      {/* Background: video or slideshow */}
      {VIDEO ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      ) : (
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[index]})` }}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 7, ease: "linear" },
            }}
          />
        </AnimatePresence>
      )}

      {/* Overlays: keep navbar and text readable */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 sm:pb-16 md:pb-20">
        <h5 className="text-white font-bold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <div className="overflow-hidden pb-1 sm:pb-2">
            <motion.div
              custom={0.1}
              variants={line}
              initial="hidden"
              animate={state}
            >
              We Build
            </motion.div>
          </div>

          <div className="overflow-hidden pb-1 sm:pb-2">
            <motion.div
              custom={0.25}
              variants={line}
              initial="hidden"
              animate={state}
            >
              Tomorrow&apos;s <span className="text-brand">Workspaces.</span>
            </motion.div>
          </div>
        </h5>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 sm:mt-10 flex items-end justify-between gap-4"
        >
          {/* Explore button */}
          <a
            href="#intro"
            className="group flex items-center gap-3 sm:gap-4 text-white"
          >
            <span className="w-11 h-11 sm:w-16 sm:h-16 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
              <ArrowDown
                size={18}
                className="sm:hidden group-hover:translate-y-1 transition-transform duration-300"
              />
              <ArrowDown
                size={22}
                className="hidden sm:block group-hover:translate-y-1 transition-transform duration-300"
              />
            </span>

            <span className="uppercase tracking-[0.18em] sm:tracking-[0.25em] text-xs sm:text-sm font-medium">
              Explore how
            </span>
          </a>

          {/* Slide indicator */}
          {!VIDEO && (
            <div className="hidden sm:flex flex-col items-end gap-3">
              <p className="text-white/80 text-sm tracking-widest tabular-nums">
                0{index + 1} / 0{SLIDES.length}
              </p>
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === index ? "w-12 bg-brand" : "w-6 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}