const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Number of exercises: {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  ) 
}

{/*
  nst Total = (props) => { 
  return (
    <div>
      <h2>Total exercises</h2>
      <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}*/}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App