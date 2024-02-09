'use client';

import { IoIosStar } from 'react-icons/io';
import { PiCheckFatFill } from 'react-icons/pi';

import waves from '@/public/wavesOpacity.svg'
import Image from 'next/image';

const Services = () => {
  return (
    <div className="flex flex-col w-[80%] items-center justify-center mt-20 space-y-8">

      <div className="flex flex-row w-full justify-center space-x-3 lg:space-x-5">
        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Home</p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Apartment</p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Office</p>
        <IoIosStar className="mt-1.5 lg:mt-3" color={'#ffa600'} />

        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Small Businesses</p>
      </div>

      <article className='font-normal text-lg text-balance text-center text-slate-400'>
        Call us today to schedule a comprehensive service for your home, office, 
        apartment or small business, based on your specific needs. We guarantee satisfaction
        and will deliver the service you expect!
      </article>

      <div className="flex flex-row w-full justify-center space-x-3 lg:space-x-5">
        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Weekly</p>

        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium">Bi-Weekly</p>

        <PiCheckFatFill className="lg:mt-3 h-6 w-6" color={'#ffa600'} />
        <p className="text-slate-700 text-lg lg:text-3xl font-medium">
          Monthly
        </p>
      </div>
      {/* waves svg divider */}
      <Image
        src={waves}
        className='wave wave-svg'
        alt='waves svg'
      />
    </div>
  );
};

export default Services;
