"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const beats = [
  {
    id: 1,
    title: "Maskoff Remix",
    price: "$00",
    duration: "4:20",
    bpm: 140,
    tags: ["mask off", "future", "atlanta"],
    audio: "/maskoffremix.mp3",
  },
  {
    id: 2,
    title: "Not Like Us Remix",
    price: "$00",
    duration: "3:12",
    bpm: 130,
    tags: ["not like us", "kendrick lamar", "westcoast"],
    audio: "/notlikeusremix.mp3",
  },
];

export default function TheDrop() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
        setProgress(0);
        clearInterval(intervalRef.current);
      } else {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    }, 100);
  };

  const playBeat = (beat) => {
    if (currentBeat && currentBeat.id === beat.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        clearInterval(intervalRef.current);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      }
    } else {
      setCurrentBeat(beat);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = beat.audio;
        audioRef.current.load();
        audioRef.current.play();
        startTimer();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="drop"
      className="min-h-screen bg-black py-20 px-6 md:px-12 pb-24 md:pb-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-8 md:mb-12 mask-text">
          THE DROP
        </h2>
        <p className="text-base md:text-lg text-off-white/80 mb-8 md:mb-12 font-body max-w-2xl">
          Premium beats and digital assets. Chase a check, never chase a vibe.
        </p>

        <div className="mb-10">
          <audio ref={audioRef} />

          {currentBeat && (
            <div className="bg-black border border-money-green/50 p-4 md:p-6 mb-6 md:mb-8 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading text-off-white">
                    {currentBeat.title}
                  </h3>
                  <div className="flex gap-4 text-xs md:text-sm text-off-white/60">
                    <span>{currentBeat.bpm} BPM</span>
                    <span>{currentBeat.duration}</span>
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-heading text-money-green">
                  {currentBeat.price}
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={() => playBeat(currentBeat)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-money-green flex items-center justify-center hover:bg-gold-foil transition-colors"
                >
                  {isPlaying ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="5" width="4" height="14" fill="black" />
                      <rect x="14" y="5" width="4" height="14" fill="black" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="black" />
                    </svg>
                  )}
                </button>

                <div className="flex-1 h-2 bg-off-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-money-green"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                {currentBeat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 md:px-3 py-1 bg-off-white/5 text-off-white/60 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3 md:space-y-4">
            {beats.map((beat) => (
              <motion.div
                key={beat.id}
                whileHover={{ x: 4 }}
                className={`flex justify-between items-center p-3 md:p-4 border-b border-off-white/10 hover:bg-off-white/5 cursor-pointer transition-colors ${
                  currentBeat && currentBeat.id === beat.id
                    ? "border-l-2 border-l-money-green pl-2 md:pl-3"
                    : ""
                }`}
                onClick={() => playBeat(beat)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-off-white/10 flex items-center justify-center">
                    {currentBeat && currentBeat.id === beat.id && isPlaying ? (
                      <span className="block w-2 h-2 bg-money-green rounded-full animate-pulse"></span>
                    ) : (
                      <span className="text-xs md:text-sm">{beat.id}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-heading text-off-white">
                      {beat.title}
                    </h3>
                    <div className="flex gap-3 md:gap-4 text-[10px] md:text-xs text-off-white/60">
                      <span>{beat.bpm} BPM</span>
                      <span>{beat.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6 ml-2">
                  <span className="text-sm md:text-base font-heading text-money-green whitespace-nowrap">
                    {beat.price}
                  </span>
                  <button className="px-2 md:px-3 py-1 border border-off-white/20 hover:border-money-green text-[10px] md:text-xs uppercase font-heading tracking-wider transition-colors">
                    Buy
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold-foil text-black font-heading py-2 md:py-3 px-6 md:px-8 rounded-sm uppercase tracking-wider text-sm md:text-base"
          >
            Custom Order
          </motion.a>
        </div>
      </div>
    </section>
  );
}
