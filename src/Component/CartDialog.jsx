import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import { useMyContext } from '../../context/CartProvider';
import {motion} from "framer-motion"
import { Badge } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from './CartItem';
export default function CartDialog() {
const [open, setOpen] = React.useState(false);


  const {cart} =useMyContext();
  console.log(cart)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const products=cart?.map((product)=><CartItem key={product.id} image={product.image} id={product.id} title={product.title} price={product.price} />
)
  const addReview=()=>{


    setOpen(false)
    toast("review added succesfully")
  }
  return (
    <div className=''>
          <motion.div className=''
        
            variants={Button}
            whileHover={"animate"}
            role="button"
            onClick={handleClickOpen} 
            >
                   <Badge badgeContent={cart.length} color="primary">
               <AiOutlineShoppingCart className='text-white text-3xl cursor-pointer'
               />
                </Badge>
             
            </motion.div>

      <Dialog open={open} onClose={handleClose}
      sx={{

        width:"100%"
    
    }}
      >
        <DialogTitle>Cart</DialogTitle>
        <DialogContent>
           

{

    cart?.length ==0 ?<p>cart is empty </p>:
            <div className='flex flex-col justify-evenly '>
                {products}
                
              
            </div>
}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}