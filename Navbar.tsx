import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center">
            <a href="#home" className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Portfolio
              </span>
            </a>
          </motion.div>
          {/* Desktop Menu */}
          <motion.nav initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="hidden md:flex space-x-8">
            {navItems.map((item, index) => <a key={item.name} href={item.href} className="relative font-medium text-gray-200 hover:text-white transition-colors group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </motion.nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 hover:text-white focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 'auto' : 0
    }} transition={{
      duration: 0.3
    }} className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-white py-2 text-center">
                {item.name}
              </a>)}
          </div>
        </div>
      </motion.div>
    </header>;
};
export default Navbar;