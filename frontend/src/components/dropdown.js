import React  from "react";
function Dropdown(props){
    return(
        <span  className="mt-3 ml-5">
        <label htmlFor={props.id}>select class</label>
        <select id={props.id} onChange={props.onChange} className="ml-2" >
            <option  value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            
        </select>
        </span>
    )
}
export default Dropdown;