
import Reveal from "./Reveal";

const clients = [
  { name: "Client One", logo: "/images/logo1.jpg" },
  { name: "Client Two", logo: "/images/Logo2.jpg" },
  { name: "Client Three", logo: "/images/logo3.jpg" },
  { name: "Client Four", logo: "/images/logo4.jpg" },
  { name: "Client Five", logo: "/images/logo5.jpg" },
  { name: "Client Six", logo: "/images/logo6.jpg" },
  { name: "Client Seven", logo: "/images/logo7.jpg" },
  { name: "Client Eight", logo: "/images/logo8.jpg" },
];

export default function ClientsMarquee() {
  const loop = [...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Reveal className="text-center mb-12 px-6">
        <p className="text-brand uppercase tracking-[0.25em] text-sm font-semibold mb-4">
          Our Clients
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by growing businesses
        </h2>
      </Reveal>

      <div className="flex w-max animate-marquee items-center">
        {loop.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="mx-6 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl  bg-white px-6 py-4"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-h-14 max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
