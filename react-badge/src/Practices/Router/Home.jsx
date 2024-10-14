import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
     Home 
     <button onClick={()=>navigate('/about')}>about</button>
    </div>
  )
}

export default Home
