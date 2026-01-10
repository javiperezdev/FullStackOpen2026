import { useState } from 'react'

const Button = ({handle, text}) => <button onClick={handle}>{text}</button>
const Title = ({text}) => <h1>{text}</h1>
const Result = ({value}) => <p>has {value} votes</p>
const Winner = ({ anecdote, votes }) => {
  if (votes === 0) {
    return <p>No votes yet</p>
  }
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}


const App = () => {
  const text1 = "Anecdote of the day"
  const text2 = "Anecdote with the most votes"
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(8).fill(0))
  
  const maxVotes = Math.max(...votes)
  const indexMaxVotes = votes.indexOf(maxVotes)
  const anecdoteMaxVotes = anecdotes[indexMaxVotes] 



  const handleRandom = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextIndex)
  }

  const handleVoting = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVote(votesCopy)
  }

  return (
    <div>
      <Title text={text1} />
      {anecdotes[selected]}
      <Result value={votes[selected]} />
      <Button handle={handleVoting} text="vote" />
      <Button handle={handleRandom} text="next anecdote"/>
      <Title text={text2}/>
      <Winner anecdote={anecdoteMaxVotes} votes={maxVotes} /> 
    </div>
  )
}

export default App