// components/ui/PackageCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './PackageCard.module.scss';

type PackageCardProps = {
  title: string;
  price: number | null;
  imageUrl: string;
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const PackageCard = ({ title, price, imageUrl }: PackageCardProps) => {
  // THE PERMANENT FIX IS HERE:
  const formattedPrice = price
    // Use toFixed(2) for guaranteed ".00" format, then use a Regex to add thousand separators.
    // This is 100% consistent across server and client, fixing the hydration error.
    ? `R ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    : 'Inquire for Price';

  return (
    <motion.div className={styles.card} variants={cardVariants}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>{formattedPrice}</div>
        <Link href="/book" className={styles.bookButton}>
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;