import React from "react";
function Card(props){
    return(
       
        <div className={props.name}>
        <h2 className="card__title">
          {props.standerd}
        </h2>
        <p className="card__apply ">
          <a className="card__link" href="#" onClick={props.click}>
           Get details <i className="fas fa-arrow-right" />
          </a>
        </p>
      </div>
     
    )
}
export default Card;