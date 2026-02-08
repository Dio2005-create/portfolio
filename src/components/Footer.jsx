import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export const Footer = ({ socials }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/70 backdrop-blur-xl">
      {/* Gradient Top Glow */}
      <div className="absolute inset-x-0 -top-1 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-16"
        >
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Claudio Joash
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Full-Stack Developer • React • Laravel • Java
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socials?.map((s) => {
              const Icon = iconMap[s.icon] || Mail;
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/40"
                  title={s.name}
                >
                  <Icon size={22} className="text-blue-400" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            © {year} Claudio Joash. All rights reserved.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Bottom Signature */}
        <div className="text-center text-xs text-gray-500 pb-4">
          <p>
            Built with <span className="text-red-400">❤</span> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
