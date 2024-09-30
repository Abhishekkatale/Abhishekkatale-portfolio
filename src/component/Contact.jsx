import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Ensure framer-motion is imported

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animated Header */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      {/* Animated Contact Details */}
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Animated Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        {[
          { icon: <FaLinkedin />, link: CONTACT.linkedin, label: "LinkedIn" },
          { icon: <FaGithub />, link: CONTACT.github, label: "GitHub" },
          { icon: <FaTwitter />, link: CONTACT.twitter, label: "Twitter" },
          { icon: <FaInstagram />, link: CONTACT.instagram, label: "Instagram" },
        ].map(({ icon, link, label }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, rotate: 15 }} // Scale and rotate on hover
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl hover:transition-colors duration-300"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
