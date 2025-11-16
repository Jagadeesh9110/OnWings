import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  toggleLoginModal,
  toggleSignupModal,
} from "../../store/slices/userSlice";

const linkVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const NavLink = ({ to, children }) => (
  <motion.div
    variants={linkVariants}
    whileHover={{ scale: 1.04, y: -1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative group"
  >
    <div className="pointer-events-none absolute -inset-0.5 bg-gradient-to-r from-red-700/20 to-red-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
    <Link
      to={to}
      className="relative text-white/90 hover:text-white font-medium tracking-wide transition-colors px-3.5 py-2.5 rounded-md"
    >
      {children}
      <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-red-600/80 w-0 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300" />
    </Link>
  </motion.div>
);

const AuthButton = ({ onClick, children, isPrimary = false }) => (
  <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
    <button
      onClick={onClick}
      className={`font-semibold py-2 px-4 rounded-full transition-all duration-300 ${
        isPrimary
          ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-600 hover:to-red-600 shadow-lg shadow-red-600/25 ring-1 ring-red-600/20"
          : "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-black/40"
      }`}
    >
      {children}
    </button>
  </motion.div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setOpen(false);
    dispatch(toggleLoginModal());
  };

  const handleSignupClick = () => {
    setOpen(false);
    dispatch(toggleSignupModal());
  };
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <header className="pointer-events-none fixed top-0 w-full z-50">
      <nav className="pointer-events-auto max-w-5xl w-[90%] mx-auto h-16 flex items-center justify-between px-4 sm:px-6 rounded-b-lg bg-black/70 backdrop-blur-sm border border-white/10 shadow-lg shadow-red-900/20 ring-1 ring-red-600/10">
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold text-white flex items-center tracking-wide"
          >
            OnWings
          </Link>
        </motion.div>

        {/* Desktop links */}
        <motion.div
          className="hidden md:flex items-center gap-x-6"
          initial="closed"
          animate="open"
          variants={{
            open: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <NavLink to="/luggage">Luggage</NavLink>
          <NavLink to="/search">Find a Flight</NavLink>
          <NavLink to="/private-booking">Private Jets</NavLink>
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <AuthButton onClick={handleLoginClick}>Log In</AuthButton>
          <AuthButton onClick={handleSignupClick} isPrimary>
            Sign Up
          </AuthButton>
        </motion.div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden max-w-[90%] mx-auto bg-black/90 backdrop-blur-sm border border-white/10 overflow-hidden rounded-2xl mt-2 shadow-lg shadow-red-900/10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <motion.div variants={linkVariants}>
                <Link
                  to="/luggage"
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/5"
                >
                  Luggage
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  to="/search"
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/5"
                >
                  Find a Flight
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  to="/private-booking"
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/5"
                >
                  Private Jets
                </Link>
              </motion.div>
              <div className="pt-2 border-t border-white/10">
                <motion.div variants={linkVariants}>
                  <button
                    onClick={handleLoginClick}
                    className="w-full text-left block text-white font-semibold py-3 px-2 rounded hover:bg-white/5"
                  >
                    Log In
                  </button>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <button
                    onClick={handleSignupClick}
                    className="w-full text-left block text-white font-semibold py-3 px-2 rounded hover:bg-white/5"
                  >
                    Sign Up
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
