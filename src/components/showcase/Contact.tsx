import React, { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';
import sendEmail from '../../hooks/sendEmail'; // 🚨 Importa o novo hook aqui

export interface ContactProps {}

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
  icon: string;
  link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
  return (
    <a rel="noreferrer" target="_blank" href={link}>
      <div className="big-button-container" style={styles.social}>
        <img src={icon} alt="" style={styles.socialImage} />
      </div>
    </a>
  );
};

const Contact: React.FC<ContactProps> = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageColor, setFormMessageColor] = useState('');

  useEffect(() => {
    setIsFormValid(validateEmail(email) && name.length > 0 && message.length > 0);
  }, [email, name, message]);

  const submitForm = async () => {
    if (!isFormValid) {
      setFormMessage('Invalid fields. Please check your data.');
      setFormMessageColor(colors.red);
      return;
    }

    setIsLoading(true);
    const { success } = await sendEmail({ name, email, company, message });

    if (success) {
      setFormMessage(`Message sent successfully. Thank you, ${name}!`);
      setFormMessageColor(colors.blue);
      setCompany('');
      setEmail('');
      setName('');
      setMessage('');
    } else {
      setFormMessage('There was an error sending your message. Please try again.');
      setFormMessageColor(colors.red);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (formMessage.length > 0) {
      const timeout = setTimeout(() => {
        setFormMessage('');
        setFormMessageColor('');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [formMessage]);

  return (
    <>
      <style>
        {`
        .site-page-content {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        .site-page-content::-webkit-scrollbar {
          width: 6px;
          height: 6px;
          opacity: 0;
        }
        .site-page-content::-webkit-scrollbar-track {
          background: transparent;
          opacity: 0;
        }
        .site-page-content::-webkit-scrollbar-thumb {
          background: transparent;
          opacity: 0;
        }
        .site-page-content::-webkit-scrollbar-thumb:hover {
          background: transparent;
          opacity: 0;
        }
      `}
      </style>

      <div className="site-page-content" style={styles.sitePageContent}>
        <div style={styles.header}>
          <h1>Contact</h1>
          <div style={styles.socials}>
            <SocialBox icon={ghIcon} link="https://github.com/PeteerPT" />
            <SocialBox icon={inIcon} link="http://www.linkedin.com/in/pedro-oliveira-666a40356" />
          </div>
        </div>

        <div className="text-block">
          <p>
            I'm actively seeking new opportunities as a Full Stack Developer!
            Having recently transitioned from my military service (March 2025), I'm excited to bring my leadership experience and technical skills to innovative tech projects.
          </p>
          <br />
          <p>
            You can reach me via email, or fill out the form below. I'm fluent in Portuguese, English, and Spanish.
          </p>
          <br />
          <p>
            <b>Email: </b>
            <a href="mailto:pedro10pedrolck@gmail.com">pedro10pedrolck@gmail.com</a>
          </p>
          <p>
            <b>Location: </b>
            Tomar - Santarém, Portugal
          </p>

          <div style={styles.form}>
            <label>
              <p>
                {!name && <span style={styles.star}>*</span>}
                <b>Your name:</b>
              </p>
            </label>
            <input
              style={styles.formItem}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>
              <p>
                {!validateEmail(email) && <span style={styles.star}>*</span>}
                <b>Email:</b>
              </p>
            </label>
            <input
              style={styles.formItem}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              <p><b>Company (optional):</b></p>
            </label>
            <input
              style={styles.formItem}
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label>
              <p>
                {!message && <span style={styles.star}>*</span>}
                <b>Message:</b>
              </p>
            </label>
            <textarea
              style={styles.formItem}
              placeholder="Tell me about your project or opportunity..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div style={styles.buttons}>
              <button
                className="site-button"
                style={styles.button}
                type="submit"
                disabled={!isFormValid || isLoading}
                onClick={submitForm}
              >
                {isLoading ? <p className="loading">Sending...</p> : 'Send Message'}
              </button>

              <div style={styles.formInfo}>
                <p style={{ color: formMessageColor }}>
                  <b><sub>{formMessage || 'All messages go straight to my inbox.'}</sub></b>
                </p>
                <p>
                  <sub>
                    {!isFormValid ? (
                      <span><b style={styles.star}>*</b> = required</span>
                    ) : '\xa0'}
                  </sub>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ResumeDownload altText="Need a copy of my Resume?" />
      </div>
    </>
  );
};

const styles: StyleSheetCSS = {
  sitePageContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '40px 10px',
    textAlign: 'center',
  },
  form: {
    flexDirection: 'column',
    marginTop: 32,
  },
  formItem: {
    marginTop: 4,
    marginBottom: 16,
  },
  socialImage: {
    width: 36,
    height: 36,
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInfo: {
    textAlign: 'right',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: 24,
  },
  star: {
    paddingRight: 4,
    color: 'red',
  },
  button: {
    minWidth: 184,
    height: 32,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  socials: {
    marginBottom: 16,
    justifyContent: 'flex-end',
  },
  social: {
    width: 4,
    height: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
};

export default Contact;
