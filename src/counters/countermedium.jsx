import React, { useState } from "react";

import './countermedium.scss';

const CounterMedium = () => {

    const [count, setCount] = useState(0);
    const[step, setStep] = useState(1);

    const increment = () => {
        setCount(count + step);
    }

    const decrement = () => {
        setCount(count - step);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <section className="medium">
            <p>{count}</p>

            <label>
                step: <br />
                <input
                className="step-input"
                    type='number'
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
            </label>
            <section className="bots">
                <button className="masmenos" onClick={increment}>+</button>
                <button className="masmenos" onClick={decrement}>-</button>
            <button className="masmenos" onClick={reset}>↺</button>
            </section>
        </section>
    );
};

export default CounterMedium;