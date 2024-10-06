import React, { useEffect, memo, useRef } from 'react'
import { UseForm } from './UseForm'
import UseMemo from './UseMemo';

const UseState = () => {
    const [value,handlechange]=UseForm({
      name:"",
      email:"",
    })
   console.log(value.name);
   console.log(value.email);
   
   useEffect(()=>{
    // console.log("Running")

    return ()=>{
      //  console.log("unmount");
       }
},[value.name])
   
    console.log("parent");

    const inputref=useRef(null);
  // const accessref=()=>{
  //     console.log(inputref.current)
  //   }
  const focusinput=()=>{
    inputref.current.focus()
  }
    
  return (
    <div>
      <form action="" autoComplete="off" ref={inputref}>
      <input type="text" name="name" ref={inputref} value={value.name} onChange={handlechange}/>
      <input type="text" name='email' ref={inputref} value={value.email} onChange={handlechange}/>
      </form>
      <input type="text" ref={inputref}/>
      <button onClick={focusinput}>FocusInput  </button>
      <UseMemo/>
    </div>
  )
}

export default UseState
