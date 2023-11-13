import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const addReview=()=>{


    setOpen(false)
    toast("review added succesfully")
  }
  return (
    <div>
      <Button variant="contained" sx={
{
  width:4,
  mx:2,
  fontSize:10,


}
      } onClick={handleClickOpen}>
        Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Drop your opinion about the product in detail 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write a review"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addReview}>Add Review</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}