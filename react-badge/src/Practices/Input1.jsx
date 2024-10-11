import React from 'react'
import { Link } from 'react-router-dom'


const Input1 = () => {
  const handlechange=(e)=>{
        e.target.value
  }
  
  return (
    <div>
      
      <input type="text" onChange={handlechange} />
      <button>Submit</button>
    </div>
  )
}

export default Input1

