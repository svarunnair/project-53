import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
     const localData = JSON.parse(localStorage.getItem('data'))||[];

     const handleEdit=()=>{
      navigate('/edit')
     }
     const handleAdd=()=>{
      navigate('/expense')
     }


  console.log("locatData",localData)

  return (
    <div style={{border:"2px solid red",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:'center',padding:"30px"}}>

    <table style={{border:"2px solid red",padding:30}}>
      <thead >
      
        <tr style={{border:"2px solid green"}}>
          <th style={{border:"2px solid grey"}}>Name</th>
           <th style={{border:"2px solid grey"}}>Category</th>
           <th style={{border:"2px solid grey"}}>Date of Expense</th>
           <th style={{border:"2px solid grey"}}>Amount</th>
           <th style={{border:"2px solid grey"}}>Updated at</th>
            <th style={{border:"2px solid grey"}}>Created by</th>
        </tr>
      </thead>
      <tbody>
        {localData.map((item,index)=>(
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
              {item.updated}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.created}
            </td>

            <td style={{border:"2px solid grey",display:"flex", gap:"10px"}}>
              <button onClick={handleEdit} style={{border:"2px solid black"}}>Edit</button>
               <button  style={{border:"2px solid black"}}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>

  <button style={{border:"2px solid green"}} onClick={handleAdd} >New Expense</button>
    </div>
  )
}

export default Home