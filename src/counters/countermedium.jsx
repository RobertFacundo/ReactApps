import React, { useState } from "react";

import './countermedium.scss';

const CounterMedium = React.memo(({ onInteract }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCount(count + step);
    }

    const decrement = () => {
        setCount(count - step);
    }

    const reset = () => {
        setCount(0);
    }

    const handleClick = () => {
        onInteract('CounterMedium');
    }

    const handleMouseEnter = () => {
        setShowToolTip(true);
    }

    const handleMouseLeave = () => {
        setShowToolTip(false)
    }

    return (
        <section className="medium" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showToolTip && <div className="tooltip">CounterMedium</div>}
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
});

export default CounterMedium;