import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [color,setColor]=useState('violet')
  return (
    <div>
        <h1>{count}</h1>
        <div style={{background:color,width:'100px',height:'100px'}}></div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setColor("violet")}>violet</button>
        <button onClick={()=>setColor("purple")}>purple</button>
      
    </div>
  )
}

export default Counter
