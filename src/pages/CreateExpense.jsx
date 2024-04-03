import React, { useState } from 'react'
import Dropdown from '../components/DropDown';

function CreateExpense() {

    const localData = JSON.parse(localStorage.getItem('data'))||[];
      
    const[name,setName]=useState([])
    const[date,setDate]=useState([])
    const[category,setCategory]=useState([])
    const[expense,setExpense]=useState([])
    const[amount,setAmount]=useState([])

    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleDate=(e)=>{
              let value=e.target.value 
        setDate(value)
    }
   
    const handleCategory = (e) => {
  setCategory(e);
};
    const handleExpense=(e)=>{
              let value=e.target.value 
        setExpense(value)
    }
    const handleAmount=(e)=>{
              let value=e.target.value 
        setAmount(value)
    }
    const handleSubmit=()=>{
        let data={
            name:name,
            date:date,
            category:category,
            expense:expense,
            amount:amount

        }
         console.log("check data",data)
       
        // localStorage.setItem("data",data)
    
        localStorage.setItem('data', JSON.stringify([...localData, data]));
        alert("Data added successfully")
    }

    console.log("localData",localData)

  return (
    <div>
       <div style={{padding:20,border:"2px solid red"}}>
       
        <div style={{display:"flex",justifyContent:"center",padding:40,}}>
<div style={{textAlign:"left",padding:20,gap:20,border:"2px solid red",display:"flex",flexDirection:"column",}}>
       <label>Feilds </label>
       <hr></hr>
        <label>Name</label>
         <label>Date of Expense</label>
          <label>Category</label>
           <label>Description</label>
           <label>Amount</label>
</div>

<div style={{padding:20,gap:20,border:"2px solid red",display:"flex",flexDirection:"column",}}>
 <label>Description </label>
  <hr></hr>
<input onChange={handleName} placeholder='name...'/>
<input type='date' onChange={handleDate} placeholder='date...'/>

<Dropdown passValu={handleCategory}/>
<input onChange={handleExpense} placeholder='expense...'/>
<input onChange={handleAmount} placeholder='amount...'/>


</div>

        </div>
        <button onClick={handleSubmit}>Submit</button>
       </div>
    </div>
  )
}

export default CreateExpense