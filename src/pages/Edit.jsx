import React from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate=useNavigate()

    const handleCancel=()=>{
        navigate('/home')
    }
    const handleCreate=()=>{
       
    }
  return (
    <div style={{border:"2px solid red",display:"flex",justifyContent:"center",alignContent:"center",padding:"30px"}}>

    <div style={{border:'2px solid black',display:"flex",flexDirection:'column',padding:"20px"}}>

    <text>Edit Expense</text>

    <div style={{display:"flex",justifyContent:"space-between"}}>
        <text>Name</text>
        <input placeholder="name....."/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between"}}>
        <text>Description</text>
        <input placeholder="description....."/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between"}}>
        <text>Category</text>
        <input placeholder="category....."/>
    </div>
<div style={{display:"flex",justifyContent:"space-between"}}>
        <text>Date of Expense</text>
        <input type='date'/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between"}}>
        <text>Expense Amount</text>
        <input placeholder="amount....."/>
    </div>

    <div style={{display:"flex",gap:"20px"}}>
        <button onClick={handleCancel} style={{border:"2px solid black"}}>Cancel</button>
        <button onClick={handleCreate} style={{border:"2px solid black"}}>create Expense</button>
    </div>



    </div>

    </div>
  )
}

export default Edit