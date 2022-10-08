import React, { useEffect, useState } from "react";
function ClassData(props){
  const [showdata,setdata]=useState([]);
 
  useEffect(()=>{
  
    fetch("http://localhost:5000/Class_data",{
      method: 'POST',
      headers: {
       
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({std:props.std})

    }
    )
    .then(res=>res.json())
    .then(data=>setdata(data)); 
  },[props])
  
  
    return(
    <>
    <h2 style={{marginTop:"40px"}}>Class {props.std}</h2>
  
 <table className="table table-bordered ml-5 mt-5">
    <thead>
      <tr>
        <th>Student Id</th>
        <th>Student Name</th>
        <th>Gender</th>
        <th>Present/Absent</th>
      </tr>
    </thead>
    <tbody>
    {showdata.map((item,index)=>(
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.presenty}</td>
        </tr>
      ))}
      
    </tbody>
  </table>
    </>)
}
export default ClassData;