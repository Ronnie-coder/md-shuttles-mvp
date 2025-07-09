// app/packages/PackagesPageContent.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { allPackages } from '@/data/packages';
import styles from './packages.module.scss'; // THE FIX: Changed from './booking.module.scss'

const PackagesPageContent = () => {
  return (
    <div className={styles.packagesPage}>
      <header className={styles.header}>
        <h1>Our Tours & Packages</h1>
        <p>Discover Cape Town with our curated experiences. All prices are per vehicle.</p>
      </header>

      <motion.div 
        className={styles.packagesGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {allPackages.map((pkg, index) => (
          <motion.div 
            key={pkg.id} 
            className={styles.packageCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.cardContent}>
              <h3>{pkg.title}</h3>
              <p className={styles.description}>{pkg.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.price}>
                {pkg.price ? `From R${pkg.price}` : 'Custom Quote'}
              </span>
              <Link href="/book" className={styles.bookButton}>
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PackagesPageContent;