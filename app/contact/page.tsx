'use client';

import React from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { sendContactFormEmail } from '@/lib/mail';
import { ContactFormSchema } from '@/schemas';

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
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

import { IoMdCloseCircleOutline } from 'react-icons/io';

const ContactPage = () => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | undefined>('');
  const [success, setSuccess] = React.useState<string | undefined>('');

  const router = useRouter();

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
        values.clientMessage
      ).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          form.reset();

          const timeoutId = setTimeout(() => {
            setError('');
            setSuccess('');
          }, 5000);

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
    }, 5000);

    //clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <IoMdCloseCircleOutline
        onClick={() => router.back()}
        className="h-6 w-6 sm:h-8 sm:w-8 absolute -top-1.5 sm:-top-0 bottom-0 -right-5 sm:right-0 m-5 hover:cursor-pointer text-slate-700 hover:box-shadow-lg rounded-full"
      />

      <h2 className="h-0 absolute top-3 sm:top-10 right-0 bottom-0 left-0 text-center text-xl sm:text-2xl text-[#ffa600] font-bold">
        Contact Us to Schedule Your Next Cleaning!
      </h2>
      {/* <Image
        src={logo}
        alt="Orange Blob"
        className="h-10 w-10 absolute -top-[10rem] bottom-0 sm:-left-20 left-10 right-0 z-10"
      /> */}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-6 p-5 mt-5"
        >
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="Name" />
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
                    type="tel"
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
                <FormLabel>Services</FormLabel>
                <FormDescription>
                  Please select the service youre interested in:
                </FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service you're looking for" />
                    </SelectTrigger>
                  </FormControl>

                  <FormMessage />

                  <SelectContent>
                    <SelectItem value="House Cleaning">
                      House Cleaning
                    </SelectItem>
                    <SelectItem value="Apartment Cleaning">
                      Apartment Cleaning
                    </SelectItem>
                    <SelectItem value="Office Cleaning">
                      Office Cleaning
                    </SelectItem>
                    <SelectItem value="Small Business Cleaning">
                      Small Business Cleaning*
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* client message */}
          <FormField
            control={form.control}
            name="clientMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Please let us know details of the location you want cleaned:
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Message"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            variant={'default'}
            className="w-full"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactPage;

{
  /* <form className="fixed inset-0 p-8 bg-white rounded-lg shadow-md px-4">
<div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-bold">
    Contact Us to Schedule Your Next Cleaning!
  </h2>
</div>
<form className="px-4">
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor="full-name">
      Full Name
    </label>
    <Input id="full-name" placeholder="Name" />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor="email">
      Email
    </label>
    <Input id="email" placeholder="email.here@example.com" type="email" />
  </div>
  <div className="mb-4">
    <label
      className="block text-sm font-medium mb-1"
      htmlFor="phone-number"
    >
      Phone Number
    </label>
    <Input id="phone-number" placeholder="123-456-7890" type="tel" />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor="services">
      Services
    </label>
    <Select>
      <SelectTrigger id="services">
        <SelectValue placeholder="Select a service you're looking for" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="service1">Service 1</SelectItem>
        <SelectItem value="service2">Service 2</SelectItem>
        <SelectItem value="service3">Service 3</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium mb-1" htmlFor="message">
      Please let us know details of the location you want cleaned:
    </label>
    <Textarea id="message" placeholder="Message" />
  </div>
  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white">
    Submit
  </Button>
</form>
</form> */
}
