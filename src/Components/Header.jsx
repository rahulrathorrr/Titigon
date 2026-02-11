import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "PLATFORM ARCHITECTURE", path: "/platform-architecture" },
  { title: "PRODUCT ECOSYSTEM", path: "/product-ecosystem" },
  { title: "APPLICATION SCENARIOS", path: "/application-scenarios" },
  { title: "ROADMAP & COMMERCIAL MODEL", path: "/roadmap" },
  { title: "COMPANY & LEADERSHIP", path: "/company" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Mobile Menu Animation
  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19] border-b border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO + COMPANY NAME (Fixed Alignment) */}
        <Link to="/" className="z-50 flex items-center gap-3">
          <motion.img
            src={logo}
            alt="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-10 w-auto object-contain shrink-0"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-xl font-bold text-white tracking-widest uppercase flex items-center"
          >
            TITIGON<span className="text-gray-500 ml-1">.</span>
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="relative group">
              <span
                className={`text-xs font-semibold tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {link.title}
              </span>

              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="xl:hidden z-50">
          <button onClick={toggleMenu} className="text-white flex items-center">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-[#0B0F19] origin-top flex flex-col justify-center items-center z-40"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-6 text-center px-4"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className="text-2xl md:text-4xl font-bold text-gray-400 hover:text-white transition-colors tracking-tighter uppercase flex items-center justify-center gap-2 group"
                    >
                      {link.title}

                      <motion.span
                        className="opacity-0 group-hover:opacity-100 text-[#4ade80]"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ChevronRight size={28} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;