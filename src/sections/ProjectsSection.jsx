import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'MediFlex',
      description: `Developed a MERN stack application to manage and preserve medical prescriptions.
Enables secure storage and retrieval of prescriptions using base64 encoding.
Improved security by 60% with JWT-based authentication and password hashing.
Integrated doctor appointment scheduling, reducing manual work by 50%.`,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],

      githubUrl: 'https://github.com/saiishashank/Mediflex',
    },
    {
      id: 2,
      title: 'BookNow',
      description: `Developed a user-friendly platform for ordering books.
Authors can easily add books to the market and track orders.
Streamlines book management and reduces author effort by 50%.
Integrated Google Authentication using Firebase.`,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Node.js', 'Firebase'],
     
      githubUrl: 'https://github.com/saiishashank/BookNow',
    },
    {
      id: 3,
      title: 'makeNote',
      description: `A minimal web platform to save and delete notes.
Built with HTML, CSS, and JavaScript.
Lightweight and fast for everyday note-taking tasks.`,
      image: 'https://www.ach.edu/wp-content/uploads/2017/01/Notes2.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
     
      githubUrl: 'https://github.com/saiishashank/MakeNote',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
