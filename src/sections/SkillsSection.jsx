import { motion } from "framer-motion";
import { Code, Layout, Palette, Database } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

const SkillsSection = () => {
  const skills = [
    {
      name: "Frontend Development",
      level: 60,
      icon: <Layout size={24} />,
    },
    {
      name: "Backend Development",
      level: 75,
      icon: <Database size={24} />,
    },
    {
      name: "UI/UX Design",
      level: 50,
      icon: <Palette size={24} />,
    },
    {
      name: "JavaScript & React",
      level: 60,
      icon: <Code size={24} />,
    },
    {
      name: "Python",
      level: 75,
      icon: <Code size={24} />,
    },
    {
      name: "SQL",
      level: 75,
      icon: <Database size={24} />,
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "python",
    "HTML",
    "Tailwind CSS",
    "Redux",
    "Firebase",
    "Git",
  ];

  return (
    <section id="skills" className="section bg-dark-50 dark:bg-dark-950/50">
      <div className="container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="What I bring to the table"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies I Work With
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white dark:bg-dark-800 px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
