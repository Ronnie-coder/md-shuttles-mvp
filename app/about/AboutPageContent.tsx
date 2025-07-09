// app/about/AboutPageContent.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
// Note: Assuming team.ts exists, if not, this import can be removed too.
import { teamMembers } from '@/data/team';

const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;

const AboutPageContent = () => {
  const values = [
    { icon: <ShieldIcon />, title: "Safety", description: "The paramount principle in all our operations." },
    { icon: <ClockIcon />, title: "Reliability", description: "On-time, every time. You can count on us." },
    { icon: <ZapIcon />, title: "Efficiency", description: "Optimized routes and seamless service." },
    { icon: <UsersIcon />, title: "Customer Focus", description: "Your needs and comfort are our priority." }
  ];

  return (
    <div className={styles.aboutPage}>
       <header className={styles.header}>
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContent}>
          <h1>About MD Shuttles</h1>
          <p>More than just a ride. A promise of excellence.</p>
        </div>
      </header>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <motion.div className={styles.introText} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <h2>Who We Are</h2>
            <p>MD Shuttles is a trusted transportation service provider with five years of experience in delivering safe, reliable, and comfortable travel solutions. We specialize in airport transfers, corporate staff transportation, private car rentals, guided tours, and event logistics.</p>
            <p>Committed to excellence, we provide seamless travel experiences with a focus on punctuality, safety, and affordability. Whether for business, leisure, or logistics, we guarantee top-tier service tailored to your unique travel requirements.</p>
          </motion.div>
          <motion.div className={styles.introImage} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <Image src="/images/about-us.jpg" alt="MD Shuttles professional driver" layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </section>
      <section className={styles.missionVisionSection}>
        <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>To provide safe, reliable, and high-quality transportation services tailored to our clients’ needs, ensuring comfort, efficiency, and exceptional customer satisfaction in every journey we deliver.</p>
          </div>
          <div className={styles.vision}>
            <h3>Our Vision</h3>
            <p>To be the leading transportation service provider, recognized for excellence, innovation, and customer-centric solutions, offering seamless, safe, and reliable travel experiences for individuals and businesses.</p>
          </div>
        </div>
      </section>
      <section className={styles.valuesSection}>
          <h2>Our Core Values</h2>
          <motion.div className={styles.valuesGrid} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.2 }}>
              {values.map((value, index) => (
                  <motion.div key={index} className={styles.valueCard} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                      <div className={styles.valueIcon}>{value.icon}</div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                  </motion.div>
              ))}
          </motion.div>
      </section>
    </div>
  );
};

export default AboutPageContent;