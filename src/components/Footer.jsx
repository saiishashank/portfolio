import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/saiishashank' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sai-shashank-pendyala-30b8bb330/' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:saishashank.pendyala@gmail.com' },
  ];

  return (
    <footer className="py-12 bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold title-gradient">
              Portfolio
            </a>
            <p className="mt-2 text-sm max-w-md">
              Creating beautiful, functional digital experiences with a focus on user needs and business goals.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700 text-center text-sm">
          <p>&copy; {currentYear} saishashank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;