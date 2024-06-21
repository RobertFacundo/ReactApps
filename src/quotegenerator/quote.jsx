import React, { useState } from "react";
import './quote.scss';
import quillpen from '../../public/quillpen.png';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");
    // const [fadeIn, setFadeIn] = useState(false);
    const [letters, setLetters] = useState([]);

    const quotes = [
        "No hay nada más universal que lo local.",
        "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
        "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
        "Todo lo que es verdadero tiene que enfrentarse a la mentira.",
        "La paciencia es amarga, pero su fruto es dulce.",
        "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
        "La esperanza es el sueño del hombre despierto.",
        "El único límite para nuestra realización de mañana serán nuestras dudas de hoy.",
        "La vida es muy simple, pero insistimos en hacerla complicada.",
        "La verdadera sabiduría está en reconocer la propia ignorancia.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "El hombre que se levanta es aún más grande que el que no ha caído.",
        "La verdadera libertad consiste en el dominio absoluto de sí mismo.",
        "El fracaso es la oportunidad de comenzar de nuevo con más inteligencia.",
        "La imaginación lo es todo. Es la vista previa de las próximas atracciones de la vida.",
        "La alegría no está en las cosas, está en nosotros.",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "La fe es dar el primer paso, incluso cuando no ves la escalera completa.",
        "El verdadero amor es como los espíritus: todos hablan de ellos, pero pocos los han visto.",
        "El coraje no siempre ruge. A veces el coraje es esa voz tranquila al final del día que dice: lo intentaré de nuevo mañana.",
        "El amor y el deseo son las alas del espíritu de las grandes hazañas.",
        "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "La vida no se mide por el número de respiraciones que tomamos, sino por los momentos que nos dejan sin aliento.",
        "La verdadera riqueza no consiste en tener muchas posesiones, sino en tener pocas necesidades.",
        "La única cosa de la que tenemos que tener miedo es del miedo mismo.",
        "La vida es un eco. Lo que envías, regresa. Lo que siembras, cosechas. Lo que das, recibes.",
        "El valor de un hombre se mide por la forma en que trata a quienes no pueden hacerle ningún bien.",
        "La belleza no está en la cara; la belleza es una luz en el corazón.",
        "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "La vida es lo que ocurre mientras estás ocupado haciendo otros planes.",
        "El propósito de nuestras vidas es ser felices.",
        "El amor verdadero no es otra cosa que el deseo inevitable de ayudar al otro para que sea quien es.",
        "La mente es como un paracaídas. Solo funciona si se abre.",
        "El alma necesita soledad para florecer.",
        "La valentía no es la ausencia de miedo, sino la decisión de que algo es más importante que el miedo.",
        "El verdadero viaje de descubrimiento no consiste en buscar nuevos paisajes, sino en tener nuevos ojos.",
        "No puedes nadar hacia nuevos horizontes hasta que tengas el coraje de perder de vista la orilla.",
        "La vida es una sucesión de lecciones que deben ser vividas para ser entendidas.",
        "No es la altura, sino el bajón lo que hace daño.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "La vida es como una bicicleta. Para mantener el equilibrio, debes seguir moviéndote.",
        "Las cosas buenas llegan a los que esperan, pero las mejores llegan a los que salen a buscarlas.",
        "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
        "La mejor venganza es un éxito masivo.",
        "Lo único que se interpone entre tú y tu objetivo es la historia que te sigues contando a ti mismo.",
        "La clave del éxito es enfocarse en metas, no en obstáculos.",
        "No puedes cambiar tu futuro, pero puedes cambiar tus hábitos, y tus hábitos cambiarán tu futuro.",
        "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
        "El poder de la imaginación nos hace infinitos.",
        "La vida no es acerca de encontrarte a ti mismo, sino de crearte a ti mismo."
    ];

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const handleClick = () => {
        console.log("Clicked");
        const randomQuote = getRandomQuote();
        setQuote("");
        setLetters([]);
        setTimeout(() => {
            setQuote(randomQuote);
            setLetters(randomQuote.split(""));
        }, 100);
    };

    return (
        <div className="quote-generator">
            <div className="frase">
            {quote && (
                <blockquote className="quote">
                    {letters.map((letter, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
                    ))}
                </blockquote>
            )}
            </div>
            <img alt="Quill pen" src={quillpen} onClick={handleClick} className="quill-pen" />
        </div>


    );
};

export default QuoteGenerator;