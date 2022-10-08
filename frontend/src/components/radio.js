import React  from "react";
function Radio(props){
    return(
<span className="mt-3">

<input type="radio" id={props.id} name={props.id}value="male" onChange={props.onChange}/>
<label className="form-lable ml-1" htmlFor="male">Male</label>

<input type="radio" id={props.id} name={props.id} value="female" className="ml-4" onChange={props.onChange}/>
<label className="form-lable ml-1" htmlFor="male">Female</label>


</span>
    );
}
export default Radio;