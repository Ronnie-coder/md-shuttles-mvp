import type { Metadata } from 'next';
import PackagesPageContent from './PackagesPageContent';

export const metadata: Metadata = {
  title: 'Tours & Packages | MD Shuttles',
  description: 'Explore all available tours, transfers, and exclusive packages offered by MD Shuttles in Cape Town.',
};

const PackagesPage = () => {
  return <PackagesPageContent />;
};

export default PackagesPage;