import React from 'react'
import {motion} from 'framer-motion'
import {imagechange } from './Anime';
import data from '../pages/data'

const AnimeImage = ({image}) => {
  return (
    <motion.div
    id={image}
    variants={imagechange}
    initial='hidden'
    animate='visible'
    style={{backgroundImage:`url(${image})`}}
    className=" w-10/12 h-full bg-cover bg-center rounded-sm shadow-lg"
    >
    </motion.div>
  )
}

export default AnimeImage
