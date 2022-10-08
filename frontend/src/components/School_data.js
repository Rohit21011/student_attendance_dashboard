import React, { useEffect, useState } from "react";

function SchoolData() {
  
 const [getData,setData]=useState([]);
useEffect(()=>{
  fetch("http://localhost:5000/school")
  .then(res=> {return res.json()})
  .then(data=>setData(data)) 
},[])
  
 
  

  return (
  <>
  <h2>School data</h2>
          <table className="table table-bordered ml-5 mt-5">
    <thead>
      <tr>
        <th>Teacher name</th>
        <th>class</th>
        <th>Total students</th>
       

      </tr>
    </thead>
    <tbody>
        {getData.map((data,i)=>(
         <tr key={i}>
          <td>{data.name}</td>
        <td>{data.class}</td>
        <td>{data.Total}</td>
        
      </tr>
        ))}

    </tbody>
  </table>
  </>);
}
export default SchoolData;
