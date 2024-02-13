import emailjs from '@emailjs/browser';

export const sendContactFormEmail = async (
  email: string,
  name: string,
  phoneNumber: string,
  service: string,
  clientMessage?: string
) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  if (!serviceId || !templateId) {
    console.error('Service ID or Template ID is not defined');
    return {
      error: 'Unable to send email at this time. Please try again.',
    };
  }

  const templateParams = {
    from_email: email,
    from_name: name,
    message: `Phone Number: ${phoneNumber} \nService: ${service} \nMessage: ${clientMessage}`,
  };

  try {
    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    });
    return {
      success: 'Thank you, we will contact you within 1-2 business days!',
    };
  } catch (error) {
    console.error('Error sending email', error);
    return {
      error: 'Unable to send email at this time. Please try again.',
    };
  }
};
