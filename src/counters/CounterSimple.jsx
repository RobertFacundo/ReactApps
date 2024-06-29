import React, { useState } from "react";

import './countersimple.scss';

const CounterSimple = React.memo(({ onInteract }) => {
    const [showToolTip, setShowTooltip] = useState(false);

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleClick = () => {
        onInteract('CounterSimple');
    }

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false)
    };

    return (
        <>
            <section className="counter1" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {showToolTip && <div className="tooltip">CounterSimple</div>}
                <p>{count}</p>
                <div>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </div>
            </section>
        </>
    );
});

export default CounterSimple;

