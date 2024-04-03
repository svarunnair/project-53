import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Home from '../pages/Home'
import CreateExpense from '../pages/CreateExpense'
import Edit from '../pages/Edit'

function PublicRoutes() {
  return (
    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/expense' element={<CreateExpense/>}/>
      <Route path='/edit' element={<Edit/>}/>


    </Routes>
  )
}

export default PublicRoutes