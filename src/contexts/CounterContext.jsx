import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterProvider({children}) {
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
        <CounterContext.Provider value={{
            counter,
            addBy,
            increment,
            decrement,
            addByFn,
            setAddBy,
        }}>
            {children}
        </CounterContext.Provider>
    )
}