import React, { useState } from 'react'

const ColorChange = () => {
    const [text,setText]=useState('');
    const [color,setColor]=useState('red')
  
  return (
    <div>
       <input type="text" onChange={(e)=>{
        setText(e.target.value)
      }} />
       <button onClick={()=>setColor(text)}>ColorChange</button>
        <div style={{background:color,width:'100px',height:'100px'}}></div>
    </div>
  )
}

export default ColorChange
