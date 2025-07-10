'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // FIX 1: Imported Variants type
import styles from './Navbar.module.scss';

// --- SVG Icons for the menu buttons ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
// --- End Icons ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu automatically on page navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body from scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { // Cleanup function
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const menuVariants: Variants = { // FIX 2: Explicitly typed the constant
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            MD Shuttles
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className={styles.navLinks}>
            {navLinks.map(link => (
                <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </nav>
          <Link href="/book" className={styles.ctaButton}>
            Book Now
          </Link>
          {/* --- End Desktop Navigation --- */}

          {/* --- Mobile Hamburger Button --- */}
          <button className={styles.hamburgerButton} onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.mobileMenuHeader}>
                <Link href="/" className={styles.logo}>MD Shuttles</Link>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <CloseIcon />
                </button>
            </div>
            <nav className={styles.mobileNavLinks}>
              {navLinks.map(link => (
                  <Link href={link.href} key={link.href}>{link.label}</Link>
              ))}
              <Link href="/book" className={styles.mobileCtaButton}>
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
