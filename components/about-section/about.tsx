'use client';

import * as React from 'react';
import Image from 'next/image';

import { FaAsterisk } from 'react-icons/fa';

import cleaning from '@/public/cleaning.png';
import ContactModal from '../modals/contact-modal';
import { ContactUsButton } from '@/components/about-section/contact-button';

const AboutSection = () => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>(false);

  const onContactModalClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex sm:flex-row flex-col mt-20">
      {/* paragraph */}
      <div className="relative flex flex-col w-full lg:w-3/5 space-y-5 pb-8 sm:p-20">
        <article className="text-balance sm:text-balance text-2xl sm:text-4xl leading-normal sm:leading-normal text-slate-700 font-medium">
          Experienced and reliable cleaning service that delivers{' '}
          <span className="text-[#ffa600]">the results you expect.</span>
        </article>
        <span className="flex flex-row text-slate-700/70">
          <FaAsterisk className="text-sm mt-1 h-2 w-2" />
          Se Habla Español
        </span>
        <ContactUsButton
          variant={'outline'}
          className="w-full lg:w-[75%] text-[#ffa600] hover:cursor-pointer"
          label="Schedule an Appointment"
          onClick={onContactModalClick}
          // icon={MdOutlineArrowCircleRight}
        />
        <ContactModal onOpen={onContactModalClick} isOpen={isOpen} />
      </div>

      {/* image */}
      <div>
        <Image
          alt="Maid Cleaning Illustration"
          src={cleaning}
          className="sm:h-[500px] sm:w-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
