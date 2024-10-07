import React, { useContext } from 'react'
import { userContext } from './Context'

const Component3 = () => {
     const {count,fruits}=useContext(userContext)
     const isEven=count%2==0
  return (
    <div>
      <div style={{background:isEven?'red':'green',width:'100px',height:'100px'}}></div>
      <h2>{fruits.one}</h2>
    </div>
  )
}

export default Component3
