import React, { useEffect, useState } from 'react'
import Dropdown from '../components/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData } from '../redux/data/action';
import { getSignup } from '../redux/auth/authAction';

function CreateExpense() {

    // const localData = JSON.parse(localStorage.getItem('data'))||[];
      
    const[name,setName]=useState([])
    const[date,setDate]=useState([])
    const[category,setCategory]=useState([])
    const[expense,setExpense]=useState([])
    const[amount,setAmount]=useState([])
     const dispatch=useDispatch()

     const userData=useSelector((store)=>store.auth.getSignup)

console.log("gatData",userData)

useEffect(()=>{
  dispatch(getSignup())
},[])



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
      if(!name||!date||!amount){
        alert("Please fill the form")
      }
      else{
        let data={
           name:name,
            date:date,
            category:category,
            expense:expense,
            amount:amount

      }
      dispatch(postData(data))
      alert("Data added")
      }
      
    }

    // console.log("localData",localData)

  return (
    <div>
       <div style={{padding:50, display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",padding:40,border:'1px solid grey',borderRadius:30,width:"40%"}}>
<div style={{textAlign:"left",padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>
       
       <hr></hr>
        <label>Name</label>
         <label>Date of Expense</label>
          <label>Category</label>
           <label>Expense</label>
           <label>Amount</label>
</div>

<div style={{padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>

  <hr></hr>
<input onChange={handleName} placeholder='name...'/>
<input type='date' onChange={handleDate} placeholder='date...'/>

<Dropdown passValu={handleCategory}/>
<input onChange={handleExpense} placeholder='expense...'/>
<input onChange={handleAmount} placeholder='amount...'/>


</div>

        </div>
        <button style={{border:"1px solid black",borderRadius:20,padding:10,}} onClick={handleSubmit}>Submit</button>
       </div>
    </div>
  )
}

export default CreateExpense