import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Home from '../pages/Home'
import CreateExpense from '../pages/CreateExpense'
import Edit from '../pages/Edit'
import Signup from '../pages/Auth/Signup'

function PublicRoutes() {
  return (
    <Routes>

      <Route path='/' element={<Signup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/expense' element={<CreateExpense/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>


    </Routes>
  )
}

export default PublicRoutes