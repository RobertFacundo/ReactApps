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
            <label className="rocker rocker-small" onClick={toggleLight}>
                <input type="checkbox" />
                    <span className="switch-left" onClick={toggleLight}></span>
                    <span className="switch-right" onClick={toggleLight}></span>
            </label>
        </div>
    );
};

export default LightBulb;