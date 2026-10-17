import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({ src, alt, className = "aspect-[4/3]" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-deep shadow-xl ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        onError={(e) => (e.currentTarget.style.display = "none")}
        style={{ y, scale: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
