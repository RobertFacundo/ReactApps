import React, { useState } from "react";

import './countersimple.scss';

export default function CounterSimple() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <section className="counter1">
                <p>{count}</p>
                <div>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </div>
            </section>
        </>
    );
};

