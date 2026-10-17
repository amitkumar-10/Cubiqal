import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  { title: "Herbalife", location: "Bengaluru", category: "Corporate Office", image: "/images/project1.jpeg" },
  { title: "Virya Autonomous Technologies", location: "Bengaluru", category: "Office Fit Out", image: "/images/project2.jpg" },
  { title: "Appolo BGS", location: "Maysuru", category: "Office & Cafeteria", image: "/images/project3.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-brand uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Featured projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-brand text-white font-semibold px-7 py-3 rounded-full transition-colors"
          >
            All Projects <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Link to="/projects" className="group block relative overflow-hidden rounded-2xl aspect-[4/5] bg-charcoal">
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <span className="inline-block bg-brand text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {p.category}
                  </span>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="text-silver text-sm mt-1">{p.location}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}