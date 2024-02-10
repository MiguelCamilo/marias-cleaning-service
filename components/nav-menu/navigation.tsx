'use client';

import * as React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.svg';
import topLeftBlob from '@/public/topLeftBlob.svg';
import topRightBlob from '@/public/topRightBlob.svg';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import MobileNav from '@/components/nav-menu/mobile-navmenu';

const NavMenu = () => {
  const navigationLinks = [
    {
      name: 'Home',
      href: '/',
    },
    // {
    //     name: 'About',
    //     href: '/'
    // },
    {
      name: 'Services',
      href: '/',
    },
    {
      name: 'Contact',
      href: '/',
    },
  ];

  return (
    <>
      <Image
        src={topLeftBlob}
        alt="Orange Blob"
        className="absolute inset-50 -z-10"
      />
      {/* desktop view */}
      <div className="hidden sm:flex h-20 flex-row justify-center">
        <div className="flex w-[40%] items-center justify-start mt-20">
          <Image
            alt="Business logo name"
            src={logo}
            className="w-[400px] h-[400px]"
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationLinks.map((links, index) => (
              <React.Fragment key={index}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href={links?.href}>
                    {links?.name}
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* mobile view */}
      <MobileNav />

      <Image
        src={topRightBlob}
        alt="Outline Blob"
        className="absolute -right-20 sm:right-0 top-0 -z-10"
      />
    </>
  );
};

export default NavMenu;
