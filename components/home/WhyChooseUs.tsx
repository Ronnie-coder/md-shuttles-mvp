'use client';

import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '@/data/whyChooseUs';
import styles from './WhyChooseUs.module.scss';

// A simple SVG icon component for the checkmark
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>Your Journey, Perfected.</h2>
          <p className={styles.subheading}>
            We are committed to providing an unparalleled transportation experience. Our focus on these core principles ensures your complete satisfaction every time.
          </p>
        </div>
        <motion.div
          className={styles.listColumn}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {whyChooseUsPoints.map((point, index) => (
            <motion.div key={index} className={styles.pointItem} variants={itemVariants}>
              <CheckIcon />
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;