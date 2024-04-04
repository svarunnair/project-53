import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { patchData } from '../redux/data/action'
import Dropdown from '../components/DropDown'

function Edit() {
    const navigate=useNavigate()
    const params=useParams()
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [amount,setAmount]=useState("")
    const [date,setDate]=useState("")
    const [expense,setExpense]=useState('')

    const paramsData=useSelector((store)=>store.data.getParams)

    console.log("paramsdata",paramsData)

    const id=params.id

    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleExpense=(e)=>{
        let value=e.target.value 
        setExpense(value)
    }
    const handleAmount=(e)=>{
        let value=e.target.value 
        setAmount(value)
    }
    const handleCate=(e)=>{
        let value=e.target.value 
        setCategory(value)
    }
//      const handleCategory = (e) => {
//   setCategory(e);
// };
    const handleDate=(e)=>{
        let value=e.target.value 
        setDate(value)
    }
    const handleCreate=()=>{
        let data={
            name:name,
            date:date,
            amount:amount,
            expense:expense,
            category:category
        }

        dispatch(patchData(data,id))
    alert("Data updated")
    navigate("/home")
    }

    useEffect(()=>{
        dispatch(patchData(params.id))     
    },[])


    console.log("paraaa",params.id)
    const handleCancel=()=>{
        navigate('/home')
    }
    
  return (
    <div style={{border:"",display:"flex",justifyContent:"center",alignContent:"center",padding:"30px"}}>

    <div style={{border:'2px solid grey',borderRadius:30,display:"flex",flexDirection:'column',padding:"20px",gap:20}}>

    <text>Edit Expense</text>
    <hr></hr>

    <div style={{display:"flex",justifyContent:"space-between",gap:60}}>
        <text>Name</text>
        <input onChange={handleName} placeholder="name....."/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between",gap:60}}>
        <text>Expense</text>
        <input onChange={handleExpense} placeholder="expense....."/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between",gap:60}}>
        <text>Category</text>
        <input onChange={handleCate} placeholder="category....."/>
        {/* <Dropdown passValu={handleCategory}/> */}
    </div>
<div style={{display:"flex",justifyContent:"space-between",gap:60}}>
        <text>Date of Expense</text>
        <input onChange={handleDate} type='date'/>
    </div>

    <div style={{display:"flex",justifyContent:"space-between",gap:60}}>
        <text>Expense Amount</text>

        <input onChange={handleAmount} placeholder="amount....."/>
    </div>
    <hr></hr>

    <div style={{display:"flex",gap:"20px"}}>
        <button onClick={handleCancel} style={{border:"2px solid grey",padding:10,borderRadius:30,marginTop:30,}}>Cancel</button>
        <button onClick={handleCreate} style={{border:"2px solid grey",padding:10,borderRadius:30,marginTop:30,}}>Submit Edit</button>
    </div>



    </div>

    </div>
  )
}

export default Edit