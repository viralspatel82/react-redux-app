import React from 'react'
import { useSelector } from "react-redux";

function Test() {
    //const counter = useSelector(counter => counter.counter)
    const count = useSelector((counter) => counter.counter);
    return (
        <div>
            <h1> {count.value} </h1>
            <h1> {count.action} </h1>
        </div>
    )
}

export default Test