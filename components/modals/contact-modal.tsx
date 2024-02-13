'use client';

import React from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { sendContactFormEmail } from '@/lib/mail';
import { ContactFormSchema } from '@/schemas';

import { BarLoader } from 'react-spinners';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from "@/components/ui/textarea"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

interface ContactModalProps {
  onOpen: () => void;
  isOpen: boolean | undefined;
}

const ContactModal = ({ onOpen, isOpen }: ContactModalProps) => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>('');
  const [success, setSuccess] = React.useState<string | undefined>('');

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      service: '',
      clientMessage: '',
    },
  });  

  const handleFormSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      sendContactFormEmail(
        values.email,
        values.name,
        values.phoneNumber,
        values.service,
        values.clientMessage,
      ).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          form.reset();
          
          const timeoutId = setTimeout(() => {
            setError('');
            setSuccess('');
          }, 5000)

          return () => clearTimeout(timeoutId);
        }
      });
    });
  };

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
     
    //set up the timeout when the component mounts
    timeoutId = setTimeout(() => {
      setError('');
      setSuccess('');
    },  5000);
     
    //clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <Dialog open={isOpen}>
      <DialogTrigger onClick={onOpen} />
      {success ? (
        <DialogContent className="flex flex-col items-center justify-center space-y-8">
          <DialogHeader>
            <DialogTitle className="text-center text-slate-700">
              Thank you for contacting us!
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <FormSuccess message={success} />
          </DialogDescription>
        </DialogContent>
        
      ) : (
        <DialogContent className='mt-4 sm:mt-0'>
        <DialogTitle className="text-center text-slate-700">
          <IoMdCloseCircleOutline
            onClick={onOpen}
            className="h-7 w-7 absolute top-0 right-0 mt-1 mr-1 hover:cursor-pointer text-slate-700"
          />
          Contact Us to Schedule Your Next Cleaning!
        </DialogTitle>
        <DialogDescription>
          
        </DialogDescription>
      </DialogContent>
      )}
    </Dialog>
  );
};

export default ContactModal;
