// app/book/page.tsx
// SERVER COMPONENT - only for metadata and structure

import type { Metadata } from 'next';
import BookingPageContent from './BookingPageContent';

export const metadata: Metadata = {
  title: 'Book Your Ride | MD Shuttles',
  description: 'Fast, easy, and secure online booking for all your transportation needs in Cape Town.',
};

const BookingPage = () => {
  return <BookingPageContent />;
};

export default BookingPage;