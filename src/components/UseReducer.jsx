import { useReducer, useState } from "react"

const ActionTypes = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    ADD_BY: "addBy",
}

function reducer(state, action) {
    switch(action.type) {
        case ActionTypes.INCREMENT: 
            return state + 1;

        case ActionTypes.DECREMENT: 
            return state - 1;

        case ActionTypes.ADD_BY: 
            return state + action.payload;

        default:
            return state;
    }
}

function UseReducer() {
    // const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(reducer, 0);
    const [addBy, setAddBy] = useState(10);

    const increment = () => {
        dispatch({ type: ActionTypes.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: ActionTypes.DECREMENT })
    }

    const addByFn = () => {
        dispatch({ type: ActionTypes.ADD_BY, payload: +addBy })
    }
    
  return (
    <div>
        <h1>UseReducer Counter</h1>
        <button onClick={increment}>Increment (+1)</button>
        <p>Counter: {counter}</p>
        <button onClick={decrement}>Decrement (-1)</button>

        <p>
            <input type="number" placeholder="Enter a value" value={addBy} onChange={(e) => setAddBy(e.target.value)} />
        </p>
        <p>
            <button onClick={addByFn}>Add by {addBy}</button>
        </p>
    </div>
  )
}

export default UseReducer