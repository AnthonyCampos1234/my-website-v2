"use client";

import Navigation from "@/components/Navigation";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/utils/animations";
import Avatar from "@/components/Avatar";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.section 
          initial="initial"
          animate="animate"
          className="min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center py-12 sm:py-20"
          id="about"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div 
              variants={stagger}
              className="space-y-6 sm:space-y-8 w-full max-w-xl order-2 md:order-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
              >
                <h1 className="hero-text text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                  Anthony Campos
                </h1>
                <div className="space-y-4 sm:space-y-6">
                  <div className="sketch-border p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground">
                    I'm a student at Northeastern University, pursuing a combined major in
                    Computer Science and Fintech.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                    I'm currently building Facsimile, Dormeal, and TruckTetris - tools that leverage 
                    technology to transform how we interact with data, communities, and logistics. I 
                    strive to push the boundaries of what's possible at the intersection of human 
                    needs and technological innovation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.a
                  href="#projects"
                  className="button w-full sm:w-auto text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="button-outline w-full sm:w-auto text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] order-1 md:order-2"
            >
              <Avatar />
            </motion.div>
          </div>
        </motion.section>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32 py-12 sm:py-16 lg:py-24">
          <Projects />
          <Resume />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Home;
