
import reactLogo from './assets/react.svg'
import './App.scss'
import Componente1 from './componente1/Componente1.jsx'



function App() {
  return (
    <div className='app'>
      <div className='header'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <div className='container'>
        <Componente1 />
      </div>
    </div>
  )
}

export default App
