// app/about/page.tsx
// This is now a SERVER COMPONENT. It has no 'use client'.

import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent'; // Import our new client component

// The metadata export is now safe and correct here.
export const metadata: Metadata = {
  title: 'About Us | MD Shuttles',
  description: 'Learn about our mission, vision, and commitment to providing safe, reliable, and high-quality transportation services.',
};

// This is the main page component. It just renders the client component.
const AboutPage = () => {
  return <AboutPageContent />;
};

export default AboutPage;