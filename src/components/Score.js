function Score(props) {
  const { scores } = props;
  
  return (

       scores.map(score=>
      <div key={score.id}>
      <h3>date:{score.date}</h3>
      <h3>score:{score.score}</h3>
      
     </div>
      )
   
  );
}
export default Score;
