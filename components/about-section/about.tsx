'use client';

import Image from 'next/image';

import { ContactUsButton } from '@/components/about-section/contact-button';

const AboutSection = () => {
  return (
    <div className="flex flex-row mt-20">
      {/* paragraph */}
      <div className="flex flex-col w-full lg:w-3/5 space-y-5 p-20">
        <article className="text-balance text-lg lg:text-4xl font-medium leading-normal text-slate-700">
          Experienced and reliable cleaning service that delivers{' '}
          <span className="text-[#ffa600]">the results you expect.</span>
        </article>
        <ContactUsButton
          variant={'outline'}
          className="w-full lg:w-[35%] text-[#ffa600]"
          href={''}
          label="Contact Us For More Details"
          // icon={MdOutlineArrowCircleRight}
        />
      </div>

      {/* image */}
      <div className="">        
        {/* <Image 
            alt="Maid Cleaning Cartoon" 
            src={'/src/cleaning.jpg'} 
            height={500}
            width={500}
        /> */}
      </div>
    </div>
  );
};

export default AboutSection;
