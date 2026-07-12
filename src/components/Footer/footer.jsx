import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#14111A] border-t border-white/10 text-white py-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Husnain
              <span className="text-orange-500">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend & MERN Stack Developer
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/husnainjavaid856"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-orange-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/husnainjavaid"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-orange-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:husnain.javaid852@gmail.com"
              className="text-2xl hover:text-orange-500 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Husnain Javaid. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;