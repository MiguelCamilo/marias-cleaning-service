'use client';

import Image from 'next/image';

import { IoIosStar } from 'react-icons/io';
import { PiCheckFatFill } from 'react-icons/pi';

import waves from '@/public/wavesOpacity.svg';
import houseSVG from '@/public/house-svg.svg';
import bathtubSVG from '@/public/bathtub.svg';
import vacuumSVG from '@/public/vacuum.svg';
import windowSVG from '@/public/window-cleaning-svg.svg';

const Services = () => {
  return (
    <div className="flex flex-col w-[80%] items-center justify-center mt-20 space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row w-full items-center justify-center space-y-3 lg:space-y-0 space-x-3 lg:space-x-5">
        <p className="text-slate-700 ml-4 sm:ml-0 text-xl lg:text-3xl font-medium">
          Home
        </p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-xl lg:text-3xl font-medium">
          Apartment
        </p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-xl lg:text-3xl font-medium">Office</p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-xl lg:text-3xl font-medium">
          Small Businesses
        </p>
      </div>

      <div className="sm:hidden w-full sm:w-1/2 border-t border-gray-300" />

      <article className="font-normal text-lg text-balance text-center text-slate-400">
        Call us today to schedule a comprehensive service for your home, office,
        apartment or small business, based on your specific needs. We guarantee
        satisfaction and will deliver the service you expect!
      </article>

      <div className="sm:hidden w-full sm:w-1/2 border-t border-gray-300" />

      <p className="text-4xl text-slate-700 font-bold">Services</p>

      <div className="flex flex-col lg:flex-row w-full justify-center space-x-3">
        <div className="flex flex-col">
          <Image
            src={houseSVG}
            alt="window cleaning illustration"
            className="sm:h-[400px] w-[400px]"
          />
          <span className="relative left-12 sm:left-10 right-0 bottom-0 -top-8 sm:-top-32 text-xl sm:text-3xl font-medium text-slate-700">
            House Cleaning
          </span>
        </div>

        <div className="flex flex-col">
          <Image
            src={bathtubSVG}
            alt="window cleaning illustration"
            className="sm:h-[400px] w-[400px]"
          />
          <span className="relative left-20 right-0 bottom-0 -top-8 sm:-top-32 text-xl sm:text-3xl font-medium text-slate-700">
            Bathrooms
          </span>
        </div>

        <div className="flex flex-col">
          <Image
            src={vacuumSVG}
            alt="window cleaning illustration"
            className="sm:h-[400px] w-[400px]"
          />
          <span className="relative left-10 right-0 bottom-0 -top-8 sm:-top-32 text-xl sm:text-3xl font-medium text-slate-700">
            Floors & Carpets
          </span>
        </div>

        <div className="flex flex-col">
          <Image
            src={windowSVG}
            alt="window cleaning illustration"
            className="sm:h-[400px] w-[400px]"
          />
          <span className="relative left-20 right-0 bottom-0 -top-8 sm:-top-32 text-xl sm:text-3xl font-medium text-slate-700">
            Windows
          </span>
        </div>
      </div>

      {/* <Image src={waves} className="wave wave-svg" alt="waves svg" /> */}
    </div>
  );
};

export default Services;

{
  /* 
      <div className="flex flex-row w-full justify-center space-x-3 lg:space-x-5">
        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium mt-1">Weekly</p>

        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium mt-1">
          BiWeekly
        </p>

        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium mt-1">
          Monthly
        </p>
      </div> */
}
{
  /* waves svg divider */
}
