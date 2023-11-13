import React from "react";
import Rating from '@mui/material/Rating';
import {motion} from "framer-motion"
import { toast } from "react-toastify";
import { Button } from "./Anime";
import { useMyContext } from "../../context/CartProvider";
import FormDialog from "./FormDialog";

const Item = ({id, image, title, price,review }) => {


const {dispatchCart}=useMyContext()

const addToCart=(product)=>{
  dispatchCart({type:'ADD_TO_CART',payload:product})
  toast('added to cart successfully')
}
  return (
    <div //
      className="group relative"
 
    >
      <div className="h-80 aspect-w-1 aspect-h-1  w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
        loading="lazy"
          src={image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md  font-semibold text-gray-700">
          
              <span aria-hidden="true" className=" inset-0"></span>
              {title.slice(0,40)}
            
          </h3>
        </div>
        <p className="text-md font-bold  text-gray-900">{price}</p>
      </div>

      <div  className="flex start-center items-center mt-5">
       
       
        <Rating
        
        defaultValue={review}
        precision={0.5}
        />
        <FormDialog/>

<motion.button


variants={Button}
whileHover={"animate"}
onClick={(e) => {
addToCart({id:id,image:image,price:price ,title:title})
}}
className="ml-auto cursor-pointer bg-green-400 text-white rounded px-4 py-1"
>
Add to Cart

      </motion.button>
     
      </div>
    </div>
  );
};

export default Item;          