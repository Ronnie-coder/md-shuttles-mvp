'use client'; 

import { motion, Variants } from 'framer-motion'; // FIX 1: Imported Variants type
import Link from 'next/link';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const containerVariants: Variants = { // FIX 2: Explicitly typed the constant
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = { // FIX 3: Explicitly typed the constant
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1 variants={itemVariants}>
          Exceptional Transport & Delivery
        </motion.h1>
        <motion.p variants={itemVariants}>
          Safe, Reliable, and Efficient solutions for your travel and delivery needs in South Africa.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/book" className={styles.ctaButton}>
            Book Your Ride Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
