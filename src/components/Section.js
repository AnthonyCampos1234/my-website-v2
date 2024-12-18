"use client";

import { motion } from "framer-motion";

const Section = ({ children, id }) => {
  return (
    <section id={id} className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 