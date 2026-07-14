import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    // { name: "Projects", href: "#projects" },
    // { name: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full overflow-x-hidden bg-[#16131D]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href={`${import.meta.env.BASE_URL}`}
            className="text-3xl font-bold text-white tracking-wide whitespace-nowrap shrink-0"
          >
            <span className="text-white font-bold text-3xl">Husnain</span>
            <span className="text-orange-500 font-bold text-3xl">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden w-full bg-[#1B1723] rounded-2xl mt-2 p-5 origin-top"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-orange-500 transition"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <a
                  href="#contact"
                  className="mt-3 text-center bg-orange-500 py-3 rounded-full text-white font-semibold hover:bg-orange-600 transition"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
