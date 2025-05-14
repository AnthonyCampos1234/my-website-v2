"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { DownloadIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    title: "Operations Manager & Lead of NLP Research",
    company: "AI Perception Research Lab",
    period: "September 2024 - Present",
    description: "Managing operations at the AI Research Lab and leading research on uncertainty-aware dialogue systems. Focusing on probabilistic reasoning, adaptive conversational AI, and developing uncertainty estimation methods. Exploring Bayesian Neural Networks, Variational Inference, and integrating knowledge graphs for enhanced contextual understanding.",
    skills: ["NLP", "Bayesian Networks", "Probabilistic Reasoning", "Research Management"]
  },
  {
    title: "E-Board Member",
    company: "Northeastern AI Club",
    period: "April 2024 - Present",
    description: "Developed a 4-session AI bootcamp covering mathematics, data preprocessing, machine learning, and neural networks. Built movement scripts for Pololu robots in SwarmScape with Google Vertex AI integration. Created a Python-based professor ranking tool with OpenAI API, reaching final 4 out of 27 teams in Hackathon.",
    skills: ["AI Education", "Robotics", "API Integration", "Python"]
  },
  {
    title: "Data Analyst Intern",
    company: "Aspire Institute",
    period: "April 2024 - June 2024",
    description: "Analyzed key metrics from alumni newsletters and weekly digests, providing data-driven suggestions to enhance engagement towards their 2027 goal. Created visualizations and reports using Excel and Tableau, contributing to Aspire's global impact across 180+ countries and 100K+ young adults.",
    skills: ["Data Analysis", "Excel", "Tableau", "Reporting"]
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
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Resume
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