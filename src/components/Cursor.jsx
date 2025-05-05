import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const mouseEnterLink = () => setCursorVariant('hover');
    const mouseLeaveLink = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Apply hover effect when mouse is over links or buttons
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach((link) => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      mixBlendMode: 'difference',
    },
    click: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: 'rgba(249, 115, 22, 0.5)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(20, 184, 166, 0.3)',
      border: '2px solid rgba(20, 184, 166, 0.7)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default Cursor;