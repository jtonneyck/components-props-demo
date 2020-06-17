import React from "react";
import "./Course.css";
import "./Curriculum";
import Curriculum from "./Curriculum";

class Course extends React.Component {

    render(){
        return (
            <div className="course">
                <h1>{this.props.name}</h1>
                <Curriculum />
            </div>
        )
    }
}

export default Course;