'use client';

import React from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { sendContactFormEmail } from '@/lib/mail';
import { ContactFormSchema } from '@/schemas';

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
} from "@/components/ui/select"

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
        values.service
      ).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger onClick={onOpen} />
      <DialogContent>
        <DialogTitle className="text-center text-slate-700">
          <IoMdCloseCircleOutline
            onClick={onOpen}
            className="h-7 w-7 absolute top-0 right-0 mt-1 mr-1 hover:cursor-pointer text-slate-700"
          />
          Contact Us to Schedule Your Next Cleaning!
        </DialogTitle>
        <DialogDescription className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Name"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="email.here@example.com"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* phone-number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="123-456-7890"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* service */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service you're looking for" />
                          </SelectTrigger>
                          {/* TODO: finish adding options */}
                        </FormControl>
                      </Select>
                    </FormItem>
                  )}
                  />
              </div>
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
