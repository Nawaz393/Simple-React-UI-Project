import { DeleteFilled } from '@ant-design/icons'
import { Button } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { useMyContext } from '../../context/CartProvider'


const CartItem = ({image,id,title,price}) => {

    const {dispatchCart}=useMyContext()
  return (
    <div className='flex md:w-[30vw] w-[60vw] m-2  border-2 rounded mx-2 border-gray-600   items-center justify-evenly'>
      <img src={image} className='h-10 w-10'/>
      <div className='flex flex-col'><span className='font-bold font-nunito'>{title.slice(0,20)}</span><span className='font-nunito font-bold'>{price}</span></div>
      <Button variant="contained" sx={{

        bgcolor:"red",
        py:1
        
      }}
      
      onClick={()=>{

dispatchCart({type:"REMOVE_FROM_CART",payload:id})

      }}
      >
      <DeleteFilled/>
      
      </Button>
    </div>
  )
}

export default CartItem
