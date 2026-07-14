import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        alert("Something went wrong.");

        setLoading(false);
      });
  };
  return (
    <section id="contact" className="min-h-screen overflow-x-hidden bg-linear-to-r from-[#16131D] via-[#241515] to-[#5A220F] text-white pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-10 py-12 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-orange-500 font-semibold text-sm">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Let's Build Something
            <span className="text-orange-500"> Together</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7 text-base sm:text-lg px-2">
            Have a project, internship opportunity or just want to say hello?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mt-8">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md rounded-3xl border border-orange-500/20 p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400 break-all">
                  husnain.javaid852@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Location</h3>
                <p className="text-gray-400">
                  Bahawalpur, Pakistan
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Connect with me
              </h3>
              <div className="flex gap-5">
                <a href="https://github.com/husnainjavaid856" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110">
                  <FaGithub />
                </a>

                <a href="https://linkedin.com/in/husnainjavaid" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110" >
                  <FaLinkedin />
                </a>

                <a href="mailto:husnain.javaid852@gmail.com" className="w-12 h-12 rounded-full bg-[#211A28] flex items-center justify-center text-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-2 hover:scale-110" >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Right */}
          <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-lg" >
            <input type="text" name="name" placeholder="Your Name" className="w-full bg-[#221A27] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
            <input type="email" name="email" placeholder="Your Email" className="w-full bg-[#221A27] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
            <input type="text" name="subject" placeholder="Subject" className="w-full bg-[#221A27] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
            <textarea rows={5} name="message" placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base outline-none resize-none focus:border-orange-500 transition"></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold text-lg transition hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;