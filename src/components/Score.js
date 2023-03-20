import { Table } from "react-bootstrap";
function Score(props) {
  const { scores } = props;

  return (
    <>
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th> Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{scores.map((score) => score.score)}</td>
          <td>{scores.map((score) => score.date)}</td>
        </tr>
      </tbody>
    </Table>
    </>

    //    scores.map(score=>
    //   <div key={score.id}>
    //   <h6>date:{score.date}</h6>
    //   <h6>score:{score.score}</h6>

    //  </div>
    //   )
  );
}
export default Score;
