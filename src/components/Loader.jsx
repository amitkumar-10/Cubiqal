import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= 100 ? 100 : c + 1));
    }, 22);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const t = setTimeout(onDone, 450);
      return () => clearTimeout(t);
    }
  }, [count, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <img src="/logo.png" alt="Cubiqal" className="h-20 md:h-28 w-auto mb-10" />

      <div className="w-56 md:w-72 h-0.5 bg-white/15 overflow-hidden">
        <div
          className="h-full bg-brand transition-all duration-100"
          style={{ width: `${count}%` }}
        />
      </div>

      <p className="text-brand text-5xl md:text-7xl font-bold mt-6 tabular-nums">
        {count}%
      </p>
    </motion.div>
  );
}