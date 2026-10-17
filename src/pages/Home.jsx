import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ExpertiseScroll from "../components/ExpertiseScroll";
import FeaturedProjects from "../components/FeaturedProjects";
import ClientsMarquee from "../components/ClientsMarquee";
import CTA from "../components/CTA";

export default function Home() {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("cubiqal-loaded");
    } catch {
      return true;
    }
  });

  const handleDone = () => {
    try {
      sessionStorage.setItem("cubiqal-loaded", "1");
    } catch {}
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={handleDone} />}
      </AnimatePresence>

      <Hero ready={!loading} />
      <div id="intro">
        <Stats />
      </div>
      <ExpertiseScroll />
      <FeaturedProjects />
      <ClientsMarquee />
      <CTA />
    </>
  );
}