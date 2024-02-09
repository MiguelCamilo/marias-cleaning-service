'use client';

import Image from 'next/image';
import backgroundBlob from '@/public/blob-haikei.svg';
import outlineBlob from '@/public/outline-blob.svg';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import logo from '@/public/logo.svg';

const NavMenu = () => {
  return (
    <>
      <Image
        src={backgroundBlob}
        alt="Orange Blob"
        className="absolute inset-50"
      />
      <div className="flex h-20 flex-row justify-center">
        <div className="flex w-[40%] items-center justify-start mt-20">
          <Image alt="Business logo name" src={logo} height={400} width={400} />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Image
        src={outlineBlob}
        alt='Outline Blob'
        className='absolute inset-56'
      />
    </>
  );
};

export default NavMenu;
