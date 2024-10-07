import React, { useContext } from 'react'
import { userContext } from './Context'

export default function Component2() {
   const {count,arr}= useContext(userContext)
  return (
    <div>
      <h1>{count}</h1>
      <h1>{arr}</h1>
    </div>
  )
}
