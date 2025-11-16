import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, ArrowUp, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const handleScrollTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  };

  return (
    <footer className="relative bg-black/90 text-white/80 border-t border-red-800/30 mt-12">
      <motion.div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="container mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold tracking-wide">OnWings</span>
            </div>
            <p className="text-sm text-white/60 max-w-sm">
              Seamless flights, clean design, and a smooth journey from search to boarding.
            </p>
            <div className="relative h-6 overflow-hidden">
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: [ -40, 240, 480 ], opacity: [0, 1, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Plane className="w-3.5 h-3.5 text-white/60" />
                <span className="block h-[1px] w-16 bg-white/30" />
              </motion.div>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-4 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/search", label: "Flights" },
              { to: "/my-trips", label: "My Trips" },
              { to: "/#support", label: "Support" },
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ x: 2 }}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="relative block h-px w-0 bg-red-600 group-hover:w-8 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex md:justify-end items-center gap-4">
            {[
              { href: "https://www.linkedin.com", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com", Icon: Github, label: "GitHub" },
              { href: "https://www.instagram.com", Icon: Instagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-red-600/60 hover:text-white text-white/70 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-4.5 h-4.5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} OnWings. All rights reserved.
          </p>
          <motion.button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:text-white hover:border-red-600/60 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
