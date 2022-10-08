import React, { useCallback, useState } from "react";
import Card from "./cards";
import ClassData from "./Class_data";
import SchoolData from "./School_data";
function Dashboard() {
  const [gettable,setTable]=useState(<SchoolData />);
function showData(show){
  setTable(<ClassData std={show}/>)
}
  return (
   
      <div className="main-container row">
        <div className="cards justify-content-around">
          <Card name="card card-1" standerd="Class 10th" click={(e)=>showData("10th")}/>
          <Card name="card card-2" standerd="Class 11th" click={(e)=>showData("11th")} />
          <Card name="card card-3" standerd="Class 12th" click={(e)=>showData("12th")} />
           {gettable}
       
         
        </div>
      </div>
   
  );
}
export default Dashboard;
