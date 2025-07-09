'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        
        <div className={styles.sliderContainer}>
          <button onClick={prevTestimonial} className={`${styles.navButton} ${styles.prev}`}>
            &#8249;
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={styles.testimonialContent}
            >
              <blockquote>“{testimonials[currentIndex].quote}”</blockquote>
              <cite>– {testimonials[currentIndex].name}</cite>
            </motion.div>
          </AnimatePresence>

          <button onClick={nextTestimonial} className={`${styles.navButton} ${styles.next}`}>
            &#8250;
          </button>
        </div>

        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;