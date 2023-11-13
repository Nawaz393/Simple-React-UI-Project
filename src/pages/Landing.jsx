import React, { useState, useEffect, useRef } from 'react';
import Grids from '../Component/Grids';
import HeadContent from '../Component/HeadContent';
import Navbar from '../Component/Navbar';
import Slide from '../Component/Slide';
import Item from '../Component/Item';
import gdata from "./data"
import { RxDot } from 'react-icons/rx'
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import { motion } from 'framer-motion'
import { Button } from '../Component/Anime';
import Separator from '../Component/Separator';
import Footer from '../Component/Footer';
import AutoImageSlider from '../Component/AutoImageSlider';
import axios from 'axios';
import { CircularProgress, ratingClasses } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import FormDialog from '../Component/FormDialog';
import { useMyContext } from '../../context/CartProvider';
import CartItem from '../Component/CartItem';

const Landing = () => {

    const [data, setdata] = useState();
    const [apidata, SetApiData] = useState();
    const slide = useRef(null);
    const images = [img1, img2, img3, img4];
    const [isLoading, setIsLoading] = useState(false);
const {cart} =useMyContext()
    useEffect(() => {
        (async () => {
            setdata(gdata)
            setIsLoading(true)
            try {
                const res = await axios.get("https://fakestoreapi.com/products")
                console.log(res.data)
                SetApiData(res.data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [])





    return (
        <div className='flex flex-col '>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            <header className='w-full fixed '>
                <Navbar />
                <motion.div>
                    <Slide />
                </motion.div>

            </header>
            <main className='flex flex-col my-32  absolute -z-10' >

                <HeadContent />
                <section className='my-4 w-full'>
                    <h1 className='text-xl font-extrabold px-5 my-8 font-nunito'>New Listings</h1>
                    {isLoading ? <div className='w-full h-20 flex justify-center item-center'> <CircularProgress color='primary' size={80} /></div> :
                        <div className='  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-y-8  px-8 gap-x-8'>
                        {
                               apidata?.map((item) =>  <Item id={item.id} key={item.id} image={item.image} title={item.title} price={item.price}  review={item.rating.rate}/>)
                            }
                        </div>
                    }
                </section>
                <Grids />
                <Separator />
                <section className='my-4 px-2 -z-10  bg-blue-700'>

                    <h1 className='text-white font-Dance text-4xl  lg:text-6xl font-light px-20 py-10'>Immensity of templates and layouts With andvanced Option</h1>
                    <div className='flex flex-col md:flex-row'>


                        <div >

                            <p className='text-orange-400 text-9xl font-bold pl-11'>7<sup className=''>+</sup></p>
                            <h1 className='text-white font-bold text-3xl pl-11 py-4'>Premade Header</h1>
                            <p className='text-white lg:w-1/2  pl-11 font-quick'>Power up your pages with beautifully designed header styles. Each style comes with a variety of header options for your choice.</p>
                        </div>
                        <div>
                            <p className='text-orange-400 text-9xl font-bold pl-11'>3<sup className=''>+</sup></p>
                            <h1 className='text-white font-bold text-3xl pl-11 py-4'>Premade Header</h1>
                            <p className='text-white  lg:w-1/2 pl-11 font-quick pb-10'>Power up your pages with beautifully designed header styles. Each style comes with a variety of header options for your choice.</p>
                        </div>
                    </div>


                </section>

                <AutoImageSlider />
                <section className=''>


                    <div
                        ref={slide}
                        className='  overflow-x-scroll  flex scrollbar'>

                        {
                            data?.map((item, index) => {
                                return (
                                    <img src={item.urls.regular} alt="not found"
                                        key={index}
                                        className='w-52 h-60 object-cover rounded-md mx-4 my-4'
                                    />
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center items-center my-5'>
                        <motion.div

                            variants={Button}
                            whileHover={"animate"}
                            role='button'
                        >
                            <RxDot className='h-10 w-10 cursor-pointer'
                                onClick={() => {
                                    slide.current.scrollLeft -= 100;
                                }}

                            />
                        </motion.div>
                        <motion.div
                            variants={Button}
                            whileHover={"animate"}
                            role='button'
                        >
                            <RxDot className='h-10 w-10 cursor-pointer'
                                onClick={() => {

                                    slide.current.scrollLeft += 100;


                                }}


                            />
                        </motion.div>

                        <motion.div
                            variants={Button}
                            whileHover={"animate"}
                            role='button'
                        >
                            <RxDot className='h-10 w-10 cursor-pointer'
                                onClick={() => {

                                    slide.current.scrollLeft += 100;
                                }}
                            />
                        </motion.div>
                    </div>
                </section>


                <section className='my-4 -z-10 '>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  py-3 px-4'>

                        {
                            images.map((item, index) => {


                                return (
                                    <motion.img
                                        variants={Button}
                                        whileHover='animate'

                                        src={item} key={index} alt="not found" className='w-full h-96 object-cover rounded-sm' />
                                )
                            })
                        }



                    </div>

                </section>
                <Footer />
            </main>

        </div>
    );
}

export default Landing;
