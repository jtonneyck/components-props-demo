import React from "react";
import "./Student.css";

function Student(props){
    return (
        <div className="student">
            <h1>{props.firstname} {props.lastname}</h1>
            <p>{props.occupation}</p>
        </div>
    )
}

export default Student;