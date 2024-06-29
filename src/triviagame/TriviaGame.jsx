import React, { useState, useEffect } from "react";
import './TriviaGame.scss';

const TriviaGame = () => {

    const [gameStarted, setGameStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [gameOver, setGameOver] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setInconrrectAnswers] = useState(0);
    const [dotColors, setDotColors] = useState(Array(5).fill("white"));

    const initialQuestions = [
        {
            question: "¿Cuál es la capital de España?",
            correct_answer: "Madrid",
            incorrect_answers: ["Barcelona", "Sevilla", "Valencia"],
            image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿En qué año comenzó la Segunda Guerra Mundial?",
            correct_answer: "1939",
            incorrect_answers: ["1941", "1945", "1914"],
            image: 'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién pintó la Mona Lisa?",
            correct_answer: "Leonardo da Vinci",
            incorrect_answers: ["Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
            image: 'https://images.unsplash.com/photo-1607857531075-d81f84c465d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el río más largo del mundo?",
            correct_answer: "Amazonas",
            incorrect_answers: ["Nilo", "Yangtsé", "Misisipi"],
            image: 'https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es la montaña más alta del mundo?",
            correct_answer: "Monte Everest",
            incorrect_answers: ["Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley"],
            image: 'https://images.unsplash.com/photo-1637846959991-18e54d6e2035?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién escribió la obra 'Cien años de soledad'?",
            correct_answer: "Gabriel García Márquez",
            incorrect_answers: ["Pablo Neruda", "Jorge Luis Borges", "Julio Cortázar"],
            image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿En qué año se firmó la Declaración de Independencia de E.E.U.U.?",
            correct_answer: "1776",
            incorrect_answers: ["1789", "1812", "1865"],
            image: 'https://images.unsplash.com/photo-1506886009355-7f3af05dd5d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es la fórmula química del agua?",
            correct_answer: "H2O",
            incorrect_answers: ["CO2", "CH4", "NaCl"],
            image: 'https://images.unsplash.com/photo-1656331797721-b593b8f00297?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Qué país tiene más islas en su territorio?",
            correct_answer: "Suecia",
            incorrect_answers: ["Filipinas", "Indonesia", "Japón"],
            image: 'https://images.unsplash.com/photo-1571270237711-931cf0af777c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién fue el primer ser humano en el espacio?",
            correct_answer: "Yuri Gagarin",
            incorrect_answers: ["Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
            image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el metal más abundante en la corteza terrestre?",
            correct_answer: "Aluminio",
            incorrect_answers: ["Hierro", "Oro", "Cobre"],
            image: 'https://images.unsplash.com/photo-1501166222995-ff31c7e93cef?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el país más grande del mundo por territorio?",
            correct_answer: "Rusia",
            incorrect_answers: ["Canadá", "China", "Estados Unidos"],
            image: 'https://plus.unsplash.com/premium_photo-1712509212206-ab4e7b3bb593?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es la capital de Australia?",
            correct_answer: "Camberra",
            incorrect_answers: ["Sídney", "Melbourne", "Brisbane"],
            image: 'https://images.unsplash.com/photo-1523608401-53eb5741c1a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
            correct_answer: "Miguel de Cervantes",
            incorrect_answers: ["William Shakespeare", "Fyodor Dostoevsky", "Jorge Luis Borges"],
            image: 'https://images.unsplash.com/photo-1690548671427-282111c03dd3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el océano más grande del mundo?",
            correct_answer: "Océano Pacífico",
            incorrect_answers: ["Océano Atlántico", "Océano Índico", "Océano Antártico"],
            image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el segundo planeta más cercano al Sol?",
            correct_answer: "Venus",
            incorrect_answers: ["Mercurio", "Tierra", "Marte"],
            image: 'https://images.unsplash.com/photo-1506272517965-ec6133efee7a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién fue el primer presidente de los Estados Unidos?",
            correct_answer: "George Washington",
            incorrect_answers: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es la capital de Francia?",
            correct_answer: "París",
            incorrect_answers: ["Londres", "Berlín", "Madrid"],
            image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién pintó 'La persistencia de la memoria'?",
            correct_answer: "Salvador Dalí",
            incorrect_answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
            image: 'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZSwxNTAwfGZvcm1hdCx3ZWJwIl19.QS0RudqedbRUixY0Z0mD5kka__rAwLVT2U4XTH-dgFk.webp',
        },
        {
            question: "¿Cuál es el río más largo de Europa?",
            correct_answer: "Volga",
            incorrect_answers: ["Danubio", "Elba", "Ródano"],
            image: 'https://images.unsplash.com/photo-1568078368899-227e4e7d4682?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién escribió 'El Principito'?",
            correct_answer: "Antoine de Saint-Exupéry",
            incorrect_answers: ["Franz Kafka", "Marcel Proust", "Fyodor Dostoevsky"],
            image: 'https://images.saatchiart.com/saatchi/1757959/art/10067805/9130721-KPKRXZHQ-7.jpg',
        },
        {
            question: "¿En qué año se fundó la ciudad de Roma?",
            correct_answer: "753 a.C.",
            incorrect_answers: ["500 a.C.", "100 d.C.", "200 d.C."],
            image: 'https://images.unsplash.com/photo-1555992828-35627f3b373f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Cuál es el elemento químico más ligero?",
            correct_answer: "Hidrógeno",
            incorrect_answers: ["Oxígeno", "Carbono", "Nitrógeno"],
            image: 'https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Quién descubrió la penicilina?",
            correct_answer: "Alexander Fleming",
            incorrect_answers: ["Marie Curie", "Louis Pasteur", "Albert Einstein"],
            image: 'https://content.nationalgeographic.com.es/medio/2023/09/22/colonia-de-penicillium-sobre-una-base-en-putrefaccion-con-textura-arrugada_ef2c2b30_1489081648_230922121518_800x533.jpg',
        },
        {
            question: "¿Cuál es el desierto más grande del mundo?",
            correct_answer: "Sahara",
            incorrect_answers: ["Atacama", "Gobi", "Kalahari"],
            image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            question: "¿Qué país tiene el sistema de transporte más extenso del mundo?",
            correct_answer: "China",
            incorrect_answers: ["Estados Unidos", "Rusia", "India"],
            image: 'https://images.unsplash.com/photo-1693410218147-67bcc4653e51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const getRandomQuestions = () => {
        let availableQuestions = [...initialQuestions];
        let selectedQuestions = [];

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions.splice(randomIndex, 1)[0];
            selectedQuestions.push(selectedQuestion);
        }

        return selectedQuestions;
    };

    const startGame = async () => {
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        setCurrentQuestionIndex(0);
        setTimeLeft(10);
        const newQuestions = getRandomQuestions();
        setQuestions(newQuestions);
        setCorrectAnswers(0);
        setInconrrectAnswers(0);

        setDotColors(Array(5).fill("white"))
        setTimeLeft(5);
    };

    useEffect(() => {
        let timer;
        if (gameStarted && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(prevTime => {
                    const updatedTime = prevTime - 1;
                    const updatedDotColors = dotColors.map((color, index) =>
                        index < updatedTime ? 'white' : 'gold'
                    );
                    setDotColors(updatedDotColors);
                    return updatedTime;
                });
            }, 1000);
        } else if (timeLeft === 0) {
            nextQuestion();
        }
        return () => clearTimeout(timer);
    }, [gameStarted, timeLeft]);

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (!currentQuestion) return; // Agregar una comprobación adicional aquí
        const isCorrect = selectedAnswer === currentQuestion.correct_answer;
        if (isCorrect) {
            const extraPoints = Math.max(10, timeLeft - 3);
            setScore(score + 100 + extraPoints);
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setInconrrectAnswers(incorrectAnswers + 1);
        }
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(5);
        } else {
            endGame();
        }
    };

    const endGame = () => {
        setGameStarted(false);
        setGameOver(true);
    };

    const fortmatScore = (score) => {
        return String(score).padStart(3, '0');
    };

    if (!gameStarted && !gameOver) {
        return (
            <>
                <button className="start" onClick={startGame}><span>Iniciar Juego</span></button>
            </>
        );
    }

    if (gameOver) {
        return (
            <>
                <p className="puntaje"> Has contestado {correctAnswers} {correctAnswers === 1 ? 'respuesta' : 'respuestas'} correctamente
                    <br /> <br />Tu puntaje es... {fortmatScore(score)}</p>
                <button className="again" onClick={startGame}><span>Jugar de nuevo</span></button>
            </>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        return; // Manejo temporal mientras se carga la pregunta
    }

    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

    return (
        <>
            <p className="texto">{currentQuestion.question}</p>
            <div className="opciones">
                {answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer)}><span>{answer}</span></button>
                ))}
            </div>
            <div className="time-counter">
                {dotColors.map((color, index) => (
                    <span key={index} className={`dot ${color}`}></span>
                ))};
            </div>
            <img src={currentQuestion.image} alt="related to question" style={{ width: "500px", maxHeight: "350px", borderRadius: "15px" }} />
        </>
    );
};

export default TriviaGame;