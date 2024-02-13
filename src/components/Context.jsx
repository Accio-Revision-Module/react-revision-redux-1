import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

function Context() {
    const {counter, increment, decrement, addByFn, addBy, setAddBy} = useContext(CounterContext);
    
  return (
    <div>
        <h1>Context Counter</h1>
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

export default Context