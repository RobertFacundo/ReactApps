import React from 'react';
import reactLogo from './assets/react.svg'
import './App.scss'
import Footer from './footer/footer.jsx'
import Componente1 from './componente1/Componente1.jsx'
import CounterSimple from './counters/CounterSimple.jsx'
import CounterMedium from './counters/countermedium.jsx'
import Stopwatch from './counters/stopwatch.jsx'
import LocalTimeAndLocation from './timelocation/timelocation.jsx'
import ToastButton from './toast/toast.jsx'
import ImageZoom from './mouse/zoom.jsx'
import BucketList from './bucketlist/bucketlist.jsx';
import LightBulb from './ligthbulb/ligthbulb.jsx';
import MemoryGame from './memorygame/memorygame.jsx';


function App() {

  return (
    <div className='app'>
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
                <Componente1 />
                <div className='secciont'>
                  <LocalTimeAndLocation />
                  <ToastButton />
                </div>
              </div>
              <div className='counters'>
                <CounterSimple />
                <CounterMedium />
                <Stopwatch />
              </div>
            </section>
          </div>
        </div>
        <ImageZoom />
        <div>
          <LightBulb />
          <BucketList />
        </div>
        <div>
        <MemoryGame />
        </div>
      </div>
    </div>
  )
}

export default App
