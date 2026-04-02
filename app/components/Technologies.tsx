"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TECHNOLOGIES } from "@/app/data/technologies";

export default function Technologies({ dict }: { dict: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = TECHNOLOGIES.length - 1;
      if (nextIndex >= TECHNOLOGIES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
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

          <div className="w-full max-w-4xl overflow-hidden py-4 px-1"
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
          >
            <div
              key={currentIndex}
              className={`w-full ${direction >= 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
            >
              <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 mx-auto max-w-2xl">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  {dict.areas[currentArea.title]}
                </h3>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                  {currentArea.technologies.map(
                    (item: any, index: number) => (
                      <li
                        key={index}
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
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
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
