import React, { useState } from "react";
import './lightbulb.scss';


const LightBulb = React.memo(({ onInteract }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(prevState => !prevState);
    };

    const handleClick = () => {
        onInteract('LightBulb');
    }
    const handleMouseEnter = () => {
        setShowToolTip(true)
    }
    const handleMouseLeave = () => {
        setShowToolTip(false);
    }

    return (
        <div className="light-bulb-container" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showToolTip && <div className="tooltip">Light-Bulb</div>}
            <div className="bulb">
                <img src={isOn ? "on.png" : "off.png"} alt="Switch" />
            </div>
            <label className="rocker rocker-small" onClick={toggleLight}>
                <input type="checkbox" />
                <span className="switch-left" onClick={toggleLight}></span>
                <span className="switch-right" onClick={toggleLight}></span>
            </label>
        </div>
    );
});

export default LightBulb;