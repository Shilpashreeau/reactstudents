import { useState } from 'react';
import Score from './Score';
function Student(props){
   const { dataOfStudent }= props;
   
    

    
return(
<div key={dataOfStudent.id}>
    <h2>Student</h2>
    <h3>{dataOfStudent.name}</h3>
    <h3>{dataOfStudent.bio}</h3>
  
    <Score scores={dataOfStudent.scores} />
</div>


);

}
export default Student;