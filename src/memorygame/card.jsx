import React from "react";

function Card({ card, onClick }) {
    return (
        <div className={`card ${card.isFlipped ? 'is-flipped' : ''}`} onClick={() => onClick(card)}>
            <div className="card-inner">
                <div className="card-front"></div>
                <div className="card-back">
                    <img src={card.content} alt="memory-card" />
                </div>
            </div>
        </div>
    );
};

export default Card;