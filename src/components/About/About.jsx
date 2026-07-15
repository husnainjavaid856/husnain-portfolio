import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-linear-to-r from-[#16131D] via-[#241515] to-[#5A220F] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Section Title */}
        <motion.p initial={{ opacity: 0, y: 30 }}whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.5 }}viewport={{ once: true }}className="uppercase tracking-[6px] text-orange-500 font-semibold text-sm">
          About Me
        </motion.p>
        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 30 }}whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.7 }}viewport={{ once: true }}className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Get to Know{" "}
         <span className="text-orange-500">Me Better</span>
        </motion.h2>
        {/* Main Text */}
        <motion.p initial={{ opacity: 0, y: 30 }}whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.9 }}viewport={{ once: true }}className="mt-8 text-gray-300 text-base sm:text-lg leading-8 max-w-3xl mx-auto">
          I'm <span className="text-white font-semibold">Husnain Javaid</span>,
          a passionate <span className="text-orange-500">Frontend</span> and{" "}
          <span className="text-orange-500">MERN Stack Developer</span> currently
          pursuing my Bachelor's degree.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }}whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 1.1 }}viewport={{ once: true }}className="mt-2 text-gray-400 text-base leading-8 max-w-3xl mx-auto">
          I enjoy transforming ideas into responsive, modern, and user-friendly
          web applications. My focus is on writing clean, maintainable code
          while continuously learning new technologies to build meaningful
          digital experiences.
        </motion.p>

        {/* Button */}
        <motion.a initial={{ opacity: 0, scale: 0.8 }}whileInView={{ opacity: 1, scale: 1 }}transition={{ duration: 1.2 }}viewport={{ once: true }}href="#contact"className="inline-flex items-center gap-2 mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          Let's Work Together
          <HiArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default About;