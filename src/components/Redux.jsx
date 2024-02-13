import { useDispatch, useSelector } from "react-redux"
import * as ActionTypes from '../store/ActionTypes';
import { useState } from "react";

function Redux() {
    const {counter} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
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
        <h1>Redux Counter</h1>
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

export default Redux