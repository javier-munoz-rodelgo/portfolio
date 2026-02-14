"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TECHNOLOGIES } from "@/app/data/technologies";

export default function Technologies({ dict }: { dict: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = TECHNOLOGIES.length - 1;
      if (nextIndex >= TECHNOLOGIES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentArea = TECHNOLOGIES[currentIndex];

  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 overflow-hidden"
    >
      <div className="max-w-2xl w-full mx-auto p-6 my-12 relative">
        <h2 className="text-4xl font-bold text-center mb-8">{dict.title}</h2>

        <p
          className="mb-8 text-center"
          dangerouslySetInnerHTML={{ __html: dict.p1 }}
        ></p>

        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors md:-left-4"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors md:-right-4"
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="w-full max-w-4xl overflow-hidden py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;

                  if (swipe < -10000) {
                    paginate(1);
                  } else if (swipe > 10000) {
                    paginate(-1);
                  }
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 mx-auto max-w-2xl">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    {currentArea.title}
                  </h3>
                  <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                    {currentArea.technologies.map(
                      (item: any, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex flex-col items-center gap-3 p-2 hover:scale-110 transition-transform cursor-default"
                        >
                          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                            <Image
                              src={item.logo}
                              alt={item.text}
                              width={64}
                              height={64}
                              className="object-contain"
                              style={{ maxHeight: "100%", maxWidth: "100%" }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-700 text-center">
                            {item.text}
                          </span>
                        </motion.li>
                      ),
                    )}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {TECHNOLOGIES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-purple-600"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to category ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
