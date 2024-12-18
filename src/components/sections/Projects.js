"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const projects = [
  {
    title: "Algorithmic Trading System",
    description: "Developed a sophisticated trading system using machine learning for market prediction and automated execution.",
    tech: ["Python", "PyTorch", "APIs", "Quantitative Analysis"],
    link: "#",
    image: "/projects/trading.jpg"
  },
  {
    title: "NER Project Management",
    description: "Full-stack application for managing Northeastern Electric Racing's project timeline and resources.",
    tech: ["React", "TypeScript", "Node.js", "AWS"],
    link: "#",
    image: "/projects/ner.jpg"
  },
  {
    title: "Portfolio Analytics Platform",
    description: "Web application for analyzing investment portfolios and market trends using machine learning.",
    tech: ["Python", "React", "ML", "Financial APIs"],
    link: "#",
    image: "/projects/analytics.jpg"
  },
  {
    title: "Personal Website",
    description: "Modern, responsive portfolio website built with Next.js and Framer Motion.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "#",
    image: "/projects/website.jpg"
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="space-y-16">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a
                href={project.link}
                className="group relative flex flex-col overflow-hidden rounded-lg sketch-border bg-background"
                whileHover={{ translateY: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <motion.div
                      whileHover={{ rotate: -45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowTopRightIcon className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects; 