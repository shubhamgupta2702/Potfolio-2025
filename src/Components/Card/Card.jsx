import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { motion } from 'framer-motion';
  import { NavLink } from 'react-router-dom'

   
  export function BackgroundBlogCard(){
    return (

      // Card 1
        <motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
			className="bg-gradient-to-r from-slate-700 to-violet-100 flex flex-col sm:justify-between items-center sm:flex-row "
		>
        <Card
        shadow={false}
        className="relative ml-5 mt-5 mb-5 grid h-[40rem] max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-3xl cursor-default"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 text-3xl font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          
          <Typography variant="h5" className="mb-4 text-gray-400">
          <button className=" border-2 border-white rounded-3xl hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-blue-700 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500  hover:shadow-blue-500 hover:before:left-0 hover:text-white hover:before:w-full"><span class="relative z-10">Read More</span></button>
          </Typography>
          
        </CardBody>
      </Card>


      {/* Card2 */}

      <Card
        shadow={false}
        className="relative ml-5 mt-5 mb-5 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-3xl cursor-default"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 text-3xl font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          
          <Typography variant="h5" className="mb-4 text-gray-400">
          <button className=" border-2 border-white rounded-3xl hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-blue-700 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500  hover:shadow-blue-500 hover:before:left-0 hover:text-white hover:before:w-full"><span class="relative z-10">Read More</span></button>
          </Typography>
          
        </CardBody>
      </Card>


      <Card
        shadow={false}
        className=" cursor-default relative ml-5 mt-5 mb-5 mr-5 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-3xl"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 text-3xl font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          
          <Typography variant="h5" className="mb-4 text-gray-400">
          <button className=" border-2 border-white rounded-3xl hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white px-3 text-blue-700 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500  hover:shadow-blue-500 hover:before:left-0 hover:text-white hover:before:w-full"><span class="relative z-10">Read More</span></button>
          </Typography>
          
        </CardBody>
      </Card>
      
      </motion.section>


    
     
    )}