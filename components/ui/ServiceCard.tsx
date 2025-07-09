'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.scss';

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl:string;
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};

const ServiceCard = ({ title, description, imageUrl, linkUrl }: ServiceCardProps) => {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.12)" }}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={linkUrl} className={styles.learnMore}>
          Learn More <span>&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;