import React, { useContext } from 'react'
import { userContext } from './Context'

const Component1 = () => {
   const {count,setCount}= useContext(userContext)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Component1
