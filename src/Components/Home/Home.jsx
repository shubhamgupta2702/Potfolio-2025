import React from "react";
import useThemeSwitcher from '../Hooks/useThemeSwitcher.jsx';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../Images/developer.svg';
import developerDark from '../Images/developer-dark.svg';
import { motion } from 'framer-motion';
import { BackgroundBlogCard } from "../Card/Card.jsx";
import { NavLink } from "react-router-dom";

function Home(){
    const [activeTheme] = useThemeSwitcher();
    return(
        <>
        <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="bg-gradient-to-r from-slate-400 to-blue-900 flex flex-col sm:justify-between items-center sm:flex-row "
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="ml-12 font-extrabold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase text-black"
				>
					Hi, I am <span className="text-red-900">Shubham</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-serif mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-black ml-5"
				>
					A Frontend Developer & MERN Stack Enthusiast.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Resume.pdf"
						href="/files/Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 ml-24 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-black hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			
			
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img 
				className=' m-12 float-right overflow-x-scroll rounded-full'
					src="https://media.licdn.com/dms/image/v2/D5603AQEQeqm1UYtjzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722875762539?e=1740614400&v=beta&t=YWoVqDKiFKTcHSWuznjSxBzqGmrTgwxmuRPsd2AiZc8"
					alt="Developer"
				/>
			</motion.div>
		
		</motion.section>
		
		<h1 className='text-3xl p-9 font-bold text-center '>Projects</h1>
        <BackgroundBlogCard/>
        </>
    )
}


export default Home