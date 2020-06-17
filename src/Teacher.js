import React, {Component} from "react";
import "./Teacher.css";

// function Teacher(props) {
//     return (
//         <div>
//             <h1>Teacher: {props.name}</h1>
//         </div>
//     )
// }

// const Teacher = (props)=> {
//     return (
//         <div>
//             <h1>Teacher: {props.name}</h1>
//         </div>
//     )
// }

class Teacher extends React.Component {
    render(){
        return (
            <div className="teacher">
                <h1>Teacher: {this.props.name}</h1>
            </div>
        )
    }
}


export default Teacher;