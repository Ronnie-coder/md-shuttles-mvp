import HeroSection from '@/components/home/HeroSection';
import ServicesHighlight from '@/components/home/ServicesHighlight';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction'; // <-- IMPORT IT

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsSection />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}