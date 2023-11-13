import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Anime';
import Search from './Search';
const Slide = () => {
    return (
        <div className='flex items-center justify-start  sm:px-12 h-20 bg-gray-100  opacity-80 '>
            <a href='#' className=' hidden sm:block font-bold font-sans text-sm tracking-wide '>
                Flone.
                </a>
<div className='ml-auto mr-auto mb-5'><Search/></div>
   
        </div>
    );
}

export default Slide;
