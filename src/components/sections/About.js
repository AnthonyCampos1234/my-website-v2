"use client";

import Section from "../Section";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "Quantitative Analysis", level: 85 },
  { name: "React/Next.js", level: 80 },
];

const About = () => {
  return (
    <Section id="about">
      <div className="space-y-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            className="space-y-4 sketch-border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              I'm a third-year student at Northeastern University, pursuing a combined major in
              Computer Science and Finance. My academic focus lies at the intersection of artificial 
              intelligence and quantitative finance.
            </p>
            <p className="text-muted-foreground">
              With experience in machine learning, algorithmic trading, and full-stack development,
              I'm passionate about building innovative solutions that bridge the gap between
              technology and finance.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="sketch-border p-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 