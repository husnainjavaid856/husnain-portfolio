import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#16131D]/80 backdrop-blur-lg border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-bold text-white tracking-wide"
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
        {open && (
          <div className="md:hidden bg-[#1B1723] rounded-xl mb-4 p-6">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-3 text-center bg-orange-500 py-3 rounded-full text-white font-semibold hover:bg-orange-600 transition"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;