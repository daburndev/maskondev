"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 px-6 md:px-12 border-t border-off-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mask-text text-2xl font-heading mb-2"
          >
            MASK.ON
          </motion.div>
          <p className="text-off-white/60 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          {["vision", "portfolio", "drop", "journal", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="uppercase text-off-white/60 hover:text-money-green transition-colors text-xs tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/60 hover:text-money-green transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/maskondev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/60 hover:text-money-green transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://spotify.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/60 hover:text-money-green transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.7365 16.5C16.4514 16.5 16.1711 16.3978 15.9636 16.211C15.0044 15.3504 13.7655 14.9 12.5 14.9C11.5146 14.9 10.5483 15.1224 9.69869 15.5646C9.67962 15.5737 9.66055 15.5829 9.64148 15.592C9.41973 15.7073 9.17241 15.75 8.93054 15.75C8.2384 15.75 7.54932 15.2815 7.54932 14.5C7.54932 14.0059 7.78952 13.5711 8.22005 13.3401C9.4454 12.7126 10.9582 12.4 12.5 12.4C14.4019 12.4 16.2673 13.0599 17.6997 14.34C17.9022 14.5169 18.0172 14.7627 18.0172 15.0089C18.0172 15.259 17.9083 15.5027 17.7094 15.682C17.4658 16.1529 17.0952 16.5 16.7365 16.5ZM18.1636 12.75C17.8785 12.75 17.5982 12.6478 17.3907 12.461C16.0988 11.3103 14.3419 10.65 12.5 10.65C11.1811 10.65 9.88851 10.9493 8.7407 11.5321C8.72164 11.5413 8.70257 11.5504 8.6835 11.5595C8.46175 11.6748 8.21443 11.7175 7.97256 11.7175C7.28042 11.7175 6.59134 11.249 6.59134 10.4675C6.59134 9.97342 6.83154 9.5386 7.26207 9.30761C8.82193 8.45254 10.6363 8 12.5 8C15.0073 8 17.4186 8.89985 19.2266 10.59C19.4291 10.7669 19.5441 11.0127 19.5441 11.2589C19.5441 11.509 19.4352 11.7527 19.2363 11.932C18.9927 12.4029 18.6221 12.75 18.1636 12.75ZM19.5636 8.75C19.2785 8.75 18.9982 8.64777 18.7907 8.46098C17.2128 7.04902 14.9065 6.25 12.5 6.25C10.8087 6.25 9.14558 6.62726 7.64906 7.36789C7.62999 7.37704 7.61092 7.38618 7.59185 7.39533C7.37011 7.51061 7.12279 7.55327 6.88091 7.55327C6.18877 7.55327 5.5 7.08476 5.5 6.30328C5.5 5.80919 5.7402 5.37437 6.17073 5.14338C8.06474 4.04113 10.2462 3.5 12.5 3.5C15.5943 3.5 18.5699 4.5396 20.8367 6.58984C21.0392 6.76673 21.1542 7.01256 21.1542 7.25876C21.1542 7.50884 21.0454 7.75255 20.8464 7.93184C20.6029 8.40274 20.2323 8.75 19.7738 8.75H19.5636Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
