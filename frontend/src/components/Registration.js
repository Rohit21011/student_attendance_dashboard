import axios from "axios";

import React, { useState } from "react";
import Button from "./Button";
import Dropdown from "./dropdown";
import Radio from "./radio";
import Textbox from "./Textbox";
import { useFormik} from "formik";
import * as Yup from 'yup';
function Registration(props){
  var url;
const formik=useFormik(({
  initialValues:{
name:"",
email:"",
gender:"",
std:"10th",
password:"",
  },
  validationSchema:Yup.object({
name:Yup.string().required("required"),
email:Yup.string().required("required"),
gender:Yup.string().required("required"),
std:Yup.string().required("required"),
password:Yup.string().required("required")
  }),
  onSubmit:(values)=>{
   
   
    if(props.heading!="Teacher Registration"){
      url="http://localhost:5000";
      }
         else{
          url="http://localhost:5000/teacher";
         } 
         axios.post(url,values)
         .then(res=>alert(JSON.stringify(res.data)))      
  }
}))
console.log(formik.values);
//     const [getData,setData]=useState({
//         name:"",
//         email:"",
//         gender:"",
//         standerd:"10th",
//         password:"",
//     });
//       function data(e){
//         const newdata={...getData};
//         newdata[e.target.id]=e.target.value;
//         setData(newdata);

//       }
//       function sendData(url){
//         axios.post(url,{
//           name:getData.name,
//           email:getData.email,
//           gender:getData.gender,
//           standerd:getData.standerd,
//           password:getData.password
//           })
//           .then(res=>{

//             alert("you have register successfuly");
            
//           })
//           .catch((err)=>console.log(err.res.data))
//       }
//       function submit(e){
//         e.preventDefault();
       
// if(props.heading!=="Teacher Registration"){
//   console.log(props.heading)
// sendData("http://localhost:5000");
// }
//    else{
//     console.log(props.heading)
//     sendData("http://localhost:5000/teacher");
//    }  
//       }
    
    return(
    <>
    <h2>{props.heading}</h2>
    <form onSubmit={formik.handleSubmit}>
     <Textbox type="text"  name="Enter your Name" id="name"  onChange={formik.handleChange}/>
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <Textbox type="email" name="Enter your Email" id="email"  onChange={formik.handleChange}/>
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <Radio id="gender"  onChange={formik.handleChange}/> 
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <Dropdown id="std"  onChange={formik.handleChange}/>
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <Textbox type="password" name="Enter your Password" id="password"  onChange={formik.handleChange}/>
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <Textbox type="password" name="Confirm Your Password" />
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
       
     <Button type="submit"  name="Register" value="Submit"/>
     </form>
    </> 
    )

    
}
export default Registration;