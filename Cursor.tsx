/**/import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
      setHidden(false);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);
    const handleMouseLeave = () => setHidden(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  useEffect(() => {
    // Update links when DOM changes
    const links = document.querySelectorAll('a, button');
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  return <>
      <motion.div className="fixed top-0 left-0 w-6 h-6 rounded-full bg-transparent border border-white z-50 pointer-events-none" animate={{
      x: position.x - 12,
      y: position.y - 12,
      scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
      opacity: hidden ? 0 : 1,
      borderColor: linkHovered ? 'rgba(139, 92, 246, 1)' : 'rgba(255, 255, 255, 0.8)'
    }} transition={{
      type: 'spring',
      mass: 0.1,
      stiffness: 800,
      damping: 30
    }} />
      <motion.div className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white z-50 pointer-events-none" animate={{
      x: position.x - 4,
      y: position.y - 4,
      opacity: hidden ? 0 : 1,
      backgroundColor: linkHovered ? 'rgba(139, 92, 246, 1)' : 'rgba(255, 255, 255, 0.8)'
    }} transition={{
      type: 'spring',
      mass: 0.05,
      stiffness: 1000,
      damping: 25
    }} />
    </>;
};
export default Cursor;