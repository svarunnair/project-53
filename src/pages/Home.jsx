import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { store } from '../redux/store';
import { deleteData, getData } from '../redux/data/action';




function Home() {
  const navigate=useNavigate()
     const dispatch=useDispatch()
     const homeData=useSelector((store)=>store.data.getData)
     const [sort,setSort]=useState([homeData])
     const [user,setUser]=useState("Me")

     const localData=localStorage.getItem("data")
     const parseData=JSON.parse(localData)||[]


     const localEmail=localStorage.getItem("email")

     const parseEmail=JSON.stringify(localEmail)

     console.log("localEmail",parseEmail)


     const creator=homeData.map((item)=>{
      return item.email
     })

     useEffect(()=>{
      if(creator===localEmail){
        setUser(localEmail)
      }

     },[homeData])



     useEffect(()=>{
      dispatch(getData())
     },[])

     const handleEdit=(id)=>{
      navigate(`/edit/${id}`)
     }
     const handleAdd=()=>{
      navigate('/expense')
     }

     const handleDelete=(id)=>{

      dispatch(deleteData(id))
      alert("Data deleted")
      window.location.reload()
     }

     const check=parseData.map((item)=>{
      return item.id
     })



     const handleFilterName=()=>{
   
  let sortName = homeData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
      setSort([...sortName])
     }


     const handleFilterDate=()=>{
      let sortDate = homeData.sort((a, b) => {
    return a.date.localeCompare(b.date);
  });
  console.log("MMMMMMMMMM",sortDate)
  setSort(sortDate)

     }

     useEffect(()=>{
      setSort(homeData)
     },[homeData])




  return (
    <div style={{border:"",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:'center',padding:"30px"}}>

<div style={{border:"",padding:30,marginTop:10,}}>
<text style={{fontSize:25,fontWeight:500,}}>Expense Manager</text>

    <table style={{border:"",padding:50,marginTop:"40px"}}>
      <thead >
      
        <tr style={{border:"1px solid green",background:"#8FBC8F"}}>
          <th style={{border:"2px solid grey",padding:15}}>Name</th>
           <th style={{border:"2px solid grey"}}>Category</th>
           <th style={{border:"2px solid grey"}}>Date of Expense</th>
           <th style={{border:"2px solid grey"}}>Amount</th>
           <th style={{border:"2px solid grey"}}>Updated at</th>
            <th style={{border:"2px solid grey"}}>Created by</th>
             <th style={{border:"2px solid grey"}}>Functions</th>
        </tr>

      </thead>
      <tbody>
        {sort.map((item,index)=>(
          <tr style={{border:"2px solid grey"}}>
            <td style={{border:"2px solid grey"}}>
              {item.name}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.category}
            </td>
            <td style={{border:"2px solid grey"}}>
              {item.date}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.amount}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.update}
            </td>
             <td style={{border:"2px solid grey"}}>
              {user}
            </td>

            <td style={{border:"",display:"flex", gap:"10px"}}>
              <button onClick={()=>handleEdit(item._id)} style={{background:"#B22222",color:"white",padding:8,borderRadius:12}}>Edit</button>
               <button  style={{background:"#B22222",color:"white",padding:8,borderRadius:12}}onClick={()=>handleDelete(item._id)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    <div style={{display:"flex",marginTop:10,gap:"30px"}}>
     <button style={{background:"#2F4F4F",color:"white",border:"2px solid grey",borderRadius:20,padding:10}} onClick={handleFilterDate} >Filter by date</button>
 <button style={{border:"2px solid grey",background:"#2F4F4F",color:"white",borderRadius:20,padding:10}} onClick={handleFilterName} >Filter by Name</button>
  <button style={{border:"2px solid grey",background:"#2F4F4F",color:"white",borderRadius:20,padding:10}} onClick={handleAdd} >New Expense</button>
   </div>
    </div>
  )
}

export default Home