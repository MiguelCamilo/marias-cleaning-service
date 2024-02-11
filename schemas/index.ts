import * as z from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Full name is required.' })
    .trim()
    .toUpperCase(),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Please enter a valid phone number.' })
    .max(10, { message: 'Please enter a valid phone number.' })
    .trim(),
  service: z.string(),
});
