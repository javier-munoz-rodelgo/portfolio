"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { TECHNOLOGIES } from "@/app/data/technologies";

type TechnologiesDict = {
  title: string;
  p1: string;
  areas: Record<string, string>;
};

export default function Technologies({ dict }: { dict: TechnologiesDict }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const areas = TECHNOLOGIES;
  const activeArea = areas[activeIndex];

  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;

    setVisible(false);

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }

    transitionTimerRef.current = setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 140);
  };

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="technologies"
      className="min-h-screen bg-slate-50 py-20 sm:py-24"
      aria-labelledby="technologies-title"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2
            id="technologies-title"
            className="text-4xl font-bold tracking-tight text-slate-900"
          >
            {dict.title}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: dict.p1 }}
          />
        </header>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 sm:p-6">
          <div
            className="mb-6 flex gap-2 overflow-x-auto pb-1 sm:mb-8"
            role="tablist"
            aria-label="Technology categories"
          >
            {areas.map((area, index) => {
              const selected = index === activeIndex;
              const areaLabel = dict.areas[area.title] ?? area.title;

              return (
                <button
                  key={area.title}
                  id={`tech-tab-${area.title}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`tech-panel-${area.title}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => handleTabChange(index)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                    selected
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {areaLabel}
                </button>
              );
            })}
          </div>

          <div
            id={`tech-panel-${activeArea.title}`}
            role="tabpanel"
            aria-labelledby={`tech-tab-${activeArea.title}`}
            className={`grid grid-cols-2 gap-3 transition-all duration-300 sm:grid-cols-3 lg:grid-cols-4 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            {activeArea.technologies.map((item, index) => (
              <article
                key={`${activeArea.title}-${item.text}`}
                style={{ transitionDelay: visible ? `${index * 35}ms` : "0ms" }}
                className={`group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-0"
                }`}
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                  <Image
                    src={item.logo}
                    alt={item.text}
                    width={56}
                    height={56}
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </div>
                <p className="text-center text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
