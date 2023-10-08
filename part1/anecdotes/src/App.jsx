import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const StatisticsLine = ({ text, value }) => {



  if (text === "positive") {
    return (<tr><td>{text}:{value}%</td></tr>)


  } else {
    return (<tr><td>{text}:{value}</td></tr>)
  }


}



const Statistics = ({ good, bad, neutral }) => {







  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        No statistics yet
      </div>
    )
  } else {


    const average = (good - bad) / total
    const positivePercentage = (good / total) * 100




    return (
      <>
        <h1>Statistics</h1>



        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />            
            <StatisticsLine text="total" value={total} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positivePercentage} />
          </tbody>
        </table>
      </>
    )
  }
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