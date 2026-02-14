import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyXDrive from '@/components/WhyXDrive';
import TrustedBy from '@/components/TrustedBy';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-navy-dark min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyXDrive />
      <TrustedBy />
      <CTASection />
      <Footer />
    </main>
  );
}
