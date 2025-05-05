import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "", once = false }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.02 * i }, // Faster animation
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // <-- Animation triggers every time it enters view
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
