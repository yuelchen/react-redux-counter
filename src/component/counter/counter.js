import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, set } from './actions.js';
import './counter.css'

function CounterContainer() {

    const count = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <div className="div-main">
            <div className="div-counter-wrapper">
                <div className="div-counter-heading">
                    <h2>Count: {count}</h2>
                </div>
                <div className="div-counter-buttons">
                    <button onClick={() => dispatch(decrement(5))}>-5</button>
                    <button onClick={() => dispatch(decrement(1))}>-1</button>
                    <button onClick={() => dispatch(set(0))}>Reset</button>
                    <button onClick={() => dispatch(increment(1))}>+1</button>
                    <button onClick={() => dispatch(increment(5))}>+5</button>
                </div>
            </div>
        </div>
    );
}

export default CounterContainer;