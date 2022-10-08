import React, { useState } from "react";
import Attendance from "./attendance";
import Button from "./Button";
import Dashboard from "./dashboard";
import Registration from "./Registration";
import Textbox from "./Textbox";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Attendance_table from "./attendance-table";
function Sidebar() {
  // const [getStudentLogin,setStudentLogin]=useState(<Dashboard/>);
  // function StudentLogin(heading){
  //   setStudentLogin(<Registration heading={heading}/>);
    
  // } 
  // function dashboard(){
  //   setStudentLogin(<Dashboard/>);
    
  // } 
  // function attendance(){
  //   setStudentLogin(<Attendance/>);
    
  // } 
  // function TeacherLogin(){
  //   setStudentLogin(<Textbox type="email" name="enter email"/>);
    
  // }
  return (
    <BrowserRouter>
  <div className="container-fluid">
<div className="row">
  <div className="col-3">
    <div className="sidebar">
      <ul>
      <li className="active">
        <div className="d-flex ml-3 ">
          <i className="fab fa-dashcube dash-icons" />
          <Link to="/" className="card__link" > Dashboard</Link>
          {/* <a className="card__link" href="#products" onClick={dashboard} >
            Dashboard
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="fab fa-dashcube dash-icons" />
          <Link to="teacher_registration" className="card__link">Teacher</Link>
          {/* <a className="card__link" href="#dashboard" onClick={(e)=>StudentLogin("Teacher Registration")}>
           Teacher 
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="	fab fa-product-hunt dash-icons" />
          <Link to="student_registration" className="card__link">Student</Link>
          {/* <a className="card__link" href="#products" onClick={(e)=>StudentLogin("Student Registration")}>
            Student 
          </a> */}
        </div>
      </li>
      <li>
        <div className="d-flex ml-3 mt-3">
          <i className="fas fa-utensils dash-icons" />
          <Link to="attendance" className="card__link">Attendance</Link>
          {/* <a className="card__link" href="#menu" onClick={attendance}  >
              Attendance
          </a> */}
        </div>
      </li>
      </ul>
    </div>
  </div>
</div>
<div className="col-7 inputForm">

      <Routes>
        <Route  path="/"  element={<Dashboard/>}/>
          <Route path="teacher_registration" element={<Registration heading="Teacher Registration"/>}/>
          <Route path="student_registration" element={<Registration heading="Student Registration"/>}/>
          <Route path="attendance" element={<Attendance/>}/>
       
      </Routes>
   
</div>


  </div>
  </BrowserRouter>
  );
}
export default Sidebar;
