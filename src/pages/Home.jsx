import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { store } from '../redux/store';
import { deleteData, getData } from '../redux/data/action';



function Home() {
  const navigate=useNavigate()
     const dispatch=useDispatch()
     const homeData=useSelector((store)=>store.data.getData)

     console.log("homeData",homeData)


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
      console.log("DeleteIdd",id)
      alert("Data deleted")
      window.location.reload()
     }




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
        {homeData.map((item,index)=>(
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
              {item.created}
            </td>

            <td style={{border:"",display:"flex", gap:"10px"}}>
              <button onClick={()=>handleEdit(item._id)} style={{border:"2px solid grey",padding:5,borderRadius:10}}>Edit</button>
               <button  style={{border:"2px solid grey",padding:5,borderRadius:10}}onClick={()=>handleDelete(item._id)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    <div style={{display:"flex",marginTop:10,gap:"30px"}}>
     <button style={{background:"#2F4F4F",color:"white",border:"2px solid grey",borderRadius:20,padding:10}} onClick={handleAdd} >Filter by date</button>
 <button style={{border:"2px solid grey",background:"#2F4F4F",color:"white",borderRadius:20,padding:10}} onClick={handleAdd} >Filter by Name</button>
  <button style={{border:"2px solid grey",background:"#2F4F4F",color:"white",borderRadius:20,padding:10}} onClick={handleAdd} >New Expense</button>
   </div>
    </div>
  )
}

export default Home