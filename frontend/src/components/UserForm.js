import React, { Fragment, useState} from "react";

import Textbox from "./Textbox";
import Button from "./Button";
function UserForm(){
 const [getvalue,setvalue]=useState({
  username:"xyz",
  email:"email@gmail.com",
  password:"123"
 });
  function submit(){
console.log(getvalue.username);
console.log(getvalue.email);
console.log(getvalue.password);
  }
  function userDetails(e){
setvalue(prevstate=>{
  return{...prevstate,username:e.target.value}
})

  }
  function userEmail(e){
    setvalue(prevstate=>{
      return{...prevstate,email:e.target.value}
    })
      }  
      function userPassword(e){
        setvalue(prevstate=>{
          return{...prevstate,password:e.target.value}
        })
        
          }

return(
    <Fragment >
     
<section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0" id="user">
                      <Textbox type="text" onChange={(e)=>userDetails(e)} name=" Enter your name"/>
                      <p>{getvalue.username}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <Textbox type="email" onChange={(e)=>userEmail(e)}   name="Enter your email"/>
                      <p>{getvalue.email}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <Textbox type="password" onChange={(e)=>userPassword(e)}  name="Enter your password"/>
                      <p>{getvalue.password}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <Textbox type="password"  name="Confirm your password"/>
                    <p>{getvalue.username}</p>
                    </div>
                  </div>
                  <div className="form-check d-flex  mb-2">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label ml-2 mt-1" htmlFor="form2Example3">
                      I agree all statements in
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <Button type="button" click={submit} name="submit" />
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</Fragment>
)
}
export default UserForm;