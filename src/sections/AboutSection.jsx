import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-950/50">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and experience"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Animated MERN Stack Block */}
          <motion.div
            className="p-6 rounded-xl bg-dark-100 dark:bg-dark-800 shadow-lg ml-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {["MERN", "STACK..."].map((word, wIdx) => (
              <div
                key={wIdx}
                className="flex space-x-2 mb-2 text-5xl font-bold text-primary-500"
              >
                {word.split("").map((char, cIdx) => (
                  <motion.span
                    key={`${wIdx}-${cIdx}`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              I'm a{" "}
              <span className="text-primary-500">MERN Stack Developer</span>{" "}
              dedicated to building impactful and seamless digital experiences.
            </h3>

            <div className="space-y-4 text-dark-600 dark:text-dark-300 mb-8">
              <p>
                With 2 years of hands-on experience in MERN stack development, I
                specialize in crafting modern, responsive, and user-centric web
                applications that create real value for users and drive business
                growth.
              </p>
              <p>
                I blend strong technical skills with user experience insights to
                build solutions that are both highly functional and effortlessly
                intuitive.
              </p>
              <p>
                When I’m not coding, I enjoy exploring emerging technologies and
                sharing what I learn with others.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Name", value: "Sai Shashank Pendyala" },
                { label: "Email", value: "saishashank.pendyala@gmail.com" },
                { label: "Phone", value: "+91 6301268662" },
                { label: "Location", value: "Hyderabad, Telangana, India." },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-sm text-dark-400 dark:text-dark-500">
                    {item.label}
                  </span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docs.google.com/document/d/1lDhNExJmRXPb4-9Cnmu2AjVIUKeO7l7rQzBBb6-NRmo/edit?usp=sharing"
                className="btn btn-primary"
              >
                Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                <FileText size={18} className="mr-2" />
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
