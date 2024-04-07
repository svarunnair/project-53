import React, { useEffect, useState } from 'react'
import Dropdown from '../components/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData } from '../redux/data/action';
import { useNavigate } from 'react-router-dom';
import { getSignup } from '../redux/auth/authAction';


function CreateExpense() {

    const localData = JSON.parse(localStorage.getItem('data'))||[];
      
    const[name,setName]=useState([])
    const[date,setDate]=useState([])
    const[category,setCategory]=useState([])
    const[expense,setExpense]=useState([])
    const[amount,setAmount]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()

     const userData=useSelector((store)=>store.auth.getSignup)

console.log("gatData",userData)

useEffect(()=>{
  dispatch(getSignup())
},[])


const localEmail=localStorage.getItem("email")

console.log("emailllllllll",localEmail)



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
    const handleBack=()=>{
      navigate('/home')
    }

    const updatedDate= new Date()
    console.log("updatedDate",updatedDate)

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
            amount:amount,
            update:updatedDate,
            email:localEmail

      }


      dispatch(postData(data))
      alert("Data added")
      navigate("/home")
      }
      
    }

    console.log("localData",localData)

  return (
    <div>
       <div style={{padding:50, display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <text style={{fontSize:25,fontWeight:500,padding:20}}>Add new Expense</text>
    
        <div class="w-70% md:w-70% lg:w-70%"  style={{display:"flex",justifyContent:"center",padding:40,border:'1px solid grey',borderRadius:30}}>
  
<div  style={{textAlign:"left",padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>
     

        <label>Name</label>
         <label>Date of Expense</label>
          <label>Category</label>
           <label>Expense</label>
           <label >Amount</label>
                
</div>

<div style={{padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>


<input onChange={handleName} placeholder='name...'/>
<input type='date' onChange={handleDate} placeholder='date...'/>

<Dropdown passValu={handleCategory}/>
<input onChange={handleExpense} placeholder='expense...'/>
<input onChange={handleAmount} placeholder='amount...'/>
 

</div>

        </div>
    <hr style={{padding:10}}></hr>
        <div style={{display:"flex",gap:30}}>
         <button style={{borderRadius:20,padding:10,background:"#B22222",color:"white"}} onClick={handleBack}>Go back</button>
        
        <button style={{borderRadius:20,padding:10,background:"#2F4F4F",color:"white"}} onClick={handleSubmit}>Submit</button>
      </div>
       </div>
    </div>
  )
}

export default CreateExpense