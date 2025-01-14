import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads } from 'react-icons/fa6'

function Header() {
  return (
    <>
    <nav className='bg-gradient-to-r from-slate-900 to-gray-300 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/"
        aria-label='Home'
        >
          <img src="/" 
          className='mx-2' width={50} height={33}
          alt="Shubham" /> 
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-8 text-2xl'>
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
        > <FaInstagram/>
           </a>
      </div>
    </nav>
    </>
  )
}

export default Header
