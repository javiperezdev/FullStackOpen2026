const Header = (props) => (
    <div>
      <h1>{props.course}</h1>
    </div>
)

const Part = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>Number of exercises: {props.exercises}</p>
  </div>
)

const Content = (props) => (
    <div>
        <Part name={props.part1}  exercises={props.exercises1} />
        <Part name={props.part2}  exercises={props.exercises2} />
        <Part name={props.part3}  exercises={props.exercises3} />
    </div>
)

const Total = (props) => (
    <div>
      <h2>Total exercises</h2>
      <p>Number of exercises: {props.exercisesQuantity}</p>
    </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercisesQuantity = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3}
      />
      <Total exercisesQuantity={exercisesQuantity}/>
    </div>
  )
}

export default App