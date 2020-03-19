import React from "react";




// display picture, firstName, lastName, email, phone
function EmployeeCard(props){
    return (
    <div>
        <div className="employeeCard">
            <img src={props.src} alt={props.firstName}></img>
            <p>{props.firstName} {props.lastName} {props.email} {props.phone}</p>
        </div>
        <hr></hr>
    </div>
    );
}

export default EmployeeCard;