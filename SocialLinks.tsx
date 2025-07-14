import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, MailIcon } from 'lucide-react';
const SocialLinks = () => {
  const socialLinks = [{
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/Shivamjha3010',
    label: 'GitHub'
  }, {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/shivam-jha-8142722ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5e%2FNoNm9SRm6qrRUV7weRg%3D%3D',
    label: 'LinkedIn'
  },  {
    icon: <InstagramIcon size={20} />,
    href: 'https://www.instagram.com/shivamm__jha/',
    label: 'Instagram'
  }, {
    icon: <MailIcon size={20} />,
    href: 'mailto:shivamjha3010@gmail.com',
    label: 'Email'
  }];
  return <div className="flex space-x-4">
      {socialLinks.map((link, index) => <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3,
      delay: index * 0.1
    }} whileHover={{
      y: -5,
      scale: 1.1
    }} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors" aria-label={link.label}>
          {link.icon}
        </motion.a>)}
    </div>;
};
export default SocialLinks;