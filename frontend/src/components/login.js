import React, { useState } from "react";
import Textbox from "./Textbox";
import Button from "./Button";
function Login(props){
  
  const [login,setlogin]=useState({
    email:"email@gmail.com",
    password:"1234"
  });
function getValues(e){
  const newdata={...login};
  newdata[e.target.type]=e.target.value;
  setlogin(newdata);
}

return(
    <>
    <h2>Login as Teacher</h2>
    <Textbox type="email" name="Enter Email" onChange={getValues}/>
  <Textbox type="password" name="Enter password" onChange={getValues}/>
  <Button type="submit" name="Login" click={props.click}/>
  <div id="show">{login.email}
  </div>  
  <div id="show1">{login.password }
  </div>  
    </>
)
}
export default Login;