import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClicks}) => <button onClick={handleClicks}>{text}</button>


const StatisticsLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const totalClicks = good + bad + neutral

  if (totalClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }


    const average = ((good * 1) + (neutral * 0) + (bad * -1)) / totalClicks
    const positive = ((good * 100) / totalClicks) + "%"

     return (
      <div>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={totalClicks} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </div>
  )
}


const App = () => {
  const text1 = "give feedback"
  const text2 = "statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App;