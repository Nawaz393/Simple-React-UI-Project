import React from 'react'
import {motion} from 'framer-motion'
import {Button} from './Anime'

const Footer = () => {
  return (
    <section className='my-4 h-[70vh] -z-10 w-full  bottom-0 bg-pink-600  static'>

    <div className='flex flex-col justify-center h-full items-center '>
    
    <h1 className='text-white text-4xl font-quick font-bold py-4 '>Feeling in love?<span className='italic'>Purchase Flone !</span> </h1>
    <p className='text-white text-bold py-3 '>Impressive design, powerful features, and easy customization</p>
    <motion.a 
    variants={Button}
    whileHover='animate'
    href='mailto:mohdnawaz6393@gmail.com'
    className='bg-white py-4 px-6 rounded-md font-semibold  my-4  cursor-pointer hover:bg-slate-200' >Contact us
    </motion.a>
    </div>
    
    </section>
  )
}

export default Footer
