function Score(props) {
  const { scores } = props;
  return (
    <div key={scores.id}>
      <h6>{scores.date}</h6>
      <h6>{scores.score}</h6>
    </div>
  );
}
export default Score;
