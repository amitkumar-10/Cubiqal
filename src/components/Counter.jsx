import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function Counter({ end, suffix = "", duration = 2.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}