import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact Details</h2>
      <p>
        send me an email, or add me on your social media, and i'll get in touch!
      </p>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn--outline">
          Email Me
        </span>
      </a>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/neha-chintawar-46a713228/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nehachintawar"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
