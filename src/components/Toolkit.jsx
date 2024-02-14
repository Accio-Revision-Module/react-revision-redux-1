import { useDispatch, useSelector } from "react-redux"
import { addBy, decrement, increment } from "../store-toolkit/slices/counterSlice";
import { useState } from "react";

function Toolkit() {
    const {counter} = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const [addByVar, setAddByVar] = useState(10);

    const incrementFn = () => {
        dispatch(increment())
    }

    const decrementFn = () => {
        dispatch(decrement())
    }

    const addByFn = () => {
        dispatch(addBy(addByVar))
    }

  return (
    <div>
        <h1>Toolkit Counter</h1>
        <button onClick={incrementFn}>Increment (+1)</button>
        <p>Counter: {counter}</p>
        <button onClick={decrementFn}>Decrement (-1)</button>

        <p>
            <input type="number" placeholder="Enter a value" value={addByVar} onChange={(e) => setAddByVar(e.target.value)} />
        </p>
        <p>
            <button onClick={addByFn}>Add by {addByVar}</button>
        </p>
    </div>
  )
}

export default Toolkit