import React, { useState, useEffect } from "react";
import './stopwatch.scss';

const Stopwatch = () => {
    const [time, setTime] = useState(0); // Estado para el tiempo en segundos (número entero)
    const [isRunning, setIsRunning] = useState(false); // Estado de cronómetro corriendo
    const [stopwatchInterval, setStopwatchInterval] = useState(null); // ID del intervalo

    // Función para iniciar el cronómetro
    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            const interval = setInterval(() => {
                setTime(prevTime => prevTime + 1); // Incrementa en 1 segundo (número entero)
            }, 100); // Intervalo de 1 segundo (1000 milisegundos)
            setStopwatchInterval(interval);
        }
    };

    // Función para detener el cronómetro
    const stopStopwatch = () => {
        setIsRunning(false);
        clearInterval(stopwatchInterval);
        const lastDigit = time % 10;

        // Verificar si el último dígito coincide con los dígitos de números pares o impares
        if ([0, 2, 4, 6, 8].includes(lastDigit)) {
            Swal.fire({
                text: `Felicitaciones, detuviste el cronómetro en número par 
                (${time})
                ¡Te ganaste la imagen de un gato!`,
                imageUrl: "/img5.jpg",
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: "Custom image",
              });
            setTime(0);
            setStopwatchInterval(null);
        } else if ([1, 3, 5, 7, 9].includes(lastDigit)) {
            Swal.fire({
                text: `Detuviste el cronómetro en número impar (${time}), sigue intentando`,
            });  
        };
    };

    // Función para reiniciar el cronómetro y el contador
    const resetStopwatch = () => {
        setTime(0);
        clearInterval(stopwatchInterval);
        setIsRunning(false);
    };

    // Efecto de inicialización para iniciar el cronómetro al renderizarse por primera vez
    useEffect(() => {
        // startStopwatch();

        // Limpiar el intervalo cuando se desmonte el componente
        return () => {
            clearInterval(stopwatchInterval);
        };
    }, [stopwatchInterval]); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

    return (
        <section className="stopwatch-container">
            <h2>Intenta detener el cronómetro en número par</h2>
            <p>{time}</p>

            <div className="botones">
            <img src="/recycle.png" alt="reset" onClick={resetStopwatch}/>
            <img src="/stop-sign.png" alt="stop" onClick={stopStopwatch}/>
            <img src="/finish-flag.png" alt="start" onClick={startStopwatch} />
            </div>
        </section>
    );
};

export default Stopwatch;