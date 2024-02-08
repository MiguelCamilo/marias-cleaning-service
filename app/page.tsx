import NavMenu from '@/components/nav-menu/navigation';
import AboutSection from '@/components/about-section/about';
import Services from '@/components/services-section/services';

export default function Home() {
  return (
    <div>      
      <NavMenu />
      <main className="flex min-h-screen flex-col items-center p-20">
        <AboutSection />
        <Services />
      </main>
    </div>
  );
}
