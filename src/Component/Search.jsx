import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect,useState } from 'react'
import Names from "../data/names"
const Search = () => {


    const [data,setdata]=useState(Names);
useEffect(()=>{

  setdata([...new Set(Names)])


},[])


  return (
<Autocomplete
      onChange={
        async (e, value) => {
        e.preventDefault();
        if (value !== null) {
        } else {
        }
      }}
      options={data}
      
      sx={{ width: 400, height: 30 }}
      renderInput={(params) => <TextField {...params} label={"Search"} />}
    />
  )
}

export default Search
