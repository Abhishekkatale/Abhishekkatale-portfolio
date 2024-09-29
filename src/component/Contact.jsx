import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-800 transition-colors duration-300" />
        </a>
        <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
