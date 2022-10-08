import axios from "axios";
import React, { useState } from "react";
import Attendance_table from "./attendance-table";
import Textbox from "./Textbox";
import Login from "./login";
import Button from "./Button";

function Attendance() {
     const [getComponent,setComponent]=useState("");
   
    const [login,setlogin]=useState({
      email:"email@gmail.com",
      password:"1234"
    });
  function getValues(e){
    const newdata={...login};
    newdata[e.target.type]=e.target.value;
    setlogin(newdata);
  
  
  }
  function signup(){
    console.log("click");
      axios.post("http://localhost:5000/checkLogin",{
        email:login.email,
        password:login.password
      })
     
      .then(res=>setComponent(<Attendance_table stud_class={res.data[0].class}/>));
      

  }
  return <>
    
    <h2>Login as Teacher</h2>
    <Textbox type="email" name="Enter Email" onChange={getValues}/>
  <Textbox type="password" name="Enter password" onChange={getValues}/>
  <Button type="submit" name="Login" click={signup}/>
  <div id="show">{login.email}
  </div>  
  <div id="show1">{login.password }
  </div> 
  {getComponent}
  </>;
}
export default Attendance;
