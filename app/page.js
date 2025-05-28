"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio";
import TheDrop from "../components/TheDrop";
import TheJournal from "../components/TheJournal";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    { id: "vision", text: "vision", icon: "👁️" },
    { id: "portfolio", text: "portfolio", icon: "🎨" },
    { id: "drop", text: "drop", icon: "🎧" },
    { id: "journal", text: "journal", icon: "📝" },
    { id: "contact", text: "contact", icon: "✉️" },
  ];

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-money-green mix-blend-difference pointer-events-none z-50 hidden md:block"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.15, ease: "linear" }}
      />

      {/* Navigation - Desktop */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-black/80 backdrop-blur-sm">
        <div className="mask-text text-2xl font-heading">MASK.ON</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="uppercase text-off-white hover:text-money-green transition-colors text-sm tracking-wider"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-off-white p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-30 pt-20 px-6 flex flex-col md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-4 border-b border-off-white/10 flex items-center gap-3 text-off-white hover:text-money-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="uppercase tracking-wider font-heading">
                {item.text}
              </span>
            </a>
          ))}
        </motion.div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm py-2 px-4 flex justify-between items-center z-40 border-t border-off-white/10 md:hidden">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center text-off-white/70 hover:text-money-green p-2"
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-[10px] uppercase tracking-wider">
              {item.text}
            </span>
          </a>
        ))}
      </div>

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

      {/* Journal Section */}
      <TheJournal />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
