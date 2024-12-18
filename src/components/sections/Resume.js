"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { DownloadIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Fidelity Investments",
    period: "Jan 2024 - Present",
    description: "Working on the Asset Management Technology team, developing and maintaining full-stack applications for portfolio managers and traders. Implementing machine learning models for market analysis.",
    skills: ["Python", "React", "AWS", "Machine Learning"]
  },
  {
    title: "Machine Learning Engineer",
    company: "Northeastern University",
    period: "Sep 2023 - Dec 2023",
    description: "Developed deep learning models for financial market prediction. Implemented and optimized trading algorithms using Python and various ML frameworks.",
    skills: ["Python", "PyTorch", "TensorFlow", "Quantitative Analysis"]
  },
  {
    title: "Software Developer",
    company: "Northeastern Electric Racing",
    period: "Sep 2022 - Present",
    description: "Lead developer for the team's software infrastructure. Built and maintained full-stack applications using React and Node.js.",
    skills: ["React", "TypeScript", "Node.js", "AWS"]
  }
];

const Resume = () => {
  return (
    <Section id="resume">
      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <motion.a
            href="/resume.pdf"
            className="button-outline"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download CV
          </motion.a>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="sketch-card group hover:translate-x-1 hover:translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-foreground px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Resume; 