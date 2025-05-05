import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-primary-500">
          {skill.icon}
        </div>
        <div className="flex-grow">
          <h3 className="font-medium text-lg">{skill.name}</h3>
          <div className="mt-2 bg-dark-100 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;