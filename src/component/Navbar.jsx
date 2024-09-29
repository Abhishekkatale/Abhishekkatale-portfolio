import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // assuming this icon is correct

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-16" /> 
      </div>
      <div className="flex space-x-4 text-white">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
