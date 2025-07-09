// components/home/CallToAction.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CallToAction.module.scss';

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={styles.ctaSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h2 variants={itemVariants}>
          Let&apos;s Get Your Journey Started
        </motion.h2>
        <motion.p variants={itemVariants}>
          Contact us for a custom quote or book your ride instantly. Our team is available 24/7 to ensure a seamless experience.
        </motion.p>
        <motion.div className={styles.buttonContainer} variants={itemVariants}>
          <Link href="/book" className={styles.primaryButton}>
            Reserve A Car Online
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;