import React, { createContext, useState } from 'react'


function Input() {
  const [value,setValue]=useState("nishana")
  const inputValue=(e)=>{
      setValue(e.target.value)
  }
  
  return (
    <div>
      <h1>{value}</h1>
      <input type="text"  onChange={inputValue}/>
    </div>
  )
}

export default Input

