import emailjs from '@emailjs/browser';

export const sendContactFormEmail = async (email: string, name: string, phoneNumber: string, service: string,) => {
    const serviceId = process.env.EMAIL_SERVICE_ID;
    const templateId = process.env.EMAIL_TEMPLATE_ID;
    const publicKey = process.env.EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId) {
        console.error('Service ID or Template ID is not defined');
        return {
            error: 'Unable to send email at this time. Please try again.'
        }
    }

    const templateParams = {
        email,
        name,
        phoneNumber,
        service
    }

    try {
        emailjs.send(serviceId, templateId, templateParams, { publicKey: publicKey })
        return {
            success: 'Thank you, we will contact you within 1-2 business days!'
        }
    } catch (error) {
        console.error('Error sending email', error);
        return {
            error: 'Unable to send email at this time. Please try again.'
        }
    }
}