"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "AI Characters", href: "#ai" },
    { name: "How It Works", href: "#work" },
    { name: "Modules", href: "#modules" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY < lastScrollY) {
        setShowHeader(true); 
      } else {
        setShowHeader(false); 
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 300
      }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      x: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    open: { 
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    }
  };

  const hamburgerVariants = {
    open: { 
      rotate: 45,
      transition: { duration: 0.2 }
    },
    closed: { 
      rotate: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate={showHeader ? "visible" : "hidden"}
      variants={headerVariants}
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-[#111111]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center sm:px-6 px-4 h-16">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#home"
            className="sm:text-[34px] text-[20px] text-white font-bold tracking-widest"
          >
            PROJECT TOKYO
          </Link>
        </motion.div>

      
        <nav className="hidden xl:flex space-x-8 text-[18px] tracking-tighter items-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href={link.href}
                className={`transition-colors uppercase relative ${
                  pathname === link.href
                    ? "text-blue-500"
                    : "text-white hover:text-gray-400"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="https://x.com/ProjectTokyoAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </motion.div>
        </nav>

     
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center xl:hidden z-[80]"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerVariants}
            className="relative w-6 h-6"
          >
            {isOpen ? (
              <>
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-white rotate-45"></span>
                <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-white -rotate-45"></span>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <span className="block w-7 h-[2px] bg-white"></span>
                <span className="block w-7 h-[2px] bg-white"></span>
              </div>
            )}
          </motion.div>
        </motion.button>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 left-0 h-full w-full bg-[#111111] md:hidden z-40"
          >
            <nav className="flex flex-col justify-center space-y-6 p-6 min-h-[100vh] bg-[#111111]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    href={link.href}
                    className={`transition-colors text-[24px] ml-10 font-bold ${
                      pathname === link.href
                        ? "text-blue-500"
                        : "text-white hover:text-blue-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Link
                  href="https://x.com/ProjectTokyoAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-6 h-6 sm:ml-0 ml-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}