import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const username = "n1kss"

  const handleClick= (diff) => {
    setCounter((val) => val - 1)
  }
  return (
    <>
      <h1>С подключением, {username}</h1>
      <div className="div">
        <button onClick={handleMinus}>-</button>
        <span>{counter}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </>
  )
}

export default App