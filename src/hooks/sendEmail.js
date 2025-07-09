// src/hooks/sendEmail.js

import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_mcnd9jm';
const TEMPLATE_ID = 'template_ew8ecqz';
const PUBLIC_KEY = 'Wr3WijL7N7bgMYQXd';

const sendEmail = async ({ name, email, company, message }) => {
  const templateParams = {
    name,
    email,
    company,
    message,
    title: 'New message from your portfolio!',
    time: new Date().toLocaleString()
  };

  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};

export default sendEmail;
