import React, { useState } from "react";
import './componente1.scss';

export default function Componente1() {

    const gradients = [
        'linear-gradient(to right, rgb(2, 255, 2), white)',
        'linear-gradient(to right, rgb(255, 0, 0), yellow)',
        'linear-gradient(to right, rgb(0, 0, 255), cyan)',
        'linear-gradient(to right, rgb(255, 165, 0), purple)',
        'linear-gradient(to right, #ff7e5f, #feb47b)',  // Peach
        'linear-gradient(to right, #00c6ff, #0072ff)',  // Blue
        'linear-gradient(to right, #f7971e, #ffd200)',  // Yellow-Orange
        'linear-gradient(to right, #a8ff78, #78ffd6)',  // Green-Turquoise
        'linear-gradient(to right, #536976, #292e49)',  // Dark Blue-Gray
        'linear-gradient(to right, #ff6ec4, #7873f5)',  // Pink to Purple
        'linear-gradient(to right, #4caf50, #ffeb3b)',  // Green to Yellow
        'linear-gradient(to right, #2196f3, #4fc3f7)',  // Blue to Light Blue
        'linear-gradient(to right, #ff1744, #ff9100)',  // Red to Orange
        'linear-gradient(to right, #9c27b0, #00bcd4)',  // Purple to Cyan
        'linear-gradient(to right, #616161, #ffffff)',  // Gray to White
        'linear-gradient(to right, #ff9800, #ffc107)',  // Orange to Yellow
        'linear-gradient(to right, #009688, #4caf50)',  // Teal to Green
        'linear-gradient(to right, #0d47a1, #42a5f5)',  // Dark Blue to Light Blue
        'linear-gradient(to right, #9c27b0, #e91e63)'   // Purple to Pink
    ];

    const texts = {
        es: 'Hola Mundo',           // Español
        en: 'Hello World',          // Inglés
        fr: 'Bonjour le monde',     // Francés
        de: 'Hallo Welt',           // Alemán
        it: 'Ciao Mondo',           // Italiano
        ja: 'Konnichiwa Sekai'         // Japonés
    };


    const [gradient, setGradient] = useState(
        "linear-gradient(to right, rgb(2, 255, 2), white)"
    );
    const [language, setLanguage] = useState('es');

    function changeGradient() {
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        setGradient(randomGradient);
    }

    function changeLanguage() {
        const languages = Object.keys(texts);
        const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
        setLanguage(randomLanguage);
    }


    return (
        <div className="seccion">
            <h1 className="titulo">
                <span
                    style={{
                        backgroundImage: gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {texts[language]}
                </span>
            </h1>
            <section className="botones">
                <img src="/palette.png" alt="Paleta" onClick={changeGradient} />
                <img src="/translater.png" alt="Traductor" onClick={changeLanguage} />
            </section>
        </div>
    )
}