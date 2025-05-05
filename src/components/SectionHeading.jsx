import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignmentClasses[alignment]}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 title-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-dark-600 dark:text-dark-300 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;