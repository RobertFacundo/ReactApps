

import React, { useState, useEffect } from "react";
import "./memorygame.scss";
import Card from "./card";
import Confetti from "react-confetti";

const MemoryGame = React.memo(({ onInteract }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const imagePaths = [
        "cats/all-hearts-here.jpg",
        "cats/chill_out354.jpg",
        "cats/do-you-want-to-box.jpg",
        "cats/give_me_a_high_five.jpg",
        "cats/hanging_out_with_my_glasses.jpg",
        "cats/this_looks_fun.jpg",
    ];

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [gameComplete, setGameComplete] = useState(false); // Inicializar como false
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        const shuffleCards = shuffle(
            [...imagePaths, ...imagePaths].map((content, index) => ({
                id: index,
                content,
                isFlipped: false,
                isMatched: false,
            }))
        );
        setCards(shuffleCards);
    }, []);

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleCardClick = (clickedCard) => {
        // No permitir hacer clic si la carta ya está volteada o emparejada
        if (clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length === 2)
            return;

        // Voltear la carta que se ha clicado
        const updatedCards = cards.map((card) =>
            card.id === clickedCard.id ? { ...card, isFlipped: true } : card
        );
        setCards(updatedCards);

        // Agregar la carta volteada al array de cartas volteadas
        const newFlippedCards = [...flippedCards, clickedCard];
        setFlippedCards(newFlippedCards);

        // Verificar si se han volteado dos cartas
        if (newFlippedCards.length === 2) {
            const [firstCard, secondCard] = newFlippedCards;

            // Si las cartas coinciden
            if (firstCard.content === secondCard.content) {
                // Marcar las cartas como emparejadas
                const updatedCardsAfterMatch = updatedCards.map((card) =>
                    card.id === firstCard.id || card.id === secondCard.id
                        ? { ...card, isMatched: true }
                        : card
                );
                setCards(updatedCardsAfterMatch);
                setFlippedCards([]); // Limpiar el array de cartas volteadas
            } else {
                // Si las cartas no coinciden, volver a voltearlas después de un tiempo
                setTimeout(() => {
                    const updatedCardsAfterTimeout = updatedCards.map((card) =>
                        card.id === firstCard.id || card.id === secondCard.id
                            ? { ...card, isFlipped: false }
                            : card
                    );
                    setCards(updatedCardsAfterTimeout);
                    setFlippedCards([]); // Limpiar el array de cartas volteadas
                }, 700);
            }
        }
    };

    useEffect(() => {
        // Verificar si todas las cartas están volteadas
        const allCardsFlipped = cards.every((card) => card.isMatched);
        if (allCardsFlipped && cards.length > 0) {
            // Asegurarse de que haya cartas antes de mostrar el alerta
            // Esperar un breve momento antes de mostrar el alert
            setTimeout(() => {
                setGameComplete(true);
            }, 500);
        }
    }, [cards]);

    useEffect(() => {
        if (gameComplete) {
            // Mostrar Confetti al completar el juego
            setConfettiActive(true);

            // Desactivar Confetti después de 5 segundos
            const confettiTimeout = setTimeout(() => {
                setConfettiActive(false);
            }, 5000); // Aquí puedes ajustar la duración del Confetti en milisegundos

            setFlippedCards([]);
            // Limpiar el timeout cuando se desmonte el componente o se reinicie el juego
            return () => clearTimeout(confettiTimeout);
        }
    }, [gameComplete]);

    const handleClick = () => {
        onInteract('MemoryGame');
    }

    const handleMouseEnter = () => {
        setShowToolTip(true);
    }

    const handleMouseLeave = () => {
        setShowToolTip(false);
    }

    return (
        <div className="board" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showToolTip && <div className="tooltip">Memory Game</div>}
            {confettiActive && (
                <Confetti width={5000}
                    numberOfPieces={600}
                    fadeOut={true} // Aplicar transición de desvanecimiento al finalizar
                    onConfettiComplete={() => {
                        setConfettiActive(false);
                        setFlippedCards([]);
                    }}
                />
            )}
            {cards.map((card) => (
                <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
            ))}
        </div>
    );
});

export default MemoryGame;