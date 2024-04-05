import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postLogin } from '../../redux/auth/authAction'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email,setEmail]=useState("")
   const [isValidemail,setIsValidEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()

  // const token=localStorage.getItem("token")

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(value));
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleSubmit=()=>{
    if(email===""||password===""){
      alert("Please enter data")
    }
    else{
     let data={
      email:email,
      password:password
    }
    dispatch(postLogin(data))
    localStorage.setItem("email",email)
      alert("Login Successfull")
      navigate('/home')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen '>
    <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1>Login</h1>
        <hr className='mt-3'></hr>
        <div  className='mt-3' >
            <label className='block text-base md-2 focus:border-gray-600 focus:outline-none-0' form='username'>UserName</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleEmail} placeholder='Email Id...' type='"text' id='username' className='border-fw'/>
        {!isValidemail && <p>{email&&<p>Please enter a valid email address</p>}</p>}
        </div>
        <div  className='mt-3'>
            <label className='block text-base md-2' form='password'>Password</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handlePassword} placeholder='Password...' type='"text' id='password' className='border-fw'/>
        </div>
        <button onClick={handleSubmit} type='submit' className='borde-2 border-red-700 bg-yellow-700 text-white py-1 w-full rounded-md mt-5'>Login</button>

    </div>
    </div>
  )
}

export default Login