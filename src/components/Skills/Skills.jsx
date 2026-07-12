import { motion } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa6";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },

];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-linear-to-r from-[#16131D] via-[#241515] to-[#5A220F] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-orange-500 font-semibold text-sm">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-orange-500">Tech Stack</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-7">
            Technologies and tools I use to design, develop and deploy
            responsive, scalable and modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="
bg-white/4
backdrop-blur-xl
rounded-2xl
border
border-white/10
hover:border-orange-500
p-6
flex
flex-col
items-center
justify-center
cursor-pointer
transition-all
duration-300
hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]
"
              >
           <motion.div
  whileHover={{
    rotate: 8,
    scale: 1.15,
  }}
  transition={{ duration: 0.25 }}
>
  <Icon
    size={48}
    color={skill.color}
  />
</motion.div>

                <motion.h3
  whileHover={{
    letterSpacing: "1px",
  }}
  className="mt-4 font-semibold"
>
  {skill.name}
</motion.h3>
<div className="w-10 h-0.5 bg-orange-500 rounded-full mt-3"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;