import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, bad, neutral }) => {


  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100


  return (
    <>
      <h1>Statistics</h1>
      good: {good}  <br />
      neutral: {neutral} <br />
      bad: {bad} <br />
      <br />
      total: {total} <br />
      average: {average} <br />
      positive: {positivePercentage} % <br />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }





  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App