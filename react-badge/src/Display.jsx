import React, { useState } from 'react'

export default function Display() {
    const [count,setCount]= useState(0);
    const isEven=count%2===0
  return (
    <div>
      <h1>{count}</h1>
      <div style={{background:isEven?'red':'green', width:'100px',height:'100px'}} onClick={()=>setCount(count+1)}></div>
  
      
    </div>
  )
}
