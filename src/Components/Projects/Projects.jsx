import React from 'react'
import { motion } from 'framer-motion';
import { EcommerceImage } from '../Constants/Constants.js';
import { DiMongodb } from 'react-icons/di';
import ProjectCard from '../Card/ProjectCard.jsx';

function Projects() {
  return (
    <>
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="w-full bg-gradient-to-r from-slate-950 to-gray-300 sm:justify-between  sm:flex-row items-center justify-center">

        <div className='pb-4'>
         <motion.h2
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{
                         ease: 'easeInOut',
                         duration: 0.9,
                         delay: 0.2,
                       }}>
                       <h2 className='pb-20 pt-7 text-center text-5xl text-white justify-center font-bold font-serif items-center'>Projects</h2>
                       </motion.h2>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

        </div>

      </motion.section>
    </>
  )
}

export default Projects
