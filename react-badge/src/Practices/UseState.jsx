import React, { useEffect, useState } from 'react'
import { UseForm } from './UseForm'

const UseState = () => {
    const [value,handlechange]=UseForm({
      name:"",
      email:"",
    })
   console.log(value.name);
   console.log(value.email);
   
   useEffect(()=>{
    console.log("Running")

    return ()=>{
       console.log("unmount");
       }
},[value.name])
   
    
    
  return (
    <div>
      <form action=""  autoComplete='off'>
      <input type="text" name="name"  value={value.name} onChange={handlechange}/>
      <input type="text" name='email' value={value.email} onChange={handlechange}/>
      </form>
    </div>
  )
}

export default UseState
