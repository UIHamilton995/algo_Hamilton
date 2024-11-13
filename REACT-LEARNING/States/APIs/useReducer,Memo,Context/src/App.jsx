// When you export the global function of this file and edit it as "App", it functions as global default file. Alter file name to "App" as well to get a visual of code on dev

// Situations to implement useMemo; 1. When you are calculating a value which may be cumbersome in size, array or like BigInts or large set of data. You get to call out and display only your preferred data set. 2. When using or returning arrays or objects by referencing and it is important to stabilize them. In all, this will help to reduce the load of reloading data every time a particular page or route is refetched. When it looks at the dependency array of its function, it confirms if the page is still the same as it was before and returns new display if any


import { useState, useMemo } from "react";

function App() {

  const [numbers] = useState([5, 20, 30])
  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0)
  , [numbers])
  const [names] = useState(['John', 'Paul', 'George', 'Ringo'])
  const sortedNames = useMemo(() => [...names].sort(), [names])

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countTotal = useMemo(() => count1 + count2, [count1, count2])

  return (
    <div>
      Total:{total}
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      </div>
      AllNames: {names.join(', ')}
      <div>
        sortedNames: {sortedNames.join(', ')}
      </div>
      <span>Totalcount: {countTotal}</span>
    </div>
  )
}

export default App;