// When you export the global function of this file and edit it as "App", it functions as global default file. Alter file name to "App" as well to get a visual of code on dev

import { useReducer } from "react";

function UserForms() {
  // Hook for dynamic display
  const [state, dispatch] = useReducer((state, action) => ({
    ...state,
    ...action
  }), {
    first: " ",
    last: " "
  })
  return (
    <div>
      <input type="text"
        value={state.first}
        onChange={(e) => dispatch({first: e.target.value})}
      />
      <input type="text"
        value={state.last}
        onChange={(e) => dispatch({last: e.target.value})}
      />
    </div>
  )
}

function NameLists() {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME": // set_name is defined 
        return { ...state, name: action.payload }
      case "ADD_NAME":
        return {
          ...state,
          names: [...state.names, state.name],
          name: ""
        } 
      // default:
      //   return state
    }
  }, {
    names: [], // current state(names and name object )
    name: "",
  })

  return (
      // An input bearing a current name with an event to change text value immediately there is a mutation; we dispatch via this reducer, a type of setname and payload that delivers the current payload
    <div>
      <div
      // Map section to list all the added input
      >
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
       ))} 
      </div>
      <input type="text"
        value={state.name}
        onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})}
      />
      <div> Name = {state.name} </div>
      <button onClick={() => dispatch({type: "ADD_NAME"})}>
        Add Name
      </button>
    </div>
  )
}

//
function App() {
  return (
    <>
      <UserForms  />
      <NameLists />
    </>
  )
}

export default App;