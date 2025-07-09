// app/contact/page.tsx
// SERVER COMPONENT - only for metadata and structure

import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent'; // Import the client component

// The metadata export is now safe here.
export const metadata: Metadata = {
  title: 'Contact Us | MD Shuttles',
  description: 'Get in touch for bookings, inquiries, or custom travel solutions. Our team is available 24/7.',
};

// Main page component - just renders the client component.
const ContactPage = () => {
  return <ContactPageContent />;
};

export default ContactPage;