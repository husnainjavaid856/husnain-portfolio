import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";


const Hero = () => {
  const el = useRef(null);
  const [showMouse, setShowMouse] = useState(true);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "React Developer", "MERN Developer"],typeSpeed: 40,backSpeed: 40,loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowMouse(window.scrollY < 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home"className="relative min-h-screen bg-linear-to-r from-[#16131D] via-[#241515] to-[#5A220F] text-white">
      <div className="max-w-7xl mx-auto w-full min-h-screen pt-24 lg:pt-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 overflow-hidden">
        {/* Left Side */}
        <div className=" lg:w-[48%] text-center lg:text-left">
          <p className="text-orange-400 font-semibold tracking-widest uppercase mt-3">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl lg:text-5xl font-extrabold mt-2 leading-tight">
            Hi, I'm
            <br />
            <span className="text-orange-500">Husnain Javaid</span>
          </h1>

          <h2 className="text-3xl mt-2">
            I'm a <span ref={el} className="text-orange-500 font-bold" />
          </h2>

          <p className="text-gray-400 mt-2 max-w-xl leading-7">
            I build modern, responsive, and user-friendly web applications using
            React, Node.js, Express, and MongoDB. Passionate about creating
            beautiful UI with clean code and solving real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
            <a href="#projects" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-7 py-4 rounded-full font-semibold transition">View Projects<HiArrowRight /></a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" className="flex items-center gap-2 border border-orange-500 hover:bg-orange-500 px-7 py-4 rounded-full transition">Download CV<FaDownload /></a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="https://github.com/husnainjavaid856" target="_blank" rel="noreferrer"className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/husnainjavaid/" target="_blank"rel="noreferrer"className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110"><FaLinkedin /></a>
            <a href="mailto:husnain.javaid852@gmail.com" className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-[52%] flex justify-center items-center relative">
          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-orange-500/20 rounded-full blur-[120px]"></div>
          {/* Animated Circle */}
<motion.div
  className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
>
            {/* Outer Border */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.35)]"></div>
            {/* Image */}
            <img src={`${import.meta.env.BASE_URL}my.png`} alt="Husnain Javaid" className="w-full h-full rounded-full object-cover p-3"/>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:block">
        <a href="#about"className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-7 h-12 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
