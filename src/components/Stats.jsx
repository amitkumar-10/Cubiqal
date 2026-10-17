import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { value: 84, suffix: "+", label: "Projects Delivered" },
  { value: 90000, suffix: "+", label: "Sq. Ft. Executed" },
  { value: 23, suffix: "+", label: "Team Members" },
  { value: 9, suffix: "+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.12}
            className="text-center"
          >
            <div className="text-4xl font-semibold tracking-tight text-brand md:text-5xl lg:text-6xl">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-white/70 md:text-sm">
              {stat.label}
            </p>

            <div className="mx-auto mt-5 h-px w-12 bg-brand/70" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}