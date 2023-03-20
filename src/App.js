import { useState } from 'react';
import { studentData } from "./data/student";
import './App.css';
import Student from './components/Student';
//import Score from './components/Score';

function App() {
  const [data,setStudentData]=useState(studentData);
  const [score,setScores]=useState([studentData.scores]);
  
  return(
     data.map(student => <Student dataOfStudent={student}  
       />)
      
   
  )
   
    
  
}

export default App;
