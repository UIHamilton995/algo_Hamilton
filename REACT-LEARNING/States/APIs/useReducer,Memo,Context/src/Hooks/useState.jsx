// When you export the global function of this file and edit it as "App", it functions as global default file. Alter file name to "App" as well to get a visual of code on dev

import { useState } from "react"

function NameList() {
  const [nameList, setNameList] = useState(["Jack", "Jill", "John"])
  const [name, setName] = useState(() =>("React"))
  const addName = () => {
    setNameList([...nameList, name])
    setName('')
  }

  return (
    <div>
      <ul>
      <li>
        {nameList.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </li>
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName((e).target.value)}
      />
      <button value={addName} onClick={addName}>Add Name</button>
    </div>
  )
}

function Counter() {

  let [count, setCount] = useState(10)  // when you call useState hook with let keyword, there is a delay in execution. There is a check to determine and authorize the altering of the virtualDOM as it sees the function detail. This can cause something like a lag on the rendering. But when you use const, the response is quicker as it is an immutable declaration.
  function addOne(){
    setCount(count++)
  }

  return (
    <div>   
      <button onClick={addOne}>
        Counts = {count}
      </button>
    </div>
  )
}

function Run() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}

export default Run
