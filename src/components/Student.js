import { useState } from "react";
import Score from "./Score";
import { Table } from "react-bootstrap";

function Student(props) {
  const { dataOfStudent } = props;

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Name</th>
            <th>Bio</th>
            <th>Scores</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{dataOfStudent.name}</td>
            <td>{dataOfStudent.bio}</td>
            <td>
              <Score scores={dataOfStudent.scores} />
            </td>
          </tr>
        </tbody>
      </Table>

      {/* <div key={dataOfStudent.id}>
    <h2>Student</h2>
    <h3>{dataOfStudent.name}</h3>
    <h3>{dataOfStudent.bio}</h3>
  
</div> */}

      {/* 
<Score scores={dataOfStudent.scores} /> */}
    </>
  );
}
export default Student;
