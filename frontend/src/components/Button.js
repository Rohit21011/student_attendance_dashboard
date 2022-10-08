import React from "react";
function Button(props){
    return(
        <button type={props.type} onClick={props.click} className="btn btn-primary btn-lg mt-3">
                      {props.name}
                    </button>
    )
}
export default Button;