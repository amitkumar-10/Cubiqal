import { Link } from "react-router-dom";
import { PencilRuler, HardHat, Armchair, ClipboardCheck, Wrench, Lightbulb, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Lightbulb, title: "Workplace Strategy", text: "Understanding how your teams work so the space supports productivity and culture." },
  { icon: PencilRuler, title: "Design Solutions", text: "Creative layouts, 3D visuals and detailed drawings tailored to your brand." },
  { icon: HardHat, title: "Turnkey Fit-outs", text: "End-to-end execution under one roof, on time and within budget." },
  { icon: Armchair, title: "Furniture & Manufacturing", text: "Custom furniture and joinery built to your design and quality standards." },
  { icon: ClipboardCheck, title: "Project Management", text: "Clear timelines, transparent reporting and one point of contact." },
  { icon: Wrench, title: "Facility Management", text: "Ongoing maintenance and support so your space always performs." },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <Reveal className="max-w-3xl mb-16">
          <p className="text-brand uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Complete workspace solutions, from idea to handover.
          </h2>
          <p className="text-charcoal/70 mt-6 text-lg leading-relaxed">
            Cubiqal brings design, engineering and execution together so you
            get a workspace that looks great, works well and is delivered
            without the usual stress.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <div className="group h-full p-8 rounded-2xl border border-silver/30 bg-white hover:bg-charcoal hover:border-charcoal hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-brand/10 group-hover:bg-brand flex items-center justify-center mb-6 transition-colors">
                  <s.icon className="text-brand group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-charcoal/70 group-hover:text-silver leading-relaxed transition-colors">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-brand transition-colors"
          >
            Explore all expertise <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}