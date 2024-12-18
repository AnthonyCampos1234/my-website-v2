"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const socials = [
  {
    name: "Email",
    icon: EnvelopeClosedIcon,
    href: "mailto:campos.an@northeastern.edu"
  },
  {
    name: "GitHub",
    icon: GitHubLogoIcon,
    href: "https://github.com/anthonyrcampos"
  },
  {
    name: "LinkedIn",
    icon: LinkedInLogoIcon,
    href: "https://linkedin.com/in/anthonyrcampos"
  }
];

const Contact = () => {
  return (
    <Section id="contact">
      <div className="space-y-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sketch-card">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-outline"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="mr-2 h-4 w-4" />
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="sketch-card space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-2 border-foreground bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-2 border-foreground bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border-2 border-foreground bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <motion.button
              type="submit"
              className="button w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact; 