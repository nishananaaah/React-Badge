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
import {BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import Home from './Practices/Router/Home'
import About from './Practices/Router/About'
import Contact from './Practices/Router/Contact'
import Another from './Practices/Another'
import Input1 from './Practices/Input1'

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
     
     {/* <Context/>
     <Input1/> */}
  
     <BrowserRouter>
     <Link to='/about'>about</Link>
     <br />
    <Link to='/contact'>contact</Link>
    <br />
    <Link to='/input'>input</Link>
    <br />
    <Link to='/another'>another</Link>
     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/input' element={<Input1/>}/>
      <Route path='/another' element={<Another/>}/>
      {/* <Route path="/" element={<InputComponent/>} />
      <Route path="/display" element={<DisplayComponent />} /> */}
     
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
