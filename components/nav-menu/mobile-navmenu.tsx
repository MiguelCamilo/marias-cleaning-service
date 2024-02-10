'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo.svg';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>(false);

  const navigationLinks = [
    {
        name: 'Home',
        href: '/'
    },
    // {
    //     name: 'About',
    //     href: '/'
    // },
    {
        name: 'Services',
        href: '/'
    },
    {
        name: 'Contact',
        href: '/'
    },
  ];

  const onClickDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden flex h-20 justify-end mr-5">
      <div className="flex items-center justify-start mt-16">
        <Image
          alt="Business logo name"
          src={logo}
          className="w-[400px] h-[400px]"
        />
      </div>
      <Drawer open={isOpen} direction="right">
        <DrawerTrigger onClick={onClickDrawer}>
          <RxHamburgerMenu className="h-8 w-8 text-slate-700" />
        </DrawerTrigger>
        <DrawerContent>
          <IoMdCloseCircleOutline
            onClick={onClickDrawer}
            className="h-8 w-8 absolute top-0 right-0 m-5 hover:cursor-pointer text-slate-700"
          />
          <div className="flex flex-col justify-center items-center h-full space-y-10">
            {navigationLinks.map((links, index) => (
              <React.Fragment key={index}>
                <Link href={links?.href} className="text-2xl text-slate-700 border-b-2 border-[#ffa60078]">
                  <span>
                    {links?.name}
                  </span>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
