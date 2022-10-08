import React from "react";
function Textbox(props) {
  return (
    <>
    <div className="mt-4">
    <label className="form-label"  htmlFor={props.type}>
        {props.name}
      </label>
      <input type={props.type} id={props.id}  onChange={props.onChange}  className="form-control w-50 "  />
      </div>
    </>
  );
}
export default Textbox;


