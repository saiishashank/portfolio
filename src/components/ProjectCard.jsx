import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="card group flex flex-col" // Ensure full height & vertical layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-dark-200 dark:bg-dark-700 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between"> {/* Stretch content */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-4 whitespace-pre-line">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto"> {/* Push to bottom */}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} className="mr-2" />
              View Live
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} className="mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
