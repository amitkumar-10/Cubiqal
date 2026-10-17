import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 140 : -140, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -140 : 140, opacity: 0 }),
};

export default function ProjectModal({ project, onClose }) {
  const [[index, direction], setPage] = useState([0, 0]);
  const total = project.images.length;

  const paginate = useCallback(
    (dir) => setPage(([i]) => [(i + dir + total) % total, dir]),
    [total]
  );

  // Keyboard controls + lock page scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, paginate]);

  const goTo = (i) => setPage([i, i > index ? 1 : -1]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-black/95 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 md:px-10 py-4 text-white">
        <div>
          <h3 className="text-xl md:text-3xl font-semibold">{project.title}</h3>
          <p className="text-silver text-sm mt-1">
            {[project.area, project.year].filter(Boolean).join("  •  ")}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors"
        >
          <X size={22} />
        </button>
      </div>

      {/* Image area */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-24 overflow-hidden">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous image"
          className="absolute left-3 md:left-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur hover:bg-brand text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            transition={{ duration: 0.45, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, { offset }) => {
              if (offset.x < -80) paginate(1);
              else if (offset.x > 80) paginate(-1);
            }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={project.images[index]}
              alt={`${project.title} - photo ${index + 1}`}
              draggable={false}
              onError={(e) => (e.currentTarget.style.opacity = 0.15)}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
            />
          </motion.div>
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Next image"
          className="absolute right-3 md:right-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur hover:bg-brand text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Bottom: counter, description, thumbnails */}
      <div className="px-5 md:px-10 py-4 text-white">
        <div className="flex items-center justify-between gap-6 mb-3">
          <p className="text-silver text-sm max-w-2xl hidden md:block">
            {project.description}
          </p>
          <p className="text-sm tracking-widest tabular-nums ml-auto">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center">
          {project.images.map((src, i) => (
            <button
              key={src}
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border-2 transition-all bg-charcoal ${
                i === index
                  ? "border-brand opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}