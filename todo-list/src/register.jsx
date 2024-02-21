import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function register() {
const navigate = useNavigate();
  const [username, setUser] = useState()
  const [password, setPass] = useState()
  const sendUser = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/login', { username, password })
        .then(result => {
            console.log(result);

            if (result.data.message === 'success') {
                const userId = result.data.userId;
                console.log(userId)
                navigate('/home');
            }
        })
        .catch(err => console.log(err));
};
  return (
    <div id='centered'>
    <div class= "logn">
        <h2>Login</h2>
        <div><input type="text"  placeholder='username' onChange={(e) => setUser(e.target.value)}/></div>
        <div><input type="text"  placeholder='password' onChange={(e) => setPass(e.target.value)}/></div>
        <button onClick={sendUser}>Log In</button>
        <Link to='/register' class='login-btn'>Haven't Signed up? Click here!</Link>

    </div>
    </div>
  )
}
export const getUserID = () => userId;
export default register
