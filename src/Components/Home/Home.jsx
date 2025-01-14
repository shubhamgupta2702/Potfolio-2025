import React from "react";
import useThemeSwitcher from '../Hooks/useThemeSwitcher.jsx';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../Images/developer.svg';
import developerDark from '../Images/developer-dark.svg';
import { motion } from 'framer-motion';
import { BackgroundBlogCard } from "../Card/Card.jsx";
import { NavLink } from "react-router-dom";
import { HERO_SECTION } from "../Constants/Constants.js";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
} from "@material-tailwind/react";
import { FaDownload, FaFileDownload } from "react-icons/fa";

function Home(){
    const [activeTheme] = useThemeSwitcher();
    return(
        <>
        <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="w-full bg-gradient-to-r from-slate-900 to-gray-300 flex flex-col sm:justify-between items-center sm:flex-row "
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
					className="ml-14 pb-2 text-4xl lg:text-8xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase text-white tracking-tighter"
				>
				<span className="text-blue-400 font-bold">Shubham Gupta</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent ml-16"
				>
				 Full Stack Developer 
				</motion.p>
				<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.2,
				}}
				className="my-2 ml-5 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-white"
				>
					{HERO_SECTION}
					
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
						className=""
						aria-label="Download Resume"
					>
						
						
						<button className="font-general-medium flex justify-center items-center w-36 ml-24 sm:w-48 mt-5 mb-11 sm:mb-0 text-lg  border-2 border-white rounded-3xl hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500  hover:shadow-blue-500 hover:before:left-0 hover:text-white hover:before:w-full">
							
						
						
						<span className="relative z-10 text-sm sm:text-lg font-general-medium duration-100">
						
							Download CV
						</span>
						</button>
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
				className='shadow-xl shadow-slate-900 m-12 mb-28 float-right overflow-x-scroll rounded-full'
					src="https://media.licdn.com/dms/image/v2/D4D03AQFvaJ3xNENLHw/profile-displayphoto-shrink_400_400/B4DZRRPelPHIAk-/0/1736529803411?e=1741824000&v=beta&t=Z2LJUIWh_rqqrGf4Wt1EdPfUuR6XbkN5aBtG8Yo28_I"
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