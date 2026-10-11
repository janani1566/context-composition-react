
const StudentCard = ({ name, track, score }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{track}</p>
      <p>{score}</p>
    </div>
  )
}

function App() { 
    const students = [
       { id: "s1", name: "Arun", track: "React", score: 85 },
         { id: "s2", name: "Priya", track: "React", score: 92 },
          { id: "s3", name: "Kumar", track: "React", score: 76 }, 
        ];
const sortedStudents = [...students].sort(
  (a, b) => b.score - a.score
);

return (
    <div>
      <h1>Hello, World!</h1>
      {sortedStudents.map((student) => (
  <StudentCard
    key={student.id}
    name={student.name}
    track={student.track}
    score={student.score}
  />
      ))}
    </div>
  )
}
  export default App;