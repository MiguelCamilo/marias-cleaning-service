import NavMenu from '@/components/nav-menu/navigation';
import AboutSection from '@/components/about-section/about';
import Services from '@/components/services-section/services';

import Image from 'next/image';
import leftSideBlob from '@/public/left-side-blob.svg'

export default function Home() {
  return (
    <div>      
      <NavMenu />
      <main className="flex min-h-screen flex-col items-center p-16 sm:p-20">
        <Image
          src={leftSideBlob}
          alt='Left Side Blob'
          className="absolute -left-[30rem] right-0 top-[30rem] bottom-0 -z-10"
        />
        <AboutSection />
        <Services />
      </main>
    </div>
  );
}
