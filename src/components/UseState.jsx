import { useState } from "react"

function UseState() {
    const [counter, setCounter] = useState(0);
    const [addBy, setAddBy] = useState(10);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    const addByFn = () => {
        setCounter(counter + +addBy);
    }
    
  return (
    <div>
        <h1>UseState Counter</h1>
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

export default UseState