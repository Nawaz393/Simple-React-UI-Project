import React, { useEffect ,useState} from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import data from '../pages/data'
import AnimeImage from './AnimeImage';

const AutoImageSlider = () => {
    const [image,setImage]=useState(0);
    const changeImage=()=>{
        setImage(prevIndex => (prevIndex + 1) % data.length)
    }
    useEffect(()=>{
 const id=setInterval(()=>{
    changeImage()
    },8000)
    return ()=>clearInterval(id)
    },[])
  return (
    <section className='w-[97vw] my-16 h-96 relative flex -z-10 items-center justify-center'>

    <MdChevronLeft className=' 
    absolute top-52 left-16  md:left-28
      h-10 w-10 cursor-pointer'
      onClick={changeImage}
      />
    <MdChevronRight className='  h-10 w-10 cursor-pointer absolute top-52 right-16 md:right-28' 
    onClick={changeImage}
    />
    
    {data && <AnimeImage image={data[image].urls.regular}/>}
    
    </section>
  )
}

export default AutoImageSlider
