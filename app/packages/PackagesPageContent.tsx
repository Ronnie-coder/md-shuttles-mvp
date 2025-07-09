// app/book/BookingPageContent.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { allPackages } from '@/data/packages';
import styles from './booking.module.scss'; // THE FIX: This line was missing.

// SVG Icon for the success message
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;


const BookingPageContent = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    passengers: '1',
    fullName: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking Request Submitted:', formData);
    setIsSubmitted(true);
  };

  // The Success Message Component
  if (isSubmitted) {
    return (
      <div className={`${styles.bookingPage} ${styles.centerContent}`}>
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <CheckCircleIcon />
          <h2>Thank You!</h2>
          <p>Your booking request has been received. We will contact you shortly to confirm the details.</p>
          <Link href="/" className={styles.submitButton}>
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  // The Booking Form Component
  return (
    <div className={styles.bookingPage}>
      <header className={styles.header}>
        <h1>Reserve Your Ride</h1>
        <p>Complete the form below to request your transportation. It's fast, easy, and secure.</p>
      </header>

      <div className={styles.formContainer}>
        <motion.form
          onSubmit={handleSubmit}
          className={styles.bookingForm}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Service Details */}
          <fieldset className={styles.fieldset}>
            <legend>1. Service Details</legend>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="serviceType">Service Type</label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required>
                    <option value="" disabled>-- Select a Tour or Package --</option>
                    <optgroup label="Popular Tours & Packages">
                        {allPackages.filter(p => p.price !== null).map(service => (
                            <option key={service.id} value={service.title}>
                                {service.title}
                            </option>
                        ))}
                    </optgroup>
                    <optgroup label="Custom & Corporate Services">
                        {allPackages.filter(p => p.price === null).map(service => (
                            <option key={service.id} value={service.title}>
                                {service.title}
                            </option>
                        ))}
                    </optgroup>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="passengers">Number of Passengers</label>
                <input type="number" id="passengers" name="passengers" min="1" value={formData.passengers} onChange={handleChange} required />
              </div>
            </div>
          </fieldset>

          {/* Location & Time */}
          <fieldset className={styles.fieldset}>
            <legend>2. Location & Time</legend>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="pickupLocation">Pickup Location</label>
                <input type="text" id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required placeholder="e.g., Cape Town International Airport" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="dropoffLocation">Drop-off Location</label>
                <input type="text" id="dropoffLocation" name="dropoffLocation" onChange={handleChange} required placeholder="e.g., V&A Waterfront" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="pickupDate">Pickup Date</label>
                <input type="date" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="pickupTime">Pickup Time</label>
                <input type="time" id="pickupTime" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
              </div>
            </div>
          </fieldset>

          {/* Personal Information */}
          <fieldset className={styles.fieldset}>
            <legend>3. Personal Information</legend>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
          </fieldset>
          
          <button type="submit" className={styles.submitButton}>Request Booking</button>
        </motion.form>
      </div>
    </div>
  );
};

export default BookingPageContent;