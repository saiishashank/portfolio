import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedText from "../components/AnimatedText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] bg-accent-100/30 dark:bg-accent-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-dark-600 dark:text-dark-300">
                  Hi, I'm{" "}
                </span>
                <AnimatedText
                  text="Sai Shashank Pendyala"
                  className="title-gradient inline-flex"
                  once={false}
                />
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I create{" "}
                <span className="text-primary-500">
                  engaging digital solutions that address real-world challenges
                </span>{" "}
                and deliver meaningful impact.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  {
                    icon: <Github size={24} />,
                    url: "https://github.com/saiishashank",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    url: "https://www.linkedin.com/in/sai-shashank-pendyala-30b8bb330/",
                    label: "LinkedIn",
                  },
                  
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-dark-500 hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
