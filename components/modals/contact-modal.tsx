'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';

import { IoMdCloseCircleOutline } from 'react-icons/io';

interface ContactModalProps {
  onOpen: () => void;
  isOpen: boolean | undefined;
  // onClose: () => void;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const ContactModal = ({ onOpen, isOpen }: ContactModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger onClick={onOpen} />
      <DialogContent>
        <DialogTitle
          className='text-center text-slate-700'
        >

          <IoMdCloseCircleOutline
            onClick={onOpen}
            className="h-7 w-7 absolute top-0 right-0 mt-2 mr-2 hover:cursor-pointer text-slate-700"
          />

          Contact Us to Schedule Your Next Cleaning
        </DialogTitle>
        <DialogDescription
          className=''
        >
          
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
