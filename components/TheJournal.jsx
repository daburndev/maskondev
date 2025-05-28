"use client";

import { motion } from "framer-motion";

const journalEntries = [
  {
    id: 1,
    title: "The Digital Mask",
    preview:
      "Exploring the duality of online personas and authentic self-expression in the digital age.",
    date: "2023-10-15",
    tag: "Culture",
  },
  {
    id: 2,
    title: "Code as Art",
    preview:
      "Breaking down the boundaries between technical implementation and creative expression.",
    date: "2023-11-22",
    tag: "Technology",
  },
  {
    id: 3,
    title: "Trap-inspired Web Design",
    preview:
      "How music aesthetics can shape digital experiences and visual language online.",
    date: "2024-01-08",
    tag: "Design",
  },
  {
    id: 4,
    title: "The Future of Digital Identity",
    preview:
      "Predictions on how we'll represent ourselves in increasingly digital spaces.",
    date: "2024-02-19",
    tag: "Future",
  },
];

export default function TheJournal() {
  return (
    <section
      id="journal"
      className="min-h-screen bg-black py-20 px-6 md:px-12 pb-24 md:pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-8 md:mb-12 mask-text">
          THE JOURNAL
        </h2>
        <p className="text-base md:text-lg text-off-white/80 mb-8 md:mb-12 max-w-2xl">
          Thoughts on art, tech, and the culture. Breaking down the creative
          process and sharing insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {journalEntries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-off-white/10 p-5 md:p-8 rounded-sm hover:border-money-green/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-3">
                <p className="text-money-green text-xs uppercase tracking-wider">
                  {entry.tag}
                </p>
                <p className="text-off-white/40 text-xs">
                  {formatDate(entry.date)}
                </p>
              </div>
              <h3 className="text-lg sm:text-xl font-heading mb-3 group-hover:text-money-green transition-colors">
                {entry.title}
              </h3>
              <p className="text-off-white/70 text-sm md:text-base mb-4">
                {entry.preview}
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-xs md:text-sm text-money-green hover:text-gold-foil transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span>Read More</span>
                <svg
                  className="ml-1 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex justify-center">
          <motion.a
            href="#"
            className="inline-block border border-money-green text-money-green hover:bg-money-green hover:text-black font-heading py-2 md:py-3 px-6 md:px-8 rounded-sm uppercase tracking-wider text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Entries
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function formatDate(dateString) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
