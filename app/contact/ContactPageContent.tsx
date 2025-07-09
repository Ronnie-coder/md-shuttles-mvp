// app/contact/page.tsx
'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';

// SVG Icons for Contact Details
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;


// We must use the Two-File Pattern here to avoid the metadata error.
// This component contains all the page's visible content.
const ContactPageContent = () => {
    return (
        <div className={styles.contactPage}>
            {/* SECTION 1: HEADER */}
            <header className={styles.header}>
                <h1>Get In Touch</h1>
                <p>We're here to help. Contact us for bookings, inquiries, or custom travel solutions.</p>
            </header>

            {/* SECTION 2: MAIN CONTENT */}
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    {/* LEFT COLUMN: CONTACT DETAILS */}
                    <motion.div 
                        className={styles.detailsColumn}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2>Contact Information</h2>
                        <p>Our team is ready to assist you 24/7. Reach out via phone, email, or visit us at our office.</p>
                        
                        <div className={styles.detailItem}>
                            <PhoneIcon />
                            <div>
                                <strong>Phone</strong>
                                <a href="tel:+27738358504">073 835 8504</a> / <a href="tel:+27719455941">071 945 5941</a>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <MailIcon />
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:info@mdshuttles.co.za">info@mdshuttles.co.za</a>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <MapPinIcon />
                            <div>
                                <strong>Address</strong>
                                <span>129 Beaufort Street, Goodwood, Cape Town, 7460</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <motion.div 
                        className={styles.formColumn}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <form className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* SECTION 3: GOOGLE MAP */}
            <div className={styles.mapSection}>
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.168924259646!2d18.558226076344586!3d-33.91136392097784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b021380735d%3A0x67a9a7b68673a55a!2s129%20Beaufort%20St%2C%20Goodwood%2C%20Cape%20Town%2C%207460!5e0!3m2!1sen!2sza!4v1716124740702!5m2!1sen!2sza" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

// We create the main page component here to handle metadata correctly.
const ContactPage = () => {
    return <ContactPageContent />;
}

export default ContactPage;

// We will add metadata back once we split the file.
// For now, let's get it working.