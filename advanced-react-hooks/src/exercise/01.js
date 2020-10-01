// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'
function countReducer(count, step){
  return count + step;
}
function Counter({initialCount = 0, step = 2}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
