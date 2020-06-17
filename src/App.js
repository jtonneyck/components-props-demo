import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import Course from "./Course";
import Teacher from "./Teacher";
import students from "./students.json";
import FlexBox from "./FlexBox";

function App() {
  return (
    <div className="App">
      <h1>Hellooooo</h1>
      <FlexBox>
        {
          students.map((student)=> 
            <Student 
              firstname={student.firstname} 
              lastname={student.lastname}
              />
          )
        }
    </FlexBox>
      <Course name="webdev"/>
      <Course name="ui/ux"/>
      <Teacher name="Montasar" />

      <img src="/logo512.png" alt=""/>
    </div>
  );
}

export default App;
