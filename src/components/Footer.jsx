import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-silver pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <img src="/Footerlogo.png" alt="Cubiqal" className="h-16 w-auto mb-5" />
          <p className="text-sm leading-relaxed">
            Seamless execution, on-time delivery, lasting quality.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-brand transition-colors">Projects</Link></li>
            <li><Link to="/expertise" className="hover:text-brand transition-colors">Expertise</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        
<div>
  <h4 className="text-white font-semibold mb-4">Contact</h4>

  <a
    href="https://www.google.com/maps/place/Cleekart+Interio+Pvt.+Ltd.+(+cubiqal%E2%84%A2+)/@13.0486185,77.6177584,780m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1781c6bb7ae3:0x27002b054ef7c033!8m2!3d13.0486133!4d77.6203333!16s%2Fg%2F11p1fqj7c0?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm hover:text-white/80 transition-colors"
  >
    WeWork Manyata Redwood Block D3, 9th Floor, Manyata Tech Park
  </a>

  <a
    href="mailto:team@cubiql.in"
    className="block text-sm mt-2 hover:text-white/80 transition-colors"
  >
    team@cubiql.in
  </a>

  <a
    href="tel:+919845019129"
    className="block text-sm hover:text-white/80 transition-colors"
  >
    +91 9845019129
  </a>
</div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Cubiqal. All rights reserved.
      </div>
    </footer>
  );
}