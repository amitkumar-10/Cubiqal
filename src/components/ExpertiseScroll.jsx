import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Add or remove items freely. Images go in client/public/images/expertise/
const items = [
  { title: "Workplace Strategy", image: "/images/expertise1.jpg" },
  { title: "Design Solutions", image: "/images/expertise2.jpg" },
  { title: "Turnkey Fit-outs", image: "/images/expertise3.jpg" },
  { title: "Furniture & Manufacturing", image: "/images/expertise4.jpg" },
  { title: "Project Management", image: "/images/expertise5.jpg" },
  { title: "Facility Management", image: "/images/expertise6.jpg" },
];

const INTRO = 0.1; // share of scroll used by the title before the first card
const OUTRO = 0.1; // share of scroll held after the last card

function Card({ item, index, total, progress }) {
  const seg = (1 - INTRO - OUTRO) / total;
  const start = INTRO + index * seg;
  const end = start + seg;
  const nextEnd = Math.min(end + seg, 1);
  const tilt = index % 2 === 0 ? 2.5 : -2.5;

  // Entering: slides up from below, tilts flat, scales up
  const y = useTransform(progress, [start, end], ["115%", "0%"]);
  const rotateX = useTransform(progress, [start, end], [14, 0]);
  const rotateZ = useTransform(progress, [start, end], [tilt, 0]);
  const enterScale = useTransform(progress, [start, end], [0.92, 1]);
  const opacity = useTransform(progress, [start, start + seg * 0.25], [0, 1]);

  // Being covered by the next card: shrinks and dims
  const coverScale = useTransform(progress, [end, nextEnd], [1, 0.9]);
  const dim = useTransform(progress, [end, nextEnd], [0, 0.55]);

  return (
    <motion.div
      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-charcoal"
      style={{
        y,
        rotateX,
        rotateZ,
        opacity,
        scale: index === total - 1 ? enterScale : undefined,
        zIndex: index + 1,
      }}
    >
      {/* Inner wrapper so enter-scale and cover-scale don't fight */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: index === total - 1 ? 1 : coverScale }}
      >
        <img
          src={item.image}
          alt={item.title}
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-deep -z-10" />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-brand text-sm md:text-base tracking-[0.4em] font-semibold mb-3">
            0{index + 1}
          </span>
          <h3 className="text-white text-3xl md:text-5xl font-light tracking-wide">
            {item.title}
          </h3>
        </div>

        {/* Dim overlay when covered */}
        <motion.div
          className="absolute inset-0 bg-charcoal-deep pointer-events-none"
          style={{ opacity: dim }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ExpertiseScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  // Title slides up and fades once the first card arrives
  const titleY = useTransform(progress, [0.02, INTRO + 0.04], ["0%", "-140%"]);
  const titleOpacity = useTransform(progress, [0.02, INTRO + 0.02], [1, 0]);

  // Big grey text drifts sideways behind everything
  const marqueeX = useTransform(progress, [0, 1], ["8%", "-65%"]);

  // "Know more" link appears at the end
  const ctaOpacity = useTransform(progress, [1 - OUTRO, 1], [0, 1]);
  const ctaY = useTransform(progress, [1 - OUTRO, 1], [20, 0]);

  const marqueeText = items.map((i) => i.title).join("   •   ");

  return (
    <section
      ref={ref}
      className="relative bg-white"
      style={{ height: `${(items.length + 2) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Big grey sliding text */}
        <motion.div
          style={{ x: marqueeX }}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap select-none pointer-events-none text-[14vw] md:text-[9vw] font-light tracking-[0.08em] text-silver/50"
        >
          {marqueeText}
        </motion.div>

        {/* Title */}
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute top-28 md:top-32 left-0 right-0 text-center text-5xl md:text-8xl font-light text-charcoal z-20"
        >
          Expertise
        </motion.h2>

        {/* Card stack */}
        <div
          className="relative w-[90vw] max-w-5xl h-[52vh] md:h-[62vh] mt-10"
          style={{ perspective: 1200 }}
        >
          {items.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              index={i}
              total={items.length}
              progress={progress}
            />
          ))}
        </div>

        {/* End link */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-30"
        >
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Know more <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}