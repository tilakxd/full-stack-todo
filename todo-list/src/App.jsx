import { useState } from 'react'
import Login from './login'
import './login.css'
import './app.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './register'
import Home from './Home'

function App() {
 

  return (
     <div>
      
      <BrowserRouter>
      <Routes>
        <Route path= '/register' element={<Login />} ></Route>
        <Route path= '/' element={<Register />} ></Route>
        <Route path= '/login' element={<Register />} ></Route>
        <Route path= '/home' element={<Home />} ></Route>
      </Routes>
     </BrowserRouter>
     </div>
     

  )
}

export default App
