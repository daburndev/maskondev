"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio";
import TheDrop from "../components/TheDrop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-money-green mix-blend-difference pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.15, ease: "linear" }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-40">
        <div className="mask-text text-2xl font-heading">MASK.ON</div>
        <div className="flex gap-8">
          {["vision", "portfolio", "drop", "journal", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="uppercase text-off-white hover:text-money-green transition-colors text-sm tracking-wider"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden vhs-overlay">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 text-center"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-heading glitch mb-4">
            MASK.ON
          </h1>
          <p className="text-lg md:text-xl font-body text-off-white/80 mb-12">
            Unfiltered Creativity. Code. Culture.
          </p>
          <motion.a
            href="#portfolio"
            className="inline-block bg-money-green text-black font-heading py-3 px-8 rounded-sm uppercase tracking-wider hover:bg-gold-foil transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Enter the Vibe
          </motion.a>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About / Vision Section */}
      <section
        id="vision"
        className="min-h-screen bg-black py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading mb-12 mask-text">
            THE VISION
          </h2>
          <div className="space-y-8 text-lg">
            <p className="font-body text-off-white/90">
              "Took the mask off, still me" — embracing real identity in a world
              of digital facades.
            </p>
            <p className="font-body text-off-white/90">
              A visual mixtape at the intersection of art, code, and culture.
              Breaking the mold while chasing the vision, never compromising the
              aesthetic.
            </p>
            <p className="font-alt text-off-white/90 italic">
              "Percocet, molly, Percocet / Chase a check, never chase a bitch"
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* The Drop Section */}
      <TheDrop />

      {/* Journal Section - Simplified */}
      <section
        id="journal"
        className="min-h-screen bg-black py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading mb-12 mask-text">
            THE JOURNAL
          </h2>
          <p className="text-lg text-off-white/80 mb-12">
            Thoughts on art, tech, and the culture. Coming soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border border-off-white/10 p-8 rounded-sm hover:border-money-green/30 transition-colors"
              >
                <p className="text-money-green text-sm mb-2">Coming Soon</p>
                <h3 className="text-xl font-heading mb-4">
                  Journal Entry #{item}
                </h3>
                <p className="text-off-white/70 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
