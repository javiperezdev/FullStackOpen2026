import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClicks}) => <button onClick={handleClicks}>{text}</button>


const Result = ({text, count}) => {
  return (
    <p>{text}: {count}</p>
  )
}


const App = () => {
  const text1 = "give feedback"
  const text2 = "statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalClicks = good + bad + neutral
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / totalClicks
  const positive = ((good * 100) / totalClicks) + "%"

  const handleGoodClicks = () => {
      setGood(good + 1)
  }
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClicks = () => {
      setBad(bad + 1)
  }

  return (
    <div>
      <Title text={text1}/>
      <Button handleClicks={handleGoodClicks} text="good"/>
      <Button handleClicks={handleNeutralClicks} text="neutral"/>
      <Button handleClicks={handleBadClicks} text="bad"/>
      <Title text={text2}/>
      <Result text="good" count={good} />
      <Result text="neutral" count={neutral} />
      <Result text="bad" count={bad} />
      <Result text="all" count={totalClicks} />
      <Result text="average" count={average} />
      <Result text="positive" count={positive} />
    </div>
  )
}

export default App;