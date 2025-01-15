import React from 'react'
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs'
import { FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads } from 'react-icons/fa6'

function Header() {
  return (
    <>
    <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
              className="w-full bg-gradient-to-r from-slate-950 to-gray-300 sm:justify-between items-center sm:flex-row "
            >
    <nav className='bg-gradient-to-r from-slate-950 to-gray-300 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/"
        aria-label='Home'
        className='mx-2 text-3xl ml-10 font-extrabold text-white'
        >
          SG
        </a>
      </div>
      <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 1.1 }}>
      <div className='text-black m-8 flex items-center justify-center gap-8 text-2xl'>
        <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaLinkedin/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaGithub/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaSquareXTwitter/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        className='mr-7'
        > <FaInstagram/>
           </a>
      </div>
      </motion.div>
    </nav>
    </motion.section>
    </>
  )
}

export default Header
