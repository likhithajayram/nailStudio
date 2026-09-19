import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </>
  )
}

export default App
