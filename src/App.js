import { useState } from 'react';
import { studentData } from "./data/student";
import './App.css';
import Student from './components/Student';

function App() {
  const [data,setStudentData]=useState(studentData);
  
  return data.map(student=> <Student dataOfStudent={student}  />)
   
    
  
}

export default App;
