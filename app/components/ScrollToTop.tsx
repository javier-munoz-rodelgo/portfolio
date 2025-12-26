"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    show && (
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-5 right-5 transition-colors duration-500 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <span className="material-symbols-rounded">north</span>
      </motion.button>
    )
  );
}
