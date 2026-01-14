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


 const Total = (props) => {
  const total = props.parts.reduce( (sum, part) =>
    {return sum + part.exercises
  }, 0)

  return (
    <div>
      <h2>Total exercises</h2>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

const Courses = (props) => {
  return (
    <div>
    {props.courses.map(course =>
      <div key={course.id}>       
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )}
    </div>
  )}

export default Courses;