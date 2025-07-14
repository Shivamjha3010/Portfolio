import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.2
  }} viewport={{
    once: true
  }} className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800">
      <div className="relative h-64 overflow-hidden">
        <motion.img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div>
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mr-3 bg-white/10 backdrop-blur-sm p-2 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition-colors">
                <ExternalLinkIcon size={18} />
              </a>}
            {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm p-2 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition-colors">
                <GithubIcon size={18} />
              </a>}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => <span key={i} className="text-xs py-1 px-2 rounded-full bg-gray-800 text-gray-300">
              {tag}
            </span>)}
        </div>
      </div>
      <motion.div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" initial={{
      scaleX: 0
    }} whileInView={{
      scaleX: 1
    }} transition={{
      duration: 0.6,
      delay: 0.3 + index * 0.2
    }} viewport={{
      once: true
    }} />
    </motion.div>;
};
export default ProjectCard;