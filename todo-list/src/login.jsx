import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function login() {
  const [username, setUser] = useState()
  const [password, setPass] = useState()
  const navigate = useNavigate();
  const sendUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username, password})
    .then(result => {console.log(result)
      navigate('/home');
      })
    .catch(err => console.log(err))
  }
  

  return (
    <div id='centered'>
    <div class= "logn">
        <h2>Register</h2>
        <div><input type="text"  placeholder='email'/></div>
        <div><input type="text"  placeholder='username' onChange={(e) => setUser(e.target.value)}/></div>
        <div><input type="text"  placeholder='password' onChange={(e) => setPass(e.target.value)}/></div>
        <button type='button' onClick={sendUser}>Sign Up!</button>
        <Link to='/login' class='login-btn'>Alread signed up? Login here!</Link>

    </div>
    </div>
  )
}

export default login