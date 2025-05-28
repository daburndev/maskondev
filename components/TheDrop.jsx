"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const beats = [
  {
    id: 1,
    title: "Digital Hustle",
    price: "$29",
    duration: "2:34",
    bpm: 140,
    tags: ["trap", "dark", "ambient"],
    audio: "/placeholder-beat-1.mp3",
  },
  {
    id: 2,
    title: "Mask Off Flip",
    price: "$49",
    duration: "3:12",
    bpm: 130,
    tags: ["flip", "remix", "future"],
    audio: "/placeholder-beat-2.mp3",
  },
  {
    id: 3,
    title: "Code Flow",
    price: "$39",
    duration: "2:47",
    bpm: 128,
    tags: ["lofi", "electronic", "chill"],
    audio: "/placeholder-beat-3.mp3",
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
    <section id="drop" className="min-h-screen bg-black py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading mb-12 mask-text">
          THE DROP
        </h2>
        <p className="text-lg text-off-white/80 mb-12 font-body max-w-2xl">
          Premium beats and digital assets. Chase a check, never chase a vibe.
        </p>

        <div className="mb-10">
          <audio ref={audioRef} />

          {currentBeat && (
            <div className="bg-black border border-money-green/50 p-6 mb-8 rounded-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-heading text-off-white">
                    {currentBeat.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-off-white/60">
                    <span>{currentBeat.bpm} BPM</span>
                    <span>{currentBeat.duration}</span>
                  </div>
                </div>
                <div className="text-2xl font-heading text-money-green">
                  {currentBeat.price}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => playBeat(currentBeat)}
                  className="w-12 h-12 rounded-full bg-money-green flex items-center justify-center hover:bg-gold-foil transition-colors"
                >
                  {isPlaying ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="5" width="4" height="14" fill="black" />
                      <rect x="14" y="5" width="4" height="14" fill="black" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
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

              <div className="mt-6 flex gap-3">
                {currentBeat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-off-white/5 text-off-white/60 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {beats.map((beat) => (
              <motion.div
                key={beat.id}
                whileHover={{ x: 4 }}
                className={`flex justify-between items-center p-4 border-b border-off-white/10 hover:bg-off-white/5 cursor-pointer transition-colors ${
                  currentBeat && currentBeat.id === beat.id
                    ? "border-l-2 border-l-money-green pl-3"
                    : ""
                }`}
                onClick={() => playBeat(beat)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-off-white/10 flex items-center justify-center">
                    {currentBeat && currentBeat.id === beat.id && isPlaying ? (
                      <span className="block w-2 h-2 bg-money-green rounded-full animate-pulse"></span>
                    ) : (
                      <span className="text-sm">{beat.id}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading text-off-white">
                      {beat.title}
                    </h3>
                    <div className="flex gap-4 text-xs text-off-white/60">
                      <span>{beat.bpm} BPM</span>
                      <span>{beat.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-heading text-money-green">
                    {beat.price}
                  </span>
                  <button className="px-3 py-1 border border-off-white/20 hover:border-money-green text-xs uppercase font-heading tracking-wider transition-colors">
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
            className="inline-block bg-gold-foil text-black font-heading py-3 px-8 rounded-sm uppercase tracking-wider"
          >
            Custom Order
          </motion.a>
        </div>
      </div>
    </section>
  );
}
