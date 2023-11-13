import React from 'react';
import {motion} from 'framer-motion';
import { Button } from './Anime';
import {AiOutlineShoppingCart} from  'react-icons/ai'
import { Badge } from '@mui/material';
import { useMyContext } from '../../context/CartProvider';
import CartDialog from './CartDialog';
const Navbar = () => {
    const {cart}=useMyContext()

    
    return (
        <nav className=' flex h-14 bg-zinc-800 items-center px-4 '>
                <div>
                    <a href='#'>
                    <span className='text-white  font-nunito text-2xl tracking-wide' >envato</span>
                    <span className='text-green-500  text-2xl font-light tracking-normal '>market</span>
                    </a>
                </div>
                <div  className="ml-auto mr-5">  <CartDialog/></div>
        
        </nav>
    );
}

export default Navbar;
