
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { company } from "../data/company";
import { expertise } from "../data/expertise";

const initial = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-silver/50 bg-white px-4 py-3 text-sm md:text-base text-charcoal placeholder:text-silver focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition";

function buildWhatsAppUrl(f) {
  const lines = [
    "*New enquiry from Cubiqal website*",
    "",
    `*Name:* ${f.name.trim()}`,
    `*Phone:* ${f.phone.trim()}`,
    f.email.trim() && `*Email:* ${f.email.trim()}`,
    f.service && `*Service:* ${f.service}`,
    "",
    "*Message:*",
    f.message.trim(),
  ].filter((line) => line !== "" && line !== false && line !== undefined);

  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sentUrl, setSentUrl] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Cubiqal - Future of Workspaces";
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const err = {};

    if (!form.name.trim()) {
      err.name = "Please enter your name";
    }

    if (!form.phone.trim()) {
      err.phone = "Please enter your phone number";
    } else if (!/^[0-9+\-()\s]{7,20}$/.test(form.phone.trim())) {
      err.phone = "Please enter a valid phone number";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      err.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      err.message = "Please tell us about your project";
    }

    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const url = buildWhatsAppUrl(form);

    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
    setForm(initial);
    setErrors({});
  };

  const info = [
    { icon: MapPin, label: "Visit Us", value: company.address },
    {
      icon: Phone,
      label: "Call Us",
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    { icon: Clock, label: "Working Hours", value: company.hours },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-charcoal-deep pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ContactHero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="absolute top-24 left-6 md:left-12 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-brand rounded-tl-xl" />
        <div className="absolute bottom-6 right-6 md:right-12 w-10 h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-silver rounded-br-xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand"
          >
            
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="text-4xl text-center sm:text-5xl md:text-7xl lg:text-8xl font-light text-white"
            >
              Contact Us
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 mx-auto max-w-xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-white/85"
          >
            Planning a new workspace? Tell us about your project and chat with
            us directly on WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Office Details + Contact Form */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Office Photo + Details */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/3] max-h-[380px] overflow-hidden rounded-xl bg-gradient-to-br from-charcoal to-charcoal-deep"
            >
              <img
                src="/images/office.jpg"
                alt="Cubiqal office"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <Reveal className="mt-6 md:mt-7">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-charcoal">
                Cubiqal Head Office
              </h2>

              <div className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-charcoal/80">
                <p>
                  <span className="font-semibold text-charcoal">Address:</span>{" "}
                  {company.address}
                </p>

                <p>
                  <span className="font-semibold text-charcoal">Email:</span>{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="break-words hover:text-brand transition-colors"
                  >
                    {company.email}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-charcoal">Phone:</span>{" "}
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="hover:text-brand transition-colors"
                  >
                    {company.phone}
                  </a>
                </p>
              </div>

              {/* Social Links */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/company/cleekart-interio/",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 9h3.558v11.452H3.56V9Z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  url: "https://www.instagram.com/cubiqal?srtk=MTdwOGg5dWI2d3FkYw%3D%3D",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                    </svg>
                  ),
                },
                // {
                //   label: "Facebook",
                //   url: "https://www.facebook.com/your-page/",
                //   icon: (
                //     <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                //       <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                //     </svg>
                //   ),
                // },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="inline-flex items-center gap-2 rounded-md border border-silver/50 px-3 py-1.5 text-xs font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            </Reveal>
          </div>

          {/* Right: Contact Form */}
          <Reveal delay={0.1} className="min-w-0">
            <AnimatePresence mode="wait">
              {sentUrl ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6 md:py-8"
                >
                  <h3 className="mb-3 text-2xl md:text-3xl font-light text-charcoal">
                    One last step
                  </h3>

                  <p className="max-w-md text-sm md:text-base leading-relaxed text-charcoal/70">
                    WhatsApp has opened with your details filled in. Just tap{" "}
                    <strong>Send</strong> there and we will reply shortly.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={sentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-brand px-5 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      Open WhatsApp again
                    </a>

                    <button
                      type="button"
                      onClick={() => setSentUrl("")}
                      className="rounded-lg border border-silver px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h3 className="mb-5 text-2xl md:text-3xl font-light text-charcoal">
                    Send us a message
                  </h3>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-charcoal/80"
                    >
                      Select Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className={inputClass}
                    >
                      <option value="">Select Service</option>
                      {expertise.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-charcoal/80"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your full name"
                      maxLength={80}
                      autoComplete="name"
                      className={inputClass}
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-charcoal/80"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com (optional)"
                      maxLength={120}
                      autoComplete="email"
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-charcoal/80"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Your phone number"
                      maxLength={20}
                      autoComplete="tel"
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-charcoal/80"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={800}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell us about your project..."
                      className={`${inputClass} resize-y`}
                    />

                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-6 py-3 text-sm md:text-base font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* Office Map */}
      <section className="bg-white pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="h-[260px] overflow-hidden rounded-xl border border-silver/30 shadow-sm sm:h-[320px] md:h-[380px]">
              <iframe
                title="Cubiqal office location"
                src="https://maps.google.com/maps?q=Cleekart%20Interio%20Pvt.%20Ltd.%20(Cubiqal)&ll=13.0486133,77.6203333&z=18&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Cleekart+Interio+Pvt.+Ltd.+(+cubiqal%E2%84%A2+)/@13.0486133,77.6203333,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
            >
              View Cubiqal in Google Maps →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
