import Score from './Score';
function Student(props){
    const { dataOfStudent }= props;
return(
<div key={dataOfStudent.id}>
    <h6>{dataOfStudent.name}</h6>
    <h6>{dataOfStudent.bio}</h6>
    <Score scores={dataOfStudent.scores}/>
</div>


);

}
export default Student;