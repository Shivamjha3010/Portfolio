import React from 'react';
import { motion } from 'framer-motion';
interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 0-100
  color?: string;
  index: number;
}
const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  level = 80,
  color = 'from-purple-500 to-blue-500',
  index
}) => {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.4,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} whileHover={{
    y: -5
  }} className="flex flex-col items-center">
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-800 flex items-center justify-center relative overflow-hidden group mb-3`}>
        <div className="z-10 text-2xl md:text-3xl">{icon}</div>
        <motion.div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${color}`} initial={{
        height: 0
      }} whileInView={{
        height: `${level}%`
      }} transition={{
        duration: 1,
        delay: 0.3 + index * 0.1
      }} viewport={{
        once: true
      }} style={{
        opacity: 0.2
      }} />
        <motion.div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      </div>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </motion.div>;
};
export default SkillBadge;