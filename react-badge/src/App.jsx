import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Reducer from './Practices/Reducer'
import Context from './Practices/Context'
// import UseState from './Practices/UseState'
// import Memo from './Practices/Memo'
// import ColorChange from './Practices/ColorChange'
// import Input from './Input'
// import Display from './Display'
// import List from './Practices/List'
// import Counter from './Practices/Counter'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Practices/Router/Home'
import About from './Practices/Router/About'
import Contact from './Practices/Router/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Input/>
     <Display />
     <List colors={["red","green","blue","orange"]}/>
     <Counter/> */}
     {/* <ColorChange/> */}
     {/* <UseState/> */}
     {/* <Memo/> */}
     {/* <Reducer/> */}
     
     <Context/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
