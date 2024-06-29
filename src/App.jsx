import React, { useState, useCallback } from 'react';
import reactLogo from './assets/react.svg'
import './App.scss'
import Footer from './footer/footer.jsx'
import Componente1 from './componente1/Componente1.jsx'
import CounterSimple from './counters/CounterSimple.jsx'
import CounterMedium from './counters/countermedium.jsx'
import Stopwatch from './counters/stopwatch.jsx'
import LocalTimeAndLocation from './timelocation/timelocation.jsx'
import ToastButton from './toast/toast.jsx'
import BucketList from './bucketlist/bucketlist.jsx';
import LightBulb from './ligthbulb/ligthbulb.jsx';
import MemoryGame from './memorygame/memorygame.jsx';
import ContactForm from './form/form.jsx';
import QuoteGenerator from './quotegenerator/quote.jsx';
import ImageFetcher from './imageGenerator/imageGenerator.jsx';
import TriviaGame from './triviagame/TriviaGame.jsx';
import Weather from './weather/weather.jsx';
import InteractionChart from './InteractionChart.jsx';


function App() {
  const [clickCount, setClickCount] = useState(0);
  const [interactedComponents, setInteractedComponents] = useState({});

  const handleClick = (event) => {
    if (event.target.closest('.interaction-chart')) {
      return; // Prevent increment if clicking inside the chart
    }
    setClickCount(prevCount => {
      console.log('Clicked anywhere in the app!');
      return prevCount + 1;
    });
  };

  const handleComponentInteractions = useCallback((componentName) => {
    setInteractedComponents(prevComponents => {
      const newCount = (prevComponents[componentName] || 0) + 1;
      console.log(`Interacted with ${componentName}. New count: ${newCount}`);
      return {
        ...prevComponents,
        [componentName]: newCount
      };
    });
  }, []);

  return (
    <div className='app' onClick={handleClick}>
      <div className='columnseccion'>
        <div className='primeraseccion'>
          <div className='header'>
            <Footer />
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo" alt="React logo" />
            </a>
          </div>
          <div className='container'>
            <section className='div'>
              <div className='subseccion'>
                <Componente1 onInteract={() => handleComponentInteractions('Componente1')} />
                <div className='secciont'>
                  <LocalTimeAndLocation onInteract={() => handleComponentInteractions('LocalTimeAndLocation')} />
                  <ToastButton onInteract={() => handleComponentInteractions('ToastButton')} />
                </div>
              </div>
              <div className='counters'>
                <CounterSimple onInteract={() => handleComponentInteractions('CounterSimple')} />
                <CounterMedium onInteract={() => handleComponentInteractions('CounterMedium')} />
                <Stopwatch onInteract={() => handleComponentInteractions('StopWatch')} />
              </div>
            </section>
          </div>
        </div>
        <div>
          <LightBulb onInteract={() => handleComponentInteractions('LightBulb')} />
          <BucketList onInteract={() => handleComponentInteractions('BucketList')} />
        </div>
        <div>
          <MemoryGame onInteract={() => handleComponentInteractions('MemoryGame')} />
        </div>
        <div className='cq'>
          <ContactForm onInteract={() => handleComponentInteractions('Contactform')} />
          <QuoteGenerator onInteract={() => handleComponentInteractions('QuoteGenerator')} />
        </div>
        <div className='imagegenerator'>
          <ImageFetcher onInteract={() => handleComponentInteractions('ImageFetcher')} />
        </div>
        <section className='trivia'>
          <TriviaGame onInteract={() => handleComponentInteractions('TriviaGame')} />
        </section>

        <>
          <Weather onInteract={() => handleComponentInteractions('Weather')} />
        </>
      </div>

      <InteractionChart
        clickCount={clickCount}
        interactedComponents={interactedComponents}
      />
    </div>
  )
}

export default App
