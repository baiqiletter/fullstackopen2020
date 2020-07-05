import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.suffix}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  if (all == 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={handleGoodClick} />
        <Button text="neutral" onClick={handleNeutralClick} />
        <Button text="bad" onClick={handleBadClick} />
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={handleGoodClick} />
        <Button text="neutral" onClick={handleNeutralClick} />
        <Button text="bad" onClick={handleBadClick} />
        <h1>statistics</h1>
        <table>
          <Statistics text="good" value={good} suffix="" />
          <Statistics text="neutral" value={neutral} suffix="" />
          <Statistics text="bad" value={bad} suffix="" />
          <Statistics text="all" value={all} suffix="" />
          <Statistics text="average" value={(good-bad)/all} suffix="" />
          <Statistics text="positive" value={good/all*100} suffix="%" />
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)