import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postSignup } from '../../redux/auth/authAction'

function Signup
() {

  const [email,setEmail]=useState("")
  const [isValidemail,setIsValidEmail]=useState("")
  const [password,setPassword]=useState("")
  const [user,setUser]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleLogin=()=>{
    navigate("/login")
  }

  const handleUser=(e)=>{
    let value=e.target.value
    setUser(value)
  }

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
    if(user===""||email===""||password===""){
        alert("Please fill the form")
    }else{
        let data={
        name:user,
      email:email,
      password:password
    }
    dispatch(postSignup(data))   
    alert("Signup Successfull")
    navigate("/login")
    }
    
  }

  return (
    <div className='flex justify-center items-center h-screen '>
    <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1>Signup
        </h1>
        <hr className='mt-3'></hr>

        <div  className='mt-3' >
            <label className='block text-base md-2 focus:border-gray-600 focus:outline-none-0' form='username'>UserName</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleUser} placeholder='User name...' type='"text' id='username' className='border-fw'/>

        </div>


        <div  className='mt-3' >
            <label className='block text-base md-2 focus:border-gray-600 focus:outline-none-0' form='username'>Email Id</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handleEmail} placeholder='Email Id...' type='"text' id='username' className='border-fw'/>
        {!isValidemail && <p>{email&&<p>Please enter a valid email address</p>}</p>}
        </div>
        <div  className='mt-3'>
            <label className='block text-base md-2' form='password'>Password</label>
            <input style={{border:"1px solid grey",borderRadius:20,padding:10}} onChange={handlePassword} placeholder='Password...' type='"text' id='password' className='border-fw'/>
        </div>
        <button onClick={handleSubmit} type='submit' className='borde-2 border-red-700 bg-yellow-700 text-white py-1 w-full rounded-md mt-5'>Signup
        </button>
 <button onClick={handleLogin} type='submit' className='borde-2 border-red-700 bg-yellow-700 text-white py-1 w-full rounded-md mt-5'>Go to Login
        </button>
    </div>
    
    </div>
  )
}

export default Signup
