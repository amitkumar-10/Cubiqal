
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent shadow-none py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Cubiqal - future of workspaces"
            className="w-auto h-10 md:h-16 transition-all duration-300"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative text-sm font-medium uppercase tracking-widest py-1 transition-colors duration-300
                after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-brand
                after:transition-all after:duration-300
                ${
                  scrolled
                    ? isActive
                      ? "text-charcoal after:w-full"
                      : "text-charcoal/80 after:w-0 hover:text-brand hover:after:w-full"
                    : isActive
                      ? "text-white after:w-full"
                      : "text-white/90 after:w-0 hover:text-white hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-silver/30 px-6 py-6 flex flex-col gap-5 shadow-md">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `uppercase tracking-widest text-sm font-medium ${
                  isActive ? "text-brand" : "text-charcoal"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand text-white text-center text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
