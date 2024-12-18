"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const newIsScrolled = currentScrollY > 50;
    if (isScrolled !== newIsScrolled) {
      setIsScrolled(newIsScrolled);
    }

    const sections = ["about", "projects", "resume", "contact"];
    const scrollPosition = currentScrollY + window.innerHeight * 0.3;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    }
  }, [isScrolled, activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - window.innerHeight / 4;
      
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });

      setIsExpanded(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
        className="fixed top-4 sm:top-6 lg:top-8 w-auto"
      >
        <motion.div
          initial={false}
          animate={{
            scale: isScrolled ? 0.95 : 1,
          }}
          className={`
            relative flex items-center justify-center rounded-full sketch-button overflow-hidden
            transition-all duration-300 bg-background border-2 border-foreground
            ${isScrolled ? 'px-2 py-1.5' : 'px-3 py-2'}
          `}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onTouchStart={() => setIsExpanded(true)}
          whileHover={{ scale: 1.02 }}
          style={{
            boxShadow: '4px 4px 0 var(--foreground)',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {activeSection && isScrolled && !isExpanded ? (
              <motion.span
                key="active-section"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-1.5 cursor-pointer"
                onClick={() => scrollToSection(activeSection)}
              >
                <motion.div
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-sm font-medium capitalize">
                  {activeSection}
                </span>
              </motion.span>
            ) : (
              <motion.div
                key="nav-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                {["about", "projects", "resume", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="nav-link px-2 py-1"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navigation; 