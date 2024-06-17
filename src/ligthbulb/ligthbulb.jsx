import React, { useState } from "react";
import './lightbulb.scss';


const LightBulb = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div className="light-bulb-container">
            <div className="bulb">
                <img src={isOn ? "on.png": "off.png"} alt="Switch" />
            </div>
            <label class="rocker rocker-small" onClick={toggleLight}>
                <input type="checkbox" />
                    <span class="switch-left" onClick={toggleLight}></span>
                    <span class="switch-right" onClick={toggleLight}></span>
            </label>
        </div>
    );
};

export default LightBulb;