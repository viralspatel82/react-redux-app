import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter() {
    const count = useSelector((counter) => counter.counter);
    //const action = useSelector(selectAction);
    const dispatch = useDispatch();

    return (
        <div>
            {console.log(count)}
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(count.value))}
                >
                    Increment
                </button>
                <span>{count.value}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(count.value))}
                >
                    Decrement
                </button>
                <h1>{count.action} </h1>
            </div>
        </div>
    );
}

export default Counter;
