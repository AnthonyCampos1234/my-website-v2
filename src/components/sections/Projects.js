"use client";

import Section from "../Section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowTopRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Facsimile - AI Memory Bank",
    description: "Coming Soon: A revolutionary macOS tool that enables natural language search, weekly summaries, and personality profiling from messages. Built for secure local data processing, ensuring privacy while personalizing AI interactions. The foundation for an interoperable memory bank system.",
    tech: ["Swift", "CoreML", "LangChain", "Local LLMs"],
    liveLink: "#",
    githubLink: "https://github.com/AnthonyCampos1234/Facsimile",
    image: "/projects/facsimilepic.png"
  },
  {
    title: "TruckTetris - AI-Powered Logistics Optimization",
    description: "An intelligent logistics management platform that optimizes truck loading patterns using AI. Processes order documents, extracts information via AWS Textract, and generates efficient loading plans with Claude AI. Successfully implemented at Moran Logistics for Target's cardboard supply chain, reducing loading time by 35% and improving space utilization by 28%.",
    tech: ["Next.js", "TypeScript", "Supabase", "AWS Textract", "Claude AI", "Tailwind CSS"],
    liveLink: "https://github.com/AnthonyCampos1234/TruckTetris",
    githubLink: "https://github.com/AnthonyCampos1234/TruckTetris",
    image: "/projects/trucktetrispic.png"
  },
  {
    title: "TruckTetris v2 - Simplified AI-Powered Logistics",
    description: "A streamlined logistics management platform optimizing truck loading patterns with AI. Designed for CSV order processing, featuring chat-based interaction and real-time loading plan generation. Built for Moran Logistics' Target cardboard supply chain, improving usability and reducing complexity compared to v1.",
    tech: ["Next.js", "JavaScript", "React", "Tailwind CSS", "Radix UI", "Anthropic Claude API"],
    liveLink: "https://github.com/AnthonyCampos1234/TruckTetrisv2",
    githubLink: "https://github.com/AnthonyCampos1234/TruckTetrisv2",
    image: "/projects/trucktetrisv2pic.png"
  },
  {
    title: "Dormeal - Campus Food Delivery",
    description: "A gig-based food delivery web application that enables students to order from on-campus restaurants with deliveries fulfilled by fellow students at significantly lower costs than traditional services. Features include a Flask backend, Stripe payments integration, and an automated email system for dasher notifications.",
    tech: ["Flask", "Python", "JavaScript", "Stripe API", "HTML/CSS"],
    liveLink: "https://www.dormeal.com/",
    githubLink: "https://github.com/IpDaniel/dormeal",
    image: "/projects/Dormealpic.png"
  },
  {
    title: "Dormeal2.0 - Campus Food Delivery App",
    description: "A gig-based food delivery web application that enables students to order from on-campus restaurants with deliveries fulfilled by fellow students at significantly lower costs than traditional services. Features include a Flask backend, Stripe payments integration, and an automated email system for dasher notifications.",
    tech: ["Swift", "Flask", "Python", "JavaScript", "Stripe API"],
    liveLink: "https://github.com/AnthonyCampos1234/Dormeal2.0",
    githubLink: "https://github.com/AnthonyCampos1234/Dormeal2.0",
    image: "/projects/Dormeal2.0pic.png"
  },
  {
    title: "Waitless - Class Registration Management",
    description: "A modern web application that revolutionizes university class registration by connecting students who want to secure desired classes with those who can help them. Features include smart student matching, secure transactions, real-time updates, and a built-in communication system. Built with Next.js 15, TypeScript, and Firebase.",
    tech: ["Next.js 15", "TypeScript", "Firebase", "Tailwind CSS", "Shadcn/ui", "React Hook Form"],
    liveLink: "https://join-waitless.netlify.app/",
    githubLink: "https://github.com/AnthonyCampos1234/Waitless",
    image: "/projects/waitlesspic.png"
  },
  {
    title: "Nota - Everything App for Students",
    description: "A comprehensive mobile application that simplifies university life by providing seamless course management, assignment tracking, and GPA calculation. Features intelligent parsing of academic data using Claude API and AWS Lambda for effortless onboarding.",
    tech: ["React Native", "Appwrite", "AWS Lambda", "Claude API"],
    liveLink: "https://github.com/AnthonyCampos1234/Nota",
    githubLink: "https://github.com/AnthonyCampos1234/Nota",
    image: "/projects/notapic.png"
  },
  {
    title: "Stupedia - Yelp for People",
    description: "Stupedia was an experimental project exploring the concept of a platform where individuals could rate and review others, similar to Yelp for businesses, but it was discontinued due to ethical concerns and potential for misuse. The project provided valuable lessons about privacy, ethics, and the societal impact of technology, influencing future efforts toward more ethical design.",
    tech: ["SwiftUI", "Supabase"],
    liveLink: "https://github.com/AnthonyCampos1234/Stupedia",
    githubLink: "https://github.com/AnthonyCampos1234/Stupedia",
    image: "/projects/stupediapic.png"
  },
  {
    title: "Avisari - University Advising Platform",
    description: "A comprehensive platform revolutionizing university operations by connecting students with advisors, providing tools for academic planning, course selection, and financial services management.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Next-Auth"],
    liveLink: "https://avisari.com",
    githubLink: "https://github.com/AnthonyCampos1234/Avisari",
    image: "/projects/avisaripic.png"
  },
  {
    title: "EduConnect - AI-Powered Course Selection Platform",
    description: "A web application that pairs students with instructors based on learning style compatibility. Built in 48 hours for the InnovAIte Hackathon at Northeastern University. Features web scraping, LLM integration, and a custom ranking algorithm.",
    tech: ["Python", "Flask", "React", "LangChain", "Selenium"],
    liveLink: "https://github.com/dng24/educonnect",
    githubLink: "https://github.com/dng24/educonnect",
    image: "/projects/educonnectpic.png"
  },
  {
    title: "BillsForKids - Financial Education Game",
    description: "An interactive Java application designed to teach children basic financial concepts through gamified experiences. Built using MVC architecture, it features allowance collection, bill payments, savings management, and job simulations. Created to demonstrate Java programming skills learned through coursework.",
    tech: ["Java", "Swing GUI", "MVC Pattern", "OOP", "Event Handling"],
    liveLink: "https://github.com/AnthonyCampos1234/BillsForKids",
    githubLink: "https://github.com/AnthonyCampos1234/BillsForKids",
    image: "/projects/billsforkidspic.png"
  },
  {
    title: "Web of Lies - Misinformation Spread Visualization",
    description: "An interactive visualization tool that demonstrates how misinformation spreads across social networks, analyzed through different philosophical perspectives. Features real-time network graphs, multiple misinformation categories, and analysis from philosophers like Neil Postman and Charles Peirce. Built with Next.js, TypeScript, and Canvas API.",
    tech: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    liveLink: "https://web-of-lies.vercel.app/",
    githubLink: "https://github.com/AnthonyCampos1234/Web-of-Lies",
    image: "/projects/webofliespic.png"
  },
  {
    title: "Old Portfolio Website",
    description: "My previous personal portfolio website built to showcase my projects, skills, and experience. Featured interactive UI elements, smooth transitions, and comprehensive sections for projects, resume, and contact information. Implemented best practices in web development with Next.js 14 and TypeScript.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://github.com/AnthonyCampos1234/My-Website",
    githubLink: "https://github.com/AnthonyCampos1234/My-Website",
    image: "/projects/oldwebsitepic.png"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection >= 0 && prevIndex + newDirection < projects.length
        ? prevIndex + newDirection
        : prevIndex
    ));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update entrance animation to handle smooth transition
  useEffect(() => {
    if (isInView) {
      const spreadTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 2000);

      const collapseTimer = setTimeout(() => {
        setIsCollapsed(true);
      }, 2500); // Slight delay after transition starts

      return () => {
        clearTimeout(spreadTimer);
        clearTimeout(collapseTimer);
      };
    }
  }, [isInView]);

  return (
    <Section id="projects">
      <motion.div 
        className="space-y-8 sm:space-y-16"
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[85vw] sm:max-w-xl lg:max-w-3xl mx-auto">
          {/* Initial spread of cards */}
          {isInView && !isCollapsed && (
            <div className="absolute inset-0">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="absolute w-full h-full origin-center"
                  initial={{
                    rotateZ: 0,
                    y: 200,
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{
                    rotateZ: isTransitioning 
                      ? 0 
                      : (index - Math.floor(projects.length / 2)) * 10,
                    y: isTransitioning ? 0 : 0,
                    x: isTransitioning 
                      ? 0 
                      : (index - Math.floor(projects.length / 2)) * 30,
                    opacity: isTransitioning 
                      ? index === currentIndex ? 1 : 0
                      : 1,
                    scale: isTransitioning
                      ? index === currentIndex ? 1 : 0.8
                      : 1 - Math.abs(index - currentIndex) * 0.05,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      delay: isTransitioning ? 0 : index * 0.1,
                    }
                  }}
                  style={{
                    zIndex: projects.length - Math.abs(index - currentIndex)
                  }}
                >
                  <div className="w-full h-full p-2 sm:p-3 lg:p-4">
                    <div className="relative w-full h-full overflow-hidden sketch-border bg-background rounded-lg">
                      <div className="relative h-[40%] sm:h-[45%] lg:h-1/2 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      <div className="absolute bottom-0 w-full p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <motion.h3 
                            className="text-lg sm:text-xl lg:text-2xl font-bold"
                            layoutId="projectTitle"
                          >
                            {project.title}
                          </motion.h3>
                          <div className="flex items-center gap-2">
                            {project.githubLink && (
                              <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-1.5 sm:p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 flex-shrink-0"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4 sm:h-5 sm:w-5"
                                  fill="currentColor"
                                >
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  View Code
                                </span>
                              </motion.a>
                            )}
                            {project.liveLink && project.liveLink !== project.githubLink && (
                              <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-1.5 sm:p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 flex-shrink-0"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Image
                                  src="/globe.svg"
                                  alt="Live Demo"
                                  width={20}
                                  height={20}
                                  className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  Live Demo
                                </span>
                              </motion.a>
                            )}
                          </div>
                        </div>

                        <motion.p 
                          className="text-xs sm:text-sm lg:text-base text-muted-foreground line-clamp-3"
                          layoutId="projectDescription"
                        >
                          {project.description}
                        </motion.p>

                        <motion.div 
                          className="flex flex-wrap gap-1.5 sm:gap-2"
                          layoutId="projectTech"
                        >
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-foreground/5 text-xs sm:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Swipeable cards */}
          <AnimatePresence>
            {isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[85vw] sm:max-w-xl lg:max-w-3xl mx-auto">
                  {/* Swipeable stack after collapse */}
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[85vw] sm:max-w-xl lg:max-w-3xl mx-auto">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                          }
                        }}
                        className="absolute w-full h-full"
                      >
                        <motion.div className="w-full h-full p-2 sm:p-3 lg:p-4">
                          <motion.div
                            className="relative w-full h-full overflow-hidden sketch-border bg-background rounded-lg"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative h-[40%] sm:h-[45%] lg:h-1/2 w-full overflow-hidden">
                              <Image
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                fill
                                className="object-cover"
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                            </div>

                            <div className="absolute bottom-0 w-full p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                              <div className="flex items-start justify-between gap-3">
                                <motion.h3 
                                  className="text-lg sm:text-xl lg:text-2xl font-bold"
                                  layoutId="projectTitle"
                                >
                                  {projects[currentIndex].title}
                                </motion.h3>
                                <div className="flex items-center gap-2">
                                  {projects[currentIndex].githubLink && (
                                    <motion.a
                                      href={projects[currentIndex].githubLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group relative p-1.5 sm:p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 flex-shrink-0"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 sm:h-5 sm:w-5"
                                        fill="currentColor"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                      </svg>
                                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        View Code
                                      </span>
                                    </motion.a>
                                  )}
                                  {projects[currentIndex].liveLink && projects[currentIndex].liveLink !== projects[currentIndex].githubLink && (
                                    <motion.a
                                      href={projects[currentIndex].liveLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group relative p-1.5 sm:p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 flex-shrink-0"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <Image
                                        src="/globe.svg"
                                        alt="Live Demo"
                                        width={20}
                                        height={20}
                                        className="h-4 w-4 sm:h-5 sm:w-5"
                                      />
                                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Live Demo
                                      </span>
                                    </motion.a>
                                  )}
                                </div>
                              </div>

                              <motion.p 
                                className="text-xs sm:text-sm lg:text-base text-muted-foreground line-clamp-3"
                                layoutId="projectDescription"
                              >
                                {projects[currentIndex].description}
                              </motion.p>

                              <motion.div 
                                className="flex flex-wrap gap-1.5 sm:gap-2"
                                layoutId="projectTech"
                              >
                                {projects[currentIndex].tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-foreground/5 text-xs sm:text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation UI - only show after collapse */}
                    {isCollapsed && (
                      <>
                        <div className="absolute inset-x-0 bottom-[-2.5rem] sm:bottom-[-3rem] lg:bottom-[-3.5rem] flex justify-center items-center gap-3 sm:gap-4">
                          <motion.button
                            onClick={() => paginate(-1)}
                            className={`p-1.5 sm:p-2 lg:p-2.5 rounded-full sketch-button ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={currentIndex === 0}
                          >
                            <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </motion.button>
                          
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {currentIndex + 1} / {projects.length}
                          </div>

                          <motion.button
                            onClick={() => paginate(1)}
                            className={`p-1.5 sm:p-2 lg:p-2.5 rounded-full sketch-button ${currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={currentIndex === projects.length - 1}
                          >
                            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </motion.button>
                        </div>

                        <div className="absolute top-[-1rem] sm:top-[-1.5rem] left-0 right-0 flex justify-center gap-1 sm:gap-1.5 px-4">
                          {projects.map((_, index) => (
                            <motion.button
                              key={index}
                              onClick={() => setCurrentIndex(index)}
                              className={`h-1 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                                index === currentIndex ? 'w-4 sm:w-6 bg-foreground' : 'w-1.5 bg-foreground/20'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects; 