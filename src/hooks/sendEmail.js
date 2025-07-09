
import emailjs from 'emailjs-com';

export const sendEmail = async ({ name, email, company, message }) => {
  const time = new Date().toLocaleString();

  const templateParams = {
    name,
    email,
    company,
    message,
    time,
  };

  return emailjs.send(
    'service_mcnd9jm',        // ✅ Seu Service ID
    'template_ew8ecqz',       // ✅ Seu Template ID
    templateParams,
    'Wr3WijL7N7bgMYQXd'       // ✅ Sua Public Key
  );
};
