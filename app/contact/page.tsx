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

import { IoMdArrowRoundBack } from 'react-icons/io';

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
      <IoMdArrowRoundBack
        onClick={() => router.back()}
        className="sm:hidden flex h-6 w-6 absolute left-10 top-0"
      />

      <h2 className="hidden sm:flex text-center text-xl sm:text-2xl text-[#ffa600] font-bold">
        Contact Us to Schedule Your Next Cleaning!
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-6 p-10 sm:p-5 mt-20 sm:mt-5"
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
        <Button            
            variant={'outline'}
            className="hidden sm:flex w-[92%] ml-5"
            disabled={isPending}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
      </Form>
    </div>
  );
};

export default ContactPage;
