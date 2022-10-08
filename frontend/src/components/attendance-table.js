
import axios from "axios";

import React, { useEffect, useState } from "react";
import Radio from './radio.js';
function Attendance_table(props){

  const [Data,setData]=useState([]);
  const [presenty,setpresenty]=useState([]);
  useEffect(()=>{
   fetch("http://localhost:5000/attendance",{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(({
      stud_class: props.stud_class,
      
    }))
    })
    .then(res=>res.json())
    .then(data=>setData(data))


  },[])
  
  function Submit(){
axios.post("http://localhost:5000/get_attendance",presenty)
.then(res=>{
alert(res);
  
})
.catch((err)=>console.log(err.res.data))
  }
 function attendance(e){

setpresenty(prev=>[...prev,{
  stud_id:e.target.name,
  pres:e.target.value,
  stud_class:e.target.attributes.getNamedItem("std").value}]);

 }
 console.log(presenty)
    return(
        <>
        <h2 className="text-center">Class {props.stud_class} data</h2>
        <table className="table table-bordered ">
    <thead>
      <tr>
        <th>student id</th>
        <th>student name</th>
        <th>present</th>
        <th>absent</th>
      </tr>
    </thead>
    <tbody>
      {Data.map((item,i)=>(
        <tr key={i}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><input type="radio" name={item.id} std={item.stud_class} value="present" onChange={(e)=>attendance(e)}/></td>
        <td><input type="radio" name={item.id} std={item.stud_class} value="absent" onChange={(e)=>attendance(e)}/></td>
      </tr> 
      ))}
      
      
    </tbody>
  </table>
  <button type="submit" value="submit" onClick={Submit} className="btn btn-primary btn-lg mt-3">submit</button>
  {/* <h1>{presenty.val}</h1> */}
        </>
    )
}
export default Attendance_table;