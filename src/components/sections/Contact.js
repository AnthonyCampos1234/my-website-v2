"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import { useState } from 'react';

const XIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 87.7538H306.615L611.412 515.685L658.88 583.579L1055.08 1139.05H892.476L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);

const socials = [
  {
    name: "Email",
    icon: EnvelopeClosedIcon,
    username: "anthonyrubencampos@gmail.com",
    href: "#"
  },
  {
    name: "GitHub",
    icon: GitHubLogoIcon,
    href: "https://github.com/AnthonyCampos1234"
  },
  {
    name: "LinkedIn",
    icon: LinkedInLogoIcon,
    href: "https://linkedin.com/in/anthonyrcampos"
  },
  {
    name: "",
    icon: XIcon,
    href: "https://x.com/heyanthonny"
  },
  {
    name: "Discord",
    icon: DiscordLogoIcon,
    username: "heyanthonny",
    href: "#"
  }
];

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState({
    social: null,
    message: ""
  });

  const handleCopyClick = async (username, socialName) => {
    try {
      await navigator.clipboard.writeText(username);
      setCopyStatus({ social: socialName, message: "Copied!" });
      setTimeout(() => setCopyStatus({ social: null, message: "" }), 2000); 
    } catch (err) {
      setCopyStatus({ social: socialName, message: "Failed to copy" });
    }
  };

  return (
    <Section id="contact">
      <div className="space-y-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="sketch-card max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Let's Connect</h3>
          <p className="text-muted-foreground text-center mb-8">
            I'm always open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.username ? "#" : social.href}
                onClick={social.username ? 
                  (e) => {
                    e.preventDefault();
                    handleCopyClick(social.username, social.name);
                  } : undefined}
                target={social.username ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="button-outline relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="mr-2 h-4 w-4" />
                {social.name}
                {social.username && copyStatus.social === social.name && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm">
                    {copyStatus.message}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact; 