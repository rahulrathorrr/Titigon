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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19] border-b border-gray-800 shadow-xl backdrop-blur-md">
      <div className="w-full px-4 md:px-10 py-4 flex justify-between items-center">

        {/* FAR LEFT SECTION: LOGO + COMPANY NAME */}
        <div className="flex-shrink-0">
          <Link to="/" className="z-50 flex items-center gap-4 group">
            <motion.img
              src={logo}
              alt="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-black text-white tracking-[0.15em] uppercase flex items-center"
            >
              TITIGON<span className="text-blue-500 ml-1">.</span>
            </motion.div>
          </Link>
        </div>

        {/* RIGHT SECTION: NAV + CONTACT BUTTON (Everything else stays right) */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="relative group whitespace-nowrap">
                <span
                  className={`text-[10px] font-black tracking-[0.12em] transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-white group-hover:text-blue-300"
                  }`}
                >
                  {link.title}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>

          <Link 
            to="/contact" 
            className="px-7 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] uppercase border border-blue-400"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="xl:hidden z-50">
          <button onClick={toggleMenu} className="text-white flex items-center p-2 bg-gray-800/50 rounded-lg border border-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="flex flex-col gap-8 text-center px-4"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className="text-2xl md:text-4xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter uppercase flex items-center justify-center gap-2 group"
                    >
                      {link.title}
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 text-blue-500"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ChevronRight size={32} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div variants={linkVars} className="mt-4">
                <Link to="/contact" onClick={toggleMenu} className="px-12 py-4 bg-blue-600 text-white font-black rounded-full tracking-[0.2em] uppercase shadow-2xl">
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
