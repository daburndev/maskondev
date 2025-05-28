"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = {
  visuals: [
    {
      id: 1,
      title: "Mask Study #1",
      category: "Web Design",
      image: "/placeholder-visual-1.png",
    },
    {
      id: 2,
      title: "Street Flow",
      category: "AI Graffiti",
      image: "/placeholder-visual-2.jpg",
    },
    {
      id: 3,
      title: "Digital Facade",
      category: "Digital Art",
      image: "/placeholder-visual-3.jpg",
    },
  ],
  // sounds: [
  //   {
  //     id: 1,
  //     title: "Trap Loops Vol. 1",
  //     category: "Beat Tape",
  //     audio: "/placeholder-audio-1.mp3",
  //   },
  //   {
  //     id: 2,
  //     title: "Digital Distortion",
  //     category: "Remix",
  //     audio: "/placeholder-audio-2.mp3",
  //   },
  //   {
  //     id: 3,
  //     title: "Ambient Noise",
  //     category: "Field Recording",
  //     audio: "/placeholder-audio-3.mp3",
  //   },
  // ],
  code: [
    {
      id: 1,
      title: "Wowdia.co",
      category: "Web Design & Development",
      link: "https://wowdia.co",
      image: "/placeholder-code-1.png",
    },
    {
      id: 2,
      title: "Kaytumadi iSolution",
      category: "Web Design & Development",
      link: "https://ktmdisolution.com",
      image: "/placeholder-code-2.jpg",
    },
    {
      id: 3,
      title: "Holyweed Rooftop Cannabis Dispensary",
      category: "Web Design & Development",
      link: "https://holyweedbkk.com",
      image: "/placeholder-code-3.jpg",
    },
  ],
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("visuals");

  const categories = [
    { id: "visuals", emoji: "🎨", label: "Visuals" },
    // { id: "sounds", emoji: "🎧", label: "Sounds" },
    { id: "code", emoji: "💻", label: "Code" },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-black py-20 px-6 md:px-12 pb-24 md:pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-8 md:mb-12 mask-text">
          PORTFOLIO
        </h2>

        {/* Category Tabs - Mobile Version */}
        <div className="flex md:hidden mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1 px-3 py-2 rounded-sm whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-money-green text-black"
                    : "bg-black text-off-white border border-off-white/20 hover:border-money-green"
                }`}
              >
                <span>{category.emoji}</span>
                <span className="font-heading tracking-wider text-sm">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs - Desktop Version */}
        <div className="hidden md:flex gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-colors ${
                activeCategory === category.id
                  ? "bg-money-green text-black"
                  : "bg-black text-off-white border border-off-white/20 hover:border-money-green"
              }`}
            >
              <span>{category.emoji}</span>
              <span className="font-heading tracking-wider">
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects[activeCategory].map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-black border border-off-white/10 rounded-sm overflow-hidden group"
            >
              {activeCategory === "visuals" && (
                <div className="relative h-52 sm:h-60 vhs-overlay">
                  <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-transparent transition-colors duration-300" />
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-lg sm:text-xl font-heading text-off-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-off-white/70">
                      {project.category}
                    </p>
                  </div>
                </div>
              )}

              {activeCategory === "sounds" && (
                <div className="p-4 sm:p-6 h-52 sm:h-60 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading text-off-white mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-off-white/70 mb-2 sm:mb-4">
                      {project.category}
                    </p>
                  </div>
                  <div className="w-full h-20 sm:h-24 bg-off-white/5 rounded-sm flex items-center justify-center">
                    <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-money-green flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeCategory === "code" && (
                <div className="relative h-52 sm:h-60 vhs-overlay">
                  <div className="absolute inset-0 bg-money-green/10 group-hover:bg-transparent transition-colors duration-300" />
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-lg sm:text-xl font-heading text-off-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-off-white/70 mb-1 sm:mb-2">
                      {project.category}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-money-green hover:text-gold-foil transition-colors"
                    >
                      View on Website →
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
